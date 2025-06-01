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
      const cartCountEl = document.getElementById("cart-count");
      if (cartCountEl) cartCountEl.textContent = totalCount;
      }
      // Update cart count on page load
      window.addEventListener("DOMContentLoaded", updateCartCount);
      function addToCart(plan, price, selectId) {
        const qty = document.getElementById(selectId).value;
        const order = {
          plan,
          price,
          qty,
        };
        localStorage.setItem("cart", JSON.stringify(order));
        window.location.href = "cart.html";
      }