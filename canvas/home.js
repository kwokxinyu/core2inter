// The canvas is initially blank. To display something, a script first needs to access the rendering context and draw on it. The <canvas> element has a method called getContext(), used to obtain the rendering context and its drawing functions. 
// getContext() takes one parameter, the type of context. For 2D graphics, such as those covered by this tutorial, you specify "2d" to get a CanvasRenderingContext2D.



function draw() {
    const canvas = document.getElementById("tutorial");

    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200 0 0)";
          ctx.fillRect(10, 10, 50, 50); 
          ctx.fillRect(25, 25, 100, 100);
          ctx.clearRect(45, 45, 60, 60);
          ctx.strokeRect(50, 50, 50, 50);

// The fillRect() function draws a large black square 100 pixels on each side. 
// The clearRect() function then erases a 60x60 pixel square from the center, 
// and then strokeRect() is called to create a rectangular outline 50x50 pixels within the cleared square.



          ctx.fillStyle = "rgb(0 0 200 / 50%)";
          ctx.fillRect(30, 30, 50, 50);

ctx.fillStyle = "rgb(0 200 0)";
    ctx.beginPath();
    ctx.moveTo(400, 120);
// One very useful function, which doesn't actually draw anything but becomes part of the path list described above, is the moveTo() function. You can probably best think of this as lifting a pen or pencil from one spot on a piece of paper and placing it on the next.

    ctx.lineTo(450, 160);
    ctx.lineTo(400, 200);
    ctx.fill();

      }

}

window.addEventListener("load", draw);


// fillRect(x, y, width, height)
// Draws a filled rectangle.

// strokeRect(x, y, width, height)
// Draws a rectangular outline.

// clearRect(x, y, width, height)
// Clears the specified rectangular area, making it fully transparent.

