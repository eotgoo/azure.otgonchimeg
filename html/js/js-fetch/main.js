// all variables and dom

const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const productsEvent = document.querySelector(".productsEvent");
const cartCount = document.querySelector(".cartCount");
let allProducts = [];
let cartProducts = [];


const displayProduct = () => {
  productList.innerHTML = "";
  allProducts.forEach((product, idx) => {
    const productItem = `
        <div class="col-12 col-md-6 col-xl-3 mb-4 hoverable hover-shadow-1-soft">
              <div class="card mr-3">
                <img
                  src="${product.thumbnail}"
                  class="card-img-top"
                  style="width: 100%; height: 200px;"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.title}
                  </h5>
                  <p class="card-text text-truncate">
                    ${product.description}
                  </p>
                  <button onclick="addCart(${idx})"  class="btn btn-primary addCart" >Add card</button>
                </div>
              </div>
            </div>
        `;
    productList.innerHTML += productItem;
  });
};


const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  displayCart();
};
getProducts();


const displayCart = () => {
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `
            <div class="offcanvas-body">
              <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${product.thumbnail}" class="img-fluid rounded start" alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <h3>$${product.price}</h3>
                    <div class="counter">
                      <button class="btn btn-light">-</button>
                      <span class="m-3">0</span>
                      <button class="btn btn-ligth">+</button>
                    </div>
                    <hr>
                    <div class="mt-2 d-flex justify-content-between">
                      <p>total price:</p>
                      <span>$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    cartList.innerHTML += cartItem;
  }
};

const addCart = (idx) => {
  cartProducts.push(allProducts[idx]);
  cartCount.innerText = cartProducts.length;
  displayCart();
};