// Creating draw and init function

var c;
var canvas;
var suspender;
var suspended = false;

var redraw = function() {
      canvas.clear();
      canvas.prep();
      c.move();
      c.draw();
      c2.move();
      c2.draw();
};

var repeater = function() {
      suspender = setInterval(redraw, 10);
};

var suspend = function() {
      if (suspend) {
            repeater();
            suspended = false;
      } else {
            clearInterval(suspender);
            suspended = true;
      }
};

var initialize = function() {
      $('canvas').addEventListener('click', suspend);
      canvas = Object.create(Canvas);
      canvas.init('canvas', '#e3e3e3');
      c = Object.create(Shapes);
      c.init(canvas, '#444');
      c2 = Object.create(Shapes);
      c2.init(canvas, '#fff');
      repeater();
};

var obj = window.addEventListener('load', initialize, false);
