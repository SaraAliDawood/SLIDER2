
var overLay = document.getElementById("overLay");
var imgs = Array.from(document.querySelectorAll(".item img"));
var close = document.getElementById("close");
var overLayImage = document.getElementById("overLayImage");
var next = document.getElementById("next");
var prev = document.getElementById("prev")

var stepper;

for(var i=0; i< imgs.length; i++){
    imgs[i].addEventListener("click" , function(e){
    overLay.classList.replace("d-none" , "d-block");
    var src = e.target.getAttribute("src");
     overLayImage.style.backgroundImage = `url(${src})` 
     stepper = imgs.indexOf(e.target);
    

    })
}


close.addEventListener("click" , function(){
    overLay.classList.replace("d-block" , "d-none");
})
 


   
    next.addEventListener("click" , function(){
        if(stepper == imgs.length-1){
            stepper = 0;
        }
        stepper= stepper + 1;
        console.log(stepper);
        src = imgs[stepper].getAttribute("src")
        overLayImage.style.backgroundImage = `url(${src})`
        
       
    })

    prev.addEventListener("click" , function(){
        if(stepper == 0){
            stepper = imgs.length;
        }
        stepper--;
        src = imgs[stepper].getAttribute("src");
        overLayImage.style.backgroundImage = `url(${src})`;

    })

    // function slide(step){
    //     stepper += step;
    //     if(stepper == imgs.length-1){
    //         stepper = 0;
    //     }
    //     if(stepper == 0){
    //         stepper = imgs.length;
    //     }
    //     src = imgs[stepper].getAttribute("src")
    //     overLayImage.style.backgroundImage = `url(${src})`
       
        

    // }
    // next.addEventListener("click" , function(){
    //     slide(1)
    // })

    // prev.addEventListener("click" , function(){
    //     slide(-1)
    // })
    
   


