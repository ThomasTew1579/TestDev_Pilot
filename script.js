


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

let left = document.querySelector(".btnL")
let right = document.querySelector(".btnR")

let video = document.querySelector("#galleryVideo");
let img = document.querySelector("#galleryImg")
let author = document.querySelector("#galleryAuthor")
let text = document.querySelector("#galleryText")



let counterCard = document.querySelectorAll("#counterCard div");

let exk = document.querySelector("#exk");
let ditp = document.querySelector("#ditp");
let bnp = document.querySelector("#bnp");

let index = 0


let content = [
  {
    video: "/assets/img/Casclient-Exki.jpg",
    img: "/assets/img/EXKi-2.png",
    author: "Thierry Soubestre",
    text: "In a few weeks, 5 critical financial data sources were integrated and information is now available every day.",
  },
  {
    video: "/assets/img/Casclient-DITP.jpg",
    img: "/assets/img/ditp.png",
    author: "Bruno Parent",
    text: "With propilot, we are able to share information in real time and use this effectively to steer the covid19 recovery plan across all ministries ",
  },
  {
    video: "/assets/img/Casclient-BNPParibas.jpg",
    img: "/assets/img/bnp-paribas.png",
    author: "Hervé Gouëzel",
    text: "The solutions offered by Pilot'in let us keep control of our plan. In the end, we were able to largely surpass our initial objectives.",
  },
];


right.addEventListener("click",() =>{
    counter("+")
})

left.addEventListener("click",() =>{
    counter("-")
})

function showContent() {
        img.classList.replace("unactive", "active");
        author.classList.replace("unactive", "active");
        text.classList.replace("unactive", "active");
}


function changeContent(index){
        img.src = content[index].img
        author.textContent = content[index].author
        text.textContent = content[index].text
        video.src = content[index].video;
}

function counter(signe) {
    img.classList.replace("active", "unactive");
    author.classList.replace("active", "unactive");
    text.classList.replace("active", "unactive");
    
    counterCard[0].classList.replace("active", "unactive");
    counterCard[1].classList.replace("active", "unactive");
    counterCard[2].classList.replace("active", "unactive");
    
    
    if (signe == "+") {
        
        video.classList.remove("activeR");
        video.classList.remove("activeL");
        video.classList.add("unactiveR");
        
        index++;

        if (index >= content.length) {
            index = 0;
        }

        counterCard[index].classList.replace("unactive", "active");
        setTimeout(() => {
            changeContent(index);
            showContent();
            return;
        }, 100);
    }
    
    if (signe == "-") {
        
        video.classList.remove("activeR");
        video.classList.remove("activeL");
        video.classList.add("unactiveL");
        
        index--;
        if (index < 0) {
            index = content.length - 1;
        }
        console.log(index)
        counterCard[index].classList.replace("unactive", "active");
        setTimeout( () => {
            showContent()
        }, 500);
        
    }
}


//----------------------------------------------------------------------gallery