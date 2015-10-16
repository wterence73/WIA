/*
     Name: Terence Williams
     Date: 10/01/15
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */
 
/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

********************************************/
window.onload = function() {

/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

	
        var theCanvas = document.getElementById('Canvas1');
                
        if(theCanvas && theCanvas.getContext) {
            var ctx = theCanvas.getContext("2d");
                    
            if(ctx) {
                ctx.strokeStyle = "black";
                ctx.fillStyle = "#7993e5"; 
                ctx.lineWidth = 10;
                ctx.fillRect(0, 0, 50, 100);
                ctx.strokeRect(0, 0, 50, 100);
            }
            
        }


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
            
    var theCanvas = document.getElementById('Canvas2');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            ctx.strokeStyle = "black";
            ctx.fillStyle = "rgba(228,99,99,0.5)";
            ctx.beginPath();
            ctx.arc(50, 50, 20, 0, (360/180)*Math.PI, false);
            ctx.fill();
            
            ctx.beginPath();
            ctx.strokeStyle = "black"
            ctx.lineWidth = 10;
            ctx.arc(50, 50, 30, 0, (360/180)*Math.PI, false);
            ctx.stroke();
        }
        
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
            
    var theCanvas = document.getElementById('Canvas3');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            ctx.lineWidth = 5;
            ctx.strokeStyle = "black";
            ctx.fillStyle = "cornsilk";
            ctx.lineJoin = "bevel";
            
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(160, 70);
            ctx.lineTo(170, 10);
            ctx.lineTo(190, 70);
            ctx.lineTo(250, 90);
            ctx.lineTo(190, 110);
            ctx.lineTo(220, 160);
            ctx.lineTo(170, 140);
            ctx.lineTo(130, 160);
            ctx.lineTo(150, 110);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
        }
        
    }


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
            
    var theCanvas = document.getElementById('Canvas4');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            ctx.strokeStyle="#b82b2b";
            ctx.lineWidth=5;

            ctx.beginPath();
            ctx.arc(270,170,140,1*Math.PI, 2*Math.PI);
            ctx.stroke();
             ctx.beginPath();
            ctx.arc(160,170,30,1*Math.PI, 0*Math.PI);
            ctx.stroke();
            ctx.arc(220,170,30,1*Math.PI, 0*Math.PI);
            ctx.stroke();
            ctx.arc(280,170,30,1*Math.PI, 0*Math.PI);
            ctx.stroke();
            ctx.arc(340,170,30,1*Math.PI, 0*Math.PI);
            ctx.stroke();
            ctx.arc(390,170,20,1*Math.PI, 0*Math.PI);
            ctx.stroke();
            
        }
    
    }
        

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
            
    var theCanvas = document.getElementById('Canvas5');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            var myText="Today is your day!";

            ctx.font="36pt Comic Sans";
            ctx.fillStyle="red";
            ctx.fillText(myText,150,150);
            
        }
        
    }
    
    
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

		var theCanvas = document.getElementById('Canvas6');
    
   		 if (theCanvas && theCanvas.getContext) {
        	var ctx = theCanvas.getContext("2d");
        
       	 	if(ctx) {
       	 			var srcImg = document.getElementById("img1");
       	 			
       	 			//ctx.drawImage(srcImg, 0, 0);
       	 			ctx.drawImage(srcImg, 0, 0, 700, 400);
       	 			//ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280);
       	 			
       	 		}
       	 	}
       	 	

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

		var theCanvas = document.getElementById('Canvas7');
    
   		 if (theCanvas && theCanvas.getContext) {
        	var ctx = theCanvas.getContext("2d");
        
       	 	if(ctx) {
       	 	
            var myText="Terence";

            ctx.font="16pt Comic Sans";
            ctx.fillText(myText,320,350);
            
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.fillStyle = "brown";
            ctx.arc(350, 200, 70, 0, (360/180)*Math.PI, false);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(260, 150, 40, 0, (360/180)*Math.PI, false);
            ctx.fill();
            
            ctx.beginPath();
            ctx.arc(440, 150, 40, 0, (360/180)*Math.PI, false);
            ctx.fill();
            
            ctx.beginPath();
             ctx.arc(347,145,40,1*Math.PI, 0*Math.PI);
             ctx.fillStyle = "black";
             ctx.stroke();
             ctx.fill();
            
            }
        }
        
    }

