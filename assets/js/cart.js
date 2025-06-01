 // Utility functions to handle cart localStorage and UI updates
    function getCart() {
      try {
        const cart = JSON.parse(localStorage.getItem("cart"));
        if (Array.isArray(cart)) return cart;
      } catch {}
      return [];
    }

    function saveCart(cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateCartCount() {
      const cart = getCart();
      const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
      document.getElementById("cart-count").textContent = totalCount;
    }

    // Render cart items UI
    function renderCart() {
      const cart = getCart();
      const container = document.getElementById("cart-items");
      container.innerHTML = "";

      if (cart.length === 0) {
        container.innerHTML = `
          <p class="text-center text-muted fs-5">Your cart is empty.</p>
          <div class="text-center mt-3">
            <a href="shop.html" class="btn btn-primary cnt_btn">Continue Shopping</a>
          </div>`;
        document.getElementById("checkout-btn").disabled = true;
        document.getElementById("cart-total").textContent = "0.00";
        updateCartCount();
        return;
      }

      let total = 0;

      cart.forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        if (!product) return;

        const subtotal = product.price * item.qty;
        total += subtotal;

        // Create cart item card
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item row align-items-center";

        itemDiv.innerHTML = `
          <div class="col-3 col-md-2">
            <img src="${product.image}" alt="${product.title}" class="img-fluid rounded" />
          </div>
          <div class="col-5 col-md-4">
            <h5 class="mb-1">${product.title}</h5>
            <p class="mb-0 text-muted small">${product.category}</p>
            <p class="mb-0 fw-semibold">$${product.price.toFixed(2)}</p>
          </div>
          <div class="col-4 col-md-3 d-flex align-items-center gap-2">
            <button class="btn btn-outline-secondary btn-sm qty-btn" data-id="${product.id}" data-action="decrease" aria-label="Decrease quantity">
              <i class="fa fa-minus"></i>
            </button>
            <input
              type="text"
              min="1"
              max="${product.available}"
              value="${item.qty}"
              class="form-control qty-input"
              data-id="${product.id}"
              aria-label="Quantity input"
            />
            <button class="btn btn-outline-secondary btn-sm qty-btn" data-id="${product.id}" data-action="increase" aria-label="Increase quantity">
              <i class="fa fa-plus"></i>
            </button>
          </div>
          <div class="col-5 col-md-2 fw-bold fs-5 text-end blue_text">
            $${subtotal.toFixed(2)}
          </div>
          <div class="col-2 col-md-1 text-end">
            <button class="remove-btn" data-id="${product.id}" aria-label="Remove item" >
              &times;
            </button>
          </div>
        `;

        container.appendChild(itemDiv);
      });

      document.getElementById("cart-total").textContent = total.toFixed(2);
      document.getElementById("checkout-btn").disabled = false;

      attachEventListeners();
      updateCartCount();
    }

    // Attach event listeners to quantity buttons, inputs and remove buttons
    function attachEventListeners() {
      // Quantity input change
      document.querySelectorAll(".qty-input").forEach((input) => {
        input.addEventListener("change", (e) => {
          let val = parseInt(e.target.value);
          const id = parseInt(e.target.dataset.id);
          if (isNaN(val) || val < 1) val = 1;

          const product = products.find((p) => p.id === id);
          if (val > product.available) {
            alert(`Max available quantity for "${product.title}" is ${product.available}.`);
            val = product.available;
          }

          e.target.value = val;

          let cart = getCart();
          const item = cart.find((i) => i.id === id);
          if (item) {
            item.qty = val;
            saveCart(cart);
            renderCart();
          }
        });
      });

      // Quantity increment/decrement buttons
      document.querySelectorAll(".qty-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(btn.dataset.id);
          const action = btn.dataset.action;
          let cart = getCart();
          const item = cart.find((i) => i.id === id);
          if (!item) return;

          const product = products.find((p) => p.id === id);

          if (action === "increase" && item.qty < product.available) {
            item.qty++;
          } else if (action === "decrease" && item.qty > 1) {
            item.qty--;
          }
          saveCart(cart);
          renderCart();
        });
      });

      // Remove button
      document.querySelectorAll(".remove-btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(btn.dataset.id);
          let cart = getCart();
          cart = cart.filter((i) => i.id !== id);
          saveCart(cart);
          renderCart();
        });
      });
    }

    // Checkout button redirect
    document.getElementById("checkout-btn").addEventListener("click", () => {
      window.location.href = "checkout.html";
    });

    // Initial render
    renderCart();