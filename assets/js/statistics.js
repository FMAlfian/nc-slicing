/*============================
        Count Animation
=============================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.target;

const duration = 1800;

const step = target/(duration/16);

let current = 0;

function update(){

current += step;

if(current < target){

counter.innerText =
Math.floor(current).toLocaleString();

requestAnimationFrame(update);

}else{

counter.innerText =
target.toLocaleString();

}

}

update();

observer.unobserve(counter);

});

},{
threshold:.5
});

counters.forEach(counter=>{

observer.observe(counter);

});