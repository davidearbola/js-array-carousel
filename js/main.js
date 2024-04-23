let activeSlide;
let nextSlide;
let slideList = document.getElementsByClassName(`slide`);


for (let i = 0; i < slideList.length; i++){
    const slide = slideList[i];
    if (slide.classList.contains(`active`)){
        slide.classList.remove(`active`);
        activeSlide = i;
    }
}

nextSlide = activeSlide + 1;

if (nextSlide >= slideList.length){
    nextSlide = 0;
}

slideList[nextSlide].classList.add(`active`);


