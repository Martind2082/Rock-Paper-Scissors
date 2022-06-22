let rock = document.getElementsByClassName('rock');
let paper = document.getElementsByClassName('paper');
let scissors = document.getElementsByClassName('scissors');
let person = document.getElementById('person');
let robot = document.getElementById('robot');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

let visible = document.getElementById('visible');
let secret = document.getElementById('secret');

let win = [[0, 2], [1, 0], [2, 1]];
let answers = ['rock', 'paper', 'scissors'];

let hscore = 0;
let rscore = 0;

function reveal() {
    secret.style.display = 'flex';
    visible.style.display = 'none';
}

document.getElementById('reset').onclick = function() {
    score1.textContent = 'Your score: 0';
    score2.textContent = 'Computer score: 0';
}

document.querySelectorAll('.rps').forEach(val => {
    val.onclick = function(e) {
        reveal();
        setTimeout(() => {
            document.getElementById('fight').style.display = 'flex';
        }, 600);
        setTimeout(() => {
            document.getElementById('fight').style.display = 'none';
        }, 2700);
        let ranswer = Math.floor(Math.random() * 3);
        let id = parseInt(e.target.id);

        let hanswer = answers[id];
        let roboanswer = answers[ranswer];
        let array = [hanswer, roboanswer];
        
        if (hanswer === roboanswer) {
            result.textContent = 'Tie';
        }
        win.forEach(val => {
            if (val[0] === id && val[1] === ranswer) {
                result.textContent = 'Victory!';
                hscore++;
                score1.textContent = `Your score: ${hscore}`;
            }
        });
        if (result.textContent === '') {
            result.textContent = 'Defeat';
            rscore++;
            score2.textContent = `Computer score: ${rscore}`;
        }

        let pic1;
        let pic2;
        setTimeout(() => {
            pic1 = document.createElement('div');
            pic1.innerHTML = `<img src="./${hanswer}.png"></img>`;
            pic1.style.position = 'absolute';
            pic1.classList.add('leftpic');
            secret.append(pic1);
    
            pic2 = document.createElement('div');
            pic2.innerHTML = `<img src="./${roboanswer}.png"></img>`;
            pic2.style.position = 'absolute';
            pic2.classList.add('rightpic');
            secret.append(pic2);
            setTimeout(() => {
                if (result.textContent === 'Tie') {
                    pic1.classList.add('leftfall');
                    pic2.classList.add('rightfall');
                } else if (result.textContent === 'Victory!') {
                    pic2.classList.add('rightfall');
                } else {
                    pic1.classList.add('leftfall');
                }
            },700);
        }, 2700);
        setTimeout(() => {
            result.style.display = 'block';
        }, 3700);
    
        setTimeout(() => {
            secret.style.display = 'none';
            visible.style.display = 'block';
            result.textContent = '';
            pic1.remove();
            pic2.remove();
            result.style.display = 'none';
        }, 5000);
    }
});