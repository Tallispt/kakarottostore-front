import { useState } from 'react';

// react-router-dom
import { Link, useNavigate } from 'react-router-dom';

// react-toastify
import { toast } from 'react-toastify'

// axios
import axios from 'axios';

import { MainContainer } from "./RegistrationStyle.js"

const Registration = () => {

    const navigate = useNavigate();
    const [dataRegistration, setDataRegistration] = useState({ name: "", email: "", password: "", confirmPassword: "" });

    // console.log(dataRegistration);

    async function handleRegistration(event) {
        event.preventDefault();

        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const minSize = /[0-9a-zA-Z$*&@#]{8,}/;
        const digit = /[0-9]{1,}/;
        const charUppercase = /[A-Z]{1,}/;
        const charLowercase = /[a-z]{1,}/;
        const charSpecial = /[$*&@#]{1,}/;

        if (dataRegistration.name === "" || dataRegistration.email === "" || dataRegistration.password === "" || dataRegistration.confirmPassword === "") {

            toast.warn("Preencha todos os campos!");
            return;

        } else if (dataRegistration.name.length < 3) {

            toast.warn("O nome de usuário deve ter no mínimo 3 caracteres!");
            return;

        } else if (!dataRegistration.email.match(regexEmail)) {

            toast.warn("Email inválido!");
            return;

        } else if (!dataRegistration.password.match(minSize)) {

            toast.warn("Sua senha deve ter no mínimo 8 caracters!");
            return;

        } else if (!dataRegistration.password.match(digit)) {

            toast.warn("Sua senha deve conter ao menos um dígito!");
            return;

        } else if (!dataRegistration.password.match(charUppercase)) {

            toast.warn("Sua senha deve conter ao menos uma letra maiúscula!");
            return;

        } else if (!dataRegistration.password.match(charLowercase)) {

            toast.warn("Sua senha deve conter ao menus, uma letra minúscula!");
            return;

        } else if (!dataRegistration.password.match(charSpecial)) {

            toast.warn("Sua senha deve conter ao menos um caractere especial ($, *, &, @, #)!");
            return;

        }

        const URL = "https://projeto14-kakarottostore-back.herokuapp.com/sign-up";

        try {

            await axios.post(URL, dataRegistration);

            toast.success("Usuário criado com sucesso!");

            navigate("/login");

        } catch (error) {

            toast.error("Erro ao criar usuário!");

            console.log(error);

        }
    }

    return (
        < MainContainer>
            <div className="containerRed">
                <span>Já possui um conta?</span>
                <Link to={"/login"} className="link">Entrar</Link>
            </div>
            <form className="form_container">
                <h1>Cadastrar</h1>

                <div className="field">
                    <input type="text" id="name" required onChange={event => setDataRegistration({ ...dataRegistration, name: event.target.value })} />
                    <span></span>
                    <label htmlFor="name">Nome</label>
                </div>

                <div className="field">
                    <input type="email" id="email" required onChange={event => setDataRegistration({ ...dataRegistration, email: event.target.value })} />
                    <span></span>
                    <label htmlFor="email">E-mail</label>
                </div>

                <div className="field">
                    <input type="password" id="password" required onChange={event => setDataRegistration({ ...dataRegistration, password: event.target.value })} />
                    <span></span>
                    <label htmlFor="password">Senha</label>
                </div>

                <div className="field">
                    <input type="password" id="password" required onChange={event => setDataRegistration({ ...dataRegistration, confirmPassword: event.target.value })} />
                    <span></span>
                    <label htmlFor="password">Confirmar senha</label>
                </div>

                <input type="submit" value="Criar conta" className="submit" onClick={handleRegistration} />
            </form>
        </MainContainer>
    )
};

export default Registration;