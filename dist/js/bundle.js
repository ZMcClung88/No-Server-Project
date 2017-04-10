'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('main', {
    templateUrl: './views/main.html',
    controller: 'mainCtrl',
    url: '/'
  }).state('details', {
    templateUrl: './views/details.html',
    controller: 'detailsCtrl',
    url: '/details/:id'
  });
});
'use strict';

angular.module('app').directive('showTime', function () {
  return {
    restrict: 'E',
    template: '{{date | date: "fullDate"}}',
    link: function link($scope, element, attribute) {
      var currentTime = new Date();
      $scope.time = currentTime.toUTCString();
    }
  };
});
'use strict';

angular.module('app').controller('detailsCtrl', function ($scope, $stateParams, mainService) {

  $scope.getDetails = function (book) {
    console.log('function is working');
    mainService.bookSearch(book).then(function (resp) {
      for (var i = 0; i < resp.length; i++) {
        if (resp[i].id === $stateParams.id) {}
      }
    });
  }, $scope.getDetails();

  $scope.selectedBook = mainService.selectedBook;
  console.log($scope.selectedBook.volumeInfo.infoLink);
});
'use strict';

angular.module('app').controller('mainCtrl', function ($scope, mainService, $state) {

  $scope.bookSearch = function (item) {
    mainService.bookSearch(item).then(function (resp) {
      $scope.booksArr = resp;
      console.log($scope.booksArr);
      $scope.hasSearchResults = true;
    });
  };

  $scope.init = function () {
    // console.log(moment().hour(8).minute(0).second(0).toDate());
    // $scope.date = moment().format('dddd, MMMM, Do YYYY');
    $scope.date = new Date();
  };

  $scope.keyPress = function ($event) {
    if ($event.which === 13) {
      $scope.bookSearch($scope.book);
    }
  };

  $scope.passData = function (book) {
    mainService.selectedBook = book;
    console.log(mainService.selectedBook);
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

  this.selectedBook = {};
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
