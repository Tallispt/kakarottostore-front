// css
import styles from './Registration.module.css';

// react-router-dom
import { Link } from 'react-router-dom';

const Registration = () => {
    return(
        <main className={styles.main_container}>
            <div className={styles.containerRed}>
                    <span>Já possui um conta?</span>
                    <Link to={"/login"} className={styles.link}>Entrar</Link>
                </div>
            <form className={styles.form_container}>
                    <h1>Cadastrar</h1>

                    <div className={styles.field}>
                        <input type="text" id="name" required />
                        <span></span>
                        <label htmlFor="name">Nome</label>
                    </div>

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

                    <div className={styles.field}>
                        <input type="password" id="password" required />
                        <span></span>
                        <label htmlFor="password">Confirmar senha</label>
                    </div>

                    <input type="submit" value="Criar conta" className={styles.submit} />
                </form>
        </main>
    )
};

export default Registration;