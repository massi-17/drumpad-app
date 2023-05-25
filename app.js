import data from '/assets/data.js'



const buttons = document.querySelectorAll('.square')

console.log(buttons)




function playSound(dataType) {
    const audio = new Audio('./assets/sounds/' + dataType + '.webm');
    return audio.play()
}

// function playRec() {
// //     let track = new Audio('./assets/sounds/' + soundArray[0] + '.webm')
// //     return track.play()
// }

function playRec() {
    soundArray.forEach(function (el, i) {
        setTimeout(function () {
            console.log(el);
            track = new Audio('./assets/sounds/' + soundArray[i] + '.webm')
            track.play()
        }, i * 500)
    })
}




buttons.forEach(button => {
    button.addEventListener('click', e => {
        playSound(e.target.dataset.type)
        if (recording === true) {
            soundArray.push(e.target.dataset.type)
            console.log(soundArray)
        }
    })
})

//Setting
const recBtn = document.getElementById('rec')
const stopBtn = document.getElementById('stop')
const playBtn = document.getElementById('play')
const deleteBtn = document.getElementById('delete')
const recIcon = document.querySelector('.rec')
const playIcon = document.querySelector('.play')
let msg = document.querySelector('.msg')
let soundArray = []

let recording = false
let stop = false
recBtn.addEventListener('click', e => {

    msg.innerHTML = 'is recording...'
    recording = true
    stop = false

    recBtn.style.color = 'red'
    recIcon.classList.add('playBtnAnim')
})

stopBtn.addEventListener('click', e => {
    if (recording === false) {
        alert('start the rec first!')
    } else {
        msg.innerHTML = 'has one record'
        recording = false
        stop = true
    }
    recBtn.style.color = '#56437B'
    recIcon.classList.remove('playBtnAnim')
    playIcon.style.color = '#56437B'
})
let track


playBtn.addEventListener('click', e => {
    if (stop === false) {
        alert('there is no recording!')
    } else {
        msg.innerHTML = 'is playing...'
        playIcon.style.color = 'green'
        console.log(soundArray)
        playRec()
        if (e.target === window) {
            console.log(e.target)
        }

    }
    recBtn.style.color = '#56437B'

})

deleteBtn.addEventListener('click', e => {
    msg.innerHTML = 'no record yet'
    soundArray = []
    recBtn.style.color = '#56437B'
    playIcon.style.color = '#56437B'
    recIcon.classList.remove('playBtnAnim')
})

