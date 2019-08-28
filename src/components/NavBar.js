import React from 'react';

function NavBar({ itemCount, showProductList }) {

    return (
        <div className="my-2"> 
            <nav className="navbar navbar-dark bg-primary">
                <h1 className="text-center text-white"> Simple React Product Store </h1>
                <span className="float-right"> 
                    <button 
                        type="button" 
                        className="btn btn-outline-light"
                        onClick={showProductList}
                    >
                        Cart {" "}
                        <span className="badge badge-light">
                             {itemCount}
                        </span>
                    </button>
                </span>
            </nav>
        </div>
    );
}
export default NavBar;

