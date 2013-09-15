[graphy.js]() - Simple HTML5 Canvas Graphing
=========

A HTML5 Canvas Library For Graphing Functions

![sin](/graphy.PNG)

An example here: http://jsfiddle.net/shrimpboyho/57wZW/

##Documentation

Create a new ```Graphy()``` object and send in a canvas.
```js
var canvas = document.getElementById('myCanvas');
var graphymachine = new Graphy(canvas);
```

Set up some settings such as the number of pixels per one unit and the origin and whether a grid should be present.
```js
graphymachine.setPixelsPerUnit(20);
graphymachine.setOrigin(200,200);
graphymachine.drawGrid();
```

Graph the function by calling the ```graph()``` method with an equation, a color, and line thickness as your arguments.
```js
graphymachine.graph("x * Math.sin(10 * x)", "orange",2);
```

