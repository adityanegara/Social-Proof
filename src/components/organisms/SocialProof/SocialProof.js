import styles from './SocialProof.module.scss';
import Container from '../../atoms/Container/Container';
import Title from '../../molecules/Title/Title';

const SocialProof = () =>{
    return(
        <Container>
            <div className={styles['social-proof']}>
                <div className={styles['title-container']}>
                    <Title/>
                </div>
                <div className={styles['ratings-container']}>
                    Rating Container
                </div>
                <div className={styles['reviews-container']}>
                    Reviews Container
                </div>
            </div>
        </Container>
    )
}

export default SocialProof;