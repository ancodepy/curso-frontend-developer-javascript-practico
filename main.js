// navbar Email
const emailNav = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

// aside
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector(".cards-container");

emailNav.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isMobileMenuClosed = aside.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        aside.classList.add("inactive");    
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    
    if (!isAsideClosed) {
        aside.classList.add("inactive");    
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenu = desktopMenu.classList.contains("inactive");
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");    
    }

    if (!isDesktopMenu) {
        desktopMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}

const productList = []
productList.push({
  name: "Bike",
  price: 120,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Smartphone",
  price: 820,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "TV",
  price: 340,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Laptop",
  price: 1300,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Tablet",
  price: 140,
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/*
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/

function displayProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card")
    cardsContainer.appendChild(productCard)

    const imageProduct = document.createElement("img");
    imageProduct.src = product.img
    productCard.appendChild(imageProduct)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    productCard.appendChild(productInfo);

    const productInfoDiv = document.createElement("div");
    productInfo.appendChild(productInfoDiv);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    productInfoDiv.appendChild(productPrice);

    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.appendChild(productName);

    const figureProduct = document.createElement("figure");
    productInfo.appendChild(figureProduct);

    const imgFigure = document.createElement("img");
    imgFigure.src = "./icons/bt_add_to_cart.svg";
    imgFigure.alt = "";
    figureProduct.appendChild(imgFigure);
  }
}

displayProducts(productList);

