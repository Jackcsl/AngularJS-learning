var myModule = angular.module('MyModule', []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.loadData = function(){
		console.log("数据加载中.....")
	}
}])
myModule.controller('MyCtrl2', ['$scope', function($scope){
	$scope.loadData2 = function(){
		console.log("数据加载中22222.....")
	}
}])
myModule.directive("loader",function(){
	return {
		restrict: "AE",
		link:function(scope,element,attrs){
			element.bind("mouseenter",function(event){
				//只适用于单个控制器的情况
				//scope.loadData();
				//scope.$apply("loadData()");
				//注意这里的坑，howToLoad要转换成howtoload
				scope.$apply(attrs.howtoload);
			})
		}
	}
})