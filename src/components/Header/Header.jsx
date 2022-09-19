import { HeaderContainer, TitleContainer, InfoUserContainer } from './HeaderStyle.js'

// react-router-dom
import { Link } from 'react-router-dom';

// react-icons
import { FaUserCircle, FaRegUserCircle, FaShoppingCart } from 'react-icons/fa'
import MenuHamburguer from '../MenuHamburguer/MenuHamburguer';

const Header = ({ dataUser }) => {

    console.log(dataUser);

    return (
        <HeaderContainer>

            <MenuHamburguer />

            <TitleContainer to={"/"}>
                KakarottoStore
            </TitleContainer>

            <InfoUserContainer>
                <div>
                    {dataUser ?
                        <p>Bem-vindo, {dataUser.name}!</p>

                        :

                        <>
                            <Link to={"/login"}>
                                <FaUserCircle title="Login" className="icon" />
                            </Link>
                            <span></span>
                            <Link to={"/registration"}>
                                <FaRegUserCircle title="Cadastre-se" className="icon" />
                            </Link>
                        </>
                    }
                </div>

                <FaShoppingCart class="icon" />
            </InfoUserContainer>
        </HeaderContainer>
    )
};


export default Header;