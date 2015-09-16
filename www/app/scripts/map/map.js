'use strict';

angular.module('geolocationTracker')
  .directive('gtMap', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/map/map.html',
      link: function ($scope, element, attrs, controller) {

        window.CESIUM_BASE_URL = 'lib/ol3-cesium-v1.8/Cesium/';

        $scope.map = new ol.Map({
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          controls: [],
          target: 'map',
          view: new ol.View({
            center: ol.proj.transform([25, 20], 'EPSG:4326', 'EPSG:3857'),
            zoom: 3
          })
        });

        $scope.cMap = new olcs.OLCesium({map: $scope.map});
        var scene = $scope.cMap.getCesiumScene();
        $scope.cMap.setEnabled(true);

        $scope.cMap.getCamera().setTilt(Math.PI / 8)

      }
    };
  });