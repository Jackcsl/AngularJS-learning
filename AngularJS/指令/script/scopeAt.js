var myModule = angular.module("MyModule",[]);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "百威"
}])
myModule.directive("drink",function(){
	return {
		restrict: "AE",
		//用AngularJS自动绑定，不用自己去写下面的那一堆link内容了
		scope:{
			flavor:"@"
		},
		template: "<div>{{flavor}}</div>"
		//,
		//link:function(scope,element,attrs){
		//	scope.flavor = attrs.flavor;
		//}
	}
})