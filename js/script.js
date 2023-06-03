//Header reveal on sroll positions

let lastScrollTop = 0;
let header = document.getElementById("header");
window.addEventListener("scroll", function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top = "-80px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


//smooth scroll
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
     speedAsDuration: true
    });

//Menu toggle

const menu = document.querySelector("#menu");
const navbar = document.querySelector(".nav");


    menu.addEventListener('click', () =>{
        menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    });

//    document.getElementsByClassName('.nav-close').onclick = () => {
//     navbar.classList.toggle('active');
//     menu.classList.toggle('bx-x');
//    };


//first gallery popup
    const pic1 = document.querySelector("#gallery1");
    const pictures1 = document.querySelector(".pictures1");

    pic1.addEventListener('click', () =>{
    pictures1.classList.toggle('active');
    });

    document.querySelector('.close1').onclick = () =>{
        pictures1.classList.remove('active');
    };

//second gallery popup
    const pic2 = document.querySelector("#gallery2");
    const pictures2 = document.querySelector(".pictures2");

    pic2.addEventListener('click', () =>{
    pictures2.classList.toggle('active');
    });

    document.querySelector('.close2').onclick = () =>{
        pictures2.classList.remove('active');
    };

//thirdgallery popup
    const pic3 = document.querySelector("#gallery3");
    const pictures3 = document.querySelector(".pictures3");

    pic3.addEventListener('click', () =>{
    pictures3.classList.toggle('active');
    });

    document.querySelector('.close3').onclick = () =>{
        pictures3.classList.remove('active');
    };

//fourthgallery popup
    const pic4 = document.querySelector("#gallery4");
    const pictures4 = document.querySelector(".pictures4");

    pic4.addEventListener('click', () =>{
    pictures4.classList.toggle('active');
    });

    document.querySelector('.close4').onclick = () =>{
        pictures4.classList.remove('active');
    };


//Video popup
        // let video = document.querySelectorAll('video');

        //     video.forEach(play => play.addEventListener ('click', () => {

        //     play.classList.toggle('active');

        //     if(play.paused){
        //         play.play();
        //     }else{
        //         play.pause();
        //         play.currentTime = 0;
        //     }
            
        // }));


    //for the places slider

const btns = document.querySelectorAll(".date");
const slides = document.querySelectorAll(".places");

let sliderNav = function(manual){

    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

   slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    btns[manual].classList.add("active");
   slides[manual].classList.add("active");
}

btns.forEach((btn, i) => {
btn.addEventListener("click", () =>{
    sliderNav(i);
});
});


/*=========gsap animation========*/

const controlPlaces = document.querySelectorAll('.date');

function ScrollAnimation(){
    gsap.from('.location', {opacity: 0, duration: .2, delay: .2, y:-20})
    gsap.from('.gallery', {opacity: .5, duration: .3, delay: .1, y:-20})
    gsap.from('.plimage', {opacity: 1, duration: .3, delay: .1, x:20})
    gsap.from('.loc-info', {opacity: 0, duration: .2, delay: .2, y:20})
    

}

controlPlaces.forEach(c => c.addEventListener('click', ScrollAnimation))


//Reveal on scroll top

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealtop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    } 
}

//Reveal on scroll left

window.addEventListener('scroll', reveal_left);

function reveal_left() {
    var reveals_left = document.querySelectorAll('.reveal-left');

    for(var i = 0; i < reveals_left.length; i++) {
        var windowHeightLeft = window.innerHeight;
        var revealtopLeft= reveals_left[i].getBoundingClientRect().top;
        var revealPointLeft = 150;

        if(revealtopLeft < windowHeightLeft - revealPointLeft) {
            reveals_left[i].classList.add('active');
        }
        else{
            reveals_left[i].classList.remove('active');
        }
    } 
}

//Reveal on scroll right

window.addEventListener('scroll', reveal_right);

function reveal_right() {
    var reveals_right = document.querySelectorAll('.reveal-right');

    for(var i = 0; i < reveals_right.length; i++) {
        var windowHeightRight = window.innerHeight;
        var revealtopRight = reveals_right[i].getBoundingClientRect().top;
        var revealPointRight = 150;

        if(revealtopRight < windowHeightRight - revealPointRight) {
            reveals_right[i].classList.add('active');
        }
        else{
            reveals_right[i].classList.remove('active');
        }
    } 
}
