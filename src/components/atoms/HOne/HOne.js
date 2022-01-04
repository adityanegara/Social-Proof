import styles from './HOne.module.scss';

const HOne = ({children}) =>{
    return(
        <h1 style={{fontSize: '2.5em'}} className={styles['h-one']}>{children}</h1>
    )
}

export default HOne;