import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="*" element={ <Error/> }/>
        </Routes>
        <Contact/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
