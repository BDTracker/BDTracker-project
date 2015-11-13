'use strict';

/* App Module */

var app = angular.module('app', [
	'ngRoute',
	'httpService',
 	'loginController',
	'directives',
    'ngAnimate',
	'searchController'
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
app.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

    'use strict';

    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {
        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'slideLeft';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
			$rootScope.pageAnimationClass = pageAnimationClass;
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);