


// nav-------------------------------------------------------------------------

let header = document.querySelector("header")
let product = document.querySelector("#products")
let ressource = document.querySelector("#ressource");
let navList = document.querySelectorAll(".navList li");

let mouse = document.addEventListener("mousemove", function mouse(e) {
    mouseY= e.clientY;
    if(mouseY > 345){
        navUnactive(product)
        navUnactive(ressource)
    }
});

function navActive(section){
    header.classList.replace("unactive", "active");
    product.classList.replace("active", "unactive");
    ressource.classList.replace("active", "unactive");
    if (section != undefined) {
        section.classList.replace("unactive", "active");
    }
}

function navUnactive(section){
    setTimeout(() =>{
        header.classList.replace("active","unactive");
    },150)
    if(section != undefined){
        section.classList.replace("active", "unactive");
    }
}

navList[0].addEventListener("mouseenter", () => {
    navActive(products)
});

navList[1].addEventListener("mouseenter", () => {
    navActive(ressource)
    
});


navList[2].addEventListener("mouseenter", () => {
    navActive()
});


// -------------------------------------------------------------------------nav

// parallaxe-------------------------------------------------------------------

let parallaxe = document.querySelectorAll(".parallaxe img")

function parallaxeMove(index){
    parallaxePosition = window.innerHeight - parallaxe[index].getBoundingClientRect().top
    
    if(parallaxePosition > 0 ){
        parallaxe[index].style.top = parseInt(parallaxePosition/3)  + "px";
    }
}

addEventListener("scroll",() => {
    parallaxeMove(0)
    parallaxeMove(1)
})


// -------------------------------------------------------------------parallaxe

//gallery----------------------------------------------------------------------

let left = document.querySelector("btnL")
let right = document.querySelector("btnR")

let img = document.querySelector("#galleryImg")
let Author = document.querySelector("#galleryAuthor")
let Text = document.querySelector("#galleryText")


// left.addEventListener("click",() =>{

// })




//----------------------------------------------------------------------gallery