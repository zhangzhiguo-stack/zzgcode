function ele(ele) {
    return document.querySelector(ele)
}

function demo(){
    console.log("bug修复");
}
function login(){
    console.log("login");
}

function eles(eles){
    return document.querySelectorAll(eles)
}

function random(min,max){
    return Math.flool(Math.random() * (max - min + 1 ))  + min
}

function getStyle(ele,property){
    return parseFloat(getComputedStyle(ele)[property])
}
