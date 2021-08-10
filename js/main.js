const BTNrock = document.querySelector('.btn-rock');
const BTNpapper = document.querySelector('.btn-papper');
const BTNscissor = document.querySelector('.btn-scissor');
const textResult = document.querySelector('.result-option')
const countPlayer = document.querySelector('.count-player')
const countMachine = document.querySelector('.count-machine')
//imagenes
let userImage = document.querySelector('.player-img')
let machineImage = document.querySelector('.machine-img')

//choise
let choiseOption = document.querySelector('.choise')


//count
count_machine=0
count_player=0
countPlayer.innerHTML = 0
countMachine.innerHTML = 0




//INNERHTML
choiseOption.innerHTML = '!Choise an option!'

//Variables
const ROCK = 0
const PAPPER = 1
const SCISSOR = 2




//addEvebtListener
BTNrock.addEventListener('click', () => {
    play(ROCK)
    userImage.src = './img/roca.png'

});


BTNpapper.addEventListener('click', () => {
    play(PAPPER)
    userImage.src = './img/paper.png'
});


BTNscissor.addEventListener('click', () => {
    play(SCISSOR)
    userImage.src = "./img/scisor-real.png"

});



//Function PLAY
const play = (userOption) => {
    countPlayer.innerHTML = ''
    choiseOption.innerHTML = ''
    //contador
    const machineOption = Math.floor(Math.random() * 3);
    calcResult(userOption, machineOption)
    machine(machineOption)
}




//MACHINE OPTION
const machine = (machineOption) => {
    switch (machineOption) {
        case 0:
            machineImage.src = './img/roca.png'
            break;
        case 1:
            machineImage.src = './img/paper.png'
            break;
        case 2:
            machineImage.src = "./img/scisor-real.png"
            break;
    }
}





const calcResult = (userOption, machineOption) => {
    if (userOption === machineOption) {
        countPlayer.textContent=count_player
        countMachine.textContent=count_machine
        textResult.innerHTML = '¡YOU TIED!'


    } else if (userOption === PAPPER && machineOption === ROCK) {
        count_player++
        countPlayer.textContent=count_player
        countMachine.textContent=count_machine
        textResult.innerHTML = '¡¡¡YOU WIN!!!'



    } else if (userOption === SCISSOR && machineOption === PAPPER) {
        count_player++
        countPlayer.textContent=count_player
        countMachine.textContent=count_machine
        textResult.innerHTML = '¡¡¡YOU WIN!!!'


    } else if (userOption === ROCK && machineOption === SCISSOR) {
        count_player++
        countPlayer.textContent=count_player
        countMachine.textContent=count_machine
        textResult.innerHTML = '¡¡¡YOU WIN!!!'


    } else {
        machine(machineOption)
        count_machine++
        countMachine.textContent=count_machine
        countPlayer.textContent=count_player
        textResult.innerHTML = 'YOU LOST'

    }
}
















/*

const calcResult = (userOption, machineOption) => {
    if (userOption === machineOption) {
        contador++
        textResult.innerHTML = 'YOU TIE'


    } else if (userOption === PAPPER && machineOption === ROCK) {
        contador++
        textResult.innerHTML = 'YOU WIN'



    } else if (userOption === SCISSOR && machineOption === PAPPER) {
        contador++
        textResult.innerHTML = 'YOU WIN'


    } else if (userOption === ROCK && machineOption === SCISSOR) {
        contador++
        textResult.innerHTML = 'YOU WIN'


    } else {
        machine(machineOption)
        contador++
        textResult.innerHTML = 'YOU LOSE'

    }
}*/