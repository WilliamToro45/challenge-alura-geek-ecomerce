import LogoAluraGeek from "./LogoAluraGeek";

function Contact(){
    const handelSubmit = (event) => {
        event.preventDefault();
    }
    return(
        <section className="contact">
                <div className="contact__logo">
                    <LogoAluraGeek/>
                </div>
                <ul className="contact__list">
                    <li className="contact__list--item">Quienes somos</li>
                    <li className="contact__list--item">Política de privacidad</li>
                    <li className="contact__list--item">Programa de fidelidad</li>
                    <li className="contact__list--item">Nuestras tiendas</li>
                    <li className="contact__list--item">Quiero ser Franquiciado</li>
                    <li className="contact__list--item">Anúncie aquí</li>
                </ul>
            <form className="contact__form" onSubmit={handelSubmit}>
                <div className="contact__form--head">
                    <h2 className="contact__form--head-title">Hable con nosotros</h2>
                </div>
                <div className="contact__form--body">
                    <label className="contact__form--body-label">
                        Nombre
                        <input className="contact__form--body-input" type="text" placeholder="Ingrese su nombre aquí" />
                    </label>
                    <textarea className="contact__form--body--textarea" placeholder="Escriba su mensaje.."/>
                </div>
                <button className="contact__form--button" type="submit">Enviar mensaje</button>
            </form>
        </section>
    );
}

export default Contact;