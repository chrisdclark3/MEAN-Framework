(function() {
  'use strict'

  function ParcelSnapshotController($scope) {

    var canvas,
    snapshot,
    parcel,
    context,
    iH,
    iW,
    cH,
    cW,
    snapshot

    $scope.setCanvasCxt = function() {
      console.log("setting canvas context...")

      iH = 500
      iW = 1000
      cH = 400
      cW = 400
      canvas = document.getElementById("canvas")
      parcel = document.getElementById("parcel-img")
      parcel.crossOrigin = "Anonymous";
      snapshot = document.getElementById("snapshot-img")

      context = canvas.getContext("2d")
      var sx = (iW - cW) / 2
      var sy = (iH - cH) / 2
      context.drawImage(parcel, sx, sy, cW, cH, 0, 0, iW, iH)
      console.log("setting snapshot...", context)
      $scope.setSnapshot(canvas)
    }

    $scope.setSnapshot = function(canvas) {
      console.log("CANVAS", canvas)
      var imgUrl = canvas.toDataURL()
      snapshot.src = url
      $scope.$apply()
    }


  }

  ParcelSnapshotController.$inject = ['$scope']

  app.controller('ParcelSnapshotController', ParcelSnapshotController)

}());
