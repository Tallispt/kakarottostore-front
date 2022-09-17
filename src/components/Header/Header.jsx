import { useState } from 'react';

// css
import styles from './Header.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

// react-icons
import { FaUserCircle, FaRegUserCircle, FaShoppingCart } from 'react-icons/fa'

const Header = () => {

    const [ active, setActive ] = useState(false);

    function toogleActive() {
        setActive(!active);
    }

    return (
        <header className={styles.header_container}>
            <div className="menuHamburguer_container">
                <div className={active ? "icon icon_active" : "icon"} onClick={toogleActive}>
                    <div className="hamburguer hamburguer_icon"></div>
                </div>
                <aside className={active ? "menu menu_open" : "menu menu_close"}>
                    <nav className="nav_container">
                        <ul>
                            <li>
                                Página Inicial
                            </li>
                            <li>
                                Produtos
                            </li>
                            <li>
                                Contato
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>

            <div className={styles.title_container}>
                <h1>KakarottoStore</h1>
            </div>

            <div className={styles.infoUser_container}>
                <div className={styles.infoUser}>
                    <Link to={"/login"}>
                        <FaUserCircle title="Login" className={styles.icon} /> 
                    </Link>
                    <span className={styles.bar}></span> 
                    <Link to={"/registration"}>
                        <FaRegUserCircle title="Cadastre-se" className={styles.icon} />
                    </Link>
                </div>

                <div className={styles.cart_shopping}>
                    <FaShoppingCart className={styles.icon} />
                </div>
            </div>
        </header>
    )
    
};

export default Header;