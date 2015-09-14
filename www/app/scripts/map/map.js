'use strict';

angular.module('geolocationTracker')
  .directive('gtMap', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/map/map.html',
      scope: {},
      controller: function ($scope) {

        $scope.center = {
          lat: 60.869510,
          lon: 26.705192,
          zoom: 15
        }

      }
    };
  });