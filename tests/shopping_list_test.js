// jshint esversion: 6

// console.log('mocha', mocha);
// console.log('chai', chai);
// console.log('describe', describe);

const should = chai.should();
const expect = chai.expect();

describe('ShoppingList', () => {
  let shoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  it('should be a class', () => {
    ShoppingList.should.be.a('function');
  });

  it('should have a property named items', () => {
    shoppingList.should.have.property('items');
  });

  it('new instance of shoppingList.items should be an empty array', () => {
    shoppingList.items.should.be.an('array');
    shoppingList.items.should.deep.equal([]);
  });

  it('should have a method named addItem', () => {
    shoppingList.addItem.should.be.a('function');
  });  

  it('should add Cookies to the array', () => {
    let cookies = new ShoppingListItem('Cookies', 'Chocolate with chips!');
    shoppingList.addItem(cookies);
    shoppingList.items.should.contain(cookies);
  });

  it('should throw an error', () => {
    let brokenTest = {"thisis": "sooowrong", "notagood": "object", "notevenan": "instanceofItem"};
    (()=>(shoppingList.addItem(brokenTest))).should.throw('Not a valid input for the shopping list!');
  });

  it('should have a method named removeItem', () => {
    shoppingList.removeItem.should.be.a('function');
  });  

  it('should remove oranges(last item in array) from items', () => {
    var apples = new ShoppingListItem('apples', 'red');
    var oranges = new ShoppingListItem('oranges', 'might contain vitamin c');
    shoppingList.addItem(apples);
    shoppingList.addItem(oranges);
    shoppingList.removeItem();
    shoppingList.items.should.not.contain(oranges);
  });

  it('should remove apples from the array', () => {
    var apples = new ShoppingListItem('apples', 'red');
    var oranges = new ShoppingListItem('oranges', 'might contain vitamin c');
    shoppingList.addItem(apples);
    shoppingList.addItem(oranges);
    shoppingList.removeItem(apples);
    shoppingList.items.should.not.contain(apples);
  });

  it('should have a method named render', () => {
    shoppingList.render.should.be.a('function');
  });

  it('should return an html string upon render() method', ()=> {
    shoppingList.render().should.equal('<ul class="listHTML"></ul>');
  });



});
