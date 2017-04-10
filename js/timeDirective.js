angular.module('app').directive('showTime', function() {
  return {
    restrict: 'E',
    template: '{{date | date: "fullDate"}}',
    link: function($scope, element, attribute) {
      var currentTime = new Date();
      $scope.time = currentTime.toUTCString();
    }
  }
})
