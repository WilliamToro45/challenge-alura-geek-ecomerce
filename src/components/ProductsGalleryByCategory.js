import products from "../data/data.json";
import ProductsList from "./ProductsList";

/**
 * 
 * @returns - Gallery for each unique type of products.
 */
function ProductsGalleryByCategory(){
    // Get unique categories
    const categories = [...new Set(products.map(product => product.category))];
    
    return(
        <section className="products-gallery">
            {
                categories.map(category => {
                    // Get products list for each category.
                    const productsByCategory = products.filter(product => product.category === category)
                    return(
                        <article className="products-galley__category" key={category}>
                            <ProductsList category={category} productsByCategory={productsByCategory} />
                        </article>
                    )
                })
            }
        </section>
    )
}

export default ProductsGalleryByCategory;