angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('main', {
      templateUrl: './views/main.html',
      controller: 'mainCtrl',
      url: '/'
    })
    .state('details', {
      templateUrl: './views/details.html',
      controller: 'detailsCtrl',
      url: '/details/:id'
    })
})
