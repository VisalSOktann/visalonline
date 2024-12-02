// Initialize an empty cart
let cart = [];

// Function to update the cart count and total
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");
  const cartItems = document.getElementById("cart-items");

  // Update cart count
  cartCount.textContent = cart.length;

  // Update cart total
  let total = 0;
  cartItems.innerHTML = ""; // Clear cart items list
  cart.forEach((item) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Event listener for "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const id = this.getAttribute("data-id");
    const name = this.getAttribute("data-name");
    const price = parseFloat(this.getAttribute("data-price"));

    // Add product to cart
    cart.push({ id, name, price });

    // Update cart
    updateCart();
  });
});

// Show the cart modal
document.getElementById("cartBtn").addEventListener("click", function () {
  document.getElementById("cart-modal").style.display = "flex";
});

// Close the cart modal
document.getElementById("closeCartBtn").addEventListener("click", function () {
  document.getElementById("cart-modal").style.display = "none";
});

// Checkout button
document.getElementById("checkoutBtn").addEventListener("click", function () {
  alert("Proceeding to checkout...");
  // You can integrate checkout here or redirect to another page
  cart = []; // Clear cart
  updateCart();
  document.getElementById("cart-modal").style.display = "none"; // Close modal
});
