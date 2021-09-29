// get all of button from HTML code

let start = document.getElementById('start') 
let pause = document.getElementById('pause') 
let reset = document.getElementById('restart') 


// get timer number of work from HTML code

let workMinutes = document.getElementById('work_minutes')
let workSeconds = document.getElementById('work_seconds')


// get timer number of break from HTML code

let breakMinutes = document.getElementById('break_minutes')
let breakSeconds = document.getElementById('break_seconds')

let counter = document.getElementById('counter')


var startTimer;

start.addEventListener('click',function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    }else{
        alert("Timer is running ! ") ;
    }

})

reset.addEventListener( 'click', function(){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText = 0; 
        pauseInter();
        startTimer = undefined;
})


pause.addEventListener('click' , function(){
    pauseInter()
    startTimer = undefined;

})



function timer(){
    if(workSeconds.innerText != 0){
        workSeconds.innerText --;
    }else if(workMinutes.innerText != 0 && workSeconds.innerText == 0 ){
        workSeconds.innerText = 59;
        workMinutes.innerText --;
    }
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
            breakSeconds.innerText --;
        }else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0 ){
            breakSeconds.innerText = 59;
            breakMinutes.innerText --;
        }
    }
    if(workSeconds.innerText == 0 && workMinutes.innerText == 0 && breakSeconds.innerText == 0 && breakMinutes.innerText == 0){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        counter.innerText++;
        let x = counter.innerText ;
    } /* else if(workSeconds.innerText == 0 && workMinutes.innerText == 0 && breakSeconds.innerText == 0 && breakMinutes.innerText == 0 && (x % 4) == 0){
        workMinutes.innerText = 0;
        workSeconds.innerText = "00";

        breakMinutes.innerText = 20;
        breakSeconds.innerText = "00";

        counter.innerText++;
    }    */
}


function pauseInter(){
    clearInterval(startTimer)
    
}
