import styles from './Avatar.module.scss';

const Avatar = ({imgUrl, alt}) =>{
    return(
        <img alt={alt} src={imgUrl} className={styles['avatar']}/>
    )
};

export default Avatar;