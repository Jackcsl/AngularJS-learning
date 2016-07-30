var myModule = angular.module('MyModule', []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "百威"
}])
myModule.directive("drink",function(){
	return {
		restrict: "AE",
		//把flavor上的内容绑定到了ctrlFlavor上。
		scope:{
			flavor:"="
		},
		template:"<input type='text' ng-model='flavor'>"
	}
});