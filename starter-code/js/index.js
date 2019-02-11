var products = [
  {name: "shirt" , price: 17},
  {name: "pants" , price: 18},
  {name: "shoes" , price: 15},
  {name: "socks" , price: 20},
  {name: "dress" , price: 19},
]; 


function deleteItem(e){
  
  getTotalPrice();
}


function getPriceByProduct(){
  var productName = products[0].price
  return productName
}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {
  var totalPrice = getPriceByProduct() * createQuantityNode()
  return totalPrice
}

function createQuantityInput(){

}

function createDeleteButton(){
 var newDIV = document.createElement("div")
 newDIV.innerHTML = "hola"
}

function createQuantityNode(){
  var qty = document.getElementsByClassName("quantity")
  qty.innerHTML = Maht.floor(Math.Random() * 9 + 1)
  return qty


}

function createItemNode(dataType, itemData){
  var showNewProducts = documernt.getElementByClassName("productName")
  showNewProducts.innerHTML = products[0].name
}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){
  var showNewProducts = document.getElementsByClassName("productName")
  showNewProducts.innerHTML = products[0].name

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
