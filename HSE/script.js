let cart = [];

function addToCart(item, price){
  cart.push({item, price});
  alert(item + " added to cart");
}
function calculateTotal(price, qty, delivery){
  let total = price * qty;

  if(delivery === "delivery"){
    total += 100; // delivery fee
  }

  return total;
}
// Save order always
db.collection("orders").add(orderData);

// Then WhatsApp
window.open(url, "_blank");
function getDeliveryFee(type){
  return type === "delivery" ? 100 : 0;
}
