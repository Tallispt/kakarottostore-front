// css
import styles from './Contact.module.css';

// react-icons
import { FaRegEnvelope } from 'react-icons/fa';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return(
        <>
            <Header />
            <main className={styles.main_container}>
                <div className={styles.email}>
                    <FaRegEnvelope className={styles.icon} />
                    <p>kakarottostore@email.com</p>
                </div>

                <form className={styles.form_container}>
                    <div className={styles.field}>
                        <input type="text" placeholder="Nome completo" />
                    </div>
                    <div className={styles.field}>
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className={styles.field}>
                        <input type="tel" placeholder="Telefone" />
                    </div>
                    <div className={styles.field}>
                        <textarea placeholder="Mensagem"></textarea>
                    </div>

                    <input type="submit" value="Enviar" className={styles.submit} />
                </form>
            </main>
            <Footer />
        </>
    )
};

export default Contact;