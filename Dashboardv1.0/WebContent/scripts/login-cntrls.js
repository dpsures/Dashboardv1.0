'use strict';

myApp.controller('loginController', ['$scope','$rootScope',function($scope, $rootScope) {
			$rootScope.$log.debug("Login Controller Invoked");

			$scope.login = function() {
				$rootScope.$log.debug("Login function invoked");				
				var obj = $scope.session;
				
				var userState = "",isAssociate = false;
				if(obj.userid == "admin"){
					userState = "associate";
					isAssociate = true;
				}else{
					userState = "manager";
				}
				
				var jsonString = {
					"userName" : obj.userid,
					"password" : obj.password,
					"userState":userState,
					"isAssociate":isAssociate
				};
				$rootScope.$broadcast('validateUser',jsonString);
			};
} ]);