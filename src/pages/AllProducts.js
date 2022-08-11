import "../assets/css/all-products.css";
import products from "../data/data.json";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function AllProducts(){
    return(
        <section className="all-products">
                <div className="all-products__head">
                    <h2 className="all-products__head--title" >Todos los productos</h2>
                    <Link to="/add-product">
                        <button className="all-products__head--button">Agregar producto</button>
                    </Link>
                </div>
                <div className="all-products__body">
                    {
                        products.map(product => {
                            return(
                                <div className="all-products__body--product" key={product.id}>
                                    <ProductCard product={product} />
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}

export default AllProducts;