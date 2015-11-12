// JavaScript Document
var app1 = angular.module("controllers",[]);
app1.controller("controller1",function($scope){
	$scope.showText = "content showText";
	$scope.names = ["name1","name2","name3","name4"];
	});

app1.controller("controller2",function($scope){
$scope.firstName = "Zheng";
$scope.lastName = "andy";
$scope.fullName1 = function(){
	return $scope.lastName + " " + $scope.firstName;
	};
	$scope.fullName2=function(n1,n2){
	return n2 + " " + n1;
	};
});
app1.controller("controller3",function($scope,$http){
	$scope.names = null;
$http.get("http://localhost:8080/app/data.json")
    .success(function(response) {
		console.log(response);
		$scope.names = response;
		});
});
app1.controller("controller4",function($scope,$http){
	$scope.myVar = false;
	$scope.btt1="显示";
	$scope.btt2="看不见我";
	$scope.toggle=function(){
		$scope.myVar = !$scope.myVar;
		if($scope.myVar){
		$scope.btt1="隐藏";
		$scope.btt2="看得见我";}
		else{
			$scope.btt1="显示";
			$scope.btt2="看得见我";
			}
		}
});
app1.controller("controller5",function($scope,$http){
	var req = {
		method:'GET',
		url:'http://localhost:8080/app/data.json',
		headers: {
   			'Content-Type': undefined
		 },
 		data: { test: 'test' }
		};
	$http(req).then(
		function successCallback(response){
			console.log(response);
			},
			function errorCallback(response){
				console.log(response);
				}
		);
	
});
app1.controller("controller6",["$scope","$rootScope",function($scope,$rootScope){
	$scope.var1= "var1";
	$rootScope.var2 = "rootScopenewvar2";
	
}]);

app1.controller("controller7",["$scope","$rootScope",function($scope,$rootScope){
	$scope.count= 0;
	$scope.$on("myEvent", function () {
		$scope.count++;
	});
	
}]);

app1.controller("controller8",function($scope,$http){
	var req = {
		method:'GET',
		url:'http://localhost:8080/app/data.json',
		headers: {
   			'Content-Type': undefined
		 },
 		data: { test: 'test' }
		};
	$http(req).success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
	console.log(status);
  }).
  error(function(data, status, headers, config) {
	  console.log(status);
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
	
});

app1.controller("controller9",["$scope","controller9service",function($scope,controller9service){
	$scope.name = "name";
	controller9service.userlist('http://localhost:8080/app/data.json').success(function(data, status, headers, config){
		$scope.name = status;
		}).error(function(data, status, headers, config){
			});
	
}]).factory("controller9service",["$http",function($http){
	var doRequest = function(url){
		var req = {
		method:'GET',
		url:url,
		headers: {
   			'Content-Type': undefined
		 },
 		data: { test: 'test' }
		};
		
		return $http(req);
		}
	
	
  return {
	  userlist:function(url){
		  return doRequest(url);
		  }
	  };
	}]);