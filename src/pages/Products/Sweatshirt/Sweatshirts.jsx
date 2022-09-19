// css
import styles from './Sweatshirts.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

// componentes
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';

const Sweatshirts = () => {
    return(
        <>
            <Header />
            <main className={styles.main_container}>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
                <div className={styles.product}>
                    <Link to={"/product"} className={styles.image}>500x500</Link>
                    <div className={styles.infoProduct}>
                        <Link className={styles.nameProduct}>Nome do produto</Link>
                        <span className={styles.priceProduct}>R$ 00,00</span>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Sweatshirts;