'use strict';

angular.module('geolocationTracker')
  .directive('gtMap', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/map/map.html',
      link: function ($scope, element, attrs, controller) {

        var map = new ol.Map({
          target: 'map',
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          view: new ol.View({
            center: ol.proj.transform([60.869492, 26.705208], 'EPSG:4326', 'EPSG:3857'),
            zoom: 8
          })
        });

        $scope.zoomIn = function(){
          map.getView().setZoom(map.getView().getZoom() + 1);
        };

        $scope.zoomOut = function(){
          map.getView().setZoom(map.getView().getZoom() - 1);
        };

      }
    };
  });