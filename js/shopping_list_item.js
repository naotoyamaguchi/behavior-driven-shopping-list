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
    var htmlOutput = document.createElement('li');
    htmlOutput.className = `completed_${this.is_done}`;

    var nameSpan = document.createElement('span');
    nameSpan.innerHTML = `${this.name}`;
    htmlOutput.appendChild(nameSpan);

    var descriptionSpan = document.createElement('span');
    descriptionSpan.innerHTML = `${this.description}`;
    htmlOutput.appendChild(descriptionSpan);

    return htmlOutput.outerHTML;
  }

}