import Banner from "./components/Banner";
import Header from "./components/Header";
import ProductsGallery from "./components/ProductsGallery";

function App() {
  return (
    <div className="main">
      <Header/>
      <Banner/>
      <ProductsGallery />
    </div>
  );
}

export default App;
