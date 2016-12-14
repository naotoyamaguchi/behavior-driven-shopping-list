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
  let deleteBoxes = document.querySelectorAll('.deleteBoxClass');
  for(let i = 0; i < checkBoxes.length; i++){
    checkBoxes[i].addEventListener('click', function(){
      changeCheckedStatus(i, checkBoxes[i]);
    });

    deleteBoxes[i].addEventListener('click', function(){
      removeItemButtonClicked(i);
    });
  }



}

function changeCheckedStatus(idx, checkbox){
  if(checkbox.checked === true){
    shoppingList.items[idx].check();
  }
  if(checkbox.checked === false){
    shoppingList.items[idx].uncheck();
  }
}

function removeItemButtonClicked(idx){
  let ulLists = document.querySelectorAll('ul');
  let liLists = document.querySelectorAll('li');

  liLists[idx].parentNode.parentNode.removeChild(liLists[idx].parentNode);
  shoppingList.removeItem(shoppingList.items[idx]);





  // shoppingListRenderOutput = shoppingList.render();

  // document.getElementById('content').innerHTML = shoppingListRenderOutput;

  // let checkBoxes = document.querySelectorAll('.checkboxClass');
  // console.log(checkBoxes[0]);
  // let deleteBoxes = document.querySelectorAll('.deleteBoxClass');
  // for(let i = 0; i < checkBoxes.length; i++){
  //   checkBoxes[i].addEventListener('click', function(){
  //     changeCheckedStatus(i, checkBoxes[i]);
  //   });

  //   deleteBoxes[i].addEventListener('click', function(){
  //     removeItemButtonClicked(i);
  //   });
  // }

}



// && event.toElement.checked === true