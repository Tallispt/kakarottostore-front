// css
import styles from './Product.module.css';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Product = () => {
    return(
        <>
            <Header />
            <main className={styles.main_container}>
                <div className={styles.image}>800x800</div>
                <p className={styles.name}>Nome do produto</p>
                <span className={styles.price}>R$ 00,00</span>
                
            </main>
            <Footer />
        </>
    )
};

export default Product;