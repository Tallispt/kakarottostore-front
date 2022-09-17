// css
import styles from './Login.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <main className={styles.main_container}>
            <form className={styles.form_container}>
                    <h1>Login</h1>

                    <div className={styles.field}>
                        <input type="email" id="email" required />
                        <span></span>
                        <label htmlFor="email">E-mail</label>
                    </div>

                    <div className={styles.field}>
                        <input type="password" id="password" required />
                        <span></span>
                        <label htmlFor="password">Senha</label>
                    </div>

                    <input type="submit" value="Entrar" className={styles.submit} />
                </form>
                <div className={styles.containerBlue}>
                    <span>Ainda não possui uma conta?</span>
                    <Link to={"/registration"} className={styles.link}>Criar conta</Link>
                </div>
        </main>
    )
};

export default Login;