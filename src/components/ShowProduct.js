import React from 'react';

function ShowProduct({product, backToShop, deleteItem}) {
    return (
        <div className="row mt-3">
            <div className="col-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image</th>
                        <th scope="col"> Delete Item </th>
                        </tr>
                    </thead>
                    <tbody>
                        { product.map( item=> (
                            <tr key={item.id} >
                                <th scope="row"> {item.id} </th>
                                <td> {item.name} </td>
                                <td> {item.description} </td>
                                <td> <img alt={item.name} src={item.imageurl} style={ { height: 20, width: 30 } } /> </td>
                                <td> 
                                    <button 
                                        className="btn btn-danger"
                                        onClick={ ()=> deleteItem(item.id) }
                                    > Delete 
                                    </button>  
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <button 
                    className="btn btn-primary mt-3 float-right"
                    onClick={backToShop}
                > Back To Shop 
                </button>
            </div>
        </div>
    );
}
export default ShowProduct;