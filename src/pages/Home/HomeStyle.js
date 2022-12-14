import styled from 'styled-components';

export const MainContainer = styled.div`
width: 100%;

height: calc(100vh - 100px);

display: flex;

.section_container {
width: 50%;

height: calc(100vh - 100px);

position: relative;
}

.section_container img {
width: 100%;

height: calc(100vh - 100px);
}

.section_container .overlay {
background-color: rgba(255, 0, 0, 0.5);
width: 100%;
z-index: 1;
height: calc(100vh - 100px);
position: absolute;
top: 0;
}

.section_container .overlay2 {
background-color: rgba(0, 0, 255, 0.5);
width: 100%;
z-index: 1;
height: calc(100vh - 100px);
position: absolute;
top: 0;
}

.content, .content2 {
z-index: 2;
position: absolute;
top: 0;

display: flex;

flex-direction: column;

align-items: center;

justify-content: center;

gap: 30px;

width: 100%;

height: calc(100vh - 100px);
}

.content span, .content2 span {
font-family: 'Montserrat Alternates', sans-serif;

font-size: 72px;

color: #FFFFFF;
}

.content .button, .content2 .button {
border: 2px solid #FFFFFF;

padding: 20px;

font-family: 'Montserrat Alternates', sans-serif;

background-color: transparent;

color: #FFFFFF;

font-size: 20px;

cursor: pointer;

text-transform: uppercase;
}

.content .button:hover {
-webkit-transform: scale(1.3);
-ms-transform: scale(1.3);
transform: scale(1.3);

background-color: #DC143C;
border-color: #DC143C;

transition: 0.5s;

border-radius: 50px;
}

.content2 .button:hover {
-webkit-transform: scale(1.3);
-ms-transform: scale(1.3);
transform: scale(1.3);

background-color: #4169E1;
border-color: #4169E1;

transition: 0.5s;

border-radius: 50px;
}
`