function changeTimeBar(e) {
    horizontalScrollStart = horizontalScroll.getBoundingClientRect().left;
    horizontalScrollEnd = horizontalScroll.getBoundingClientRect().right;
    document.addEventListener('click', changeLineWidth);
    document.addEventListener('mousemove', changeLineWidth);
    document.addEventListener('mouseup', removeLineWidthEvents);
} 
function moveSep(e) {
    x_pos = e.clientX;
    wid = window.getComputedStyle(aside).width;
    wid = parseInt(wid, 10);
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', removeSepEvents);
}
function resize(e) {
    let dx = e.clientX - x_pos;
    let w = wid + dx;

    if (w < window.innerWidth * 0.1) {
        if (globalThis.collapsedSide == false) { getCollapse() }
        
    } else {
        if (w < (window.innerWidth * 0.3)) {
            if (w < window.innerWidth * 0.28) {
                showtags.style.display = 'block'; 
            } else { showtags.style.display = "none"; }
            
            aside.style.width = `${w}px`;
            expandLib.firstElementChild.classList.remove("rotate180");
        }
        else if ((window.innerWidth * 0.427) < w) {
            expandLib.firstElementChild.classList.add("rotate180"); 
            aside.style.width = `${w}px`;
        }
        if (globalThis.collapsedSide == true) { getUncollapse() };
    }
}
function getCollapse(e) {
    globalThis.collapsedSide = true 
    for (let i = 0; i < 2; i++) {
        aside.children[0].children[i].children[1].style.display = 'none';
        aside.children[0].style.width = 'fit-content'; 
    }
    aside.children[1].children[0].children[0].children[0].children[1].style.display = 'none';
    aside.children[1].children[0].children[1].style.display = 'none';
    aside.children[1].children[1].style.display = 'none';
    aside.children[1].children[2].children[0].style.display = 'none';
    aside.children[1].children[0].style.display = 'gird';
    aside.children[1].children[0].style.placeContent = 'center';
    for (let i = 1; i < aside.children[1].children[2].childElementCount; i++){
        aside.children[1].children[2].children[i].children[1].style.display = 'none'; }

    aside.children[1].style.width = 'fit-content';
    aside.style.width = 'fit-content';
    aside.style.minWidth = '0';
    aside.querySelector('.left').style.marginLeft = '0px';
    aside.querySelector('.wide-lib-card-container').style.maxHeight = '82%';
}

function getUncollapse(e) {
    globalThis.collapsedSide = false
    for (let i = 0; i < 2; i++) {
        aside.children[0].style.width = '100%';
        aside.children[0].children[i].children[1].style.display = 'block';
    }
    aside.children[1].children[0].children[0].children[0].children[1].style.display = 'block';
    aside.children[1].children[0].children[1].style.display = 'flex';
    aside.children[1].children[1].style.display = 'flex';
    aside.children[1].children[2].children[0].style.display = 'flex';
    aside.children[1].children[0].style.display = 'flex';
    aside.children[1].children[0].style.placeContent = 'space-between';
    for (let i = 1; i < aside.children[1].children[2].childElementCount; i++){
        aside.children[1].children[2].children[i].children[1].style.display = 'block'; }
    aside.children[1].style.width = 'auto';
    aside.style.width = 'auto';
    aside.style.minWidth = '280px';
    aside.querySelector('.left').style.marginLeft = '4px';
    aside.querySelector('.wide-lib-card-container').style.maxHeight = '72%';
}

function removeSepEvents(e) {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', removeSepEvents);
} 
function changeLineWidth(e) {
    if (e.clientX < horizontalScrollStart ) {
        setCurBarWidth = '0%';
    } else if (e.clientX > horizontalScrollEnd) {
        setCurBarWidth = '100%';
    } else {
        setCurBarWidth = ((e.clientX - horizontalScrollStart) / (horizontalScrollEnd - horizontalScrollStart)) * 100
        setCurBarWidth = `${setCurBarWidth}%`;}
    document.removeEventListener('click', changeLineWidth);
    songCurrTimeBar.style.width = setCurBarWidth
} 
function removeLineWidthEvents(e){
    document.removeEventListener('mousemove', changeLineWidth);
    document.removeEventListener('mouseup', removeLineWidthEvents);
} 
function switchLibWidth(e) {
    if (parseFloat(aside.style.width) <= (window.innerWidth * 0.4)) {
        aside.style.width = `${window.innerWidth * 0.428}px`;
        expandLib.firstElementChild.classList.add("rotate180");
        showtags.style.display = "none";
    }
    else {
        aside.style.width = `${window.innerWidth * 0.3}px`;
        expandLib.firstElementChild.classList.remove("rotate180");
    }
} 
function tagsSlideLeft(e) {
    tagBtn.style.transform.translateX = '10px';
} 
function addLibWideCard(imgSource, cardTitle, bottomPart) {
    const card = document.createElement('div')
    card.className = 'wide-lib-card'
    card.innerHTML = `
<img src="${imgSource}">
<div>
    <div class="card-inner-text">
        <h4 class="card-title">${cardTitle}</h4>
        <div class="card-bottom">${bottomPart}</div>
    </div>
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

sep.addEventListener('mousedown', moveSep);
horizontalScroll.addEventListener('mousedown', changeTimeBar);
expandLib.addEventListener('click', switchLibWidth);
tagBtn.forEach((tag) => {
    tag.addEventListener('click', tagsSlideLeft);
})

collapsedSide = false

addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
addLibWideCard('assets/zebra.jfif', 'Like Songs', 'Album · All But 6')
