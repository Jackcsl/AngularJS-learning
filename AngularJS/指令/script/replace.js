var myModule = angular.module('MyModule', []);
myModule.directive("hello",function(){
	return {
		restrict:"AE",
		template:"<div>Hello Angular</div>",
		replace: true
	}
})