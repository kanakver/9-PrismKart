// Get cart data from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const checkoutItems = document.getElementById('checkoutItems');
const subtotalEl = document.getElementById('subtotal');
const shippingEl = document.getElementById('shipping');
const totalEl = document.getElementById('total');
const freeShippingMsg = document.getElementById('freeShippingMsg');
const checkoutForm = document.getElementById('checkoutForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

// Constants
const SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 50;

// Initialize checkout page
function initCheckout() {
  if (cart.length === 0) {
    window.location.href = 'index.html';
    return;
  }
  renderCheckoutItems();
  updateTotals();
}

// Render cart items in checkout
function renderCheckoutItems() {
  checkoutItems.innerHTML = '';
  cart.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = 'checkout-item';
    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="checkout-item-info">
        <h3 class="checkout-item-title">${item.name}</h3>
        <p class="checkout-item-price">$${item.price}</p>
        <span class="checkout-item-qty">Quantity: ${item.quantity}</span>
      </div>
    `;
    checkoutItems.appendChild(itemEl);
  });
}

// Calculate and update totals
function updateTotals() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  // Show/hide free shipping message
  if (subtotal >= SHIPPING_THRESHOLD) {
    freeShippingMsg.classList.remove('hidden');
  } else {
    freeShippingMsg.classList.add('hidden');
  }
}

// Handle form submission
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Show success modal
  successModal.classList.remove('hidden');
  
  // Clear cart data
  localStorage.removeItem('cart');
});

// Close modal handler
closeModal.addEventListener('click', () => {
  successModal.classList.add('hidden');
  window.location.href = 'index.html';
});

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.classList.add('hidden');
    window.location.href = 'index.html';
  }
});

// Initialize checkout
initCheckout(); 