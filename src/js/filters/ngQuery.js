angular.module("Upstacker.Filters", [])
.filter("q", ["$rootScope", "API", "$timeout", function(root, api, time) {
	return function(scope, query, className, include, key) {
		var controller = api.CoreManager.getQueryController();
		var qScope = scope;

		if (!!include)
			q = {where: query, include: include};
		else q = {where: query};

		controller.find(className, q, {}).then(function (response) {
			time(function() {
				qScope[key || "data"] = response.results.map(function(data) {
					// In cases of relations, the server may send back a className
					// on the top level of the payload
					var override = response.className || this.className;
					if (!data.className) {
						data.className = override;
					}
					if (!data.className) {
						data.className = className;
					}
					return api.Object.fromJSON(data, true);
				});
			});
		});
		return qScope[key || "data"] = [];
	}
}])
.filter("JSONstringify", ["$rootScope", function() {
	return function(arg) {
		return JSON.stringify(arg, null, 2);
	}
}]);