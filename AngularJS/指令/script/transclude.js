var myModule = angular.module("MyModule",[]);
myModule.directive("hello",function(){
	return {
		restrict: "AE",
		template: "<div>Hello Abgular!<div ng-transclude></div</div>",
		transclude: true
	}
})