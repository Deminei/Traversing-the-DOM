// Function to check and initialize cart in localStorage
function initializeCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
}

// Function to add an item to cart
function addItem(item) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from cart
function removeItemByName(itemName) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}

// Function to display cart contents
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    console.log('Cart Contents:');
    console.log(cart);
}

// Event listener for add item form
document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const itemId = new Date().getTime(); // Use's timestamp as unique item id
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);
    const item = { id: itemId, name: itemName, price: itemPrice };
    addItem(item);
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
});

// Event listener for display cart button
document.getElementById('displayCartButton').addEventListener('click', function () {
    displayCart();
});

// Event listener for remove item by name button
document.getElementById('removeItemByNameButton').addEventListener('click', function () {
    const itemName = document.getElementById('itemName').value;
    removeItemByName(itemName);
    document.getElementById('itemName').value = '';
});

// Initialize cart on page load ᕦ(ಠ_ಠ)ᕤ
initializeCart();
