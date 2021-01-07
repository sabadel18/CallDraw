var x=0;
var y=0;
window.onload = function() {
    tracking.ColorTracker.registerColor('red', function(r, g, b) {
        if (r > 160 && g < 70 && b < 70) {
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

            if(rect.x>=0 && rect.x<=getWidth()){
                x=rect.x*2;
                cambios.cambiarX(x);
            }
            
            if(rect.y>=0 && rect.y<=getHeight()){
                y=rect.y*2;
                cambios.cambiarY(y);
            }
        });
    });

};
