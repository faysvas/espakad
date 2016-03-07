var espaApp = angular.module('espaApp', ['ngAnimate','angularUtils.directives.dirPagination','angular.filter','ngRoute']);

espaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/neofueis', {
        templateUrl: 'views/neofueis.html',
        controller: 'neofueisCtrl'
      }).
      when('/mikromesaies', {
        templateUrl: 'views/mikromesaies.html',
        controller: 'mikromesaiesCtrl'
      }).
	  when('/touristikes', {
        templateUrl: 'views/touristikes.html',
        controller: 'touristikesCtrl'
      }).
	  when('/ptuxiouxoi', {
        templateUrl: 'views/ptuxiouxoi.html',
        controller: 'ptuxiouxoiCtrl'
      }).
      otherwise({
        redirectTo: '/neofueis'
      });
  }]);
 
 
