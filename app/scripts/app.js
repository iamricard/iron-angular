angular.module('meetme', ['ngRoute'])
       .config(function ($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
          controller: 'LocationListCtrl',
          templateUrl: 'scripts/templates/locations.html'
        }).otherwise({
          redirectTo: '/'
        });
    });
