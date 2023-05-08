import { useState } from 'react';
import style from './Form.module.css';
import { validation } from './validation';


const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [ errors, setErros ] = useState({});

    const handleChangle = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
        setErros(validation({
            ...userData,
            [e.target.name] : e.target.value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }



    return <div className={style.container}>
        
        <div className={style.img}>

        </div>
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <label>email</label>
            <input type="text" name="email" placeholder='your email....' value={userData.email} onChange={handleChangle}/>
            {
                (errors.email) ? <span className={style.alert}>{errors.email}</span> : null
            }
            <label>password</label>
            <input type="password" name="password" placeholder='your password....' value={userData.password} onChange={handleChangle}/>
            {
                (errors.password) ? <span className={style.alert}>{errors.password}</span> : null
            }
            <button type='submit'>submit</button>
        </form>

    </div>
}

export default Form;