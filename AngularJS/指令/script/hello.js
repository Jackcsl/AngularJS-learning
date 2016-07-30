var myModule = angular.module("MyModule",[]);
myModule.directive("hello",function(){
	return {
		restrict: "E",
		template: "<div>Hello Angular</div>",
		replace: true
	}
})