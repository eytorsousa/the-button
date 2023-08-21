const max = document.getElementById("max");
const resets = document.getElementById("resets");
const button = document.getElementById("button");
const number = document.getElementById("number");

const audio = new Audio('assets/media/click.mp3');
const audio2 = new Audio('assets/media/reset.mp3');

const body = document.getElementById("body");
const bg2 = document.getElementById("bg2");
const bg1 = document.getElementById("bg1");
const mode = document.getElementById("mode");
const credits = document.getElementById("credits");
const link = document.getElementById("link");

var click = 0, resetChance = 0, resetsValue = 0, maxValue = 0, flag = 0;
var randomChance = Math.floor(Math.random() * 101);

button.addEventListener("click", mainFunction);

function mainFunction(){
    buttonClicked();

    randomChance = Math.floor(Math.random() * 101);
    if(randomChance < resetChance){
        audio2.play();
        buttonReset();
    } else{
        audio.play();
        buttonContinue();
    }
}

function buttonClicked(){
    button.disabled = true;
    button.classList.add("button-hover");
    
    setTimeout(function(){
        button.classList.remove("button-hover");
    }, 180);

    setTimeout(function(){
        button.disabled = false;
    }, 400);
}

function buttonReset(){
    number.innerHTML = "0";
    resetChance = 0;
    resetsValue += 1;
    resets.innerHTML = `Resets ${resetsValue}`;

    changeBg2();
}

function changeBg2(){
    let width = window.innerWidth;

    if(width <= 500){
        bg2.style.width = '370px';
        bg2.style.height = '370px';
        bg2.style.transform = 'translate(-35px, -5px)';
    } else{
        bg2.style.width = '450px';
        bg2.style.height = '450px';
        bg2.style.transform = 'translate(-30px, 0px)';
    }

    setTimeout(function(){
        if(width <= 500){
            bg2.style.width = '340px';
            bg2.style.height = '340px';
            bg2.style.transform = 'translate(-20px, 10px)';
        } else{
            bg2.style.width = '430px';
            bg2.style.height = '430px';
            bg2.style.transform = 'translate(-20px, 10px)';
        }
    }, 150);
}

function buttonContinue() {
    click += 1;
    resetChance += 1;

    setTimeout(function(){
        number.innerHTML = resetChance;

        if(resetChance > maxValue){
            maxValue = resetChance;
            max.innerHTML = `Max ${maxValue}`
        }
    }, 200);
}


/* ---------------------------------------- Dark Mode ----------------------------------------*/
mode.addEventListener("click", () => {
    const darkModeOn = mode.classList.contains("dark-mode");
    const darkModeBg2 = bg2.classList.contains("dark-bg2");
    const darkSettings = settings.classList.contains("dark-settings");
    const darkItens = itens.classList.contains("dark-itens");
    const darkLabel = label.classList.contains("dark-label");
    const darkInputs = inputs.classList.contains("dark-inputs");
    const darkBack = back.classList.contains("dark-back");

    mode.disabled = true;

    body.classList.toggle("dark-body");
    max.classList.toggle("dark-max");
    resets.classList.toggle("dark-resets"); 
    credits.classList.toggle("dark-credits");
    link.classList.toggle("dark-link");
    
    mode.classList.add("dark-mode");
    mode.classList.remove("light-mode");

    bg2.classList.add("dark-bg2");
    bg2.classList.remove("light-bg2");

    settings.classList.add("dark-settings");
    settings.classList.remove("light-settings");

    itens.classList.add("dark-itens");
    itens.classList.remove("light-itens");

    label.classList.add("dark-label");
    label.classList.remove("light-label");

    inputs.classList.add("dark-inputs");
    inputs.classList.remove("light-inputs");

    back.classList.add("dark-back");
    back.classList.remove("light-back");
    
    if(darkModeBg2) {
        bg2.classList.remove("dark-bg2");
        bg2.classList.add("light-bg2");
    }

    if(darkModeOn){
        mode.classList.add("light-mode");
        mode.classList.remove("dark-mode");
    }

    if(darkSettings){
        settings.classList.add("light-settings");
        settings.classList.remove("dark-settings");
    }

    if(darkItens){
        itens.classList.add("light-itens");
        itens.classList.remove("dark-itens");
    }

    if(darkLabel){
        label.classList.add("light-label");
        label.classList.remove("dark-label");
    }

    if(darkInputs){
        inputs.classList.add("light-inputs");
        inputs.classList.remove("dark-inputs");
    }

    if(darkBack){
        back.classList.add("light-back");
        back.classList.remove("dark-back");
    }

    setTimeout(function(){
        mode.disabled = false;
    }, 250);
});

/* ---------------------------------------- Settings ----------------------------------------*/
const settings = document.getElementById("settings");
const back = document.getElementById("back");
const menu = document.getElementById("menu");
const itens = document.getElementById("itens");
const label = document.getElementById("label");
const inputs = document.getElementById("inputs");

settings.addEventListener("click", openMenu);
back.addEventListener("click", closeMenu);

function openMenu(){
    menu.classList.add("open");
    menu.classList.remove("closed");
}

function closeMenu(){
    menu.classList.add("closed");
    menu.classList.remove("open");
}

/* ---------------------------------------- Cores do Botão ----------------------------------------*/
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const brown = document.querySelector("#brown");
const purple = document.querySelector("#purple");

red.addEventListener("click", () => {
    button.style.backgroundColor = '#FF494B';
    bg1.style.backgroundColor = '#9a2f30';
});

green.addEventListener("click", () => {
    button.style.background = '#A1E4C6';
    bg1.style.backgroundColor = '#74bda4';
});

brown.addEventListener("click", () => {
    button.style.background = '#461e29';
    bg1.style.backgroundColor = '#230f14';
});

purple.addEventListener("click", () => {
    button.style.backgroundColor = '#aa7dfc';
    bg1.style.backgroundColor = '#8a66c5';
});
