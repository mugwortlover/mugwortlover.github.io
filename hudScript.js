responses = ['Well, too bad I don\'t really care what you think. ', 'Oh yeah? ', 'What an interesting response. ', 'Thank you for sharing. ', 'Hmm. ', 'L + Ratio ', 'I forget the part where I asked. ', 'Yur mommmmmmmmmmmmmmmmmmmmm ', 'Mama mia! (Chris Pratt voice) ']

function buttonHandler() {
    const answer = document.getElementById("answer")
    
    answer.innerHTML += responses[Math.floor(Math.random() * responses.length)]
}