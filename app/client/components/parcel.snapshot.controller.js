(function() {
  'use strict'

  function ParcelSnapshotController($scope, $modal, $window, Snapshot, $rootScope) {

    var canvas,
    snapshot,
    parcel,
    context,
    snapshot
    $scope.isDraggable = true

    $scope.snapshotBtnText = "Take system snapshot"

    $scope.setCanvasCxt = function() {
      console.log("setting canvas context...")
      canvas = document.getElementById("canvas")
      parcel = document.getElementById("parcel-img")
      context = canvas.getContext("2d")
      context.drawImage(parcel,
                        $rootScope.snapshot.xSkew,
                        $rootScope.snapshot.ySkew,
                        $rootScope.snapshot.imgWidth,
                        $rootScope.snapshot.imgHeight,
                        0,
                        0,
                        $rootScope.snapshot.imgWidth,
                        $rootScope.snapshot.imgHeight
                        )
      $scope.setSnapshot(canvas)
    }

    $scope.setSnapshot = function(canvas) {
      $scope.previewImageUrl = canvas.toDataURL()
      console.log("previewImageUrl", $scope.previewImageUrl)
      console.log("canvas", canvas);
      document.getElement
      $scope.open()
    }

    $scope.cancelSnapshot = function () {
      $scope.close()
    }

    $scope.acceptSnapshot = function () {
      $scope.snapshotThumbnail = $scope.previewImageUrl
      $scope.snapshotBtnText = "Publish system"
      document.getElementById('publish-system').setAttribute('class','btn btn-primary on')
      $scope.close();
    }

    $scope.open = function() {
        $scope.modalInstance = $modal.open({
            templateUrl: 'views/snapshot-preview.html',
            scope: $scope
        });
    };

    $scope.close = function() {
        $scope.modalInstance.close();
    };
  }

  ParcelSnapshotController.$inject = ['$scope', '$modal', '$window', 'Snapshot', '$rootScope']

  app.controller('ParcelSnapshotController', ParcelSnapshotController)

}());
