var mynav = document.getElementById('nav');
window.onscroll =()=>{
    "use strict";
    if(document.body.scrollTop >= 200){
        mynav.classList.add('change-nav');
    }
    else{
        mynav.classList.remove('change-nav');
    }
}


function navFunction(){
    var element = document.getElementById('right-part-responsive');
    if(element.className == "right-part"){
        element.className = "nav-responsive";
    }
    else{
        element.className = "right-part";
    }

}