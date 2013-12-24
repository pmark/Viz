var page = require('webpage').create();

var width = 400;
var height = 800;
page.clipRect = { top: 0, left: 0, width: width, height: height};
page.viewportSize = { width: width, height: height};

var url = 'http://bl.ocks.org/pmark/raw/7916621/';
var frames = 100;

page.open(url, function(){
    setInterval(function(){
        page.render('/dev/stdout');

        if( frames == 0 ){
            phantom.exit();
        }

        frames--;

    }, 33);
});
