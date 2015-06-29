(function(){
  var app = angular.module('store-products', []); // we define "store-products" as the name of our module
    
  // create a directive for our '<product-title></product-title>' html tag
  // 1st arg is camelCased name of tag ( aka the 'dash' in html translates in Javascript to 'camelCase' stuff),
  // & 2nd is an anonymous fcn returning a 'directive definition object', a configuration object defining how the directive 'll work
  app.directive('productTitle', function(){
    return {
      // here, we'll use 2 configuration options:
      restrict: 'E', // the type of the directive ( here, 'E' for 'Element' )
      templateUrl: 'product-title.html' // the url of the template we want this directive to load into the page
    };
  });
    
  // create a directive for our '<product-panels></product-panels>' html tag
  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){ // what was previously " app.controller('PanelController', function(){ ... }); "
        this.tab = 1; // we make 'tab' a property of our controller, so we'll be able to refer to it as 'panel.tab'
        // we create a function expression for the assignement logic ( moved out of the html page ) -> use on the html inside <li>'s 'ng-click' attributes
        this.selectTab = function(setTab){ this.tab = setTab };
        // create a function for the comparision ( check if the tab is selected )
        this.isSelected = function(checkTab){ return this.tab === checkTab; };
      },
      controllerAs: 'panels' // what was previously " ng-controller="PanelController as panel" "
    };
  });
    
})();