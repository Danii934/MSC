let currpos,cpt,tabImgs,carrousel;
function liker(e) {
    e.target.classList.toggle("liked");
}

function compteur(){
    let i = 0;
    return () => i++;
}



function playVid(e){
    let bouton = document.querySelector(".playb");
        e.target.pause();
        bouton.style.display = 'flex';
        e.preventDefault();
}

let video;
let nb_clicks;
window.addEventListener('load',() =>{

    tabImgs = [];
    for(let i = 1 ; i <= 3;i++){
        tabImgs.push("images/s"+i+".png");
    }
    cpt = compteur();
    nb_clicks = compteur();
    currpos = 0;
    let hearts =  document.querySelectorAll("#produits .fa-heart");
    hearts.forEach((e)=>e.addEventListener('click',liker));
    let cookies =  document.getElementById("cookies");
    let cookies_button =  document.querySelectorAll("#cookies button");
    cookies_button.forEach((e) => e.addEventListener('click',() =>{
        cookies.style.display = 'none';
    }) )
    let carrousel = document.querySelector(".carrousel");
    tabImgs.forEach((e) =>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = e;
        img.style.objectFit = "cover";
        div.appendChild(img)
        carrousel.appendChild(div);
    } )
    $('.carrousel').slick({
        prevArrow : ".left",
        nextArrow : ".right",
        autoplay : true,
        autoplaySpeed: 2000,
    });
    
    // new ResizeObserver(entries => {
    //     if(entries[0].contentRect.width <= 990){
    //         $('.container')[0].style.display = 'none';
    //     }
    //     else{
    //         $('.container')[0].style.display = 'flex';
    //     }
    // }).observe(document.body);

    let bouton = document.querySelector(".playb");
    video = document.querySelector("#video video");
    bouton.addEventListener('click',() =>{
        let bouton = document.querySelector(".playb");
            video.play();
            bouton.style.display = 'none';
            video.controls = true;            


    });
    video.addEventListener('click',playVid);
    let hamburger =  document.querySelector(".fa-bars");
    hamburger.addEventListener('click',(e) =>{
        let menu = document.querySelector(".menu");
        menu.classList.toggle("show");
        e.target.classList.toggle("fa-xmark");

    })
})