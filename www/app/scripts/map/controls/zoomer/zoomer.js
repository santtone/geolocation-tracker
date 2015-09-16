'use strict';

angular.module('geolocationTracker')
  .directive('gtMapZoomer', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/map/controls/zoomer/zoomer.html',
      link: function ($scope) {

        var map = $scope.map;

        $scope.zoomIn = function(){
          map.getView().setZoom(map.getView().getZoom() + 1);
        };

        $scope.zoomOut = function(){
          map.getView().setZoom(map.getView().getZoom() - 1);
        };

      }
    };
  });