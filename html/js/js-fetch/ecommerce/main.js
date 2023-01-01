// all variables and dom

const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const cartCount = document.querySelector(".cartCount");
const categories = document.querySelector(".categories");
const cartPrice = document.querySelector(".cartPrice");
let allProducts = [];
let cartProducts = [];
let allCategories = [];


// shop body section

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
                    <h1 class="card-title">
                      ${product.title}
                    </h1>
                    <h3>$${product.price}</h3>
                    <p class="card-text text-truncate">
                      ${product.description}
                    </p>
                    <button onclick="addCart(${product.id})"  class="btn btn-primary addCart" >Add card</button>
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