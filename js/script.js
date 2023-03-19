

//Gallery

let slides = document.querySelectorAll('.right-story');
let index = 0;

//next function

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
//previous function

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

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

