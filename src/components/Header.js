import logo from '../assets/logo.svg'
import SearchIcon from './SearchIcon';

function Header() {
    return(
        <header className='header'>
            <nav className='navbar'>
                <div className='navbar__item item1'>
                    <div className="navbar__item--logo">
                        <img className='navbar__item--logo-icon' src={logo} alt="Logo Alura Geek"></img>
                        <span className='navbar__item--logo-name' />
                    </div>
                    <div className='navbar__item--search'>
                        <input className='navbar__item--search-input' type='search' placeholder='¿Qué desea buscar?'/>
                        <span className='navbar__item--search-logo'><SearchIcon /></span>
                    </div>
                </div>
                <div className='navbar__item item2'>
                    <button className='navbar__item--button'>Login</button>
                </div>
                <div className='navbar__item hidden item3'>
                    <SearchIcon />
                </div>
            </nav>
        </header>
    )
}
 
export default Header;