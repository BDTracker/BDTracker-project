'use strict';

/* Directives */

var directives = angular.module("directives",["httpService"]);
directives.directive("alertDirective",function(){
								return {
										restrict:"E",
										templateUrl:"tpls/alertTemplate.html",
										scope:{},
										replace:"true"
										};
								 
								 })