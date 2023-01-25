// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('input[type=number]').value;
  let subtotal = quantity * price;

  document.getElementsByClassName("subtotal").innerHTML = subtotal;
  product.querySelector('.subtotal').innerHTML =`$${subtotal}`;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const singleProduct2 = document.querySelector('.product2');
  updateSubtotal(singleProduct2);

  // ITERATION 3
  let p1subtotal = Number(singleProduct.querySelector('.subtotal').innerHTML.slice(1));
  let p2subtotal = Number(singleProduct2.querySelector('.subtotal').innerHTML.slice(1));
  let result = p1subtotal + p2subtotal;
  document.querySelector(`#total-value`).innerHTML = `$${result}`;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target = singleProduct2;
  console.log('The target in remove is:', target);
  target.removeChild;

}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName('btn btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  //... your code goes here
});
