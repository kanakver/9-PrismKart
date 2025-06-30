// Checkout Page JavaScript
let cart = [];

// DOM Elements
const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const shippingBadge = document.getElementById('shipping-badge');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const successModal = document.getElementById('successModal');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const orderNumberElement = document.getElementById('orderNumber');
const continueShoppingBtn = document.getElementById('continueShopping');

// Initialize checkout page
function initCheckout() {
  loadCartFromStorage();
  renderCartItems();
  updateOrderSummary();
  checkEmptyCart();
}

// Load cart data from localStorage
function loadCartFromStorage() {
  const savedCart = localStorage.getItem('prismKartCart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Save cart data to localStorage
function saveCartToStorage() {
  localStorage.setItem('prismKartCart', JSON.stringify(cart));
}

// Render cart items
function renderCartItems() {
  cartItemsContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p style="text-align: center; color: #888; font-style: italic;">No items in cart</p>';
    return;
  }

  cart.forEach((item, index) => {
    const cartItemElement = document.createElement('div');
    cartItemElement.className = 'cart-item-checkout';
    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-category">${item.category}</div>
        <div class="cart-item-price">$${item.price}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
          <span class="quantity-display">${item.qty}</span>
          <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Update item quantity
function updateQuantity(index, change) {
  const newQty = cart[index].qty + change;
  
  if (newQty <= 0) {
    removeItem(index);
  } else {
    cart[index].qty = newQty;
    saveCartToStorage();
    renderCartItems();
    updateOrderSummary();
  }
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  saveCartToStorage();
  renderCartItems();
  updateOrderSummary();
  checkEmptyCart();
}

// Calculate and update order summary
function updateOrderSummary() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const shipping = subtotal >= 500 ? 0 : 50;
  const total = subtotal + shipping;

  // Update display
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;

  // Show/hide free shipping badge
  if (shipping === 0) {
    shippingBadge.classList.remove('hidden');
  } else {
    shippingBadge.classList.add('hidden');
  }

  // Enable/disable place order button
  placeOrderBtn.disabled = cart.length === 0;
}

// Check if cart is empty and show appropriate message
function checkEmptyCart() {
  if (cart.length === 0) {
    emptyCartMessage.classList.remove('hidden');
  } else {
    emptyCartMessage.classList.add('hidden');
  }
}

// Generate random order number
function generateOrderNumber() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `PK${timestamp}${random}`;
}

// Place order functionality
function placeOrder() {
  if (cart.length === 0) return;

  // Generate order number
  const orderNumber = generateOrderNumber();
  orderNumberElement.textContent = orderNumber;

  // Show success modal
  successModal.classList.remove('hidden');

  // Clear cart
  cart = [];
  saveCartToStorage();
  
  // Update UI
  renderCartItems();
  updateOrderSummary();
  checkEmptyCart();
}

// Event Listeners
placeOrderBtn.addEventListener('click', placeOrder);

continueShoppingBtn.addEventListener('click', () => {
  successModal.classList.add('hidden');
  window.location.href = 'index.html';
});

// Close modal when clicking outside
successModal.addEventListener('click', (e) => {
  if (e.target === successModal) {
    successModal.classList.add('hidden');
  }
});

// Initialize checkout when page loads
document.addEventListener('DOMContentLoaded', initCheckout);

// Add some sample items if cart is empty (for demonstration)
function addSampleItems() {
  if (cart.length === 0) {
    const sampleItems = [
      {
        name: 'Classic Men T-Shirt',
        price: 25,
        category: 'Men',
        image: 'https://imgs.search.brave.com/P-F8kfD3BfsR1IYlB-iO0d8-GMP-uYNmjnb4lwx7Y28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzkx/LzNjL2FiOTEzY2Iz/YWUwY2NmMzEwMjdl/MjVjZmUwMDAwM2M2/LmpwZw',
        qty: 2
      },
      {
        name: 'Elegant Women Dress',
        price: 55,
        category: 'Women',
        image: 'https://imgs.search.brave.com/td0NmE0HSXcWUmF0miLp5lYqtFW2rsE7a5sFZIKbZz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBmL2Fh/LzNmLzBmYWEzZjdm/NDVlZTI2MmE2NTY2/NGYzZDIxYWU4MmIx/LmpwZw',
        qty: 1
      },
      {
        name: 'Leather Wallet',
        price: 35,
        category: 'Accessories',
        image: 'https://imgs.search.brave.com/l_fvktJEXIsouTTR2Pp9XT6fij5JoKnqN_YS9zbdJWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzE3/LzY3LzNlMTc2NzBj/MjA1Y2U5OWI5N2Iz/MGM0MWMwM2UxNWNk/LS1sZWF0aGVyLWNh/cmQtd2FsbGV0LWhh/bmRtYWRlLWxlYXRo/ZXItd2FsbGV0Lmpw/Zw',
        qty: 1
      },
      {
        name: 'Men Running Shoes',
        price: 70,
        category: 'Men',
        image: 'https://imgs.search.brave.com/knH8QAjj1Yx-5QUhEOX_UgsMWIUyUvAi9r7oPgTctd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9uaWtl/LXJ1bm5pbmctc2hv/ZXMtNjdiYzgwZGM3/OTk2MS5qcGc_Y3Jv/cD0wLjY2OHh3OjEu/MDB4aDswLjE5NHh3/LDAmcmVzaXplPTM2/MDoq',
        qty: 1
      },
      {
        name: 'Women Sandals',
        price: 30,
        category: 'Women',
        image: 'https://imgs.search.brave.com/QZK9mZnOOG25ttv5p4y1vrxqGTHhE8Aa1MZxHpmUdL4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyL2Iy/L2M0LzcyYjJjNGEz/NGU4NmM0MjVjYTll/N2NiMzlmOWRlYjg3/LmpwZw',
        qty: 1
      }
    ];
    
    cart = sampleItems;
    saveCartToStorage();
    renderCartItems();
    updateOrderSummary();
    checkEmptyCart();
  }
}

// Uncomment the line below to add sample items for demonstration
// addSampleItems(); 