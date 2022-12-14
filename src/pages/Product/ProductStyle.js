import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 100px);
    gap: 20px;
    margin: 40px 0;

.image {
    width: 800px;
    height: 800px;
    background-color: #adadad;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: 'Montserrat Alternates', sans-serif;
    color: #000000;
}

.name {
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
    color: #000000;
}

.price {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #0ca80c;
}

.size select {
    width: 250px;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 20px;
}
`