const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const actionText = document.getElementById('action-move');

function setHover(element, color, text) {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hovered');
        actionText.textContent = text;
        actionText.style.color = color;
    });

    element.addEventListener('mouseleave', () => {
        element.classList.remove('hovered');
        actionText.textContent = 'WAIT';
    });
}

setHover(redLight, 'red', 'STOP');
setHover(yellowLight, 'yellow', 'WAIT');
setHover(greenLight, 'green', 'GO');