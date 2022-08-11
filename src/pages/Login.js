import "../assets/css/login.css";

/**
 * 
 * @returns a page with the form of login users.
 */

function Login(){
    return ( 
        <section className="login">
            <form className="login__form">
                <h2 className="login__form--head"> Iniciar sesión</h2>
                <input 
                    className="login__form--input"
                    type="text"
                    placeholder="Escriba su correo electrónico"
                />
                <input 
                    className="login__form--input"
                    type="password"
                    placeholder="Escriba su constraseña"
                />
                <button className="login__form--button">Entrar</button>
            </form>
        </section>
     );
}
 
export default Login;