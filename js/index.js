//VARIABLES RESULT SECTION

let resultComponent = document.querySelector('.result-component');
let stateRange = document.getElementById('state-range');
let status = document.getElementById('status');
let paragraph = document.getElementById('result-paragraph');
let numbersContainer = document.getElementById('numbers-container');

//VARIABLES SUMMARY SECTION

let reaction = document.getElementById('reaction');
let memory = document.getElementById('memory');
let verbal = document.getElementById('verbal');
let visual = document.getElementById('visual');
let buttonContinue = document.querySelector('.button');

//MOSTRAR CUANDO LA PÁGINA ESTÉ CARGADA

buttonContinue.addEventListener('click', function randomValues(){
    
    let values = [];
    for (let i=1; i<=4; i++){
        let randomNumbers = Math.round(Math.random()*100);
        values.push(randomNumbers);
    }

    values.forEach((value,index) => {
        switch(index){
        case 0: 
            reaction.innerText = value + ' / 100';
            break;
        case 1: 
            memory.innerText = value + ' / 100';
            break;
        case 2: 
            verbal.innerText = value + ' / 100';
            break;
        case 3: 
            visual.innerText = value + ' / 100';
            break;
        default:
            '0 / 0';
        }
    })

    //SUMAR VALORES PARA SACAR UNA MEDIA 
    const media = values.reduce((previousValue, currentValue)=>{
        return previousValue + currentValue;
    }, 0)

    const result = Math.round(media/4);
    stateRange.innerText = result;

    if (result >= 75){
        resultComponent.classList.add('result-component');
        numbersContainer.classList.add('numbers');
        resultComponent.classList.remove('result-component-warning', 'result-component-danger');
        numbersContainer.classList.remove('numbers-warning', 'numbers-danger');
        stateRange.innerText = result;
        status.innerText = 'Excelent';
        paragraph.innerText = '¡Congratulations! You are a person with excellent results.';
    }

    if (result <= 74 && result >= 43){
        resultComponent.classList.add('result-component-warning');
        numbersContainer.classList.add('numbers-warning');
        resultComponent.classList.remove('result-component', 'result-component-danger');
        numbersContainer.classList.remove('numbers', 'numbers-danger');
        stateRange.innerText = result;
        status.innerText = 'Normal';
        paragraph.innerText = 'You are in the normal range of people';
    }
    if (result <= 42){
        resultComponent.classList.add('result-component-danger');
        numbersContainer.classList.add('numbers-danger');
        resultComponent.classList.remove('result-component', 'result-component-warning');
        numbersContainer.classList.remove('numbers-warning', 'numbers');
        stateRange.innerText = result;
        status.innerText = 'Serious';
        paragraph.innerText = 'You are in the serious range and you should review your values';
    }

    window.addEventListener('load', randomValues);

})




