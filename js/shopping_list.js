// jshint esversion: 6

class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(item) {
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    } else {
      throw new Error('Not a valid input for the shopping list!');
    }
  }

  removeItem(item) {
    if(this.items.indexOf(item) > -1 && item instanceof ShoppingListItem){
      this.items.splice(this.items.indexOf(item), 1);
    }
    else if(item === undefined && this.items.length > 0){
      this.items.pop();
    } 
    else if(this.items.indexOf(item) === - 1){
      throw new Error("That's not a valid item!");
    }

  }

  render() {
    var listHTML = document.createElement('ul');
    for(let i = 0; i < this.items.length; i++){
      var listItem = document.createElement('li');
      listItem.innerHTML = this.items[i];
      listHTML.appendChild(listItem);
    }
    return listHTML.outerHTML;
  }

}
