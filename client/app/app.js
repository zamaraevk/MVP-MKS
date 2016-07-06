angular.module('myApp', [
  'services',
  'songSearch',
  'ngRoute'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/songSearch/songSearch.html',
      controller: 'songSearchController'
    })
    .otherwise({
      redirectTo: '/',

    });

})