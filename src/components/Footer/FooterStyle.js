import styled from 'styled-components';


export const FooterContainer = styled.footer`
    align-items: center;
    justify-content: center;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 300px;
    /* position: absolute;
    bottom: 0; */
    width: 100%;
    padding: 0 30px;

.social_medias {
    display: flex;
    gap: 15px;
    padding-right: 100px;
}

.icon_container_facebook,
.icon_container_instagram,
.icon_container_twitter {
    border: 2px solid #FFFFFF;
    border-radius: 50px;
    height: 60px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    text-align: center;
}

.icon_container_facebook:hover {
    border-color: #1D4E9B;
    background-color: #1D4E9B;
}

.icon_facebook,
.icon_instagram,
.icon_twitter {
    color: #FFFFFF;
    font-size: 20px;
}

.icon_container_instagram:hover {
    border-color: #e3524e;
    background-color: #e3524e;
}

.icon_container_twitter:hover {
    border-color: #60A9DE;
    background-color: #60A9DE;
}

.payment,
.shipping {
    display: flex;
    gap: 20px;
    padding-right: 100px;
}

.payment img,
.shipping img {
    height: 40px;
    width: 60px;
}

.copyright {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #FFFFFF;
    text-align: center;
    padding-right: 100px;
}

.copyright p {
    font-family: 'Creepster', cursive;
    font-size: 20px;
}

.copyright span {
    font-family: 'Montserrat Alternates', sans-serif;
}
`