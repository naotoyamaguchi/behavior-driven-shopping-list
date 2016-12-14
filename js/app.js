// jshint esversion: 6

let shoppingList = new ShoppingList();
//create new instance of a shopping list upon page load called shoppingList

let shoppingListRenderOutput = shoppingList.render();
document.getElementById('content').innerHTML = shoppingListRenderOutput;

// let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

let checkBoxes = document.querySelector("li");

checkBoxes.addEventListener('click', function(event){
  if(event.target.nodeName === 'INPUT' && event.toElement.checked === true){
    console.log("yolo");
  }
});



function add_to_shopping_list(){
  let itemNameInput = document.getElementById('itemName').value;
  let itemDescriptionInput = document.getElementById('itemDescription').value;

  var new_shopping_list_item;
  new_shopping_list_item = new ShoppingListItem(itemNameInput, itemDescriptionInput, false);

  shoppingList.addItem(new_shopping_list_item);

  shoppingListRenderOutput = shoppingList.render();

  document.getElementById('content').innerHTML = shoppingListRenderOutput;

  let checkBoxes = document.querySelector('.listHTML');

  checkBoxes.addEventListener('click', function(event){
    if(event.target.nodeName === 'INPUT' && event.toElement.checked === true){
      console.log(event);
    }
  });

}

function changeCheckedStatus(idx, checkbox){
  if(this.checked){
    console.log("this.chekced");
  }
  if(!this.checked){
    console.log("!this.checked");
  }
}

