
/* App Module */

var phonecatApp = angular.module('app1', [
  'ngRoute',
  'controllers',
  'directives'
 
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/names', {
        templateUrl: 'tem.html',
        controller: 'controller1'
      }).
      otherwise({
        redirectTo: '/names'
      });
  }]);
