/*
    Main module for angularJS App
    stephaneAG - 2014
*/
   
(function(){ // 'closure' or 'self executing anonymous functions'

  // create the App module
  var app = angular.module('store', []);
    
  // create the main controller
  app.controller('StoreController', function(){
    //this.product = gem; // set a property of our controller
    this.products = gems; // smae as above but this time we have an array of products
  });
    
  // simple product -> 'll be a property of our controller
  /*
  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '. . .',
    canPurchase: true,
    soldOut: true
  };
  */
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false
    }
  ]

    
})();