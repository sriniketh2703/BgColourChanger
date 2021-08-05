'use strict';
const basicBtn = document.querySelector('.btn-basic');
const lightBtn = document.querySelector('.btn-light');
const darkBtn = document.querySelector('.btn-dark');
const changeColorBtn = document.querySelector('.change-colour');
const hexCode = document.querySelector('.hex');
const proverb = document.querySelector('.proverb');
const title = document.querySelector('.title');
const sriniketh = document.querySelector('.sriniketh');
const created = document.querySelector('.footer');
const proverbsArray = ['“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler', '“First, solve the problem. Then, write the code.” – John Johnson', '“Knowledge is power.” – Francis Bacon', '“Java is to JavaScript what car is to Carpet.” – Chris Heilmann', '“Ruby is rubbish! PHP is phpantastic!” – Nikita Popov', '“ Code is like humor. When you have to explain it, it’s bad.” – Cory House', "“Fix the cause, not the symptom.” – Steve Maguire", "“Simplicity is the soul of efficiency.” – Austin Freeman", '“Make it work, make it right, make it fast.” – Kent Beck', '“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck'];

const openingProverb = "Don't sit like a Rock, Work Like a CLOCK! - My Sister";

// Function for turning the Text's Colours to white and Black

const whiteTextFunc = function () {
    title.style.color = 'white';
    hexCode.style.color = 'white';
    proverb.style.color = 'white';
    created.style.color = 'white';
}

const blackTextFunc = function () {
    title.style.color = 'black';
    hexCode.style.color = 'black';
    proverb.style.color = 'black';
    created.style.color = 'black';
}
proverb.textContent = openingProverb;
hexCode.textContent = '#EEEEEE'
document.body.style.backgroundColor = '#EEEEEE';
blackTextFunc();
// Adding Functionalities to the change colour Btn
basicBtn.addEventListener('click', () => {
    title.textContent = "Background Colour Changer";
    hexCode.textContent = '#EEEEEE'
    document.body.style.backgroundColor = '#EEEEEE';
    blackTextFunc();
    proverb.textContent = openingProverb;
    changeColorBtn.addEventListener('click', () => {
        const basicColors = ['blue', 'green', 'red', 'orange', 'indigo', 'violet', 'yellow'];
        let randomBasicClr = Math.trunc(Math.random() * basicColors.length);
        console.log(randomBasicClr);
        document.body.style.backgroundColor = basicColors[randomBasicClr];
        hexCode.textContent = basicColors[randomBasicClr];
        let randomProverbsArray = Math.trunc(Math.random() * proverbsArray.length);
        proverb.textContent = proverbsArray[randomProverbsArray];
        if (document.body.style.backgroundColor === 'indigo') {
            whiteTextFunc();
        }
        else {
            blackTextFunc();
        }
    });
});


// Adding Functionalities to the light colours Btn and change the values of the change colour button

lightBtn.addEventListener('click', () => {
    proverb.textContent = openingProverb;
    title.textContent = 'Light Background Colour Changer';
    document.body.style.backgroundColor = '#FFE6E6';
    blackTextFunc();
    hexCode.textContent = '#FFE6E6';
    changeColorBtn.addEventListener('click', () => {
        const basicColors = ['#64C9CF', '#FBD46D', '#DAD5AB', '#FF67E7', '#B980F0', '#EEEEEE', '#BB8760'];
        let randomBasicClr = Math.trunc(Math.random() * basicColors.length);
        console.log(randomBasicClr);
        let randomProverbsArray = Math.trunc(Math.random() * proverbsArray.length);
        proverb.textContent = proverbsArray[randomProverbsArray];
        document.body.style.backgroundColor = basicColors[randomBasicClr];
        hexCode.textContent = basicColors[randomBasicClr];   
        blackTextFunc();
        
    });
});

darkBtn.addEventListener('click', () => {
    proverb.textContent = openingProverb;
    title.textContent = 'Dark Background Colour Changer';
    document.body.style.backgroundColor = '#787A91';
    whiteTextFunc();
    hexCode.textContent = '#787A91';
    changeColorBtn.addEventListener('click', () => {
        const basicColors = ['#334756', '#7B113A', '#171717', '#734046', '#F30A49', '#00818A', '#20615B'];
        let randomBasicClr = Math.trunc(Math.random() * basicColors.length);
        console.log(randomBasicClr);
        let randomProverbsArray = Math.trunc(Math.random() * proverbsArray.length);
        proverb.textContent = proverbsArray[randomProverbsArray];
        document.body.style.backgroundColor = basicColors[randomBasicClr];
        hexCode.textContent = basicColors[randomBasicClr];   
        whiteTextFunc();
    });
});