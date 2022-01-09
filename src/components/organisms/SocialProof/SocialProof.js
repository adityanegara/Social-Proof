import styles from './SocialProof.module.scss';
import Container from '../../atoms/Container/Container';
import Title from '../../molecules/Title/Title';
import Ratings from '../../molecules/Ratings/Ratings';
import Reviews from '../../molecules/Reviews/Reviews';
import RATINGS_DATA from '../../../constants/ratingsData';
import REVIEWS_DATA from '../../../constants/reviewsData';

const SocialProof = () =>{
    return(
        <Container>
            <div className={styles['social-proof']}>
                <div className={styles['title-container']}>
                    <Title title='10,000+ of our users love our products.' description='We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.'/>
                </div>
                <div className={styles['ratings-container']}>
                   <Ratings ratingsData={RATINGS_DATA}/>
                </div>
                <div className={styles['reviews-container']}>
                    <Reviews reviewsData={REVIEWS_DATA}/>
                </div>
            </div>
        </Container>
    )
}

export default SocialProof;