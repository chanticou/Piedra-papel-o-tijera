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


choiseOption.innerHTML='Choise an option!'

//count player
countPlayer.innerHTML = 0
countMachine.innerHTML = 0


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
    choiseOption.innerHTML=''
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
        countMachine.innerHTML=0
        countMachine.innerHTML=0
        textResult.innerHTML = 'YOU TIE'


    } else if (userOption === PAPPER && machineOption === ROCK) {
        countPlayer.innerHTML ++
        textResult.innerHTML = 'YOU WIN'



    } else if (userOption === SCISSOR && machineOption === PAPPER) {
        countPlayer.innerHTML ++
        textResult.innerHTML = 'YOU WIN'


    } else if (userOption === ROCK && machineOption === SCISSOR) {
        countPlayer.innerHTML ++
        textResult.innerHTML = 'YOU WIN'
   

    } else {
        machine(machineOption)
        textResult.innerHTML = 'YOU LOSE'
        countMachine.innerHTML = ''
        countMachine.innerHTML ++
    }
}









/*const BTNrock = document.querySelector('.btn-rock');
const BTNpapper = document.querySelector('.btn-papper');
const BTNscissor = document.querySelector('.btn-scissor');
const textResult = document.querySelector('.result-option')
const countPlayer = document.querySelector('.count-player')
const countMachine = document.querySelector('.count-machine')
//imagenes
let userImage = document.querySelector('.player-img')
let machineImage = document.querySelector('.machine-img')

//count player
countPlayer.innerHTML = 0
countMachine.innerHTML = 0


//Variables
const ROCK = 0
const PAPPER = 1
const SCISSOR = 2


//WIN;LOSE;TIE
const WIN = 'YOU WIN'
const LOSE = 'YOU LOSE!'
const TIE = 'TIE'

//count
let count = 0

//addEvebtListener
BTNrock.addEventListener('click', () => {
    play(ROCK)
});


BTNpapper.addEventListener('click', () => {
    play(PAPPER)
});


BTNscissor.addEventListener('click', () => {
    play(SCISSOR)
});



//Function PLAY
const play = (userOption) => {
    const machineOption = Math.floor(Math.random() * 3);
    machine(machineOption)
    calcResult(userOption, machineOption)
}

//MACHINE OPTION
const machine = (machineOption) => {
    switch (machineOption) {
        case 0:
            machineImage.src = './img/rock.jpg'
            break;
        case 1:
            machineImage.src = './img/papper.png'
            break;
        case 2:
            machineImage.src = './img/scissor.png'
            break;
    }
}


const calcResult = (userOption, machineOption) => {
    if (userOption === machineOption) {

        countPlayer.innerHTML = ''
        textResult.innerHTML = 'YOU TIE'
        return TIE;

    } else if (userOption === PAPPER && machineOption === ROCK) {
        userImage.src='./img/papper.png'
        countPlayer.innerHTML = ''
        countPlayer.innerHTML += 1
        textResult.innerHTML = 'YOU WIN'
        return WIN;

    } else if (userOption === SCISSOR && machineOption === PAPPER) {
        userImage.src='./img/scissor.png'
        countPlayer.innerHTML = ''
        countPlayer.innerHTML += 1
        textResult.innerHTML = 'YOU WIN'
        return WIN;

    } else if (userOption === ROCK && machineOption === SCISSOR) {
        userImage.src='./img/rock.jpg'
        countPlayer.innerHTML = ''
        textResult.innerHTML = 'YOU WIN'
        countPlayer.innerHTML += 1
        return WIN;
    } else {

        textResult.innerHTML = 'YOU LOSE'
        countMachine.innerHTML = ''
        countMachine.innerHTML += 1
        return LOSE;

    }
}

*/