
let hour = document.getElementById('hour'),
    day = document.getElementById('day'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec');
function showTime(){  
    let today = new Date();
        hour.innerText=23-today.getHours();
        min.innerText=59-today.getMinutes();
        day.innerText= 24-today.getDate();
        sec.innerText=60-today.getSeconds();
        setTimeout(showTime,1000);
}
showTime();
let o=1
let nav=document.querySelector("nav");
function open_nav(){
    
    if(o===1 && window.innerWidth<700){
       nav.style.display="block"
        o=0
    }
    else if(o===0 && window.innerWidth<700){
        nav.style.display="none"
        o=1
    }
}
