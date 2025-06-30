// Product Data
const products = [
  {
    name: 'Classic Men T-Shirt',
    price: 25,
    category: 'Men',
    image: 'https://imgs.search.brave.com/P-F8kfD3BfsR1IYlB-iO0d8-GMP-uYNmjnb4lwx7Y28/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FiLzkx/LzNjL2FiOTEzY2Iz/YWUwY2NmMzEwMjdl/MjVjZmUwMDAwM2M2/LmpwZw',
    desc: 'Soft cotton t-shirt for everyday comfort.'
  },
  {
    name: 'Elegant Women Dress',
    price: 55,
    category: 'Women',
    image: 'https://imgs.search.brave.com/td0NmE0HSXcWUmF0miLp5lYqtFW2rsE7a5sFZIKbZz4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBmL2Fh/LzNmLzBmYWEzZjdm/NDVlZTI2MmE2NTY2/NGYzZDIxYWU4MmIx/LmpwZw',
    desc: 'Chic and stylish dress for all occasions.'
  },
  {
    name: 'Leather Wallet',
    price: 35,
    category: 'Accessories',
    image: 'https://imgs.search.brave.com/l_fvktJEXIsouTTR2Pp9XT6fij5JoKnqN_YS9zbdJWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzE3/LzY3LzNlMTc2NzBj/MjA1Y2U5OWI5N2Iz/MGM0MWMwM2UxNWNk/LS1sZWF0aGVyLWNh/cmQtd2FsbGV0LWhh/bmRtYWRlLWxlYXRo/ZXItd2FsbGV0Lmpw/Zw',
    desc: 'Premium leather wallet with multiple slots.'
  },
  {
    name: 'Men Running Shoes',
    price: 70,
    category: 'Men',
    image: 'https://imgs.search.brave.com/knH8QAjj1Yx-5QUhEOX_UgsMWIUyUvAi9r7oPgTctd8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9uaWtl/LXJ1bm5pbmctc2hv/ZXMtNjdiYzgwZGM3/OTk2MS5qcGc_Y3Jv/cD0wLjY2OHh3OjEu/MDB4aDswLjE5NHh3/LDAmcmVzaXplPTM2/MDoq',
    desc: 'Lightweight and durable running shoes.'
  },
  {
    name: 'Men Formal Shirt',
    price: 40,
    category: 'Men',
    image: 'https://imgs.search.brave.com/xjZKjHuFHSSqAj39vsDXbi8nuFLheMBEXhXgUZZwAC0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdmL2Zj/LzYzLzdmZmM2MzQ0/YTMyYjdmNjkyN2Y1/MDc1YmM4YjFhY2Yy/LmpwZw',
    desc: 'Perfect for office and formal events.'
  },
  {
    name: 'Women Sandals',
    price: 30,
    category: 'Women',
    image: 'https://imgs.search.brave.com/QZK9mZnOOG25ttv5p4y1vrxqGTHhE8Aa1MZxHpmUdL4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyL2Iy/L2M0LzcyYjJjNGEz/NGU4NmM0MjVjYTll/N2NiMzlmOWRlYjg3/LmpwZw',
    desc: 'Comfortable sandals for summer days.'
  },
  {
    name: 'Backpack',
    price: 45,
    category: 'Accessories',
    image: 'https://imgs.search.brave.com/o6YuDamkllZb5qJR9DbFEmhwT-mPsgmgHN8YLZZJ9EE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/aS1uZWVkLWhlbHAt/ZmluZGluZy10aGlz/LWJhY2twYWNrLWl2/ZS1zZWVuLWl0LWV2/ZXJ5d2hlcmUtdjAt/NDdsbHYxeXJqeXJl/MS5qcGc_d2lkdGg9/NjAwJmZvcm1hdD1w/anBnJmF1dG89d2Vi/cCZzPWFmOGEzZTI3/YWRlNDdhMTk3MDlh/ODJkOWUxMDQ5NTA3/NzlmNzQ3YzU',
    desc: 'Durable backpack for travel and work.'
  },
  {
    name: 'Women Scarf',
    price: 18,
    category: 'Accessories',
    image: 'https://imgs.search.brave.com/AIfftLF76wxKUqM3RLGnsNcR0YIEyw0_1g3Op7M5iSs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViLzc1/L2Q1LzViNzVkNThm/ZTg4NGMzNWQxY2U1/MTJjYTc2NzdkYjNm/LmpwZw',
    desc: 'Soft scarf to complement any outfit.'
  },
  {
    name: "Men's Jacket",
    price: 120,
    category: "Men",
    image: "https://imgs.search.brave.com/gfN8nxsD8lT4W2xkfde81BDULA9uFAsbTHc5OuHpGps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIx/MDEwNjIxMi9waG90/by9ibGFjay1qYWNr/ZXQtYW5kLXQtc2hp/cnQtaXNvbGF0ZWQt/b24td2hpdGUtYmFj/a2dyb3VuZC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TjFQ/bVFFQ0pjeElWOWdG/MUpJMlRUcFpkaE5w/R21uUUhDcERCalMy/Vm91az0",
    desc: "A stylish and warm men's jacket for all seasons.",
  },
  {
    name: "Women's Handbag",
    price: 80,
    category: "Women",
    image: "https://imgs.search.brave.com/icspG2ScDjaCNcWax4kDrBBhu8YXDnVNmnAHaW5Fefg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/aW5rLWhhbmRiYWdz/XzEyMDMtNzcwOS5q/cGc_c2VtdD1haXNf/aHlicmlkJnc9NzQw",
    desc: "Elegant handbag for women, perfect for any occasion.",
  },
  {
    name: "Leather Wallet",
    price: 35,
    category: "Accessories",
    image: "https://imgs.search.brave.com/y059eSOhu-t-5_MRwnFExpk5ZyjV-J36DhAfwE_2DiQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFxaGI4R2ZBdkwu/anBn",
    desc: "Premium leather wallet with multiple compartments."
  },
  {
    name: "Men's Shoes",
    price: 95,
    category: "Men",
    image: "https://imgs.search.brave.com/1tli0-fRQACiczVLDaBZKrUlreH5lJmnS0asiqCK9_o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzExLzExLzE1/LzM2MF9GXzIxMTEx/MTUyN185OHc0cXgy/MEJtakxFcmpZWEJw/NG9HZTdMZUM4SXRL/SC5qcGc",
    desc: "Comfortable and durable men's shoes for daily wear."
  },
  {
    name: "Women's Dress",
    price: 110,
    category: "Women",
    image: "https://imgs.search.brave.com/bLoRR5A_Z7eUV0CgKbZK4GVJalBOADOzPRmDMCOkTu4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzIy/MzMvODI3Ny9maWxl/cy9XRU5EWS1EUkVT/Uy1XSElURS0zOTYz/LmpwZz92PTE3NDgz/NjE3NjAmd2lkdGg9/NDAwJmhlaWdodD01/NDEmY3JvcD1jZW50/ZXI",
    desc: "Chic and trendy dress for women.",
  },
  {
    name: "Sunglasses",
    price: 50,
    category: "Accessories",
    image: "https://imgs.search.brave.com/0vsYBN4psF5UEemDKtLxp2R48tqIRtHzwek5yrP6954/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzk5LzkzLzkw/LzM2MF9GXzE5OTkz/OTAyMF9veDNTYzJt/UG9IS3ZtbkZFQnFi/S09QUkRHVW1GSzdt/ei5qcGc",
    desc: "UV-protected stylish sunglasses."
  },
  {
    name: "Men's T-shirt",
    price: 45,
    category: "Men",
    image: "https://imgs.search.brave.com/IoJEimis6qPXeihnXz4HKJFp6tTrKLuIeraHfXivnM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFoMHlkMlhQTUwu/anBn",
    desc: "Soft cotton t-shirt for men."
  },
  {     
    name: "Women's Shoes",
    price: 90,
    category: "Women",
    image: "https://imgs.search.brave.com/KDzNYwDtUMqkU2yh7opUqNVWS4m0d9CliDVXQ8ODR8U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjIv/MDY5LzE0OC9zbWFs/bC9jbG9zZXVwLWZh/c2hpb24taGlnaC1o/ZWVscy13b21lbi1z/aG9lcy1iZWlnZS1j/b2xvci1pc29sYXRl/ZC1vbi13aGl0ZS1i/YWNrZ3JvdW5kLXRv/cC12aWV3LXN0aWxl/dHRvLXNob2Utc3R5/bGUtaW4tbGFkaWVz/LXdhcmRyb2JlLWhp/Z2gtZmFzaGlvbi1h/bmQtZm9ybWFsLWZl/bWFsZS1hY2Nlc3Nv/cnktY29weS1zcGFj/ZS1zZWxlY3RpdmUt/Zm9jdXMtZnJlZS1w/aG90by5qcGc",
    desc: "Elegant heels for women."
  },
  {
    name: "Watch",
    price: 150,
    category: "Accessories",
    image: "https://imgs.search.brave.com/aV8vywfVqcbMG8rjqrDfhmW8AVvRmXOEfZBQNzD0QEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/c2V0YmxhY2std3Jp/c3R3YXRjaC1ibGFu/ay1iYWNrZ3JvdW5k/XzcyMjUwNC0xMDQ3/OS5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw",
    desc: "Luxury watch with leather strap.",
  },
  {
    name: "Men's Jeans",
    price: 70,
    category: "Men",
    image: "https://imgs.search.brave.com/UK5Jl2UNjvDibtL_gyPAkz8UaLxghiyM2xzrsrOZVrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tZW4t/cy1qZWFucy1pc29s/YXRlZC13aGl0ZS1i/YWNrZ3JvdW5kLTc1/ODM2ODM1LmpwZw",
    desc: "Classic fit men's jeans."
  },
  {
    name: "Women's Scarf",
    price: 30,
    category: "Women",
    image: "https://imgs.search.brave.com/MTaIIvLpMiLfkjJF9gVp4Yp2CQ68A8rFz95HJC04Y2o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMzLmRlcG9zaXRw/aG90b3MuY29tLzEw/MDM2ODEvMTY2L2kv/NDUwL2RlcG9zaXRw/aG90b3NfMTY2NjAx/Ni1zdG9jay1waG90/by1nb2xkZW4tc2Nh/cmYuanBn",
    desc: "Soft and cozy scarf for women."
  },
  {     
    name: "Men's Cap",
    price: 25,
    category: "Men",
    image: "https://imgs.search.brave.com/ye66yOIhThq3eGZ9jnDZ1IMyI7ndPac1YjQ8tPCK9Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIw/NTA4MTQ4My92ZWN0/b3IvdHJ1Y2tlci13/aGl0ZS1jYXAtcmVh/bGlzdGljLW1vY2t1/cC1mcm9udC1hbmQt/c2lkZS12ZWN0b3It/aWxsdXN0cmF0aW9u/LWlzb2xhdGVkLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1U/SHFOWXppWV9aLVdK/Z0k5Y0FrUjhaTmht/bHpLaURkdjVMZkdm/MkJMeDRvPQ",
    desc: "Trendy cap for men."
  },
  {
    name: "Women's Sunglasses",
    price: 55,
    category: "Women",
    image: "https://imgs.search.brave.com/CnNOtLg4TGuCVRpJ3uDkeicrG11ZjBubDSo-1TBhr1k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zbGlt/YWdlcy5tYWN5c2Fz/c2V0cy5jb20vaXMv/aW1hZ2UvTUNZL3By/b2R1Y3RzLzgvb3B0/aW1pemVkLzI0MzEz/MDM4X2ZweC50aWY_/cWx0PTgwLDAmcmVz/TW9kZT1zaGFycDIm/b3BfdXNtPTEuNzUs/MC4zLDIsMCZmbXQ9/anBlZyZ3aWQ9MzQy/JmhlaT00MTc",
    desc: "Fashionable sunglasses for women."
  },

];

let filteredProducts = [...products];
let currentCategory = 'All';
let currentSearch = '';
let currentSort = 'default';

const productGrid = document.getElementById('productGrid');
const searchBar = document.getElementById('searchBar');
const categoryBtns = document.querySelectorAll('.category-btn');
const sortPrice = document.getElementById('sortPrice');

function renderProducts(arr) {
  productGrid.innerHTML = '';
  if (arr.length === 0) {
    productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No products found.</p>';
    return;
  }
  arr.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">$${product.price}</p>
        <button class="add-to-cart-btn" data-idx="${idx}">Add to Cart</button>
      </div>
    `;
    card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product);
    });
    card.addEventListener('click', () => showModal(product));
    productGrid.appendChild(card);
  });
}

function filterAndRender() {
  filteredProducts = products.filter(p => {
    const matchCategory = currentCategory === 'All' || p.category === currentCategory;
    const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCategory && matchSearch;
  });
  if (currentSort === 'low-high') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'high-low') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  renderProducts(filteredProducts);
}

searchBar.addEventListener('input', e => {
  currentSearch = e.target.value;
  filterAndRender();
});

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    filterAndRender();
  });
});

sortPrice.addEventListener('change', e => {
  currentSort = e.target.value;
  filterAndRender();
});

// Modal logic
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');

function showModal(product) {
  modalImg.src = product.image;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category;
  modalPrice.textContent = `$${product.price}`;
  modalDesc.textContent = product.desc;
  modal.classList.remove('hidden');
}
closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Initial render
filterAndRender();

// Cart Functionality
let cart = [];
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItemsDiv = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function addToCart(product) {
  const idx = cart.findIndex(item => item.name === product.name);
  if (idx > -1) {
    cart[idx].qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCartUI();
}

function updateCartUI() {
  cartItemsDiv.innerHTML = '';
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p style="text-align:center; color:#888;">Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">$${item.price}</div>
          <div class="cart-item-qty">Qty: ${item.qty}</div>
        </div>
        <button class="cart-item-remove" title="Remove">❌</button>
      `;
      div.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.name));
      cartItemsDiv.appendChild(div);
    });
  }
  // Update cart count and total
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  cartCount.textContent = totalQty;
  cartTotal.textContent = totalPrice.toFixed(2);
}

function showCart() {
  cartSidebar.classList.remove('hidden');
  cartOverlay.classList.remove('hidden');
  cartOverlay.classList.add('visible');
}
function hideCart() {
  cartSidebar.classList.add('hidden');
  cartOverlay.classList.add('hidden');
  cartOverlay.classList.remove('visible');
}
cartIcon.addEventListener('click', showCart);
closeCart.addEventListener('click', hideCart);
cartOverlay.addEventListener('click', hideCart);
// Optional: Hide cart when clicking outside
// window.addEventListener('mousedown', (e) => {
//   // Only close if click is outside the cartSidebar and not on the cartIcon
//   if (!cartSidebar.classList.contains('hidden') &&
//       !cartSidebar.contains(e.target) &&
//       e.target !== cartIcon &&
//       !cartIcon.contains(e.target)) {
//     hideCart();
//   }
// }); 