let cart = [];

document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const menuItem = event.target.parentNode;
    const itemName = menuItem.querySelector("h2").textContent;
    const itemPrice = parseFloat(menuItem.querySelector("p").textContent.split("$")[1]);

    cart.push({ name: itemName, price: itemPrice });

    updateCart();
  });
});

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalPriceElement = document.getElementById("total-price");

  cartList.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name} - $${item.price} <button class="remove-btn">Remove</button>`;
    cartList.appendChild(listItem);

    totalPrice += item.price;

    const removeButton = listItem.querySelector(".remove-btn");
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });
  });

  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}


