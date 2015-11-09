(function() {
  'use strict'

  function ParcelSnapshot($rootScope) {
    var parcel = {
      imgWidth: 400,
      imgHeight: 400,
      xSkew: 300,
      ySkew: 50
    }

    if (typeof $rootScope.snapshot === 'undefined') {
      $rootScope.snapshot = parcel

    }

    $rootScope.$on('updateSnapshot', function(event, newSnapshot) {
      console.log("Updating snapshot...", newSnapshot)
      $rootScope.snapshot = newSnapshot
      $rootScope.$apply()
      console.log('rootscope snapshot', $rootScope.snapshot)
    })



    return parcel
  }

  app.service('Snapshot', ParcelSnapshot)
}());
