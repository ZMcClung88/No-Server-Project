angular.module('app').controller('mainCtrl', function($scope, mainService, moment, $state) {

  $scope.bookSearch = function(item) {
    mainService.bookSearch(item).then(function(resp){
      $scope.booksArr = resp;
      console.log($scope.booksArr);
      $scope.hasSearchResults = true;
    })
  }

  $scope.init = function(){
    console.log(moment().hour(8).minute(0).second(0).toDate());
    $scope.date = moment().format('dddd, MMMM, Do YYYY');
  }

  $scope.keyPress = function($event) {
    if($event.which === 13) {
      $scope.bookSearch($scope.book)
    }
  }


})
