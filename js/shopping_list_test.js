// jshint esversion: 6

// console.log('mocha', mocha);
// console.log('chai', chai);
// console.log('describe', describe);

const should = chai.should();
const expect = chai.expect();

describe('ShoppingListItem', ()=>{
  let listItem;

  beforeEach(()=>{
    listItem = new ShoppingListItem('Avocado', 'Green and full of calories');
  });

  it('should be a class', ()=>{
    ShoppingListItem.should.be.a('function');
  });

  it('should have a property named name', ()=>{
    listItem.should.have.property('name');
  });

  it('should have the name Avocado', ()=>{
    listItem.name.should.equal('Avocado');
  });

  it('should have property named description', ()=>{
    listItem.should.have.property('description');
  });

  it('should have the description Green and full of calories', ()=>{
    listItem.description.should.equal('Green and full of calories');
  });

  it('should have property named is_done', ()=>{
    listItem.should.have.property('is_done');
  });

  it('should have a method named check', ()=>{
    listItem.check.should.be.a('function');
  });

  it('should return is_done as true', ()=>{
    listItem.check();
    listItem.is_done.should.equal(true);
  });

  it('should have a method named uncheck', ()=>{
    listItem.uncheck.should.be.a('function');
  });

  it('should return is_done as false', ()=>{
    listItem.uncheck();
    listItem.is_done.should.equal(false);
  });

  it('should have a method named render', ()=>{
    listItem.render.should.be.a('function');
  });

});

describe('ShoppingList', () => {
  let shoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList(['Cereal', 'Milk']);
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
    shoppingList.addItem();
    shoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    shoppingList.items.push('Cookies');
  });

  it('should throw an error', () => {
    shoppingList.addItem.should.throw(Error);
  });

  it('should have a method named removeItem', () => {
    shoppingList.removeItem.should.be.a('function');
  });  

  it('should remove Oranges from the array', () => {
    let shoppingList = new ShoppingList(['Apples', 'Oranges', 'Bananas']);
    shoppingList.removeItem();
    shoppingList.items.should.be.an.instanceof(ShoppingListItem.name);
    shoppingList.items.splice((shoppingList.items.indexOf('Oranges'), 1));
  });

  it('should remove Bananas from the array', () => {
    let shoppingList = new ShoppingList(['Apples', 'Oranges', 'Bananas']);
    shoppingList.removeItem();
    shoppingList.should.be.an.instanceof(ShoppingListItem.name);
    shoppingList.items.pop();
  });

  it('should throw an error', () => {
    shoppingList.removeItem.should.throw(Error);
  });

  it('should have a method named render', () => {
    shoppingList.render.should.be.a('function');
  });

});