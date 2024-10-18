document.addEventListener("DOMContentLoaded", function() {
  var buyBtns = document.querySelectorAll('.buyBtn');
  buyBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      // Find the product details
      var product = e.target.closest('.product');
      var productName = product.querySelector('img').alt;
      var productPrice = product.querySelector('strong').innerText.replace(/[^\d.-]/g, ''); // Remove currency symbols
      var productImage = product.querySelector('img').src;

      // Debugging (check if values are correct)
      console.log("Product Name: ", productName);
      console.log("Product Price: ", productPrice);
      console.log("Product Image: ", productImage);

      // Redirect to invoice page with URL parameters
      window.location.href = `invoice.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&image=${encodeURIComponent(productImage)}`;
    });
  });
});
