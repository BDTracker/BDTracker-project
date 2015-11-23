'use strict';
/* httpService */

var httpService = angular.module("httpService",[]);

// httpService config
httpService.run(function($http) {
 // $http.defaults.headers.common.Authorization = 'Basic a2lkMT=='
});

//do get 
httpService.factory("doGetRequest",["$http",function($http){
										 
					var doGetRequest = function(url,data,header){
						if(url == null||url == "undefined"){
							console.log("url can't be null ");
							return;
							}
						if(data == null || data==="undefined"){
							data = {};
							console.log("you request is no params");
							}
						if(header == null || header==="undefined"){
							header = {};
							console.log("you header is no params");
							}
						var req = {
							method:"GET",
							url:url,
							data:data,
							headers:header
							};
							return $http(req);
						};
						return {
							doGetRequest:function(url,data,header){
								return doGetRequest(url,data,header);
								}
							};	
									}]);

//do post
httpService.factory("doPostRequest",["$http",function($http){
													  
					var doPostRequest = function(url,data,header){
						if(url == null||url == "undefined"){
							console.log("url can't be null ");
							return;
							}
						if(data == null || data==="undefined"){
							data = {};
							console.log("you request is no params");
							}
						if(header == null || header==="undefined"){
							header = {};
							console.log("you header is no params");
							}
						var req = {
							method:"POST",
							url:url,
							data:data,
							headers:header
							};
							return $http(req);
						};
						return {
							doPostRequest:function(url,data,header){
								return doPostRequest(url,data,header);
								}
							};	
									}]);
									