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

let shoppingCartList:Product[] = [];

function checkStorage() {
        let currentStorage = localStorage.getItem("shoppingCart");
        let currentCart:Product[] = JSON.parse(currentStorage as string); 
        if (currentCart === null) {
            return
            
        }
        else {
        for (let i = 0; i < currentCart.length; i++) {
            shoppingCartList.push(currentCart[i]);            
        }
    }
 }
checkStorage();

if (window.location.href.match('varukorg.html') != null) {

function createShoppingCart() {
    let shoppingCart = document.getElementById("shopping-cart__products") as HTMLDivElement;
    let totalPrice = 0;
    shoppingCart.innerHTML = "";
    for (let i = 0; i < shoppingCartList.length; i++) {

        totalPrice += shoppingCartList[i].price * shoppingCartList[i].amount;
        
       let newUl = document.createElement("ul");
       let productName = document.createElement("li");
       let productAmount = document.createElement("li");
       let productPrice = document.createElement("li");
       productName.innerHTML = shoppingCartList[i].name;
       productAmount.innerHTML = " st" + "<span>" + JSON.stringify(shoppingCartList[i].amount) + "</span>";
       let currentPrice = + shoppingCartList[i].price * shoppingCartList[i].amount;
       let priceString = JSON.stringify(currentPrice);
       let newPriceString = "";
       if (priceString.length === 5) {
       newPriceString = priceString.slice(0,2) + "," + priceString.slice(2);
       }
       if (priceString.length === 6) {
       newPriceString = priceString.slice(0,3) + "," + priceString.slice(3);
      }
      if (priceString.length < 5 || priceString.length > 6) {
        newPriceString = priceString;
       }

       productPrice.innerHTML = "<span>" + newPriceString + " SEK" + "</span";
       let deleteButton = document.createElement("button");
       deleteButton.innerHTML = "Ta Bort";
       deleteButton.addEventListener("click", () => {
            let currentObject = shoppingCartList[i];
            let currentObjectIndex = shoppingCartList.indexOf(currentObject);
           shoppingCartList.splice(currentObjectIndex, 1);
           localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
           createShoppingCart();
          
       })
       productPrice.appendChild(deleteButton);



       productName.setAttribute("class", "productName");
       productAmount.setAttribute("class", "productAmount");
       productPrice.setAttribute("class", "productPrice");

       let secondUl = document.createElement("ul");
       secondUl.setAttribute("id", "arrows")
       let arrowUp = document.createElement("li");
       arrowUp.innerHTML = "<i class=\"fa-solid fa-arrow-up\"></i>";
       arrowUp.addEventListener("click", () => {
        shoppingCartList[i].amount ++;
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
        createShoppingCart();
       })
       let arrowDown = document.createElement("li");
       arrowDown.addEventListener("click", () => {
        if (shoppingCartList[i].amount === 1) {
            return;
        }
        shoppingCartList[i].amount --;
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
        createShoppingCart();
       })
       arrowDown.innerHTML = "<i class=\"fa-solid fa-arrow-down\"></i>";
       
       secondUl.appendChild(arrowUp);
       secondUl.appendChild(arrowDown);

       if (i % 2 ) {
        newUl.classList.add("evenRow")
       }
       
       productAmount.appendChild(secondUl);
       newUl.appendChild(productName);
       newUl.appendChild(productAmount);
       newUl.appendChild(productPrice);
       shoppingCart.appendChild(newUl);

    }

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "totalPrice")
    let newh5 = document.createElement("h5");
    let totalPriceString = JSON.stringify(totalPrice);
        let newTotalPriceString = "";
        if (totalPriceString.length === 5) {
        newTotalPriceString = totalPriceString.slice(0,2) + "," + totalPriceString.slice(2);
        }
        if (totalPriceString.length === 6) {
        newTotalPriceString = totalPriceString.slice(0,3) + "," + totalPriceString.slice(3);
        
       }
       if (totalPriceString.length < 5 || totalPriceString.length > 6) {
        newTotalPriceString = JSON.stringify(totalPrice);
        console.log(newTotalPriceString);
       }
 

    newh5.innerHTML = "Totalt: " + newTotalPriceString  + " SEK";
    let toCheckoutButton = document.createElement("button");
    toCheckoutButton.innerHTML = "Till Kassa";
    let toCheckoutButtonAnchor = document.createElement("a");
    toCheckoutButtonAnchor.setAttribute("href", "kassa.html")
    toCheckoutButtonAnchor.appendChild(toCheckoutButton);
    newDiv.appendChild(newh5);
    newDiv.appendChild(toCheckoutButtonAnchor);
    shoppingCart.appendChild(newDiv);
}
 createShoppingCart();
}



if (window.location.href.match('produkter.html') != null) {
function createProductsHTML() {
    let monitorsContainer = document.getElementById("product-page__monitors") as HTMLUListElement;
    let tvScreensContainer = document.getElementById("product-page__tv-screens") as HTMLUListElement;
 

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
        productPrice.innerHTML = JSON.stringify(products[i].price) + " SEK";
        addToCart.innerHTML = "Lägg till i <i class=\"fa-solid fa-basket-shopping\">"
        addToCart.addEventListener("click", () => {

          
            for (let index = 0; index < shoppingCartList.length; index++) {
                if (shoppingCartList[index].name === products[i].name) {
                     shoppingCartList[index].amount ++;
                     localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
                     return
                }
            }   
            shoppingCartList.push(products[i]);
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));

             
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
        if (products[i].category === "Monitor") {
        monitorsContainer.appendChild(productLi);
        }
        if (products[i].category === "TV") {
            tvScreensContainer.appendChild(productLi)
        }
    }
}
createProductsHTML()

}


if (window.location.href.match('kassa.html') != null) {
    function createShoppingCart() {
        let shoppingCart = document.getElementById("shopping-cart__products-checkout") as HTMLDivElement;
        let totalPrice = 0;
        shoppingCart.innerHTML = "";
        for (let i = 0; i < shoppingCartList.length; i++) {
    
            totalPrice += shoppingCartList[i].price * shoppingCartList[i].amount;
            
           let newUl = document.createElement("ul");
           let productName = document.createElement("li");
           let productAmount = document.createElement("li");
           let productPrice = document.createElement("li");
           productName.innerHTML = shoppingCartList[i].name;
           productAmount.innerHTML = " st" + "<span>" + JSON.stringify(shoppingCartList[i].amount) + "</span>";
           let currentPrice = + shoppingCartList[i].price * shoppingCartList[i].amount;
           let priceString = JSON.stringify(currentPrice);
       let newPriceString = "";
       if (priceString.length === 5) {
       newPriceString = priceString.slice(0,2) + "," + priceString.slice(2);
       }
       if (priceString.length === 6) {
       newPriceString = priceString.slice(0,3) + "," + priceString.slice(3);
      }
      if (priceString.length < 5 || priceString.length > 6) {
        newPriceString = priceString;
       }

       productPrice.innerHTML = "<span>" + newPriceString + " SEK" + "</span";
           let deleteButton = document.createElement("button");
           deleteButton.innerHTML = "Ta Bort";
           deleteButton.addEventListener("click", () => {
                let currentObject = shoppingCartList[i];
                let currentObjectIndex = shoppingCartList.indexOf(currentObject);
               shoppingCartList.splice(currentObjectIndex, 1);
               localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
               createShoppingCart();
              
           })
           productPrice.appendChild(deleteButton);
    
    
    
           productName.setAttribute("class", "productNameCheckout");
           productAmount.setAttribute("class", "productAmount");
           productPrice.setAttribute("class", "productPrice");
    
           let secondUl = document.createElement("ul");
           secondUl.setAttribute("id", "arrows")
           let arrowUp = document.createElement("li");
           arrowUp.innerHTML = "<i class=\"fa-solid fa-arrow-up\"></i>";
           arrowUp.addEventListener("click", () => {
            shoppingCartList[i].amount ++;
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
            createShoppingCart();
           })
           let arrowDown = document.createElement("li");
           arrowDown.addEventListener("click", () => {
            if (shoppingCartList[i].amount === 1) {
                return;
            }
            shoppingCartList[i].amount --;
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
            createShoppingCart();
           })
           arrowDown.innerHTML = "<i class=\"fa-solid fa-arrow-down\"></i>";
           
           secondUl.appendChild(arrowUp);
           secondUl.appendChild(arrowDown);

           if (i % 2 ) {
            newUl.classList.add("evenRow")
           }
           
           productAmount.appendChild(secondUl);
           newUl.appendChild(productName);
           newUl.appendChild(productAmount);
           newUl.appendChild(productPrice);
           shoppingCart.appendChild(newUl);
    
        }
    
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "totalPrice")
        let newh5 = document.createElement("h5");
        
        let totalPriceString = JSON.stringify(totalPrice);
        let newTotalPriceString = "";
        if (totalPriceString.length === 5) {
        newTotalPriceString = totalPriceString.slice(0,2) + "," + totalPriceString.slice(2);
        }
        if (totalPriceString.length === 6) {
        newTotalPriceString = totalPriceString.slice(0,3) + "," + totalPriceString.slice(3);
        
       }
       if (totalPriceString.length < 5 || totalPriceString.length > 6) {
        newTotalPriceString = JSON.stringify(totalPrice);
        console.log(newTotalPriceString);
       }
 
        newh5.innerHTML = "Totalt: " + newTotalPriceString + " SEK";
        newDiv.appendChild(newh5);
        shoppingCart.appendChild(newDiv);
    }
     createShoppingCart();

     let button = document.getElementById("kassaknapp") as HTMLButtonElement;
     button.addEventListener("click", (e) => {
        e.preventDefault();
        let nameInput = document.getElementById("kassanamn") as HTMLInputElement;
        let cardInput = document.getElementById("kassakortnummer") as HTMLInputElement;
        let dateInput = document.getElementById("kassagiltighetsdatum") as HTMLInputElement;
        let cvcInput = document.getElementById("kassagiltighetsdatum-cvc") as HTMLInputElement;



        if (shoppingCartList.length < 1) {   
            window.alert("Varukorgen är tom")
            return
        }

        if (cardInput.value.length < 13 || cardInput.value.length > 16) {
            window.alert("Vänligen fyll i ett giltigt kortnummer (13-16 siffror)")
            return
        }
        const rExp : RegExp = /[A-C]/g;
        let pattern = /^(0[1-9]|1[012])\/\d{2}$/;
        if (pattern.test(dateInput.value) !== true) {
            window.alert("Vänligen fyll i korrekt datum (MM/YY)")
        }

        if (cvcInput.value.length !== 3) {
            window.alert("Vänligen fyll i giltigt cvc-nummer (3 siffror)")
            return
        }

        
         if (nameInput.value === "" || (cardInput.value === "") || (dateInput.value === "") || (cvcInput.value === ""))  {
            window.alert("Vänligen fyll i hela betalformuläret");
            return
         }
         else {
            let receipt = document.getElementById("receipt-details") as HTMLDivElement;
            let newUl = document.createElement("ul");
            let totalPrice = 0;
            for (let i = 0; i < shoppingCartList.length; i++) {
                totalPrice += shoppingCartList[i].price;
                let newLi = document.createElement("li");
                let amount = shoppingCartList[i].amount;
                newLi.innerHTML = JSON.stringify(amount) + " x " + shoppingCartList[i].name;
                newUl.appendChild(newLi);
            }
            let newH3 = document.createElement("h3");
            newH3.innerHTML = "Betalt Belopp: " + JSON.stringify(totalPrice) + " SEK"
            receipt.appendChild(newUl);
            receipt.appendChild(newH3);

            let displayToggle = document.getElementById("receipt-container") as HTMLDivElement;
            displayToggle.style.display = "block";

            let receiptClose = document.getElementById("receipt-close") as HTMLParagraphElement;
            receiptClose.addEventListener("click", () => {
                displayToggle.remove();
            })
            shoppingCartList = [];
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
            createShoppingCart();

            nameInput.value = "";
            cardInput.value = "";
            dateInput.value = "";
            cvcInput.value = "";

            }
          })
        
      }

      //Validators
      if (window.location.href.match('kassa.html') != null) {
      let cardInput = document.getElementById("kassakortnummer") as HTMLInputElement;

      cardInput.addEventListener("keydown", () => {
           if (cardInput.value.length > cardInput.maxLength) {
            cardInput.value = cardInput.value.slice(0, cardInput.maxLength);
           }
    } )

    let cvcInput = document.getElementById("kassagiltighetsdatum-cvc") as HTMLInputElement;
    cvcInput.addEventListener("keydown", () => {
        if (cvcInput.value.length > cvcInput.maxLength) {
         cvcInput.value = cvcInput.value.slice(0, cvcInput.maxLength);
        }
 } )
      }
   
       
      

