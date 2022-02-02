var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')

var toggle = true;
var player1;
var player2;

//switch turn works
function markedNot(box) {
    box.addEventListener('click', function(event) {
        if (event.target.textContent === '') {
            if (toggle == true) {
                event.target.textContent = 'X'
                toggle = false;
            } else {
                event.target.textContent = 'O'
                toggle = true;
            }
        }

    })
}
markedNot(box1)
markedNot(box2)
markedNot(box3)
markedNot(box4)
markedNot(box5)
markedNot(box6)
markedNot(box7)
markedNot(box8)
markedNot(box9)


// win condition
if (box1.textContent == 'X' && box2.textContent == 'X' && box3.textContent == 'X') {
    console.log('player1 wins')

}


// restart button works
document.querySelector('.restart').addEventListener('click', function() {

    box1.textContent = '';
    box2.textContent = '';
    box3.textContent = '';
    box4.textContent = '';
    box5.textContent = '';
    box6.textContent = '';
    box7.textContent = '';
    box8.textContent = '';
    box9.textContent = '';

})