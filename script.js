document.addEventListener("DOMContentLoaded", function() {
  var buyBtns = document.querySelectorAll('.buyBtn');
  buyBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      // Find the product details
      var product = e.target.closest('.product');
      var productName = product.querySelector('img').alt;
      var productPrice = product.querySelector('strong').innerText;
      var productImage = product.querySelector('img').src;

      // Redirect to invoice page with URL parameters
      window.location.href = `invoice.html?name=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}&image=${encodeURIComponent(productImage)}`;
    });
  });
});
