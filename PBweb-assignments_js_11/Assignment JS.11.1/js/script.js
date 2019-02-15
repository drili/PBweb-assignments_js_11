var arr = [];
           var canvas;

           var redraw = function () {
               canvas.clear();     // clear canvas
               canvas.prep();      // prep canvas with background color
               for (var i = 0; i < arr.length; i++) {
                   arr[i].move();
                   arr[i].draw();
               }
         };

           var repeater = function () {
               setInterval(redraw, 50);
         };

           var initialize = function () {
               canvas = Object.create(Canvas);
               canvas.init('canvas', '#f4f4f4');
               var c = Object.create(Umo);
               c.init(canvas, '#444');
               arr.push(c);
               repeater();
         };

           var nml = window.addEventListener('load', initialize, false);
