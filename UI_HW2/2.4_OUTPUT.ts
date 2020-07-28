/// <reference path = "2.4_Shape.ts" />   
/// <reference path = "2.4_Circle.ts" /> 
/// <reference path = "2.4_Triangle.ts" />  
function drawAllShapes(shape:Drawing.IShape) { 
    shape.draw(); 
} 
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());