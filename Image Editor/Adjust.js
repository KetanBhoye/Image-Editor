
 var loadFile = function(event) {
    var image = document.getElementById('targetimage');
    image.src = URL.createObjectURL(event.target.files[0]);
    targetimage.style.opacity = "100%";
 };
window.onload=function(){
const realFileBtn = document.getElementById("Input1");
    const customBtn = document.getElementById("custom-button");
    customBtn.addEventListener("click", function() {
        realFileBtn.click();
      });



  
        let myform = document.getElementById('myform');
        let targetimage = document.getElementById('targetimage');
        let inputrange = document.querySelectorAll('.slider');
        myform.addEventListener('submit', function(e){
            let urlimage = document.getElementById('Input1');
            let urlimageval = urlimage.value;
            if(urlimageval.length){
                targetimage.setAttribute('src',urlimageval);
                urlimage.value = '';
            }
            
            e.preventDefault();
            console.log('done');
        });

        for(let i=0; i<=inputrange.length-1; i++ ){
            inputrange[i].addEventListener('input', editimage);
        }
        
        function editimage(){
            let gs = document.getElementById('gs');
            let bright = document.getElementById('Brightness');
            let blur = document.getElementById('Blur');
            let hue = document.getElementById('Hue');
            let sepia = document.getElementById('Sepia');
            let saturation = document.getElementById('Saturation');
            let contrast = document.getElementById('Contrast');
            let invert = document.getElementById('Invert');
   
            let gsval = gs.value;
            let brightval = bright.value;
            let blurval = blur.value;
            let hueval = hue.value;
            let sepiaval = sepia.value;
            let saturationval = saturation.value;
            let contrastval = contrast.value;
            let invertval = invert.value;
           
        
            targetimage.style.filter = 'grayscale('+gsval+'%)  brightness('+brightval+'%) blur('+blurval+'px) hue-rotate('+hueval+'deg) sepia('+sepiaval+'%) saturate('+saturationval+'%) saturate('+saturationval+'%) contrast('+contrastval+'%) invert('+invertval+'%)';
        }
        
        let sliderform = document.getElementById('Slider-Form');
        sliderform.addEventListener('reset', function(){
            sliderform.reset();
            setTimeout(function(){
                editimage();
            },0)
        })
        
        
  

}