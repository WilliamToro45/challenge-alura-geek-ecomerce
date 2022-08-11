import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";
import { AiOutlineArrowRight } from 'react-icons/ai';
/**
 * 
 * @param {string} category - category of the products. 
 * @param {Array} productsByCategory - array with products filter by category.
 * @returns List of products by category.
 */

function ProductsList({ category , productsByCategory }){
    return(
        <div className="product-list">
            <div className="product-list__head">
                <h2 className="product-list__head--title">{category}</h2>
                <Link to="products" className="product-list__head--link">Ver todo <AiOutlineArrowRight/></Link>
            </div>
            <div className="product-list__body">
                {
                    productsByCategory.map(product =>{
                        return(
                            <div className="product" key={product.id}>
                                <ProductCard product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductsList;