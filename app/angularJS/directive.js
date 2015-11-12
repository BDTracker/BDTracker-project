var directive = angular.module("directives",[]);
directive.run(function($templateCache){//提前将指令放到cache里面
	$templateCache.put("tpl1","<div>oh no </div>");
	});
directive.directive("hello1",function(){
	return {
		restrict:"AE",//A表示属性匹配，E表示元素匹配，M表示注释匹配，C表示样式匹配
		template:"<div>hello world</div>",//模板形式
		replace:"true"
		};
	});
	directive.directive("hello2",function($templateCache){
	return {
		restrict:"E",//A表示属性匹配，E表示元素匹配，M表示注释匹配，C表示样式匹配
		template:$templateCache.get("tpl1"),//指定的url，对于指令内容较多的使用
		replace:"true"
		};
	});
		directive.directive("hello3",function(){
	return {
		restrict:"E",//A表示属性匹配，E表示元素匹配，M表示注释匹配，C表示样式匹配
		templateUrl:"tpl1.html",//指定的url，对于指令内容较多的使用
		replace:"true"//replace=true,会将里面的内容替换掉
		};
	});
			directive.directive("hello4",function(){
	return {
		restrict:"E",//A表示属性匹配，E表示元素匹配，M表示注释匹配，C表示样式匹配
		template:"<div>hello4<div ng-transclude></div></div>",//指定的url，对于指令内容较多的使用
		transclude:true//将指令内部的东西放到有ng-transclude的标签里面
		};
	});
	
		directive.controller("ctl1",["$scope",function($scope){
		$scope.loadData = function(){
			console.log("load Data");
			}
		}]);
		
				directive.controller("ctl2",["$scope",function($scope){
		$scope.loadData2 = function(){
			console.log("load Data2");
			}
		}]);
	
	
				directive.directive("hello5",function(){
	return {
		restrict:"E",//A表示属性匹配，E表示元素匹配，M表示注释匹配，C表示样式匹配
		template:"<div>hello5</div>",//指定的url，对于指令内容较多的使用
		replace:true,//将指令内部的东西放到有ng-transclude的标签里面
		link:function(scope,element,attr){//指令的事件控制
			element.bind("mouseenter",function(){
				//console.log("coming in");
				//scope.loadData();
				//scope.$apply("loadData()");
				scope.$apply(attr.howtoload);
				})
			}
		};
	});
	directive.directive("superman",function(){
		return{
			restrict:"E",
			scope:{},
			controller:function($scope){
				$scope.abilites =[];
				this.addStrength=function(){
					$scope.abilites.push("strength");
					};
				this.addSpeed=function(){
					$scope.abilites.push("speed");
				};
				this.addLight=function(){
					$scope.abilites.push("light");
				};
				},
				link:function(scope,element,attrs){
				element.bind("mouseenter",function(){
					console.log(scope.abilites);
					})
				}
			}

		});
		directive.directive("strength",function(){
		return{
			restrict:"A",
			require:"^superman",
			link:function(scope,element,attrs,supercnl){
				supercnl.addStrength();
				}
			}
		});
		directive.directive("light",function(){
		return{
			restrict:"A",
			require:"^superman",
			link:function(scope,element,attrs,supercnl){
				supercnl.addLight();
				}
			}
		});
				directive.directive("speed",function(){
		return{
			restrict:"A",
			require:"^superman",
			link:function(scope,element,attrs,supercnl){
				supercnl.addSpeed();
				}
			}
		});
		directive.directive("hello6",function(){
		return{
			restrict:"E",
			template:"<div><input ng-model='myinput' /><span ng-bind='myinput'></span></div>",
		}
		});
directive.directive("hello7",function(){
		return{
			scope:{},
			restrict:"E",
			template:"<div><input ng-model='myinput' /><span ng-bind='myinput'></span></div>",
		}
		});//加上scope：{}，相当于每个指令在一个独立的scope里面，和如下添加到helloCtl6里面是一样的效果
		//.controller("helloCtl6",["$scope",function($scope){
		//	$scope.myinput='default';
		//	}]);
		
directive.directive("hello8",function(){
		return{
			scope:{
				flaver:'@'//将hello8的flaver属性绑定到template里面
				},
			restrict:"E",
			template:"<div>{{flaver}}</div>",
		}
		}).controller("helloCtl8",["$scope",function($scope){
			$scope.flaverCtl = "百威";
			}]);
		
directive.directive("hello9",function(){
		return{
			scope:{
				flaver:'='//将hello9的flaver属性绑定到$scope里面
				},
			restrict:"AE",
			template:'<input ng-model="flaver" />'
		}
		}).controller("helloCtl9",["$scope",function($scope){
			$scope.flaverCtl = "";
			}]);
			
			directive.directive("hello10",function(){
		return{
			scope:{
				greet:'&'//将sayHello函数绑定到hello10的属性上面
				},
			restrict:"AE",
			template:'<input ng-model="username" /><button ng-click="greet({name:username})">greeting</button>'//greet({name:username})将ng-model="username"作为name参数传入
		}
		}).controller("helloCtl10",["$scope",function($scope){
			$scope.sayHello = function(name){
				alert(name);
				};
			}]);
			
directive.directive("formDr",function(){
		return{

			restrict:"E",
			templateUrl:"form.html",
			replace:true
		}
		}).controller("formCtl",["$scope",function($scope){
			$scope.user={
				username:"",
				password:""
				};
			$scope.save = function(){
				alert("saving...");
				};
			}]);
			
			
		