// let activeSlide;
// let nextSlide;
// let slideList = document.getElementsByClassName(`slide`);

// document.getElementById(`next`).addEventListener(`click`, function(){
//     for (let i = 0; i < slideList.length; i++){
//         const slide = slideList[i];
//         if (slide.classList.contains(`active`)){
//             slide.classList.remove(`active`);
//             activeSlide = i;
//         }
//     }
    
//     nextSlide = activeSlide + 1;
    
//     if (nextSlide >= slideList.length){
//         nextSlide = 0;
//     }
    
//     slideList[nextSlide].classList.add(`active`);
// })


//recupero tutte le slide e le metto in un array
let slides = document.getElementsByClassName("slide");

//conto le slide
//ora so che posso impostare come active una slide con indice tra (0) e (nSlides-1)
let nSlides = slides.length

//so che al caricamento della pagina l'active in html sarà sulla prima immagine
let slideSelected = 0;

//Al click sul pulsante
document.getElementById("next").addEventListener("click", function () {

	//Rimuovo l'active attuale
	slides[slideSelected].classList.remove("active");
	console.log("Selezione -> rimuovi", slideSelected);
	
	//se non sono arrivato all'ultima immagine
	if( slideSelected < nSlides - 1 ){
		//la nuova selected è la prossima
		slideSelected++;
	} else {
		//la nuova selected è la prima
		slideSelected = 0;
	}
	
	//aggiungo l'active alla successiva
	slides[slideSelected].classList.add("active");
	console.log("Selezione -> aggiungi", slideSelected);
});


//Esempio di event handler
document.getElementById("previous").addEventListener("click", function () {
    //Rimuovo l'active attuale
	slides[slideSelected].classList.remove("active");
	console.log("Selezione -> rimuovi", slideSelected);
    //se non sono arrivato all'ultima immagine
	if( slideSelected > 0){
		//la nuova selected è la prossima
		slideSelected--;
	} else {
		//la nuova selected è la prima
		slideSelected = 4;
	}

    //aggiungo l'active alla successiva
	slides[slideSelected].classList.add("active");
	console.log("Selezione -> aggiungi", slideSelected); 
});

document.getElementById("thumb-0").addEventListener("click", function (){
	slides[0].classList.add(`active`);
	slides[slideSelected].classList.remove(`active`);
	slideSelected = 0;
})

document.getElementById("thumb-1").addEventListener("click", function (){
	slides[1].classList.add(`active`);
	slides[slideSelected].classList.remove(`active`);
	slideSelected = 1;
})

document.getElementById("thumb-2").addEventListener("click", function (){
	slides[2].classList.add(`active`);
	slides[slideSelected].classList.remove(`active`);
	slideSelected = 2;
})

document.getElementById("thumb-3").addEventListener("click", function (){
	slides[3].classList.add(`active`);
	slides[slideSelected].classList.remove(`active`);
	slideSelected = 3;
})

document.getElementById("thumb-4").addEventListener("click", function (){
	slides[4].classList.add(`active`);
	slides[slideSelected].classList.remove(`active`);
	slideSelected = 4;
})

