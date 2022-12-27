const productList = document.querySelector('.productList');
let cartList = document.querySelector('.cartList');
let allProducts = [];
let cartProducts = [];


const displayProduct = () => {
    allProducts.forEach((product, index) => {
        const cardItem = `
        <div class="card">
            <img src="${product.thumbnail}" alt="">
            <h1>${product.title}</h1>
            <p>An apple mobile which is nothing like apple</p>
            <p2><strong>${product.price}</strong></p2>
            <button onclick= "cart(${index})">Add Cart</button>
        </div>
        `

        productList.innerHTML += cardItem;
    });
};



const getProducts = async () => {
    const responce = await fetch ('https://dummyjson.com/products');
    const data = await responce.json();
    allProducts = data.products;
    displayProduct();
    console.log(data);
}
getProducts();


const displayCart = () => {
    cartList.innerHTML ="";
    cartProducts.forEach((product) => {
        const cartItem = `
        <div class="offcanvas-body">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row">
                <div class="col-6">
                    <img src="${product.thumbnail}" alt="">
                </div>
                <div class="col-6">
                    <h>${product.title}</h>
                </div>
            </div>
          </div>
        </div>
        `
        cartList.innerHTML += cartItem
    });
}

const cart = (index) => {
    cartProducts.push(allProducts[index]);
    displayCart();
}