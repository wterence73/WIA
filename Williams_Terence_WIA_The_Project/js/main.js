window.onload = function() {
    
 var theCanvas = document.getElementById('Canvas1');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            var myText="Welcome to Disney!";

            ctx.font="21pt Comic Sans";
            ctx.fillStyle="red";
            ctx.fillText(myText,40,80);
            
        }
        
    }   
    
    var theCanvas = document.getElementById('Canvas2');
    
   		 if (theCanvas && theCanvas.getContext) {
        	var ctx = theCanvas.getContext("2d");
        
       	 	if(ctx) {
       	 			var srcImg = document.getElementById("img2");
       	 			
       	 			ctx.drawImage(srcImg, 0, 0, 700, 400);
       	 			
       	 		}
       	 	}
    
    var theCanvas = document.getElementById('Canvas2');
    
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        
        if(ctx) {
            var myText="We hope to see you soon!";

            ctx.font="36pt Comic Sans";
            ctx.fillStyle="red";
            ctx.fillText(myText,110,450);
            
        }
        
    }   
    
}