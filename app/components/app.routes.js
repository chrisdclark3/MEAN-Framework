/**
 */

(function() {
  'use strict'

  angular.module('app.routes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider
        .otherwise('/')

      $stateProvider
        .state('app', {
          url: '/',
          templateUrl: 'components/home.html',
          controller: 'AppController'
        })
    })
}());
