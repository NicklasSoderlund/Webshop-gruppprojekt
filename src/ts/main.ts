import { Product } from "./models/product";

let products = [
    new Product(new URL("https://imgur.com/a/wLShfuG"), 
    "SAMSUNG Q70B QLED Smart TV",
    "4K",
    "120Hz",
    "65''",
    5000,
    "TV",
    0),
    new Product(new URL("https://imgur.com/a/c6mBJcK"),
    "SHARP 55BL2EA UHD Android TV",
    "4K",
    "50Hz",
    "55''",
    3000,
    "TV",
    0),
    new Product(new URL("https://imgur.com/a/Rg7ld86"),
    "SHARP 43EL4EA Android TV",
    "4K",
    "50Hz",
    "43''",
    4000,
    "TV",
    0),

    new Product(new URL("https://imgur.com/a/M8JTHlj"),
    "MSI Optix G273QF - Gamingskärm",
    "WQHD",
    "165Hz",
    "27''",
    4000,
    "Monitor",
    0),
    new Product(new URL("https://imgur.com/a/GnGLFyR"),
    "AOC 25G3ZM/BK",
    "Full HD",
    "240Hz",
    "24.5''",
    4500,
    "Monitor",
    0),
    new Product(new URL("https://imgur.com/a/GnGLFyR"),
    "ACER Nitro XV272L",
    "Full HD",
    "144Hz",
    "27''",
    2500,
    "Monitor",
    0),
]

function createShoppingCart() {
    let shoppingCart = document.getElementById("shopping-cart__products") as HTMLDivElement;
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {

        totalPrice += products[i].price;
        
       let newUl = document.createElement("ul");
       let productName = document.createElement("li");
       let productAmount = document.createElement("li");
       let productPrice = document.createElement("li");
       productName.innerHTML = products[i].name;
       let amountString = JSON.stringify(products[i].amount)
       productAmount.innerHTML = amountString + " st";
       productPrice.innerHTML = JSON.stringify(products[i].price) + " SEK";

       productName.setAttribute("class", "productName");
       productAmount.setAttribute("class", "productAmount");
       productPrice.setAttribute("class", "productPrice");

       let secondUl = document.createElement("ul");
       secondUl.setAttribute("id", "arrows")
       let arrowUp = document.createElement("li");
       arrowUp.innerHTML = "<i class=\"fa-solid fa-arrow-up\"></i>";
       let arrowDown = document.createElement("li");
       arrowDown.innerHTML = "<i class=\"fa-solid fa-arrow-down\"></i>";
       
       secondUl.appendChild(arrowUp);
       secondUl.appendChild(arrowDown);
       
       productAmount.appendChild(secondUl);
       newUl.appendChild(productName);
       newUl.appendChild(productAmount);
       newUl.appendChild(productPrice);
       shoppingCart.appendChild(newUl);

    }
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "totalPrice")
    let newh5 = document.createElement("h5");
    newh5.innerHTML = "Totalt: " + totalPrice;
    newDiv.appendChild(newh5);
    shoppingCart.appendChild(newDiv);
}
createShoppingCart();

let arrowupIcon = "<i class=\"fa-solid fa-arrow-down\"></i>"

console.log(products);
