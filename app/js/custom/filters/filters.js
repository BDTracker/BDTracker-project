'use strict';

/* Filters */

angular.module('phonecatControllers', []).filter('PhoneListCtrl', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
