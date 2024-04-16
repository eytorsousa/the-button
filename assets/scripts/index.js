const max = document.querySelector(".max");
const resets = document.querySelector(".resets");
const button = document.querySelector(".button");
const number = document.querySelector(".number");

const audio = new Audio('assets/media/click.mp3');
const audio2 = new Audio('assets/media/reset.mp3');

const body = document.querySelector("body");
const bg2 = document.querySelector(".bg2");
const mode = document.querySelector(".mode");
const credits = document.querySelector("#credits");
const link = document.querySelector("#link");

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


/* ---------------------------------------- Settings ----------------------------------------*/
const settings = document.querySelector(".settings");
const back = document.querySelector(".back");
const menu = document.querySelector(".menu");

settings.addEventListener("click", openMenu);
back.addEventListener("click", openMenu);

function openMenu(){
    menu.classList.toggle("open");
    menu.classList.toggle("closed");
}

/* ---------------------------------------- Cores do Botão ----------------------------------------*/
const colors = Array.from(document.querySelectorAll(".color"));
const bg1 = document.querySelector(".bg1");

const presets = [
    {
        c1 : '#FF494B',
        c2 : '#9a2f30'
    },
    {
        c1: '#A1E4C6',
        c2 : '#74bda4'
    },
    {
        c1: '#461e29',
        c2: '#230f14'
    },
    {
        c1: '#aa7dfc',
        c2: '#8a66c5'
    }
];

for(let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", ()=> {
        button.style.backgroundColor = `${presets[i].c1}`;
        bg1.style.backgroundColor = `${presets[i].c2}`;
    });
}
