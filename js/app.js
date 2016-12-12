// jshint esversion: 6

let shoppingList = new ShoppingList();
//create new instance of a shopping list upon page load called shoppingList

let shoppingListRenderOutput = shoppingList.render();
document.getElementById('content').innerHTML = shoppingListRenderOutput;


function add_to_shopping_list(){
  let itemNameInput = document.getElementById('itemName').value;
  let itemDescriptionInput = document.getElementById('itemDescription').value;

  var new_shopping_list_item;
  new_shopping_list_item = new ShoppingListItem(itemNameInput, itemDescriptionInput, false);

  shoppingList.addItem(new_shopping_list_item);
}