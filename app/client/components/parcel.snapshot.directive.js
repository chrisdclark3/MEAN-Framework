(function() {
  'use strict'

  function ParcelSnapshotDirective() {
    return {
      restrict: 'AE',
      templateUrl: 'views/snapshot.html',
      link: function(scope, elem) {

      }
    }
  }

  app.directive('parcelSnapshot', ParcelSnapshotDirective)

}());

(function() {
  'use strict'
  app.directive('resizable', function($document, $rootScope, Snapshot) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
        var startX, startY,
          offsets

        element.bind('mousedown', function($event) {
          setQuadrant($event)
          if (!scope.isDraggable) {
            $document.bind('mousemove', mousemove);
            $document.bind('mouseup', mouseup);
          }
          return false;
        });

        function mousemove($event) {
          var offsets = setOffset($event)

          console.log("mousemove > offsets", offsets)
          Snapshot.imgWidth = Snapshot.imgWidth + offsets[0]
          Snapshot.imgHeight = Snapshot.imgHeight + offsets[1]
          $rootScope.$broadcast('updateSnapshot', Snapshot)
          element[0].style.height = Snapshot.imgHeight + 'px'
          element[0].style.width = Snapshot.imgWidth + 'px'
          return false;
        }

        function mouseup() {
          $document.unbind('mousemove', mousemove);
          $document.unbind('mouseup', mouseup);
        }

        function setOffset($event) {
          var dx = $event.movementX;
          var dy = $event.movementY;
          var diff = Math.abs(dx) >= Math.abs(dy) ? [dx, dx] : [dy, dy]
          return diff
        }

        function setQuadrant($event) {
          var vert, horz
          if ($event.layerX <= 50) {
            horz = 'left'
          } else if ($event.layerX >= element[0].clientWidth) {
            horz = 'right'
          } else {
            horz = 'none'
          }
          if ($event.layerY <= 50) {
            vert = 'top'
          } else if ($event.layerY >= element[0].clientWidth) {
            vert = 'bottom'
          } else {
            vert = 'none'
          }
          if (vert == 'none' || horz == 'none') {
            scope.isDraggable = true
          } else {
            scope.isDraggable = false
            scope.quadrant = vert + '-' + horz
          }
        }
      }
    }
  });

  app.directive('draggable', function($document, $rootScope, Snapshot) {
    return {
      restrict: 'A',
      link: function(scope, elm, attrs) {

        var startX, startY, initialMouseX, initialMouseY

        elm.css({
          position: 'absolute',
          top: Snapshot.xSkew,
          left: Snapshot.ySkew
        });

        console.log("elm", elm);

        elm.bind('mousedown', function($event) {
          startX = elm.prop('offsetLeft');
          startY = elm.prop('offsetTop');
          initialMouseX = $event.clientX;
          initialMouseY = $event.clientY;
          console.log("EVENT", $event)
          $document.bind('mousemove', scope.dragMove);
          $document.bind('mouseup', scope.dragUp);
          return false;
        });

        scope.dragMove = function($event) {
          if (scope.isDraggable) {
            var dx = $event.clientX - initialMouseX;
            var dy = $event.clientY - initialMouseY;
            elm.css({
              top: startY + dy + 'px',
              left: startX + dx + 'px'
            });

            Snapshot.ySkew = startY + dy
            Snapshot.xSkew = startX + dx
            $rootScope.$broadcast('updateSnapshot', Snapshot)
            return false;
          }
        }

        scope.dragUp = function() {
          $document.unbind('mousemove', scope.dragMove);
          $document.unbind('mouseup', scope.dragUp);
        }
      }
    };
  });
})()
