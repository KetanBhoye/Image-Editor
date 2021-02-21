var Originalimage = null;
var canvas;
var CheckFilter = null;
window.onload=function(){
const realFileBtn = document.getElementById("Input1");
    const customBtn = document.getElementById("custom-button");
    customBtn.addEventListener("click", function() {
        realFileBtn.click();
      });
    }
function Loadimg() {
    var originalimg = document.getElementById("Input1");
    Originalimage = new SimpleImage(originalimg);

    canvas = document.getElementById("canvas");
    
    canvas.style.opacity = "100%";
    Originalimage.drawTo(canvas);

}

function MakeGray() {
    CheckFilter = 1;
    if (Originalimage != null) {
        var Grayimg = new SimpleImage(Originalimage);
        for (var pixel of Grayimg.values()) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
        }
        canvas = document.getElementById("canvas");
        Grayimg.drawTo(canvas);
    } else {
        alert("Image is not loaded...!");
    }
  

}

function MakeRed() {
    CheckFilter = 1;
    var Redimage = new SimpleImage(Originalimage);
    for (var pixel of Redimage.values()) {
        avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
        if (avg < 128) {
            pixel.setRed(2 * avg);
            pixel.setGreen(0);
            pixel.setBlue(0);
        } else {
            pixel.setRed(255);
            pixel.setGreen(2 * avg - 255);
            pixel.setBlue(2 * avg - 255);
        }
    }
    canvas = document.getElementById("canvas");
    Redimage.drawTo(canvas);
   
}

function Boxfilter() {

    CheckFilter = 1;
    var Boxfilterimg = new SimpleImage(Originalimage);
    var X = Boxfilterimg.getWidth();
    var Y = Boxfilterimg.getHeight();
    var Rimg = new SimpleImage(X + 200, Y + 100);
    for (var pixel of Boxfilterimg.values()) {
        var x1 = pixel.getX();
        var y1 = pixel.getY();

        if (y1 < Y / 5 && x1 > X / 3) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 5 && y1 < Y / 2.5 && x1 < X / 2) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
            Rimg.setPixel(x1 + 100, y1 + 50, pixel);
        }
        if (y1 > Y / 2.5 && y1 < Y / 1.60 && x1 > X / 2.5 && x1 > X / 2.5) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 1.60 && y1 < Y / 1.15 && x1 < X / 1.75) {
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg);
            pixel.setGreen(avg);
            pixel.setBlue(avg);
            Rimg.setPixel(x1 + 100, y1 + 50, pixel);

        }
        if (y1 > Y / 1.15 && x1 > X / 2) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }

        Rimg.setPixel(x1 + 100, y1 + 50, pixel);
    }
    Rimg.drawTo(canvas)
}

function RainbowFilter() {
    var RainbowImg = new SimpleImage(Originalimage);

    var X = RainbowImg.getWidth();
    var Y = RainbowImg.getHeight();
    var Rainimgcpy = new SimpleImage(X + 50, Y + 50);
    for (var pixel of RainbowImg.values()) {
        var x1 = pixel.getX();
        var y1 = pixel.getY();
        if (y1 < Y / 14) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 14 && y1 < Y / 7) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 7 && y1 < Y / 4.5) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 4.51 && y1 < Y / 3.3) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 3.3 && y1 < Y / 2.6) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y1 > Y / 2.6 && y1 < Y / 2.15) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(0.8 * avg);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y1 > Y / 2.15 && y1 < Y / 1.8) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(1.6 * avg);
                pixel.setGreen(0);
                pixel.setBlue(1.6 * avg);
            } else {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
        if (y1 > Y / 1.8 && y1 < Y / 1.55) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 1.55 && y1 < Y / 1.35) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(0.8 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 1.35 && y1 < Y / 1.19) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 1.19 && y1 < Y / 1.085) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(2 * avg);
                pixel.setBlue(0);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y1 > Y / 1.085) {
            var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setGreen(0);
                pixel.setBlue(2 * avg);
            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }

        Rainimgcpy.setPixel(x1 + 25, y1 + 25, pixel);
    }
    Rainimgcpy.drawTo(canvas);
}



function ClearFilter() {
    if (CheckFilter == null) {
        alert("Not any filters applied right now...!")
    } else {
        var canvas = document.getElementById("canvas");
        Originalimage.drawTo(canvas);
    }
}
function Downloadimg(){
    var image = canvas.toDataURL();  
  
    // create temporary link  
    var tmpLink = document.createElement( 'a' );  
    tmpLink.download = 'Edited image.png'; // set the name of the download file 
    tmpLink.href = image;  
  
    // temporarily add link to body and initiate the download  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}
    
    