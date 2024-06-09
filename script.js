function changeWidth(e) {
    
    if (e.target.className = 'line-above') {
        horizontalScrollStart = horizontalScroll.getBoundingClientRect().left;
        horizontalScrollEnd = horizontalScroll.getBoundingClientRect().right;
        document.addEventListener('click', changeLineWidth);
        document.addEventListener('mousemove', changeLineWidth);
        document.addEventListener('mouseup', removeLineWidthEvents);
    } else {
        x_pos = e.clientX;
        wid = window.getComputedStyle(aside).width;
        wid = parseInt(wid, 10);
        document.addEventListener('mousemove', resize);
        document.addEventListener('mouseup', removeSepEvents);
        }
} function resize(e) {
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
} function removeSepEvents(e) {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', removeSepEvents);
} function changeLineWidth(e) {
    if (e.clientX < horizontalScrollStart ) {
        setCurBarWidth = '0%';
    } else if (e.clientX > horizontalScrollEnd) {
        setCurBarWidth = '100%';
    } else {
        setCurBarWidth = ((e.clientX - horizontalScrollStart) / (horizontalScrollEnd - horizontalScrollStart)) * 100
        setCurBarWidth = `${setCurBarWidth}%`;}
    console.log(setCurBarWidth)
    songCurrTimeBar.style.width = setCurBarWidth
} function removeLineWidthEvents(e){
    document.removeEventListener('mousemove', changeLineWidth);
    document.removeEventListener('mouseup', removeLineWidthEvents);
} function switchLibWidth(e) {
    if (parseFloat(aside.style.width) <= (window.innerWidth * 0.4)) {
        aside.style.width = `${window.innerWidth * 0.428}px`;
        expandLib.firstElementChild.classList.add("rotate180");
    }
    else {
        aside.style.width = `${window.innerWidth * 0.3}px`;
        expandLib.firstElementChild.classList.remove("rotate180");
    }
} function tagsSlideLeft(e) {
    tagBtn.style.transform.translateX = '10px';
} function addLibWideCard(imgSource, cardTitle, bottomPart) {
    const card = document.createElement('div')
    card.className = 'wide-lib-card'
    card.innerHTML = `
<img src="${imgSource}">
<div class="card-inner-text">
    <h4 class="card-title">${cardTitle}</h4>
    <div class="card-bottom">${bottomPart}</div>
</div>`
    wideLibCardContainer.append(card)
} 

const home = document.querySelector(".home");
const sep = document.querySelector('.sep');
const aside = document.querySelector('aside');
const showtags = document.querySelector('.hidden-more');
const expandLib = document.getElementById('expandLib');
const tagBtn = document.querySelectorAll('.tag-btn');
const wideLibCardContainer = document.querySelector('.wide-lib-card-container');
const horizontalScroll = document.querySelector(".lines");
const songCurrTimeBar = document.getElementById("timeline-above")
console.log(songCurrTimeBar)

sep.addEventListener('mousedown', changeWidth);
horizontalScroll.addEventListener('mousedown', changeWidth);
expandLib.addEventListener('click', switchLibWidth);
tagBtn.forEach((tag) => {
    tag.addEventListener('click', tagsSlideLeft);
})

addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')