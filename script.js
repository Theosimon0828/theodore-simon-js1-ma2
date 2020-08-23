// question 1

const changeBG = document.getElementById("bg");
changeBG.onclick = function () {
    document.body.style.background ="green";
}

//question 2

const button2 = document.querySelector(".toggler");

const toggleBox = document.querySelector(".togglee");

button2.onclick = function() {
    toggleBox.classList.toggle("extra");

    if (toggleBox.className === "togglee extra" ){
        toggleBox.innerHTML = "Extra";
    }
    else{
        toggleBox.innerHTML = "Toggle my class.";
    }
}

//question 3

const dropdown = document.querySelector("select");
const paragraphsContainer = document.querySelector(".paragraphs-container");

dropdown.onchange = function () {
    paragraphsContainer.innerHTML="";
    let selectedValue = this.value;
    for (let i = 1; i <= selectedValue; i++) {
        paragraphsContainer.innerHTML += `<div class="paragraphs-container"></div>`;
    }    
}

//question 4

const message = document.querySelector(".input");
const characterCount = document.querySelector(".char-count b");

message.onkeyup = function () {
    // console.log(event.target.value.length);
    const count = event.target.value.length;
    characterCount.innerHTML = count;
};

//question 5

// const nav = document.querySelector("body");

function handleScroll() {
    // console.log(window.scrollY);
    const scrolledY = window.scrollY;
    if (scrolledY > 35) {
        document.body.classList.add("highlight");
    } 
    else {
        document.body.classList.remove("highlight");
    }
    }
window.onscroll = handleScroll;

