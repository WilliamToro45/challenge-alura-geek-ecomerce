import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsGallery from "./components/ProductsGallery";

function App() {
  return (
    <div className="main">
      <Header/>
      <Banner/>
      <ProductsGallery />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
