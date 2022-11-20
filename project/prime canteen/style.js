const navbar = document.getElementById('nav');
window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.style.background = "#211f1f";
        navbar.style.border ="1px solid #211f1f";
    }
    else{
        navbar.style.border ="1px solid #636666";
        navbar.style.background ="transparent";

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