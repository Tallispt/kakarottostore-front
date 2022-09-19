import { MainContainer } from './HomeStyle.js'

// react-router-dom
import { Link } from 'react-router-dom';

// componentes
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// imagens
import itachi from '../../assets/imgs/home/itachi-sharingan.jpg';
import akatsuki from '../../assets/imgs/home/akatsuki.jpeg';


const Home = ({ dataUser }) => {
    return (
        <>
            <Header dataUser={dataUser} />
            <MainContainer>
                <section className="section_container">
                    <img src={itachi} alt="Moletom | Itachi | Sharingan" />
                    <div className="overlay"></div>
                    <div className="content">
                        <span>Moletons</span>
                        <Link to={"/sweatshits"} className="button">comprar</Link>
                    </div>
                </section>
                <section className="section_container">
                    <img src={akatsuki} alt="Camiseta | Akatsuki" />
                    <div className="overlay2"></div>
                    <div className="content2">
                        <span>Camisetas</span>
                        <Link to={"/t-shirts"} className="button">comprar</Link>
                    </div>
                </section>
            </MainContainer>
            <Footer />
        </>
    )
}

export default Home;