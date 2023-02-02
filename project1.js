const loadText=document.querySelector(".loading-text")
const thierry=document.querySelector(".new")
 let load = 0 
 const int= setInterval(blurring, 20)
 function blurring(){
     load++
     if(load>99){
         clearInterval(int)
     }
    loadText.innerText=`${load}%`
    loadText.style.opacity=scale(load, 0, 100, 1, 0)
    thierry.style.filter=`blur(${scale(load, 0, 100, 20, 0)}px)`
 }
 function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
  }
  