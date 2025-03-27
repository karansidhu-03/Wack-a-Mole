const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score= document.getElementById('score')
const timer= document.getElementById('timer')

let result = 0;
let hitPosition
let currentTimer= 60
function randomSquare(){
    squares.forEach(removeSqaure => {
        removeSqaure.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition=randomSquare.id
    
}

squares.forEach(square => {
    square.addEventListener('click',()=>{
        if(square.id == hitPosition){
            result++
            score.textContent=result
            hitPosition=null

            square.classList.add('clicked')
            setTimeout(() => {
                square.classList.remove('clicked');
            }, 200);
        }

    })
})

 
function moveMole(){
    setInterval(randomSquare,1000)
}
moveMole()

function countDown(){
    currentTimer--
    timer.textContent=currentTimer
    if(currentTimer==0){
        clearInterval(timeInterval)
        alert("GAME OVER! Your Score is " + result)
    }

}

const timeInterval= setInterval(countDown,1000)