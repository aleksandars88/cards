angular.module('demoApp')
.factory('cardsFactory', ['$http', function ($http) {

    var service = {
        getAllCards: _getAllCards,
        getAllCardTypes: _getAllCardTypes
    };

    function _getAllCards(){
        return $http.get('https://api.magicthegathering.io/v1/cards?random=true&pageSize=100&language=English');
    }

    function _getAllCardTypes(){
        return $http.get('https://api.magicthegathering.io/v1/types');
    }

    return service;
  }]);