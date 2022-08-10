import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ProductsGallery from "./components/ProductsGallery";

function App() {
  return (
    <div className="main">
      <Header/>
      <Banner/>
      <ProductsGallery />
      <Contact/>
    </div>
  );
}

export default App;
