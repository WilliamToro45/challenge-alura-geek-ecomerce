import Banner from "../components/Banner";
import ProductsGalleryByCategory from "../components/ProductsGalleryByCategory";

/**
 * 
 * @returns the home page.
 */

function Home(){
    return(
        <>
            <Banner/>        
            <ProductsGalleryByCategory />
        </>
    );
}

export default Home;