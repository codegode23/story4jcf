
    const pic1 = document.querySelector("#gallery");
    const pictures1 = document.querySelector(".pictures1");

    pic1.addEventListener('click', () =>{
    pictures1.classList.toggle('active');
    });

    document.querySelector('.close').onclick = () =>{
        pictures1.classList.remove('active');
    };


//Video popup
        let video = document.querySelectorAll('video');

            video.forEach(play => play.addEventListener ('click', () => {

            play.classList.toggle('active');

            if(play.paused){
                play.play();
            }else{
                play.pause();
                play.currentTime = 0;
            }
            
        }));


    //for the bottles slider

const btns = document.querySelectorAll(".date");
const slides = document.querySelectorAll(".places");

var sliderNav = function(manual){

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
    gsap.from('.gallery', {opacity: 0, duration: .3, delay: .1, y:-20})
    gsap.from('.plimage', {opacity: 0, duration: .3, delay: .1, y:20})
    gsap.from('.loc-info', {opacity: 0, duration: .4, delay: .4, y:-20})
    

}

controlPlaces.forEach(c => c.addEventListener('click', ScrollAnimation))