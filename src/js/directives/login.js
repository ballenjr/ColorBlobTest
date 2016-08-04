angular.module("Upstacker.directives.Login", [])
.directive('apiLogin', ["$rootScope", "API", "$location", "$timeout", function(root, api, nav, time) {
	return function(scope, el, attr) {
		el.bind("click", function() {
			api.User.logIn(scope.username, scope.password)
				.then(function(data) {
					var user = data;
					console.debug(data);
					time(function() {nav.path("/explore");});
				}).catch(function(error) {
					console.error(error);
				});

		});
	}
}])
.directive('apiLogout', ["$rootScope", "API", "$location", "$timeout", function(root, api, nav, time) {
	return function(scope, el, attr) {
		el.bind("click", function() {
			api.User.logOut(scope.username, scope.password)
				.then(function(data) {
					console.debug(data);
					time(function() {nav.path("/");});
				}).catch(function(error) {
					console.error(error);
				});

		});
	}
}])
.directive('apiRegister', ["$rootScope", "API", "$location", "$timeout", function(root, api, nav, time) {
	return function(scope, el, attr) {
		el.bind("click", function() {
			api.User.signUp(scope.username, scope.password, {
					email: scope.email,
					display: scope.display
				})
				.then(function(data) {
					console.debug(data);
					time(function() {nav.path("/explore");});
				}).catch(function(error) {
					console.error(error);
				});

		});
	}
}]);