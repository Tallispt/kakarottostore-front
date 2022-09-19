import { MainContainer, Email, FormContainer } from './ContactStyle.js';

// react-icons
import { FaRegEnvelope } from 'react-icons/fa';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <Email>
                    <FaRegEnvelope className="icon" />
                    <p>kakarottostore@email.com</p>
                </Email>

                <FormContainer>
                    <input type="text" placeholder="Nome completo" />
                    <input type="email" placeholder="E-mail" />
                    <input type="tel" placeholder="Telefone" />
                    <textarea placeholder="Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </FormContainer>
            </MainContainer>
            <Footer />
        </>
    )
};

export default Contact;