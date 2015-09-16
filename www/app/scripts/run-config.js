'use strict';

angular.module('geolocationTracker')
  .run(['$window', function ($window) {

    $window.CESIUM_BASE_URL = 'lib/ol3-cesium-v1.8/Cesium/';

  }]);