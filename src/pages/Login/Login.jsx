import { useState } from 'react';

// react-router-dom
import { Link, useNavigate } from 'react-router-dom';

// react-toastify
import { toast } from 'react-toastify';

// axios
import axios from 'axios';

import { MainContainer } from './LoginStyle.js';

const Login = ({ setDataUser }) => {

    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState({ email: "", password: "" });

    async function handleLogin(event) {
        event.preventDefault();

        if (dataLogin.email === "" || dataLogin.password === "") {

            toast.warn("Preencha todos os campos!");
            return;

        }

        const URL = "http://localhost:5000/sign-in";

        try {

            const { data } = await axios.post(URL, dataLogin);

            setDataUser(data);

            console.log(data);

            navigate("/");

        } catch (error) {

            console.log(error);
            toast.error("Erro. Tente novamente mais tarde!");

        }
    }

    return (
        <MainContainer>
            <form className="form_container">
                <h1>Login</h1>

                <div className="field">
                    <input type="email" id="email" required onChange={event => setDataLogin({ ...dataLogin, email: event.target.value })} />
                    <span></span>
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="field">
                    <input type="password" id="password" required onChange={event => setDataLogin({ ...dataLogin, password: event.target.value })} />
                    <span></span>
                    <label htmlFor="password">Senha</label>
                </div>

                <input type="submit" value="Entrar" className="submit" onClick={handleLogin} />
            </form>
            <div className="containerBlue">
                <span>Ainda não possui uma conta?</span>
                <Link to={"/registration"} className="link">Criar conta</Link>
            </div>
        </MainContainer>
    )
};

export default Login;