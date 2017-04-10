'use strict';

angular.module('app', ['ui.router', 'angularMoment']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    templateUrl: './views/main.html',
    controller: 'mainCtrl',
    url: '/'
  }).state('results', {
    templateUrl: './views/results.html',
    controller: 'resultsCtrl',
    url: '/results'
  });
});
"use strict";
"use strict";
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService, moment, $state) {

  $scope.bookSearch = function (item) {
    mainService.bookSearch(item).then(function (resp) {
      $scope.booksArr = resp;
      console.log($scope.booksArr);
    });
  };

  $scope.init = function () {
    console.log(moment().hour(8).minute(0).second(0).toDate());
    $scope.date = moment().format('dddd, MMMM, Do YYYY');
  };

  $scope.keyPress = function ($event) {
    if ($event.which === 13) {
      $scope.bookSearch($scope.book);
    }
  };
});
'use strict';

angular.module('app').service('mainService', function ($http) {

  this.bookSearch = function (book) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + book
    }).then(function (resp) {
      return resp.data.items;
      console.log(resp.data.items);
    });
  };
});
'use strict';

angular.module('app').controller('resultsCtrl', function ($scope, mainService, $stateParams) {

  console.log($stateParams.items);

  $scope.bookSearch = function () {
    mainService.bookSearch().then(function (resp) {
      console.log(resp.data.items);
    });
  };
});
//# sourceMappingURL=bundle.js.map
