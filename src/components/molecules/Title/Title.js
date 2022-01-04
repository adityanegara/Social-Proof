import styles from './Title.module.scss';
import HOne from '../../atoms/HOne/HOne';

const Title = ({title, description}) =>{
    return(
        <div>
            <HOne>10,000+ of our users love our products.</HOne>
            <p>We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>
        </div>
    )
}

export default Title;