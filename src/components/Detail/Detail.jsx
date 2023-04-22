import style from './Detail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Detail = () => {

    const {id} = useParams();
    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


     //console.log(character.origin);
     //console.log("originName",name);

    return (
        <div className={style.container}>
            <div className={style.containerDetail}>

                {
                    (character) ? (
                        <>
                            <div className={style.description}>
                                <h1> {character.name} </h1>
                                <div  className={style.separador}></div>
                                <span> {character.status} </span>
                                <span> {character.gender} </span>
                                <span> {character.species} </span>
                                <span> {character.origin?.name} </span>
                            </div>
                            <div className={style.imgContainer}>
                                <div className={style.img} style={ { backgroundImage: `url(${character.image})` } }>
                                </div>
                            </div>
                        </>
                    ) : (" ")
                }

            </div>
        </div>
    )
}

export default Detail;