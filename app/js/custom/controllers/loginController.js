'use strict';

/* loginController */

var loginApi = "https://upzone.search.windows.net/indexes/trails/docs?api-version=2015-02-28&search=San&$orderby=name desc";

var loginController = angular.module("loginController",["httpService"]);

loginController.controller("loginformController",["$scope","doGetRequest","$rootScope",function($scope,doGetRequest,$rootScope){
									 $scope.user={
										 username:"",
										 password:""
										 };
										 
									 $scope.exit=function(){
										
											$(document.body).hide();
											window.document.title="";
											window.close();
										 };
									 $scope.login=function(path,animation){
										var header = {
								'api-key':"652EBB3FE7A41C865BEF0654E4BECE13",
								'Content-Type':"application/json"
								};
										 console.log( $scope.user);
										 $rootScope.go(path,animation);
										//doGetRequest.doGetRequest(loginApi,null,header)
										//.success(function(data, status, headers, config){
										//	console.log(data);
										//})
										//.error(function(data, status, headers, config){
										//	console.log("request failed");
										//	});
									 };
									 }]);

/*var phonecatControllers = angular.module('phonecatControllers', ['phonecatservices']);
  phonecatControllers.value("cid","11111113242342342");
phonecatControllers.controller('PhoneListCtrl', ['$scope',"cid","$location", 
  function($scope,cid,$location) {
	  //alert(angular.fromJson({name:'aaaa'}).name);转换json
	  //var object = angular.merge({}, {name:"11"}, {name2:"22"});
	 // alert(object.name+object.name2);
     $scope.phones = [
    {"name": "Nexus S"
    },
    {"name": "Motorola XOOM™ with Wi-Fi"
    },
    {"name": "MOTOROLA XOOM™"
    }
	
  ];
 
  this.ccid=cid;
   $scope.filteredArray = null;
  }]).filter("reverse",[function(){
	  return function(ph){		
	  	
		  return ph;
		  };
	  }]);

phonecatControllers.controller('calacute',  ['phonecatservice',
  function(phonecatservice) {
 	this.first=phonecatservice.first;
	this.second=phonecatservice.second;
	this.inCurr = phonecatservice.inCurr;
  this.currencies = phonecatservice.currencies;
  this.usdToForeignRates = phonecatservice.usdToForeignRates;
  this.total=function total(){
	  return phonecatservice.total(this.first,this.second);
	  }
	  this.play=function(){
		  alert("begin");
		  }
  }]);
phonecatControllers.controller('changeText', ['$scope', 
  function($scope) {
	  $scope.name = "NULL";
     $scope.clickN = function(p){
		 $scope.name = p;
		 };
   
  }]);

var self = {name:'boyi'};  
      
    //示例1--带参数  
    var f = angular.bind(self, //绑定对象，作为函数的上下文  
        //被绑定的函数  
        function(age){    
            alert(this.name + ' is ' + age + ' !');  
        },  
        //绑定的参数，可省略  
        '15'  
    );  
	phonecatControllers.directive('custom',["$document",function($document){
		return {
    restrict: 'A',
	scope: {
      title: "@"
    },
    link: function(scope, element, attr) {
		alert("begin");
      var startX = 0, startY = 0, x = 0, y = 0;

      element.css({
       position: 'relative',
       border: '1px solid red',
       backgroundColor: 'lightgrey',
       cursor: 'pointer'
      });

      element.on('mousedown', function(event) {
        // Prevent default dragging of selected content
        event.preventDefault();
        startX = event.pageX - x;
        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      });

      function mousemove(event) {
        y = event.pageY - startY;
        x = event.pageX - startX;
        element.css({
          top: y + 'px',
          left:  x + 'px'
        });
      }

      function mouseup() {
        $document.off('mousemove', mousemove);
        $document.off('mouseup', mouseup);
      }
    }
  
  };
		}]);*/