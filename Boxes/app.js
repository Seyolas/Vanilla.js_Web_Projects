const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71','#F9A8D4'];
const SQUARES = 500;


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover',function(){

        const color = getRandomColor();
        square.style.background = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;


    });

    square.addEventListener('mouseout', function(){

        square.style.background = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';


    });


    container.appendChild(square);
}

 function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}