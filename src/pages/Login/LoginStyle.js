import styled from "styled-components"

export const MainContainer = styled.main`
background-color: #4169E1;
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
padding-bottom: 20px;
}

.containerBlue {
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
width: 500px;
background-color: #5a7de6;
height: 500px;
}

.containerBlue span {
font-family: 'Montserrat Alternates', sans-serif;
font-size: 22px;
color: #FFFFFF;
}

.link {
background-color: #FFFFFF;
text-decoration: none;
padding: 20px;
border: 5px solid #325ee0;
border-radius: 5px;
color: #325ee0;
font-size: 20px;
font-family: 'Secular One', sans-serif;
}

.link:hover {
background-color: #325ee0;
color: #FFFFFF;
}

.form_container .field {
position: relative;
border-bottom: 2px solid #325ee0;
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
color: #325ee0;
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
background-color: #325ee0;
}

.field input:focus ~ label,
.field input:valid ~ label {
top: -5px;
color: #325ee0;
}

.submit {
padding: 15px;
border: 5px solid #325ee0;
border-radius: 5px;
color: #325ee0;
font-size: 20px;
font-family: 'Secular One', sans-serif;
background-color: #FFFFFF;
margin-top: 15px;
cursor: pointer;
}

.submit:hover {
background-color: #325ee0;
color: #FFFFFF;
}
`