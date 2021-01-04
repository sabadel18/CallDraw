var x;
var y;
window.onload = function() {
    var canvas = document.getElementById('defaultCanvas0');
    var context = canvas.getContext('2d');

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
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {
            if (rect.color === 'custom') {
                rect.color = tracker.customColor;
            }

            context.strokeStyle = rect.color;
            context.beginPath();
            context.arc(rect.x, rect.y, rect.width, 0, rect.height * Math.PI);
            context.stroke();
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
        });
    });

};