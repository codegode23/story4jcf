
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
