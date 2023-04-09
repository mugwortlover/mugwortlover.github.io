
function keyHandler() {
    const key = event.key
    const box = document.getElementById('box')

    if (key == ' ') {
        box.innerHTML = 'abba '.repeat(250)
    }
}

document.addEventListener('keydown', keyHandler)