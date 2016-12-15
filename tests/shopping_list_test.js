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

  it('should contain an empty array', () => {
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

  // it('should throw an error', () => {
  //   expect(shoppingList.addItem("brokenTest")).to.throw(Error);
  // });

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

  // it('should throw an error', () => {
  //   shoppingList.removeItem().should.fail();
  // });

  it('should have a method named render', () => {
    shoppingList.render.should.be.a('function');
  });

});
