var x;
var y;

window.onload = function() {
    tracking.ColorTracker.registerColor('red', function(r, g, b) {
        if (r > 150 && g < 50 && b < 50) {
            return true;
        }
        return false;
    });

    var tracker = new tracking.ColorTracker(['red']);
    tracking.track('#video', tracker, {
        camera: true
    });

    tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
            if (rect.color === 'custom') {
                x=rect.x;
                y=rect.y;
                dibujarPuntero();
            }
            else{
                x=-1;
                y=-1;
            }
        });
    });

    initGUIControllers(tracker);
};