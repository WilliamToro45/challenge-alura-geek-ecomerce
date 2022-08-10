import '../assets/css/logo.css';
import logo from '../assets/logo.svg'

function LogoAluraGeek(){
    return(
        <div className="logo">
            <img className='logo__icon' src={logo} alt="Logo Alura Geek"></img>
            <span className='logo__name' />
        </div>
    )
}

export default LogoAluraGeek;