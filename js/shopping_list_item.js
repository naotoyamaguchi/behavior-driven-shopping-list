// jshint esversion: 6

function testtt(){
  console.log("TESTTT");
}

class ShoppingListItem {
  constructor(name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    var itemHTML = document.createElement('li');
    itemHTML.className = 'completed_' + this.is_done;
    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = this.name + ": ";
    itemHTML.appendChild(nameSpan);

    var descriptionSpan = document.createElement('span');
    descriptionSpan.innerHTML = this.description;
    itemHTML.appendChild(descriptionSpan);

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    checkBox.className = "checkboxClass";
    itemHTML.appendChild(checkBox);

    var deleteBox = document.createElement('button');
    deleteBox.className = "deleteBoxClass";
    deleteBox.innerHTML = 'X';
    itemHTML.appendChild(deleteBox);

    return itemHTML.outerHTML;
  }

}