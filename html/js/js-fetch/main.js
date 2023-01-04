// all variables and dom

const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const cartCount = document.querySelector(".cartCount");
const categories = document.querySelector(".categories");
const cartPrice = document.querySelector(".cartPrice");
let allProducts = [];
let cartProducts = [];
let allCategories = [];


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


const displayCart = () => {
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `
            <div class="offcanvas-body">
              <div class="card mb-3" style="max-width: 540px;">
              <div class="row g-0">
                <div class="col-md-3">
                  <img src="${product.thumbnail}" class="img-fluid rounded start" alt="">
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <h3>$${product.price}</h3>
                    <div class="counter">
                      <button class="btn btn-light" onClick="countMin(${product.id})">-</button>
                      <span class="m-3">${product.count}</span>
                      <button class="btn btn-ligth" onClick="countAdd(${product.id})">+</button>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                <button type="button" class="btn-close text-reset mt-2 ms-3" data-bs-dismiss="offcanvas" aria-label="Close" onClick="deleteCart(this)"></button>
                </div>
              </div>
            </div>`;
    cartList.innerHTML += cartItem;
  };
  const totalCartPrice = calculateCartPrice();
  cartPrice.innerText = `$${totalCartPrice}`;
};


const addCart = (productId) => {
  const findIdx = cartProducts.findIndex((item) => item.id === productId);
  if (findIdx > -1) {
    //ene baraa cartProducts array dotor bval nemehgui harin baraanii too hemjee nemne
    cartProducts[findIdx].count += 1;
  } else {
    //bhgui bol baraag nemne
    const findIndex = allProducts.findIndex((item) => item.id === productId);

    const newBaraa = { count: 1, ...allProducts[findIndex] };
    cartProducts.push(newBaraa);
  }
  cartCount.innerText = cartProducts.length;
  displayCart();
};

//+ -

const amount1 = (i) => {
  cartProducts[importScripts].count += 1;
  displayCart();
}
const amount2 = (i) => {
  if(cartProducts[i].count > 1){
    cartProducts[i].count -= 1;
    displayCart();
  } else {
    remove(i);
  }
};


// added cart-delete

const deleteCart = (e) => {
  const parent = e.parentNode.parentNode.parentNode;
  const child = e.parentNode.parentNode;
  parent.removeChild(child);
  cartProducts.length--;
  cartCount.innerText=cartProducts.length;
};

//all categories

const displayCategory = () => {
  allCategories.forEach((category) => {
    const categoryItem = `
    <li><button class="dropdown-item" onclick="getCategoryProduct('${category}')">${category}</button></li>`;
    categories.innerHTML += categoryItem;
  })
};

// all categories dummy json

const getCategory = async () => {
  const a = await fetch('https://dummyjson.com/products/categories');
  const data = await a.json();
  allCategories= data;
  displayCategory();
};
getCategory();


// calculator price

const calculateCartPrice = () => {
  let sumPrice = 0;
  for (product of cartProducts) {
    sumPrice = sumPrice + product.price * product.count;
  }
  return sumPrice;
};

// category ylgah dummy json

const getCategoryProduct = async (category) => {
  console.log(category);
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};

//counter add

let countAdd = (cartId) => {
  let index = cartProducts.map(e => e.id).indexOf(cartId);
  if (index>=0) cartProducts[index].count++;
  displayCart();
}

//counter min

let countMin = (cartId) => {
  let index = cartProducts.map(e => e.id).indexOf(cartId);
  if (index>=0) cartProducts[index].count--;
  displayCart();
}




