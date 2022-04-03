/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.querySelector('#cart tbody');
// const table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartData')) ?? [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // let table = document.getElementById('cart');
  // table.removeChild('tr');
  while(table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let cartData = JSON.parse(localStorage.getItem('cartData')) ?? [];
  console.log(cartData);
  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cartData.length; i++) {
    // DONE: Create a TR
    let tr = document.createElement('tr');
    table.appendChild(tr);
    // DONE: Create a TD for the delete link, quantity,  and the item
    let del = document.createElement('td');
    let quantity = document.createElement('td');
    let item = document.createElement('td');

    del.addEventListener('click', removeItemFromCart);
    del.textContent = '❌';
    quantity.textContent = cartData[i].quantity;
    item.textContent = cartData[i].product;
    tr.appendChild(del);
    tr.appendChild(quantity);
    tr.appendChild(item);
    console.log(cartData[i].quantity);
    console.log(cartData[i].product);
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
  }
}

function removeItemFromCart(event) {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // DONE: Re-draw the cart table
  let deleteMe = event.target.parentElement.querySelector('td:nth-of-type(3)');
  for(let i = 0; i < cartData.length; i++){
    if(i == deleteMe){
  cart.removeItem(deleteMe);
  renderCart();
    }
  }
}

// This will initialize the page and draw the cart on screen
renderCart();
