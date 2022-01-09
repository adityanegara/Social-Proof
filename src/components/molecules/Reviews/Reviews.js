import styles from './Reviews.module.scss';
import Avatar from '../../atoms/Avatar/Avatar';


const Reviews = ({reviewsData}) =>{
    const renderReviews = (reviews) =>{
        return reviews.map((review) =>{
            return(
                <div key={review.id} className={styles['review']}>
                    <div className={styles['user-info']}>
                            <Avatar alt={review.name} imgUrl={review.avatarUrl}/>
                            <div className={styles['column']}>
                                <p>{review.name}</p>
                                <p>{review.role}</p>
                            </div>
                    </div>
                    <div className={styles['user-review']}>
                        <p>{`"${review.reviews}"`}</p>
                    </div>
                </div>
            )
        })
    }

    return(
        <div className={styles['reviews']}>
                {renderReviews(reviewsData)}
        </div>
    )
}

export default Reviews;