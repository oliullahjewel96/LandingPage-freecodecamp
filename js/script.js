const btnHamburger = document.querySelector("#btnHamburger");
const noScroll = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function(){

    if(header.classList.contains("open")){
        noScroll.classList.remove("noscroll");
        header.classList.remove("open");
        fadeElems.forEach(function(elements){
            elements.classList.remove("fade-in");
            elements.classList.add("fade-out");
        })
        
    }else{
        noScroll.classList.add("noscroll");
        header.classList.add("open");
        fadeElems.forEach(function(elements){
            elements.classList.remove("fade-out");
           elements.classList.add("fade-in");      
        })
        
    }
})