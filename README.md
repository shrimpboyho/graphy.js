graphy.js - Simple HTML5 Canvas Graphing
=========

A HTML5 Canvas Library For Graphing Functions

![sin](/graphy.PNG)

An example here: http://jsfiddle.net/shrimpboyho/57wZW/
```js
var canvas = document.getElementById('myCanvas');
var graphymachine = new Graphy(canvas);
graphymachine.setPixelsPerUnit(20);
graphymachine.setOrigin(200,200);
graphymachine.drawGrid();

$('button').click(function () {
    var func = $('input').val();
    graphymachine.graph(func, "orange",2);
});
```

