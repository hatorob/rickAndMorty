import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faPhp, faHtml5, faCss3, faNode } from '@fortawesome/free-brands-svg-icons';


const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerAbout}>
                <div>
                    <h1 className={styles.h1}>About me</h1>
                    <hr />
                </div>
                <div className={styles.description}>
                    <div className={styles.img}>
                    </div>
                    <div className={styles.name}>
                        <p className={styles.items}>Name</p> 
                        <p className={styles.value}>Héctor Alejandro Toro Bernal</p>
                        <hr />
                    </div>
                    <div className={styles.career}>
                        <p className={styles.items}>Career</p> 
                        <p className={styles.value}>Telecommunication Engenier and Full stack web developer</p>
                        <hr />
                    </div>
                    <div className={styles.skills}>
                        <p className={styles.items}>Skills</p>
                        <div className={styles.containerSkills}>
                            <FontAwesomeIcon className={`${styles.icon} ${styles.html}`} icon={faHtml5} beat />
                            <FontAwesomeIcon className={`${styles.icon} ${styles.css}`} icon={faCss3} beat />
                            <FontAwesomeIcon className={`${styles.icon} ${styles.js}`} icon={faJsSquare} beat />
                            <FontAwesomeIcon className={`${styles.icon} ${styles.react}`} icon={faReact} beat />
                            <FontAwesomeIcon className={`${styles.icon} ${styles.node}`} icon={faNode} beat />
                            <FontAwesomeIcon className={`${styles.icon} ${styles.php}`} icon={faPhp} beat />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;