/*
    Main module for angularJS App
    stephaneAG - 2014
*/
   
(function(){ // 'closure' or 'self executing anonymous functions'

  // create the App module
  //var app = angular.module('store', []); // used before having a separate "store-products" module
  var app = angular.module('store', ['store-products']); // smae as above but specifying dependencies ( we simply use the modules names ;) )

    
  /* -- // CONTROLLERS // -- */
    
  // create the main controller
  app.controller('StoreController', function(){
    //this.product = gem; // set a property of our controller
    this.products = gems; // smae as above but this time we have an array of products
  });
    
  // create our panel controller ( handles the product's tabs & panels stuff )
  // Nb: when using directives with controllers inside, the stuff below won't work, see a little more below, in 'directives' ;p
  app.controller('PanelController', function(){
    this.tab = 1; // we make 'tab' a property of our controller, so we'll be able to refer to it as 'panel.tab'
    // we create a function expression for the assignement logic ( moved out of the html page ) -> use on the html inside <li>'s 'ng-click' attributes
    this.selectTab = function(setTab){ this.tab = setTab };
    // create a function for the comparision ( check if the tab is selected )
    this.isSelected = function(checkTab){ return this.tab === checkTab; };
  });
    
  // create our review controller
  app.controller('ReviewController', function(){
    this.review = {};
    // fcn used to submit the review form
    this.addReview = function(product){
      product.reviews.push(this.review); // push review onto this product's array
      this.review.createdOn = Date.now(); // add the date of creation of the review
      this.review = {}; // clear out the review, so that the form get resetted ;p
    };
  });
    
    
    
  /* -- // (CUSTOM) DIRECTIVES // -- */
    
  /* -> move in "products.js" ( "store-products" module ) <-*/
    
  /* -- // OTHER STUFF // -- */
    
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
  /*
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Truly amazing shit',
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
  ];
  */
  /*
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Truly amazing shit',
      images: [
        {
          full: 'geometry-01-full.png', // to display: ' {{ product.images[0].full }} ' ,with 'ng-src' ( ro else it won't work & throw an error )
          thumb: 'geometry-01-thumb.png'
        },
        {
          full: 'geometry-02-full.png',
          thumb: 'geometry-02-thumb.png'
        }      
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      images: [
        {
          full: 'geometry-03-full.png', // to display: ' {{ product.images[0].full }} ' ,with 'ng-src' ( ro else it won't work & throw an error )
          thumb: 'geometry-03-thumb.png'
        }
      ],
      canPurchase: true,
      soldOut: false
    }
  ];
  */
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Truly amazing shit',
      images: [
        {
          full: 'geometry-01-full.png', // to display: ' {{ product.images[0].full }} ' ,with 'ng-src' ( ro else it won't work & throw an error )
          thumb: 'geometry-01-thumb.png'
        },
        {
          full: 'geometry-02-full.png',
          thumb: 'geometry-02-thumb.png'
        }      
      ],
      reviews: [
        { 
          stars: 5,
          body: "I looooove this product!",
          author: "anne@perkins.com",
          createdOn: 1397490980837
        },
        {
          stars: 1,
          body: "This made my life miserable",
          author: "benoit@thehater.com",
          createdOn: 1397490980837
        }
      ],
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: '. . .',
      images: [
        {
          full: 'geometry-03-full.png', // to display: ' {{ product.images[0].full }} ' ,with 'ng-src' ( ro else it won't work & throw an error )
          thumb: 'geometry-03-thumb.png'
        }
      ],
      canPurchase: true,
      soldOut: false
    }
  ];
    
})();