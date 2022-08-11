import '../assets/css/add-product.css';

function AddProduct(){
    return(
        <section className='add-product'>
            <div className='add-product__container'>
                <div className='add-product__head'>
                    <h2 className='add-product__head-title'>Agregar nuevo producto</h2>
                </div>
                <div className='add-product__body'>
                    <form className='add-product__body--form'>
                        <label className='add-product__body--form-label'>
                            URL de imagen
                            <input className='add-product__body--form-input' type="text"/>
                        </label>
                        <label className='add-product__body--form-label'>
                            Categoría
                            <input className='add-product__body--form-input' type="text"/>
                        </label>
                        <label className='add-product__body--form-label'>
                            Nombre del producto
                            <input className='add-product__body--form-input' type="text"/>
                        </label>
                        <label className='add-product__body--form-label'>
                            Precio del producto
                            <input className='add-product__body--form-input' type="text"/>
                        </label>
                        <label className='add-product__body--form-label'>
                            Descripción del producto
                            <input className='add-product__body--form-input last-input' type="text"/>
                        </label>
                        <button className='add-product__body--form-button'>Agregar producto</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddProduct;