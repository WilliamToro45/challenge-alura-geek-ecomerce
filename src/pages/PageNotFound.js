import '../assets/css/page-not-found.css';
import { Link } from 'react-router-dom';

function PageNoyFound(){
    return(
        <main className="page-not-found">
            <h1>Error 404</h1>
            <h2>Not Found Page</h2>
            <br/>
            <Link className='link button' to="/">Regresar al nicio</Link>
        </main>
    )
}

export default PageNoyFound;