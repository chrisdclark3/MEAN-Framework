(function() {
  'use strict'

  function ParcelSnapshotDirective() {
    return {
      restrict: 'AE',
      templateUrl: 'views/snapshot.html',
      scope: {
        ngSrc: '='
      },
      link: function(scope, elem) {

      }
    }
  }

  app.directive('parcelSnapshot', ParcelSnapshotDirective)

}());
