/**
 * 
 * @param {Object} product - Object with information about the product- 
 * @returns A card with detail of the product.
 */

function ProductCard({ product }){
    return(
        <>
            <img className="product__img" src={product.img} alt={product.name} />
            <p className="product__name">{product.name}</p>
            <p className="product__price">{`$ ${product.price},00`}</p>
            <a className="product__link" href={`#${product.id}`}>Ver producto</a>
        </>
    )
}

export default ProductCard;