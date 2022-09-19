import styled from 'styled-components';

const MainContainer = styled.main`
height: calc(100vh - 100px);
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
gap: 30px;
width: 100%;
`

const Email = styled.div`
align-items: center;
justify-content: center;
display: flex;
gap: 20px;

.icon {
    font-size: 30px;
}

p {
    font-size: 25px;
    font-family: 'Montserrat Alternates', sans-serif;
}`

const FormContainer = styled.form`
width: 800px;
display: flex;
flex-direction: column;
gap: 20px;

input, textarea {
width: 100%;
border: 3px dashed #dadada;
font-size: 20px;
font-family: 'Roboto', sans-serif;
}

input {
height: 50px;
padding-left: 15px;
}

textarea {
height: 300px;
padding: 15px;
}

button {
font-family: 'Roboto', sans-serif;
width: 100px;
height: 50px;
cursor: pointer;
border: none;
border-bottom: 3px solid #000;
background-color: #FFFFFF;
font-size: 20px;
color: #000;
}

button:hover {
background-color: #000;
color: #FFFFFF;
}
`

export { MainContainer, Email, FormContainer }