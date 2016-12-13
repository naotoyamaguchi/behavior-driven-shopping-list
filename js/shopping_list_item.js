// jshint esversion: 6

class ShoppingListItem {
  constructor(name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = is_done;
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
      nameSpan.innerHTML = this.name;
      itemHTML.appendChild(nameSpan);

      var descriptionSpan = document.createElement('span');
      descriptionSpan.innerHTML = this.description;
      itemHTML.appendChild(descriptionSpan);

      var checkBox = document.createElement('input');
      checkBox.type = "checkbox";
      checkBox.addEventListener('change', changeCheckedStatus());
      content.appendChild(checkBox);


      return itemHTML.outerHTML;
  }

}