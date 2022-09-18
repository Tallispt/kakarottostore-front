// css
import styles from './Home.module.css';

// componentes
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// imagens
import itachi from '../../assets/imgs/home/itachi-sharingan.jpg';
import akatsuki from '../../assets/imgs/home/akatsuki.jpeg';


const Home = ({ dataUser }) => {
    return(
        <>
            <Header dataUser={dataUser} />
            <main className={styles.main_container}>
                <section className={styles.section_container}>
                    <img src={itachi} alt="Moletom | Itachi | Sharingan" />
                    <div className={styles.overlay}></div>
                    <div className={styles.content}>
                        <span>Moletons</span>
                        <button>comprar</button>
                    </div>
                </section>
                <section className={styles.section_container}>
                    <img src={akatsuki} alt="Camiseta | Akatsuki" />
                    <div className={styles.overlay2}></div>
                    <div className={styles.content2}>
                        <span>Camisetas</span>
                        <button>comprar</button>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home;