function changeWidth(e) {
    x_pos = e.clientX;
    wid = window.getComputedStyle(aside).width;
    wid = parseInt(wid, 10);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', removeSepEvents);
}

function resize(e) {
    let dx = e.clientX - x_pos;
    let w = wid + dx;

    if (w < window.innerWidth * 0.3 ) {
        showtags.style.display = 'block';}
    else{ showtags.style.display = "none"; }

    if (w < (window.innerWidth * 0.3))  {
        aside.style.width = `${w}px`;
        expandLib.firstElementChild.classList.remove("rotate180");
    }
    else if ((window.innerWidth * 0.427) < w) {
        aside.style.width = `${w}px`;
        expandLib.firstElementChild.classList.add("rotate180");
    }
}
function removeSepEvents(e) {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', removeSepEvents);
}

const home = document.querySelector(".home")

const sep = document.querySelector('.sep');
const aside = document.querySelector('aside');
const showtags = document.querySelector('.hidden-more');


sep.addEventListener('mousedown', changeWidth)

const expandLib = document.getElementById('expandLib')

expandLib.addEventListener('click', switchLibWidth)

function switchLibWidth(e) {
    if (parseFloat(aside.style.width) <= (window.innerWidth * 0.4)) {
        aside.style.width = `${window.innerWidth * 0.428}px`;
        expandLib.firstElementChild.classList.add("rotate180");
    }
    else {
        aside.style.width = `${window.innerWidth * 0.3}px`;
        expandLib.firstElementChild.classList.remove("rotate180");
    }
}