'use strict';

angular.module('geolocationTracker')
  .directive('gtMapTilter', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/map/controls/tilter/tilter.html',
      link: function ($scope) {

        var map = $scope.cMap;
        var tiltMin = 0.1;
        var tiltMax = 1.2;
        var tiltShift = 0.2;

        $scope.tiltUp = function(){
          var tilt = map.getCamera().getTilt();
          if(tilt < tiltMax) {
            tilt = tilt + tiltShift;
          }
          map.getCamera().setTilt(tilt);
        };

        $scope.tiltDown = function(){
          var tilt = map.getCamera().getTilt();
          if(tilt > tiltMin && tilt < tiltShift){
            tilt = 0;
          }
          if(tilt > tiltMin) {
            tilt = tilt - tiltShift;
          }
          map.getCamera().setTilt(tilt);
        };

      }
    };
  });