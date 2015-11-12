'use strict';
/* httpService */

var httpService = angular.module("httpService",[]);

// httpService config
httpService.run(function($http) {
  $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
});

//do get 
httpService.factory("doGetRequest",["$http",function($http){
					var doGetRequest = function(url,data){
						if(url == null||url == "undefined"){
							console.log("url can't be null ");
							return;
							}
						if(data == null || data==="undefined"){
							data = {};
							console.log("you request is no params");
							}
						var req = {
							method:"GET",
							url:url,
							data:data
							
							};
							return $http(req);
						};
						return {
							doGetRequest:function(url,data){
								return doGetRequest(url,data);
								}
							};	
									}]);

//do post
httpService.factory("doPostRequest",["$http",function($http){
					var doPostRequest = function(url,data){
						if(url == null||url == "undefined"){
							console.log("url can't be null ");
							return;
							}
						if(data == null || data==="undefined"){
							data = {};
							console.log("you request is no params");
							}
						var req = {
							method:"POST",
							url:url,
							data:data
							};
							return $http(req);
						};
						return {
							doPostRequest:function(url,data){
								return doPostRequest(url,data);
								}
							};	
									}]);
									