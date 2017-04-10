angular.module('app', ['ui.router', 'angularMoment']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('main', {
      templateUrl: './views/main.html',
      controller: 'mainCtrl',
      url: '/'
    })
    .state('results', {
      templateUrl: './views/results.html',
      controller: 'resultsCtrl',
      url: '/results'
    })
})
