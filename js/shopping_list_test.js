// jshint esversion: 6

// console.log('mocha', mocha);
// console.log('chai', chai);
// console.log('describe', describe);

const should = chai.should();
const expect = chai.expect();

describe('ShoppingListItem', ()=>{
  let listItem;

  beforeEach(()=>{
    listItem = new ShoppingListItem('test');
  });


  it('should be a class', ()=>{
    ShoppingListItem.should.be.a('function');
  });

  it('should have a property named name', ()=>{
    listItem.should.have.property('name');
  });

  it('should have property named description', ()=>{
    listItem.should.have.property('description');
  });

  it('should have property named is_done', ()=>{
    listItem.should.have.property('is_done');
  });

  it('should have a method named check', ()=>{
    listItem.should.have.method('check');
  });

  it('should have a method named uncheck', ()=>{
    listItem.should.have.method('uncheck');
  });

  it('should have a method named render', ()=>{
    listItem.should.have.method('render');
  });


});