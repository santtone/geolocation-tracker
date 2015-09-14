'use strict';

angular.module('geolocationTracker')
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'scripts/main/main.html',
        controller: 'MainCtrl'
      });
  });