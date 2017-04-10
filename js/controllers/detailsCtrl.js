angular.module('app').controller('detailsCtrl', function($scope, $stateParams, mainService) {

  $scope.getDetails = function(book) {
    console.log('function is working')
    mainService.bookSearch(book).then(function(resp) {
      for(var i = 0; i < resp.length; i++) {
        if(resp[i].id === $stateParams.id) {
        }
      }
    })
  },
  $scope.getDetails();


  $scope.selectedBook = mainService.selectedBook
    console.log($scope.selectedBook.volumeInfo.infoLink)
})
