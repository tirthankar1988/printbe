  const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const summary = document.getElementById("summary");
      let total = 0;

      if (!cart.length) {
        summary.innerHTML = "<p class='text-muted'>Your cart is empty.</p>";
      } else {
        cart.forEach((item) => {
          const product = products.find((p) => p.id === item.id);
          const subtotal = product.price * item.qty;
          total += subtotal;
          summary.innerHTML += `
            <div class="product-summary">
              <img src="${product.image}" alt="${product.title}" />
              <div class="flex-grow-1">
                <div class="fw-semibold">${product.title}</div>
                <div class="text-muted small">${product.category}</div>
                <div class="text-muted">Quantity: ${item.qty}</div>
              </div>
              <div class="fw-bold text-end">$${subtotal.toFixed(2)}</div>
            </div>
          `;
        });

        summary.innerHTML += `
          <div class="d-flex justify-content-between pt-3 ttl_ctn">
            <strong>Total:</strong>
            <strong>$${total.toFixed(2)}</strong>
          </div>
        `;
      }

      document.getElementById("checkout-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked').value;
        console.log("Selected Payment Method:", selectedPayment);

        localStorage.removeItem("cart");
        window.location.href = "thankyou.html";
      });

      function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById("cart-count").textContent = count;
      }
      updateCartCount();