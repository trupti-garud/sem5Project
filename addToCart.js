// Get all "Add to Cart" buttons
const addButtons = document.querySelectorAll('.addBtn');
const cartMessage = document.getElementById('cartMessage');

// Function to add item to cart
function addToCart(event) {
    const button = event.target;
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');
    const productImage = button.getAttribute('data-image');

    // Redirect to the invoice page with product details
    window.location.href = `invoice.html?name=${encodeURIComponent(productName)}&price=${productPrice}&image=${encodeURIComponent(productImage)}`;
}

// Attach event listeners to buttons
addButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
