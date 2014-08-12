angular.module('meetme', ['ngRoute'])
       .config(function ($routeProvider) {
        'use strict';

        $routeProvider.when('/', {
          controller: 'LocationListCtrl',
          templateUrl: 'scripts/templates/locations.html'
        }).when('/404', {
          templateUrl: 'scripts/templates/404.html'
        }).otherwise({
          redirectTo: '/404'
        });
    });
