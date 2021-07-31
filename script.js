const container = document.querySelector('.container');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

left.addEventListener("mouseenter",()=>{
    container.classList.add("left-grow")
})
left.addEventListener("mouseleave",()=>{
    container.classList.remove("left-grow")
})
right.addEventListener("mouseenter",()=>{
    container.classList.add("right-grow")
})
right.addEventListener("mouseleave",()=>{
    container.classList.remove("right-grow")
})