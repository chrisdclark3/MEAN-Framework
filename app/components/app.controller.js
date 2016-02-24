(function() {

  'use strict'

  function AppController($scope) {
    $scope.title = "Test"
  }

  angular.module('app.controller', [])
         .controller('AppController', AppController)
}());
