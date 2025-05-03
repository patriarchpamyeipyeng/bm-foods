let cart = [];

document.querySelectorAll(".order-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const menuItem = event.target.parentNode;
    const itemName = menuItem.querySelector("h2").textContent;
    const itemPriceText = menuItem.querySelector("p").textContent;
    const itemPrice = parseFloat(itemPriceText.split("$")[1]);

    if (!isNaN(itemPrice)) {
      cart.push({ name: itemName, price: itemPrice });
      updateCart();
    } else {
      console.error("Invalid price format");
    }
  });
});

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalPriceElement = document.getElementById("total-price");
  cartList.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button class="remove-btn">Remove</button>`;
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

const slideshowImages = document.querySelectorAll('.slideshow img');
let currentImage = 0;

slideshowImages[currentImage].classList.add('active');

setInterval(() => {
  slideshowImages[currentImage].classList.remove('active');
  currentImage = (currentImage + 1) % slideshowImages.length;
  slideshowImages[currentImage].classList.add('active');
}, 3000);

