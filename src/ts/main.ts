import { Product } from "./models/product";

let products = [
    new Product("https://i.imgur.com/yc4KP66.png", 
    "SAMSUNG Q70B QLED Smart TV",
    "4K",
    "120Hz",
    "65\"",
    5000,
    "TV",
    1),
    new Product("https://i.imgur.com/4K1Vgp8.png",
    "SHARP 55BL2EA UHD Android TV",
    "4K",
    "50Hz",
    "55\"",
    3000,
    "TV",
    1),
    new Product("https://i.imgur.com/qhScFyv.png",
    "SHARP 43EL4EA Android TV",
    "4K",
    "50Hz",
    "43\"",
    4000,
    "TV",
    1),

    new Product("https://i.imgur.com/NFj2lxF.png",
    "MSI Optix G273QF - Gamingskärm",
    "WQHD",
    "165Hz",
    "27\"",
    4000,
    "Monitor",
    1),
    new Product("https://i.imgur.com/trakBW3.png",
    "AOC 25G3ZM/BK",
    "Full HD",
    "240Hz",
    "24.5\"",
    4500,
    "Monitor",
    1),
    new Product("https://i.imgur.com/QFcEtH5.png",
    "ACER Nitro XV272L",
    "Full HD",
    "144Hz",
    "27\"",
    2500,
    "Monitor",
    1),
]
































































































let shoppingCart:Product[] = [];

function checkStorage() {
        let currentStorage = localStorage.getItem("shoppingcart");
        let currentCart:Product[] = JSON.parse(currentStorage as string); 
        console.log(currentCart);
        if (currentCart === null) {
            return
            
        }
        else {
        for (let i = 0; i < currentCart.length; i++) {
            shoppingCart.push(currentCart[i]);            
        }
    }
 }
checkStorage();

function createProductsHTML() {
    let monitorsContainer = document.getElementById("product-page__monitors") as HTMLElement;
    let tvScreensContainer = document.getElementById("product-page__tv-screens") as HTMLElement;
 

    for (let i = 0; i < products.length; i++) {
        let productLi = document.createElement("li");
        let productContainer = document.createElement("div");
        let productImage = document.createElement("img");
        let productName = document.createElement("h5");
        let productSpecsList = document.createElement("ul");
        let firstSpec = document.createElement("li");
        let secondSpec = document.createElement("li");
        let thirdSpec = document.createElement("li");

        productImage.src = products[i].image;
        productImage.setAttribute("alt", "Picture of product");
        productName.innerHTML = products[i].name;
        firstSpec.innerHTML = products[i].quality;
        secondSpec.innerHTML = products[i].inches;
        thirdSpec.innerHTML = products[i].hz;

        let productBottomContainer = document.createElement("div");
        let productPrice = document.createElement("h6");
        let addToCart = document.createElement("button");
        productPrice.innerHTML = JSON.stringify(products[i].price);
        addToCart.innerHTML = "Lägg till i <i class=\"fa-solid fa-basket-shopping\">"
        addToCart.addEventListener("click", () => {
           
            for (let index = 0; index < shoppingCart.length; index++) {
                if (shoppingCart[index] === products[i]) {
                     shoppingCart[i].amount ++;
                     localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
                     return
                }
                
            }
            shoppingCart.push(products[i]);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        } )

        productBottomContainer.appendChild(productPrice);
        productBottomContainer.appendChild(addToCart);


        productSpecsList.appendChild(firstSpec);
        productSpecsList.appendChild(secondSpec);
        productSpecsList.appendChild(thirdSpec);

        
        productContainer.appendChild(productImage);
        productContainer.appendChild(productName);
        productContainer.appendChild(productSpecsList);
        productContainer.appendChild(productBottomContainer);

        productLi.appendChild(productContainer);
        monitorsContainer.appendChild(productLi);
        
    }
}
createProductsHTML()


