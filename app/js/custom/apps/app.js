'use strict';

/* App Module */

var app = angular.module('app', [
	'ngRoute',
	'httpService',
 	'loginController',
	'directives'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/login', {
        templateUrl: 'tpls/login.html'
      }).
      when('/search', {
        templateUrl: 'tpls/search.html'
      }).
      otherwise({
        redirectTo: '/login'
      });
  }]);