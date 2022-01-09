import styles from './Ratings.module.scss';
import starIcon from '../../../assets/icon/icon-star.svg';

const Ratings = ({ratingsData}) =>{
    const renderRatings = (ratingsData) =>{
        return ratingsData.map((rating)=>{
            return(
                <div className={styles['rating']} key={rating.id}>
                    <div className={styles['rating-stars']}>
                        {renderStars(rating.stars)}
                    </div>
                    <div className={styles['rating-info']}>
                        <p>{rating.title}</p>
                    </div>
                </div>
            )
        })
    }

    const renderStars = (numberOfStar) =>{   
        return [...Array(numberOfStar)].map((e, i) => <img alt='star-icon' src={starIcon} key={i}/>)
    }
   

    return(
        <div className={styles['ratings']}>
          {renderRatings(ratingsData)}
        </div>
    )
}

export default Ratings;