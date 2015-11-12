'use strict';

/* Services */

var phonecatServices = angular.module('phonecatservices', []);

phonecatServices.factory('phonecatservice', 
  function(){
   var first=0;
	var second=0;
	var inCurr = 'EUR';
 var currencies = ['USD', 'EUR', 'CNY'];
 var usdToForeignRates = {
    USD: 1,
    EUR: 0.74,
    CNY: 6.09
  };
 var total=function(first,second){
	 return first + second;
	 }
	 return {
		 first:first,
		 second:second,
		 inCurr:inCurr,
		 currencies:currencies,
		 usdToForeignRates:usdToForeignRates,
		 total:total
		 };
  });
