 function getCart() {
    try {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(cart)) return cart;
    } catch {}
    return [];
  }

  function updateCartCount() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").textContent = totalCount;
  }

  const queryParams = new URLSearchParams(window.location.search);
  const productId = parseInt(queryParams.get("id"));
  const container = document.getElementById("product-container");

  if (!productId || !Array.isArray(products)) {
    container.innerHTML = '<p class="text-danger">Invalid product ID or data.</p>';
  } else {
    const product = products.find(p => p.id === productId);

    if (product) {
      container.innerHTML = `
        <div class="row g-5">
          <div class="col-md-6">
            <div class="product-image-box">
              <img src="${product.image}" class="img-fluid w-100 rounded" alt="${product.title}">
            </div>
          </div>
          <div class="col-md-6">
            <h1 class="fw-bold mb-1">${product.title}</h1>
            <p class="text-muted small">${product.category}</p>
            
            <div class="mb-3">
              <span class="text-danger fs-5"><s>$${product.oldPrice.toFixed(2)}</s></span>
              <span class="fw-bold fs-3 ms-2 text-success">$${product.price.toFixed(2)}</span>
            </div>

            <div class="mb-2">
              <strong>Availability:</strong> <span class="${product.available > 0 ? 'text-success' : 'text-danger'}">${product.available > 0 ? 'In Stock' : 'Out of Stock'}</span>
            </div>

            <div class="mb-3 text-warning fs-5">
              ${'<i class="fa fa-star"></i>'.repeat(product.rating)}
              ${'<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)}
            </div>

            <p class="text-muted">${product.description}</p>

            <div class="mt-4">
              <label for="qty" class="form-label fw-semibold">Quantity</label>
              <div class="qty-input-group mb-3">
                <button type="button" id="qty-minus" aria-label="Decrease quantity">−</button>
                <input type="text" id="qty" value="1" min="1" max="${product.available}" readonly>
                <button type="button" id="qty-plus" aria-label="Increase quantity">+</button>
              </div>
              <button id="add-to-cart" class="btn btn-success btn-lg">
                <i class="fa fa-cart-plus me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;

      const qtyInput = document.getElementById("qty");
      const btnPlus = document.getElementById("qty-plus");
      const btnMinus = document.getElementById("qty-minus");

      function updatePreviewCartCount(qty) {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);
        let baseCount = cart.reduce((sum, item) => sum + item.qty, 0);
        if (existing) baseCount -= existing.qty;
        const previewCount = baseCount + qty;
        document.getElementById("cart-count").textContent = previewCount;
      }

      btnPlus.addEventListener("click", () => {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty < product.available) {
          currentQty++;
          qtyInput.value = currentQty;
          updatePreviewCartCount(currentQty);
        }
      });

      btnMinus.addEventListener("click", () => {
        let currentQty = parseInt(qtyInput.value);
        if (currentQty > 1) {
          currentQty--;
          qtyInput.value = currentQty;
          updatePreviewCartCount(currentQty);
        }
      });

      document.getElementById("add-to-cart").addEventListener("click", () => {
        const qty = parseInt(qtyInput.value);
        if (qty < 1 || qty > product.available || isNaN(qty)) {
          alert("Please enter a valid quantity.");
          return;
        }

        let cart = getCart();
        const existing = cart.find(item => item.id === product.id);

        if (existing) {
          existing.qty += qty;
          if (existing.qty > product.available) {
            alert(`Max available quantity is ${product.available}`);
            existing.qty = product.available;
          }
        } else {
          cart.push({ id: product.id, qty });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        window.location.href = "cart.html";
      });

      updateCartCount();
    } else {
      container.innerHTML = '<p class="text-danger">Product not found.</p>';
    }
  }