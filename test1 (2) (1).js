
const cart = [];  // declares an empty array

function addToCart(productName, price) { // declares a function that takes two parameters - ProductName and Price
    
    function findProduct(item) {  // defines a nested function, takes an item in the cart
        return item.productName === productName; // checks if the productName matches
    }

    const product = cart.find(findProduct); // if checks matches, saved in the product variable

    if (product) {
        product.quantity++; // if matching product found, increment
    } else {
        cart.push({ productName, price, quantity: 1 }); // add new product to the cart 
    }

    updateCart(); //call this fuction to updateCart
}
       /*
        this code snippet allows users to add products to a shopping cart by name and price. 
        If the same product is added multiple times, it tracks the quantity of that product in the cart. 
        The cart array stores these products, and the updateCart function is called to update the cart display on the webpage each time a product is added.

        */
function removeFromCart(productName) { // remove a product from the cart array by specifying its productName
    const index = cart.findIndex(item => item.productName === productName); // nested funt to search an item in the cart using findindex funt 

    if (index !== -1) {   // It starts an if statement, checking if the index is not equal to -1
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1); // uses an splice method to remove an item from cart
        }

        updateCart();   //call this fuction to updateCart
    }
}

function updateCart() {
    const cartItems = document.getElementById("cartItems"); // select cartItems from HTML document
    cartItems.innerHTML = "";

    let total = 0; // Initialises a variable total to zero, which will be used to keep track of the total cost 

    cart.forEach(item => {    //looping through each item 
        const cartItem = document.createElement("li"); // for each item found create a html list & assign to cartitmes
        const removeButton = document.createElement("button"); // create a remove button 
        removeButton.textContent = "Remove"; // set the text content to remove
        removeButton.className = "remove"; // for styling
        removeButton.onclick = () => removeFromCart(item.productName); // onclick event handler 

        cartItem.textContent = `${item.productName} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`; // sets the content text and displays product name, quantity and decimal palces
        
        cartItem.appendChild(removeButton);
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById("cartTotal");
    cartTotal.textContent = total.toFixed(2);   // two decimal places
}

       /*
         the updateCart function clears the cart display, 
         then iterates through the items in the shopping cart, 
         creating a list item for each item with details and calculates the total cost.
          Finally, it updates the cart display and the total cost on the webpage.
        */


function checkout() {
    // Implement your checkout process here, e.g., redirect to a payment gateway.
    alert("Checkout is not implemented in this example.");
}