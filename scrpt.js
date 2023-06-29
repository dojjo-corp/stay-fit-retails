
var productList = document.querySelectorAll(".pro");

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

// for add to cart button
function addToCart(button) {
    
    var userSelectionList = productList.querySelectorAll(".chosen");
    // TODO: GET USER'S SELECTION LIST FROM LIST OF PRODUCTS
    // for each button's onclick, add the "chosen" class to the product item's classList
    // use all elements with "chosen" class as user's selection
    // display in cart page

    // loop product items and get button's onclick to push product to product list
    // 
    
}