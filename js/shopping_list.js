// jshint esversion: 6

class ShoppingList {
  constructor(items) {
    this.items = [];
  }

  addItem(item) {
    if(item instanceof ShoppingListItem){
      this.items.push(item);
    } else {
      throw err;
    }
  }

  removeItem(item) {
    if(this.items.indexOf(item) > -1 && item instanceof ShoppingListItem){
      this.items.splice(this.items.indexOf(item), 1);
    }
    if(item === undefined && this.items.length > 0){
      this.items.pop();
    } else {
      throw err;
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
