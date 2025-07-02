var strength = 0;
var reducingStrength = false;
const bar = document.getElementById('bar');
const hitbox = document.getElementById('hitbox');
hitbox.onclick = () => {
    const fist = document.getElementById('fist');
    fist.animate({ transform: 'translateX(450%)' }, {
        // timing options
        duration: 50,
        iterations: 1,
        fill: 'forwards'
    },)
    clearInterval(interval);
    document.getElementById('score').textContent = 'score: ' + strength;
}

const updateBar = () => {
    if (reducingStrength) {
        strength -= 20;
    } else {
        strength += 10;
    }
    if (strength <= 1) {
        reducingStrength = false;
    }
    if (strength >= 100) {
        reducingStrength = true;
    }

    bar.style.width = 100 / 100 * strength + '%';
}

const interval = setInterval(() => {
    updateBar()
}, 20)