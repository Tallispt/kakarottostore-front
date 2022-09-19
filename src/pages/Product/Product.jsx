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

                <div className={styles.size}>
                    <select name="size" id="size">
                        <option value="" selected disabled>Selecione o tamanho</option>
                        <option value="p">P</option>
                        <option value="m">M</option>
                        <option value="g">G</option>
                    </select>
                </div>
            </main>
            <Footer />
        </>
    )
};

export default Product;