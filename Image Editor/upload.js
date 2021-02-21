var fgimage = null;
var bgimage = null;
var FgCanvas;
var BgCanvas;
var GreenThreshold = 252;

function Fgimage() {

	var Imagefile = document.getElementById("Fgimage");
	fgimage = new SimpleImage(Imagefile);

	FgCanvas = document.getElementById("can");
	FgCanvas.style.opacity = "100%";
	fgimage.drawTo(FgCanvas);

}

function Bgimage() {
	var imagefile = document.getElementById("Bgimage");
	bgimage = new SimpleImage(imagefile);

	BgCanvas = document.getElementById("can2");
	BgCanvas.style.opacity = "100%";
	bgimage.drawTo(BgCanvas);


}

function ClearCanvas() {
	doClear(FgCanvas);
	doClear(BgCanvas);
}

function GreenScreen() {

	if (fgimage == null || !fgimage.complete()) {
		alert("Foreground Image Is Not Loaded...!")
	}
	if (bgimage == null || !bgimage.complete()) {
		alert("Background Image Is Not Loaded...!")
	}
	var outputimg = new SimpleImage(fgimage.getWidth(), fgimage.getHeight());
	for (var pixel of fgimage.values()) {
		var X = pixel.getX();
		var Y = pixel.getY();
		var bgpixel = bgimage.getPixel(X, Y);
		if (pixel.getGreen() > GreenThreshold) {

			outputimg.setPixel(X, Y, bgpixel);
		} else {
			outputimg.setPixel(X, Y, pixel);
		}

	}
	var Canvas = document.getElementById("can");
	outputimg.setSize(500, 400);
	outputimg.drawTo(Canvas);
	doClear(BgCanvas);
}

function doClear(canvas) {
	var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);
}

function Range() {
	var slider = document.getElementById("myRange");
	var output = document.getElementById("demo");


	slider.oninput = function () {
		output.innerHTML = this.value;
	}

}
function Downloadimg(){
    var image = FgCanvas.toDataURL();  
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Edited image.png'; // set the name of the download file 
    tmpLink.href = image;  
  
    // temporarily add link to body and initiate the download  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}