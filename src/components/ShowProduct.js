import React from 'react';

function ShowProduct({ product, backToShop, deleteItem, updateQuantity }) {
    const totalPrice = () => {
        let sumTotal = 0;
        let fialsetTotal = 0;
        let sumPrice = product.map( item => {
            let realArray = Object.values(item).map( item => item )
            sumTotal = (parseInt(realArray[5]) * parseInt(realArray[6]) );
            //sumTotal.reduce((x, y) => x + y)
            //sumTotal.reduce( (a,b)=> a + b, 0 )
            //console.log(sumTotal.reduce((a, b) => a + b, 0));
            return sumTotal;
            
         })
         for( let i = 0; i<sumPrice.length; i++  ){
            fialsetTotal += sumPrice[i];
         }
         return fialsetTotal;
    }

    return (
        <div className="row mt-3">
            <div className="col-sm-12">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Qantatity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Total</th>
                        <th scope="col"> Delete Item </th>
                        </tr>
                    </thead>
                    <tbody>
                        { product.map( item=> (
                            <tr key={item.id} >
                                <th scope="row"> {item.id} </th>
                                <td> {item.name} </td>
                                <td> <img alt={item.name} src={item.imageurl} style={ { height: 40, width: 50 } } /> </td>
                                <td> 
                                    <div className="form-group row mt-2">
                                        <div className="col-6">
                                            <input 
                                                className="form-control"
                                                style={ { width: 80 } } 
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
                                </td>
                                <td> ${item.price} </td>
                                <td id="subtotal"> ${item.quantity*item.price} { `(${item.quantity} X ${item.price})` } </td>
                                <td> 
                                    <button 
                                        className="btn btn-danger mb-5"
                                        onClick={ ()=> deleteItem(item.id) }
                                    > Delete 
                                    </button>  
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
                <div className="float-right">
                    <h1 className="text-success mb-2"> Total Amount: 
                        ${ totalPrice() }
                    </h1>
                    <button 
                        className="btn btn-primary mt-2 float-right"
                        onClick={backToShop}
                    > Back To Shop 
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ShowProduct;