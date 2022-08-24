# Hola-p5.js

``` js
function setup() {
  createCanvas(600, 600);
  background(200);
 
 // cuadricula
  for(let i = 0; i < width; i+= 200){
    stroke(0); 
    line(i, 0, i, height);
    line(0, i, width, i);
  }
}
```

```js
for(let i = 0; i < 40; i++){
    fill(255);
    ellipse(random(0, 200), random(0,200), 20, 20);
}

