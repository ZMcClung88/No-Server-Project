angular.module('app').service('mainService', function($http) {

  this.bookSearch = function(book) {
    return $http ({
      method: 'GET',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + book
    }).then(function(resp) {
      return resp.data.items;
      console.log(resp.data.items)
    })
  }
})
