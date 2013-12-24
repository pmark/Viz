//http://stackoverflow.com/questions/17784281/moving-a-kineticjs-line-with-a-transition
var w = 1000;//screen.width;
var h = 700;//screen.height;
var stage = new Kinetic.Stage({
    container: 'container',
    width: w,
    height: h
});
var layer = new Kinetic.Layer();
var lines = [];

var x = Math.random()*w;
var y = Math.random()*h;

for (var i=0; i<130; i++) {

    var line = new Kinetic.Line({
        x: 0,
        y: 0,
        points: [0, 0, 0, 0],
        stroke: '#'+Math.floor(Math.random()*16777215).toString(16),
        strokeWidth: Math.random() * 15.0 + 0.5
    });

    layer.add(line);
    lines.push(line);
}

stage.add(layer);

var interval = 1000;

// start tween after 20 seconds
setInterval(function () {

    var x = 0;//w/2; //Math.random()*w/2;
    var y = 0;//h/2; //Math.random()*h/2;
    var dur = interval / 1000;
    var newPoints = [
            Math.random()*w*0.66+w/3, 
            Math.random()*h*0.66+h/3, 
            Math.random()*w*0.66+w/3,
            Math.random()*h*0.66+h/3];
    
    lines.forEach(function(line, i) {
        setTimeout(function() {

                var tween = new Kinetic.Tween({
                    node: line,
                    duration: dur,
                    x:x,
                    y:y,
                    points:newPoints

                });
                tween.play();
            }, 
            i * (interval / lines.length * 2.5) ); 

    });

}, interval);