/**
 * ES2015 Classes with the use of super instead of .call()
 */


// function Fruit(config){
//   config = config || {};
//
//   var defaults = {
//     isSweet: true
//   };
//
//   var settings = Object.assign({}, defaults, config);
//
//   this.isSweet = settings.isSweet;
//
//   if(!this.isSweet){
//     this.tart = true;
//   }else {
//     this.tart = false;
//   }
//
//   return this;
// }
//
// function Apple(config){
//   config = config || {};
//   Object.assign(this, parentFruit, config);
//
//   var parentFruit = Fruit.call(this, config);
//
//   return this;
// }
//
// Apple.prototype = new Fruit();
//
// // let pinkLady = new Apple();
// let grannySmith = new Apple({isSweet: false});
//
// console.log(grannySmith.isSweet);
// console.log(grannySmith.tart);

class Fruit{

  constructor(config){
    config = config || {};

    var defaults = {
      isSweet: true
    };

    var settings = Object.assign({}, defaults, config);

    this.isSweet = settings.isSweet;

    if(!this.isSweet){
      this.tart = true;
    }else {
      this.tart = false;
    }
  }

  grow(){
    return 'doing growth!';
  }
}

class Apple extends Fruit{
  constructor(config){
    config = config || {};

    super(config);

    Object.assign(this, config);
  }

  grow() {
    var growStatement = super.grow()
    console.log(growStatement + ' grow tree grow!');
  }
}

export {Apple, Fruit};
