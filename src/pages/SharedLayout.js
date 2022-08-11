import { Outlet } from 'react-router-dom'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';

function SharedLayout(){
    return(
        <>
            <Header />
            <Outlet/>
            <Contact />
            <Footer />
        </>
    )
}

export default SharedLayout;