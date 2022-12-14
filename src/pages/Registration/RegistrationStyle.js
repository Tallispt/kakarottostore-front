import styled from "styled-components";

export const MainContainer = styled.main`
    background-color: #DC143C;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

.form_container {
    background-color: #FFFFFF;
    width: 400px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.form_container h1 {
    text-align: center;
    font-family: 'Secular One', sans-serif;
    font-size: 24px;
    padding-bottom: 10px;
}

.containerRed {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    width: 500px;
    background-color: #f5385e;
    height: 500px;
}

.containerRed span {
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 22px;
    color: #FFFFFF;
}

.link {
    background-color: #FFFFFF;
    text-decoration: none;
    padding: 20px;
    border: 5px solid #ce1f42;
    border-radius: 5px;
    color: #ce1f42;
    font-size: 20px;
    font-family: 'Secular One', sans-serif;
}

.link:hover {
    background-color: #ce1f42;
    color: #FFFFFF;
}

.form_container .field {
    position: relative;
    border-bottom: 2px solid #ce1f42;
    margin: 30px 0;
}

.field input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    background: none;
    outline: none;
    font-family: 'Roboto', sans-serif;

}

.field label {
    position: absolute;
    top: 50%;
    left: 1%;
    color: #ce1f42;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
    font-family: 'Roboto', sans-serif;

}

.field span::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ce1f42;
}

.field input:focus ~ label,
.field input:valid ~ label {
    top: -5px;
    color: #ce1f42;
}

.submit {
    padding: 15px;
    border: 5px solid #ce1f42;
    border-radius: 5px;
    color: #ce1f42;
    font-size: 20px;
    font-family: 'Secular One', sans-serif;
    background-color: #FFFFFF;
    margin-top: 20px;
    cursor: pointer;
}

.submit:hover {
    background-color: #ce1f42;
    color: #FFFFFF;
}`