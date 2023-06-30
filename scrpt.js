let productList = document.getElementsByClassName("pro");
productList = Array.from(productList);
productList.forEach(function(item){
    var button = item.querySelector("button");
    button.addEventListener("click", getUserSelection);
})
var product = productList[0];


// GET USER'S SELECTION
function getUserSelection(event) {
    var counter = 0;
    var cartList = JSON.parse(sessionStorage.getItem('cartList')) || [];
    var cartItem = {
        "id": "",
        "img": event.target.parentNode.parentNode.childNodes[1].getAttribute("src"),
        "name": event.target.parentNode.childNodes[1].textContent,
        "price": event.target.previousElementSibling.textContent,
    }
    // var id = `cart-${counter}`
    // var imgSrc = event.target.parentNode.parentNode.childNodes[1].getAttribute("src");
    // var itemName = event.target.parentNode.childNodes[1].textContent;
    // var price = event.target.previousSiblingElement.textContent;

    // assign property values to cart item
    // cartItem["id"] = id;
    // cartItem["img"] = imgSrc;
    // cartItem["name"] = itemName;
    // cartItem["price"] = price;

    // add to cart list

    cartList.push(cartItem)
    window.sessionStorage.setItem("cartList", JSON.stringify(cartList));
}

// for add to cart button
function addToCart() {
    var wrapper = document.querySelector(".cart-wrapper");

    // TODO: GET USER'S SELECTION LIST FROM LIST OF PRODUCTS
    var cartItems = JSON.parse(window.sessionStorage.getItem("cartList"));
    cartItems.forEach((item)=>{
        var img = item.img;
        var name = item.name;
        var price = item.price;

        var cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        // add to container
        wrapper.appendChild(cartItem);

        var cartImg = document.createElement("img");
        cartImg.classList.add("image-cart");
        cartImg.setAttribute("src", img);
        var cartName = document.createElement("p");
        cartName.textContent = name;
        var cartPrice = document.createElement("h4");
        cartPrice.textContent = price;
        var btn = document.createElement("button");
        btn.classList.add("pro-btn");
        btn.textContent = "Remove";
        // 

        cartItem.appendChild(cartImg);
        cartItem.appendChild(cartName);
        cartItem.appendChild(cartPrice);
        cartItem.appendChild(btn);
        
        

    })
}

// for search bar
function searchProduct() {
    var searchWord = document.querySelector(".search-box").value.toLowerCase();

    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];
        var productName = product.querySelector("span").innerText;
        if (!productName.includes(searchWord)) {
            product.style.display = "none";
        }
        else {
            product.style.display = "";
        }
    }
}
