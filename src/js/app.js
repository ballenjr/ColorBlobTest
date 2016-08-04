angular.module('Upstacker', [
  'ngRoute',
  'mobile-angular-ui',
  'angular-underscore',
  'Upstacker.controllers.Main',
  'Upstacker.services.API',
  'Upstacker.directives.Login',
  'Upstacker.Filters'
])

.config(function($routeProvider, $parseProvider) {
  $routeProvider
  	.when('/',				{templateUrl:'login.html',			reloadOnSearch: false})
  	.when('/signup',		{templateUrl:'signup.html',			reloadOnSearch: false})
  	.when('/explore',		{templateUrl:'followed-stacks.html',		reloadOnSearch: false})
    .when('/followed-stacks',   {templateUrl:'followed-stacks.html',    reloadOnSearch: false})
    .when('/followed-users',   {templateUrl:'followed-users.html',    reloadOnSearch: false})
  	.when('/search',		{templateUrl:'search.html',			reloadOnSearch: false})
  	.when('/newpost',		{templateUrl:'newpost.html',		reloadOnSearch: false})
  	.when('/notifications',	{templateUrl:'notifications.html',	reloadOnSearch: false})
  	.when('/profile',		{templateUrl:'profile.html',		reloadOnSearch: false});
});