(window.webpackJsonpproduct=window.webpackJsonpproduct||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);a(7);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(12),a(3)),l=a(2);var m=function(e){var t=e.itemCount,a=e.showProductList;return r.a.createElement("div",{className:"my-2"},r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("h1",{className:"text-center text-white"}," Simple React Product Store "),r.a.createElement("span",{className:"float-right"},r.a.createElement("button",{type:"button",className:"btn btn-outline-light",onClick:a},"Cart "," ",r.a.createElement("span",{className:"badge badge-light"},t)))))};var s=function(e){var t=e.product,a=e.addToCart,n=e.updateQuantity;return r.a.createElement("div",{className:"row mt-3"},t.product.map((function(e){return r.a.createElement("div",{key:e.id,className:"card mx-4 my-3",style:{width:"18rem"}},r.a.createElement("img",{src:e.imageurl,className:"card-img-top",alt:"Vivo z1"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}," ",e.name," "),r.a.createElement("p",{className:"card-text"}," ",e.description," "),r.a.createElement("button",{className:!0===e.addToCart?"btn btn-secondary disabled":"btn btn-primary",onClick:function(){return a(e.id)}},!0===e.addToCart?"Alread Added":"Add to Cart"),r.a.createElement("span",{className:"text-success font-weight-bold float-right mr-2"}," $",e.price," "),r.a.createElement("div",{className:"form-group row mt-2"},r.a.createElement("h6",{className:"pl-3 pt-2"}," Select Quantity :"),r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",type:"number",name:"quantity",value:e.quantity,id:"quantity",min:"1",max:"10",onChange:function(t){return n(e.id,t.target.value)}})))))})))};var u=function(e){var t=e.product,a=e.backToShop,n=e.deleteItem,c=e.updateQuantity;return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#ID"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Qantatity"),r.a.createElement("th",{scope:"col"},"Price"),r.a.createElement("th",{scope:"col"},"Sub Total"),r.a.createElement("th",{scope:"col"}," Delete Item "))),r.a.createElement("tbody",null,t.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("th",{scope:"row"}," ",e.id," "),r.a.createElement("td",null," ",e.name," "),r.a.createElement("td",null," ",r.a.createElement("img",{alt:e.name,src:e.imageurl,style:{height:40,width:50}})," "),r.a.createElement("td",null,r.a.createElement("div",{className:"form-group row mt-2"},r.a.createElement("div",{className:"col-6"},r.a.createElement("input",{className:"form-control",style:{width:80},type:"number",name:"quantity",value:e.quantity,id:"quantity",min:"1",max:"10",onChange:function(t){return c(e.id,t.target.value)}})))),r.a.createElement("td",null," $",e.price," "),r.a.createElement("td",{id:"subtotal"}," $",e.quantity*e.price," ","(".concat(e.quantity," X ").concat(e.price,")")," "),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-danger mb-5",onClick:function(){return n(e.id)}}," Delete")))})))),r.a.createElement("div",{className:"float-right"},r.a.createElement("h1",{className:"text-success mb-2"}," Total Amount: $",function(){for(var e=0,a=t.map((function(e){var t=Object.values(e).map((function(e){return e}));return parseInt(t[5])*parseInt(t[6])})),n=0;n<a.length;n++)e+=a[n];return e}()),r.a.createElement("button",{className:"btn btn-primary mt-2 float-right",onClick:a}," Back To Shop"))))},d=a(1),p=a.n(d);a(15);var h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),d=Object(l.a)(o,2),h=d[0],g=d[1],b=Object(n.useState)(!1),E=Object(l.a)(b,2),y=E[0],v=E[1],f=Object(n.useState)({product:[{id:p()(),name:"Samsung",description:"This is a great phone by Samsung",imageurl:"https://i.ebayimg.com/images/a/(KGrHqN,!rMFGlb1RbFnBR0W79Fshw~~/s-l300.jpg",addToCart:!1,price:10,quantity:1},{id:p()(),name:"Motorola",description:"This is a great phone by Motorola",imageurl:"https://cdn.pocket-lint.com/r/s/300x/assets/images/148977-phones-news-motorola-image1-zektoesbcv.png",addToCart:!1,price:11,quantity:1},{id:p()(),name:"Iphone",description:"This is a great phone by Iphone",imageurl:"https://i-cdn.phonearena.com/images/article/116772-two_thumb/Apple-had-the-worst-first-quarter-in-European-smartphone-market-in-five-years.jpg",addToCart:!1,price:12,quantity:1},{id:p()(),name:"Xiaomi",description:"This is a great phone by Xiaomi",imageurl:"https://www.xiaomidrivers.com/wp-content/uploads/2019/05/xiaomidrivers.com_-18.jpg",addToCart:!1,price:15,quantity:1},{id:p()(),name:"Huawei",description:"This is a great phone by Huawei",imageurl:"https://i-cdn.phonearena.com/images/article/117830-two_thumb/Samsung-gets-its-mojo-back-and-Huawei-defies-the-odds-in-Q2-2019-smartphone-market-reports.jpg",addToCart:!1,price:20,quantity:1},{id:p()(),name:"Nokia",description:"This is a great phone by Huawei",imageurl:"https://i-cdn.phonearena.com/images/article/118339-two_thumb/Budget-friendly-Nokia-3-V-arrives-at-Verizon-on-August-23.jpg",addToCart:!1,price:30,quantity:1}]}),w=Object(l.a)(f,2),N=w[0],T=w[1],C=function(e,t){var a=N.product.map((function(a){return a.id===e&&(a.quantity=t),a}));T(Object(i.a)({product:a},N)),0===t&&console.log("value 0")};return r.a.createElement("div",{className:"container mx-auto"},r.a.createElement(m,{product:N,itemCount:h,showProductList:function(){v(!0)}}),!1===y?r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{product:N,addToCart:function(e){var t=N.product.map((function(t){return t.id===e&&(t.addToCart=!0),t}));T(Object(i.a)({product:t},N));var a=N.product.filter((function(e){return!0===e.addToCart}));c(a),g(a.length)},updateQuantity:C})):r.a.createElement(u,{product:a,backToShop:function(){v(!1)},deleteItem:function(e){a.filter((function(t){return t.id===e?t.addToCart=!1:t}));var t=a.filter((function(t){return t.id!==e}));g(t.length),c(t)},updateQuantity:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports=a(16)}},[[6,1,2]]]);
//# sourceMappingURL=main.578c9d63.chunk.js.map