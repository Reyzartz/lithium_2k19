
let hour = document.getElementById('hour'),
    day = document.getElementById('day'),
    min = document.getElementById('min'),
    sec = document.getElementById('sec');
function showTime(){  
    let today = new Date();
        hour.innerText="0";
        min.innerText="0";
        day.innerText= "0";
        sec.innerText="0";
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
