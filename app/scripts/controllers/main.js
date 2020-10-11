'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', ['$q', 'cardsFactory', function ($q, cardsFactory) {

    var vm = this;

    vm.name = 'Bob';
    vm.cards = [];
    vm.types = [];
    vm.selectedOrder = 'false';
    vm.orderSelected = _orderSelected;
    
    vm.reverse = false;
    init();

    function init(){
      $q.all([cardsFactory.getAllCards(), cardsFactory.getAllCardTypes()]).then(function(responses){
        vm.cards = responses[0].data.cards;
        vm.types = responses[1].data.types;
      });
    }

    function _orderSelected(){
      vm.reverse = vm.selectedOrder === 'true';
    }

  }]);

