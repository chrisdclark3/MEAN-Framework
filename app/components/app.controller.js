(function() {

  'use strict'

  AppController.$inject = ['$scope', '$timeout']

  function AppController($scope, $timeout) {
    $scope.title = "Three.js Playground"
    $scope.width = 400
    $scope.height = 300
    $scope.view_angle = 45
    $scope.aspect = $scope.width / $scope.height
    $scope.near = 0.1
    $scope.far = 10000

    var init = function() {
      $scope.container = angular.element(document.getElementById('design'))[0]
      $scope.renderer = new THREE.WebGLRenderer()
      $scope.camera = new THREE.PerspectiveCamera($scope.view_angle, $scope.aspect, $scope.near, $scope.far)
      $scope.scene = new THREE.Scene()
      $scope.scene.add($scope.camera)
      $scope.camera.position.z = 300
      $scope.renderer.setSize($scope.width, $scope.height)
      $scope.container.append($scope.renderer.domElement)
    }

    $timeout(init)
  }

  angular
    .module('app.controller', [])
    .controller('AppController', AppController)
}());
