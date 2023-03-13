isDark = false
function switchMode() {
    const page = document.getElementById('page')
    if (isDark == true) {
        page.style.color = 'black'
        page.style.backgroundColor = 'white'
        isDark = false
    } else {
        page.style.color = 'white'
        page.style.backgroundColor = 'black'
        isDark = true
    }
    console.log(isDark)
}

function draw() {
	const plot = document.getElementById("canvas") ;
	const ctx = plot.getContext("2d");	
    ctx.fillStyle = 'green';
	ctx.fillRect(50, 50, 50, 50);

    console.log('called')
}