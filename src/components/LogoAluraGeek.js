import '../assets/css/logo.css';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

function LogoAluraGeek(){
    return(
        <Link to="/" style={{ textDecoration: "none"}} className="logo">
            <img className='logo__icon' src={logo} alt="Logo Alura Geek"></img>
            <span className='logo__name' />
        </Link>
    )
}

export default LogoAluraGeek;