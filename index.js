var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
var box6 = document.querySelector('.box6')
var box7 = document.querySelector('.box7')
var box8 = document.querySelector('.box8')
var box9 = document.querySelector('.box9')

var boxArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
var toggle = true;
var scoreOfPlayer1 = 0;
var scoreOfPlayer2 = 0;

document.querySelector('.x-score').textContent = '';
document.querySelector('.o-score').textContent = '';

// addEventListener 
for (let i = 0; i < 9; i++) {
    boxArr[i].addEventListener(('click'), function(event) {
        if (event.target.textContent === '' && !win()) {
            if (toggle == true) {
                event.target.textContent = 'X'
                toggle = false;
                if (win()) {
                    document.querySelector('.notice').style.display = "block";
                    document.querySelector('.notice').textContent = "Player 1 Wins!";
                    scoreOfPlayer1++;
                    document.querySelector('.x-score').textContent = `${scoreOfPlayer1}`;
                };
            } else {
                event.target.textContent = 'O'
                toggle = true;
                if (win()) {
                    document.querySelector('.notice').style.display = "block";
                    document.querySelector('.notice').textContent = "Player 2 Wins!";
                    scoreOfPlayer2++;
                    document.querySelector('.o-score').textContent = `${scoreOfPlayer2}`;
                };
            }
        }
    })
}

// win condition
function win() {
    if ((box1.textContent == 'X' && box2.textContent == 'X' && box3.textContent == 'X') || (box1.textContent == 'O' && box2.textContent == 'O' && box3.textContent == 'O')) {
        box1.style.backgroundColor = 'green';
        box2.style.backgroundColor = 'green';
        box3.style.backgroundColor = 'green';

        return true;
    } else if ((box4.textContent == 'X' && box5.textContent == 'X' && box6.textContent == 'X') || (box4.textContent == 'O' && box5.textContent == 'O' && box6.textContent == 'O')) {
        box4.style.backgroundColor = 'green';
        box5.style.backgroundColor = 'green';
        box6.style.backgroundColor = 'green';
        return true;
    } else if ((box7.textContent == 'X' && box8.textContent == 'X' && box9.textContent == 'X') || (box7.textContent == 'O' && box8.textContent == 'O' && box9.textContent == 'O')) {
        box7.style.backgroundColor = 'green';
        box8.style.backgroundColor = 'green';
        box9.style.backgroundColor = 'green';
        return true;
    } else if ((box1.textContent == 'X' && box5.textContent == 'X' && box9.textContent == 'X') || (box1.textContent == 'O' && box5.textContent == 'O' && box9.textContent == 'O')) {
        box1.style.backgroundColor = 'green';
        box5.style.backgroundColor = 'green';
        box9.style.backgroundColor = 'green';
        return true;
    } else if ((box3.textContent == 'X' && box5.textContent == 'X' && box7.textContent == 'X') || (box3.textContent == 'O' && box5.textContent == 'O' && box7.textContent == 'O')) {
        box3.style.backgroundColor = 'green';
        box5.style.backgroundColor = 'green';
        box7.style.backgroundColor = 'green';
        return true;
    } else if ((box1.textContent == 'X' && box4.textContent == 'X' && box7.textContent == 'X') || (box1.textContent == 'O' && box4.textContent == 'O' && box7.textContent == 'O')) {
        box1.style.backgroundColor = 'green';
        box4.style.backgroundColor = 'green';
        box7.style.backgroundColor = 'green';
        return true;
    } else if ((box2.textContent == 'X' && box5.textContent == 'X' && box8.textContent == 'X') || (box2.textContent == 'O' && box5.textContent == 'O' && box8.textContent == 'O')) {
        box2.style.backgroundColor = 'green';
        box5.style.backgroundColor = 'green';
        box8.style.backgroundColor = 'green';
        return true;
    } else if ((box3.textContent == 'X' && box6.textContent == 'X' && box9.textContent == 'X') || (box3.textContent == 'O' && box6.textContent == 'O' && box9.textContent == 'O')) {
        box3.style.backgroundColor = 'green';
        box6.style.backgroundColor = 'green';
        box9.style.backgroundColor = 'green';
        return true;
    } else if (box1.textContent != '' && box2.textContent != '' && box3.textContent != '' && box4.textContent != '' && box5.textContent != '' && box6.textContent != '' && box7.textContent != '' && box8.textContent != '' && box9.textContent != '') {
        document.querySelector('.notice').style.display = "block";
        document.querySelector('.notice').textContent = 'Draw';
    }
}

// restart button works
document.querySelector('.restart').addEventListener('click', function() {
    for (let i = 0; i < 9; i++) {
        boxArr[i].textContent = '';
    }
    for (let i = 0; i < 9; i++) {
        boxArr[i].style.backgroundColor = '';
    }
    toggle = true;
    document.querySelector('.notice').style.display = "none";
})

// reset button works
document.querySelector('.reset').addEventListener('click', function() {
    for (let i = 0; i < 9; i++) {
        boxArr[i].textContent = '';
    }
    for (let i = 0; i < 9; i++) {
        boxArr[i].style.backgroundColor = '';
    }
    scoreOfPlayer1 = 0;
    scoreOfPlayer2 = 0;
    document.querySelector('.x-score').textContent = '';
    document.querySelector('.o-score').textContent = '';
    toggle = true;
    document.querySelector('.notice').style.display = "none";
})