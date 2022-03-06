document.getElementById("ConUp").addEventListener("click", scrollup);

function scrollup(){
    var curenscroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if(curenscroll > 0){
        window.requestAnimationFrame(scrollup);
        window.scrollTo(0,curenscroll-(curenscroll / 5));
    }
}

botomup = document.getElementById("ConUp");
window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    
    if(scroll > 100){
        botomup.style.transform = "scale(1)";
    }else if(scroll < 100){
        botomup.style.transform = "scale(0)";
    }
}