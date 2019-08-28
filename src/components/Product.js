import React from 'react';

function Product({product, addToCart}) {
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
                    </div>
                </div>
                )) }
        </div>
    );
}

export default Product;