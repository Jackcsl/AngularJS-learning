var myCssModule = angular.module('MyCssModule', []);
myCssModule.controller('DeathrayMenuController', ['$scope', function($scope){
	$scope.menuState = {show:false};
	$scope.toggleMenu = function(){
		$scope.menuState.show = !$scope.menuState.show;
	}
}])