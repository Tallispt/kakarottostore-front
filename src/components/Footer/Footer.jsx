// css
import styles from './Footer.module.css';

// react-icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


// imagens
import visa from '../../assets/imgs/visa.png';
import mastercard from '../../assets/imgs/mastercard.png';
import boleto from '../../assets/imgs/boleto.png';
import elo from '../../assets/imgs/elo.png';
import hipercard from '../../assets/imgs/hipercard.png';
import pagseguro from '../../assets/imgs/pagseguro.png';
import correios from '../../assets/imgs/correios.png';
import pac from '../../assets/imgs/pac.png';
import sedex from '../../assets/imgs/sedex.png';

const Footer = () => {
    return(
        <footer className={styles.footer_container}>
            <div className={styles.social_medias}>
                <div className={styles.icon_container_facebook}>
                    <FaFacebookF className={styles.icon_facebook} />
                </div>

                <div className={styles.icon_container_instagram}>
                    <FaInstagram className={styles.icon_instagram} />
                </div>

                <div className={styles.icon_container_twitter}>
                    <FaTwitter className={styles.icon_twitter} />
                </div>
            </div>

            <div className={styles.payment}>
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={boleto} alt="boleto" />
                <img src={elo} alt="elo" />
                <img src={hipercard} alt="hipercard" />
                <img src={pagseguro} alt="pagseguro" />
            </div>

            <div className={styles.shipping}>
                <img src={correios} alt="correios" />
                <img src={pac} alt="pac" />
                <img src={sedex} alt="sedex" />
            </div>

            <div className={styles.copyright}>
                <p>&copy; Kakarotto Store 2022</p>

                <span>Todos os direitos reservados.</span>
            </div>
        </footer>
    )
};

export default Footer;