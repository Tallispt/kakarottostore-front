import { MainContainer } from './ProductStyle.js';

// components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Product = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <div className="image">800x800</div>
                <p className="name">Nome do produto</p>
                <span className="price">R$ 00,00</span>

                <div className="size">
                    <select name="size" id="size">
                        <option value="" selected disabled>Selecione o tamanho</option>
                        <option value="p">P</option>
                        <option value="m">M</option>
                        <option value="g">G</option>
                    </select>
                </div>
            </MainContainer>
            <Footer />
        </>
    )
};

export default Product;