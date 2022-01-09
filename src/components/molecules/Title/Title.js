import styles from './Title.module.scss';
import HOne from '../../atoms/HOne/HOne';

const Title = ({title, description}) =>{
    return(
        <div className={styles['title']}>
            <HOne color='hsl(300, 43%, 22%)' fontSize={'2.5em'} desktopAlign={'left'} mobileAlign={'center'}>{title}</HOne>
            <p>{description}</p>
        </div>
    )
}

export default Title;