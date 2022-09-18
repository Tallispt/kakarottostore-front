import { useState } from 'react';

// css
import styles from './Login.module.css';

// react-router-dom
import { Link, useNavigate } from 'react-router-dom';

// react-toastify
import { toast } from 'react-toastify';

// axios
import axios from 'axios';

const Login = ({ setDataUser }) => {

    const navigate = useNavigate();

    const [ dataLogin, setDataLogin ] = useState({ email: "", password: ""});

    async function handleLogin(event)    {
        event.preventDefault();

        if(dataLogin.email === "" || dataLogin.password === "") {

            toast.warn("Preencha todos os campos!");
            return;

        }

        const URL = "http://localhost:5000/sign-in";

        try {

            const { data } = await axios.post(URL, dataLogin);

            setDataUser(data);

            console.log(data);

            navigate("/");
        
        } catch(error) {

            console.log(error);
            toast.error("Erro. Tente novamente mais tarde!");

        }
    }

    return(
        <main className={styles.main_container}>
            <form className={styles.form_container}>
                    <h1>Login</h1>

                    <div className={styles.field}>
                        <input type="email" id="email" required onChange={event => setDataLogin({...dataLogin, email: event.target.value})} />
                        <span></span>
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className={styles.field}>
                        <input type="password" id="password" required onChange={event => setDataLogin({...dataLogin, password: event.target.value})} />
                        <span></span>
                        <label htmlFor="password">Senha</label>
                    </div>

                    <input type="submit" value="Entrar" className={styles.submit} onClick={handleLogin} />
                </form>
                <div className={styles.containerBlue}>
                    <span>Ainda não possui uma conta?</span>
                    <Link to={"/registration"} className={styles.link}>Criar conta</Link>
                </div>
        </main>
    )
};

export default Login;