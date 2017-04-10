angular.module('app').controller('resultsCtrl', function($scope, mainService, $stateParams) {

  console.log($stateParams.items);

  $scope.bookSearch = function() {
    mainService.bookSearch().then(function(resp){
      console.log(resp.data.items)

    })
  }
})
