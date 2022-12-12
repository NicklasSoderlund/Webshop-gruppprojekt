import { Product } from "./models/product";

let products = [
    new Product("https://i.imgur.com/yc4KP66.png", 
    "SAMSUNG Q70B QLED Smart TV",
    "4K",
    "120Hz",
    "65''",
    "5000kr",
    "TV"),
    new Product("https://i.imgur.com/4K1Vgp8.png",
    "SHARP 55BL2EA UHD Android TV",
    "4K",
    "50Hz",
    "55''",
    "3000kr",
    "TV"),
    new Product("https://i.imgur.com/qhScFyv.png",
    "SHARP 43EL4EA Android TV",
    "4K",
    "50Hz",
    "43''",
    "4000kr",
    "TV"),

    new Product("https://i.imgur.com/NFj2lxF.png",
    "MSI Optix G273QF - Gamingskärm",
    "WQHD",
    "165Hz",
    "27''",
    "4000kr",
    "Monitor"),
    new Product("https://i.imgur.com/trakBW3.png",
    "AOC 25G3ZM/BK",
    "Full HD",
    "240Hz",
    "24.5''",
    "4500kr",
    "Monitor"),
    new Product("https://i.imgur.com/QFcEtH5.png",
    "ACER Nitro XV272L",
    "Full HD",
    "144Hz",
    "27''",
    "2500kr",
    "Monitor"),
]

function createProductsHTML() {
    let monitorsContainer = document.getElementById("product-page__monitors") as HTMLElement;
    let tvScreensContainer = document.getElementById("product-page__tv-screens") as HTMLElement;
 

    for (let i = 0; i < products.length; i++) {
        let ProductLi = document.createElement("li");
        let ProductContainer = document.createElement("div");
        let ProductImage = document.createElement("img");
        
        ProductImage.setAttribute("src", products[i].image);
        ProductImage.setAttribute("alt", "Picture of product");

        ProductContainer.appendChild(ProductImage);
        ProductLi.appendChild(ProductContainer);
        monitorsContainer.appendChild(ProductLi);
        
    }
}
createProductsHTML()

console.log(products);
