var x;
var y;
window.onload = function() {

    var canvas =$("div>canvas")[0];
    var context = canvas.getContext('2d');

    tracking.ColorTracker.registerColor('red', function(r, g, b) {
        if (r > 150 && g < 50 && b < 50) {
            return true;
        }
        return false;
    });

    var tracker = new tracking.ColorTracker(['red']);
    tracking.track("#video", tracker, {
        camera: true
    });

    tracker.on('track', function(event) {

        event.data.forEach(function(rect) {
            if (rect.color === 'custom') {
                rect.color = tracker.customColor;
            }

            if(rect.x>=0){
                x=rect.x;
                cambios.cambiarX(x);
            }
            
            if(rect.y>=0){
                y=rect.y;
                cambios.cambiarY(y);
            }
        });
    });

};
