import { MenuHamburguerContainer } from './MenuHamburguerStyle.js';

import { useState } from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

const MenuHamburguer = () => {

    const MenuIndexes = [
        { name: "Página Inicial", link: "/" },
        { name: "Camisetas", link: "/t-shirts" },
        { name: "Moletons", link: "/sweatshits" },
        { name: "Contato", link: "/contact" },
    ]

    const [active, setActive] = useState(false);

    function toogleActive() {
        setActive(!active);
    }

    return (
        <MenuHamburguerContainer>
            <div className={active ? "icon icon_active" : "icon"} onClick={toogleActive}>
                <div className="hamburguer hamburguer_icon"></div>
            </div>
            <aside className={active ? "menu menu_open" : "menu menu_close"}>
                <nav>
                    <ul>
                        {MenuIndexes.map(index => (
                            <li>
                                <Link to={index.link}>{index.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </MenuHamburguerContainer>
    )
}

export default MenuHamburguer;