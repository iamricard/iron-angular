angular
  .module('meetme')
  .controller('LocationListCtrl', ['$scope', 'Location',
  function ($scope, Location) {
    'use strict';

    $scope.getLocations = function() {
      Location.getAll()
        .success(function(locations) {
          $scope.locations = locations;
        })
        .error(function(err) {
          $scope.error = err;
        });
    };

    $scope.clearList = function() {
      $scope.locations = '';
    };
  }]);
