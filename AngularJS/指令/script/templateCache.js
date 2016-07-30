var myModule = angular.module("MyModule",[]);
myModule.run(function($templateCache){
	$templateCache.put("hello2.html","<div>We are family</div>")
})
myModule.directive("hello",function($templateCache){
	return {
		restrict: "E",
		template: $templateCache.get("hello2.html"),
		replace: true
	}
})