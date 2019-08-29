import React from 'react';

function Product({ product, addToCart, updateQuantity }) {

    return(
        <div className="row mt-3">
                { product.product.map( item => (
                <div key={item.id} className="card mx-4 my-3" style={ { width: '18rem' }}>
                    <img src={item.imageurl} className="card-img-top" alt="Vivo z1" />
                    <div className="card-body">
                        <h5 className="card-title"> { item.name } </h5>
                        <p className="card-text"> { item.description } </p>
                        <button 
                            className={ item.addToCart === true ? "btn btn-secondary disabled" : "btn btn-primary" }
                            onClick={ ()=> addToCart(item.id) }
                        >
                            { item.addToCart === true ? "Alread Added" : "Add to Cart" }
                        </button>
                        <span className="text-success font-weight-bold float-right mr-2"> ${ item.price } </span>
                        <div className="form-group row mt-2">
                            <h6 className="pl-3 pt-2"> Select Quantity :</h6>
                            <div className="col-6">
                                <input 
                                    className="form-control" 
                                    type="number" 
                                    name="quantity" 
                                    value={item.quantity} 
                                    id="quantity"
                                    min="1" 
                                    max="10"
                                    onChange={ (e) => updateQuantity(item.id, e.target.value) } 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                )) }
        </div>
    );
}

export default Product;