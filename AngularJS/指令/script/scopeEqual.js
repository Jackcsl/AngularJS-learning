var myModule = angular.module('MyModule', []);
myModule.controller("MyCtrl",["$scope",function($scope){
	$scope.ctrlFlavor = "百威";
}])
myModule.directive("drink",function(){
	return {
		restrict: "AE",
		//与父级scope进行双向绑定
		scope: {
			flavor:"="
		},
		template: "<input type='text' ng-model='flavor'>"
	}
})