angular
  .module('meetme')
  .factory('Location', ['$http', function($http) {
    'use strict';

    var BASE_URL = 'http://deathstar-guide.herokuapp.com/locations.json';

    var Location = {};

    Location.getAll = function() {
      return $http.get(BASE_URL);
    };

    return Location;
  }]);
