// jshint esversion: 6

// console.log('mocha', mocha);
// console.log('chai', chai);
// console.log('describe', describe);

const should = chai.should();
const expect = chai.expect();

describe('shoppingListItem', ()=>{
  let ListItem = new ShoppingListItem;
  it('should be a class', ()=>{
    ShoppingListItem.should.be.a('function');
  });
});