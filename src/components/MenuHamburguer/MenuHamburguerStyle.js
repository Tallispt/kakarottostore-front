import styled from "styled-components"

export const MenuHamburguerContainer = styled.div`
    .icon {
        cursor: pointer;
        position: absolute;
    }

    .hamburguer {
    background-color: #000000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    height: 3px;
    left: 10%;
    position: absolute;
    top: 50%;
    /* transition: 0.5s; */
    width: 30px;
    z-index: 6;
}

.hamburguer::before {
    background-color: #000000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    content: "";
    height: 3px;
    position: absolute;
    top: -10px;
    /* transition: 0.5s; */
    width: 30px;
    z-index: 6;
}

.hamburguer::after {
    background-color: #000000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    content: "";
    height: 3px;
    position: absolute;
    top: 10px;
    /* transition: 0.5s; */
    width: 30px;
    z-index: 6;
}

.icon.icon_active .hamburguer {
    /* background-color: transparent; */
    box-shadow: 0 2px 5px transparent;
    background-color: transparent;
    z-index: 6;
    position: absolute;
}

.icon.icon_active .hamburguer::after {
    top: 0;
    background-color: #000;
    transform: rotate(225deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    z-index: 6;
}

.icon.icon_active .hamburguer::before {
    top: 0;
    background-color: #000;
    transform: rotate(135deg);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    z-index: 6;
}

.menu.menu_open {
    background-color: rgba(0, 0, 0, 0.5);
    font-family: 'Press Start 2P', cursive;
    height: 100vh;
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    z-index: 5;
}

.menu.menu_close {
    display: none;
    width: 0px;
}


nav ul {
    align-items: center;
    background: #c5d0e2;
    background: -moz-linear-gradient(45deg, #c5d0e2 0%, #f4f6f9 100%);
    background: -webkit-linear-gradient(45deg, #c5d0e2 0%, #f4f6f9 100%);
    background: linear-gradient(45deg, #c5d0e2 0%, #f4f6f9 100%);
    color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100vh;
    width: 300px;
    z-index: 5;
}
`