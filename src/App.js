import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import ShowProduct from './components/ShowProduct';
import uuid from 'uuid/v4';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState({ product: [
    { 
        id: uuid(), 
        name: 'Samsung', 
        description: 'This is a great phone by Samsung',
        imageurl : 'https://i.ebayimg.com/images/a/(KGrHqN,!rMFGlb1RbFnBR0W79Fshw~~/s-l300.jpg',
        addToCart: false,
        price: 10,
        quantity: 1
    },
    { 
        id: uuid(), 
        name: 'Motorola', 
        description: 'This is a great phone by Motorola',
        imageurl : 'https://cdn.pocket-lint.com/r/s/300x/assets/images/148977-phones-news-motorola-image1-zektoesbcv.png', 
        addToCart: false,
        price: 11,
        quantity: 1 
    },
    { 
        id: uuid(), 
        name: 'Iphone', 
        description: 'This is a great phone by Iphone',
        imageurl : 'https://i-cdn.phonearena.com/images/article/116772-two_thumb/Apple-had-the-worst-first-quarter-in-European-smartphone-market-in-five-years.jpg',
        addToCart: false,
        price: 12,
        quantity: 1 
    },
    { 
        id: uuid(), 
        name: 'Xiaomi', 
        description: 'This is a great phone by Xiaomi',
        imageurl : 'https://www.xiaomidrivers.com/wp-content/uploads/2019/05/xiaomidrivers.com_-18.jpg', 
        addToCart: false,
        price: 15,
        quantity: 1 
    },
    { 
        id: uuid(), 
        name: 'Huawei', 
        description: 'This is a great phone by Huawei',
        imageurl : 'https://i-cdn.phonearena.com/images/article/117830-two_thumb/Samsung-gets-its-mojo-back-and-Huawei-defies-the-odds-in-Q2-2019-smartphone-market-reports.jpg', 
        addToCart: false,
        price: 20,
        quantity: 1 
    },
    { 
      id: uuid(), 
      name: 'Nokia', 
      description: 'This is a great phone by Huawei',
      imageurl : 'https://i-cdn.phonearena.com/images/article/118339-two_thumb/Budget-friendly-Nokia-3-V-arrives-at-Verizon-on-August-23.jpg', 
      addToCart: false,
      price: 30,
      quantity: 1 
    }
] });

  const addToCart = (id) => {
    //console.log(id);
    let newProduct = product.product.map( item => {
      if (item.id === id){
        item.addToCart = true
      }
      return item;
    });
    setProduct( {product: newProduct, ...product } );
    //console.log(product);
    let addToCartCount = product.product.filter( item => item.addToCart === true );
    setCartCount(addToCartCount);
    setItemCount(addToCartCount.length);
    //console.log(itemCount);
  }

  const showProductList = () => {
    setShowProduct(true);
  }
  const backToShop = () => {
    setShowProduct(false);
  }
  const deleteItem = (id) => {
      cartCount.filter( item => {
      if(item.id === id){
        return item.addToCart = false
      }
      return item; 
    });
    //console.log(setReturn);
    let deletedItem = cartCount.filter( item => item.id !== id );
    setItemCount(deletedItem.length);
    setCartCount(deletedItem);
  }
  const updateQuantity = (id, value) => {
    let newProduct = product.product.map( item => {
      if (item.id === id){
        item.quantity = value
      }
      return item;
    });
    setProduct( {product: newProduct, ...product } );
  }

  return (
    <div className="container mx-auto">
      <NavBar 
        product={product}
        itemCount={itemCount}
        showProductList={showProductList}
      />
      { showProduct === false ? (
        <React.Fragment> 
          <Product 
            product={product}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
          />
        </React.Fragment>
      ) : 
      <ShowProduct 
        product={cartCount}
        backToShop={backToShop}
        deleteItem={deleteItem}
      /> }
    </div>
  );
}

export default App;
