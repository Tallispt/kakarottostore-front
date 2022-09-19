import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    align-items: center;
    border-bottom: 2px solid #000000;
    display: flex;
    height: 100px;
    justify-content: space-between;
    padding: 0 30px;
    /* position: fixed;
    top: 0; */
    text-align: center;
    width: 100%;
    z-index: 5;
`

const TitleContainer = styled(Link)`
    font-family: 'Caveat', cursive;
    font-size: 35px;
    padding-left: 30px;`

const InfoUserContainer = styled.div`
        align-items: center;
        display: flex;
        gap: 30px;

    .icon {
        color: #000000;
        cursor: pointer;
        font-size: 25px;
    }

    div {
        align-items: center;
        display: flex;
        gap: 10px;
    }

    span {
        background-color: #000000;
        height: 20px;
        width: 2px;
    }

    p {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
    }
`

export { HeaderContainer, TitleContainer, InfoUserContainer }