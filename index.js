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
document.querySelector('.win').textContent = '';


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
    box1.style.backgroundColor = 'green';
    box2.style.backgroundColor = 'green';
    box3.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box1.textContent == 'O' && box2.textContent == 'O' && box3.textContent == 'O') {
    box1.style.backgroundColor = 'green';
    box2.style.backgroundColor = 'green';
    box3.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box4.textContent == 'X' && box5.textContent == 'X' && box6.textContent == 'X') {
    box4.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box4.textContent == 'O' && box5.textContent == 'O' && box6.textContent == 'O') {
    box4.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box7.textContent == 'X' && box8.textContent == 'X' && box9.textContent == 'X') {
    box7.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box7.textContent == 'O' && box8.textContent == 'O' && box9.textContent == 'O') {
    box7.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box1.textContent == 'X' && box5.textContent == 'X' && box9.textContent == 'X') {
    box1.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box1.textContent == 'O' && box5.textContent == 'O' && box9.textContent == 'O') {
    box1.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box3.textContent == 'X' && box5.textContent == 'X' && box7.textContent == 'X') {
    box3.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box3.textContent == 'O' && box5.textContent == 'O' && box7.textContent == 'O') {
    box3.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box1.textContent == 'X' && box4.textContent == 'X' && box7.textContent == 'X') {
    box1.style.backgroundColor = 'green';
    box4.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box1.textContent == 'O' && box4.textContent == 'O' && box7.textContent == 'O') {
    box1.style.backgroundColor = 'green';
    box4.style.backgroundColor = 'green';
    box7.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box2.textContent == 'X' && box5.textContent == 'X' && box8.textContent == 'X') {
    box2.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == 'O') {
    box2.style.backgroundColor = 'green';
    box5.style.backgroundColor = 'green';
    box8.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else if (box3.textContent == 'X' && box6.textContent == 'X' && box9.textContent == 'X') {
    box3.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play1 win';
} else if (box3.textContent == 'O' && box6.textContent == 'O' && box9.textContent == 'O') {
    box3.style.backgroundColor = 'green';
    box6.style.backgroundColor = 'green';
    box9.style.backgroundColor = 'green';
    document.querySelector('.win').textContent = 'play2 win';
} else {
    document.querySelector('.win').textContent = 'you are tie';
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
    box1.style.backgroundColor = '';
    box2.style.backgroundColor = '';
    box3.style.backgroundColor = '';
    box4.style.backgroundColor = '';
    box5.style.backgroundColor = '';
    box6.style.backgroundColor = '';
    box7.style.backgroundColor = '';
    box8.style.backgroundColor = '';
    box9.style.backgroundColor = '';
    document.querySelector('.win').textContent = '';
})