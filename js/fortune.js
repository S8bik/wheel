let wheel = document.querySelector('.wheel');
let button = document.querySelector('.spin-button');
let randomNumber = 0;

function rotateWheel() {
    randomNumber = Math.floor(Math.random() * 360) + 2880 + randomNumber;
    wheel.style.transform = `rotate(${randomNumber}deg)`;
    console.log(randomNumber);
    console.log(wheel.style.transform)
}

button.addEventListener('click', rotateWheel);


