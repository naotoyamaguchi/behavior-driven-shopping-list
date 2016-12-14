// jshint esversion: 6

let shoppingList = new ShoppingList();
//create new instance of a shopping list upon page load called shoppingList

let shoppingListRenderOutput = shoppingList.render();
document.getElementById('content').innerHTML = shoppingListRenderOutput;

// let checkBoxes = document.querySelectorAll('input[type="checkbox"]');

// let checkBoxes = document.querySelector("li");

// checkBoxes.addEventListener('click', function(event){
//   if(event.target.nodeName === 'INPUT' && event.toElement.checked === true){
//     console.log("yolo");
//   }
// });



function add_to_shopping_list(){
  let itemNameInput = document.getElementById('itemName').value;
  let itemDescriptionInput = document.getElementById('itemDescription').value;

  var new_shopping_list_item;
  new_shopping_list_item = new ShoppingListItem(itemNameInput, itemDescriptionInput, false);

  shoppingList.addItem(new_shopping_list_item);

  shoppingListRenderOutput = shoppingList.render();

  document.getElementById('content').innerHTML = shoppingListRenderOutput;

  let checkBoxes = document.querySelectorAll('.checkboxClass');

  // checkBoxes.addEventListener('click', function(event){
  //   if(event.target.nodeName === 'INPUT'){
  //     changeCheckedStatus();
  //   }
  // });

  for(let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('click', function(){
      changeCheckedStatus(i, checkBoxes[i]);
    });
  }

}

function changeCheckedStatus(idx, checkbox){
    if(checkbox.checked === true){
      console.log("CHECKED");
    }
    if(checkbox.checked === false){
      console.log("ITS NOT CHECKED");
    }
}

// && event.toElement.checked === true