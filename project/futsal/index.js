const navbg = document.querySelector("nav-bar");
const navbar = document.getElementById('navbar');

console.log(navbg);

window.onscroll = () => {
    if(window.scrollY > 100){
        navbar.style.color = "lightgreen";
        navbar.style.background ="black";
    }
    else{
        navbar.style.color = "white";
        navbar.style.background ="transparent";


    }
    // else{
    //     navbg.classList.remove('nav-bar-color');
    // }
}