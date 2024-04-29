//------------------------------------values------------------------------------
let time = {hour:0,min:0,sec:0};
let remainTime = 0;

let showTime = {
    hr:document.querySelector('#hr'),
    min:document.querySelector('#min'),
    sec:document.querySelector('#sec')
}

let step1Time = false;
let step2Counting = false;
let step3Down = false;

//------------------------------------function------------------------------------

//get time
function getTime(h,m,s){
    if(!h){h = 0};
    if(!m){m = 0};
    if(!s){s = 0};

    time.hour = h
    time.min = m
    time.sec = s

    console.log(time);
};

//upDateremainTime
function upDateremainTime(h,m,s){
    remainTime = h*3600 + m*60 + s*1;
    console.log(remainTime);
};

//formatTime
function formatTime(timeinSec){
    time.hour = Math.floor(timeinSec/3600);
    time.min = Math.floor(timeinSec%3600/60);
    time.sec = timeinSec%3600%60;
    console.log(time);
}
//render
function renderTime(h,m,s){
    if(h<10){h=`0${h.toString()}`}
    if(m<10){m=`0${m.toString()}`}
    if(s<10){s=`0${s.toString()}`}

    showTime.hr.innerHTML = h;
    showTime.min.innerHTML = m;
    showTime.sec.innerHTML = s;
};

//countdown
function countdown(second){
    remainTime = second;
    if(!step2Counting) return
    console.log(step1Time, step2Counting);
    setTimeout(()=>{
        remainTime-=1;
        formatTime(remainTime);
        renderTime(time.hour,time.min,time.sec);
        if(remainTime>0){
            if(6 > remainTime > 0){
                document.body.style.backgroundColor = "red";
            }
            countdown(remainTime);
        }
        
        if (step1Time && remainTime===0 ){
            document.querySelector('#status').innerHTML = "Time's Up. Refresh to Restart"
            document.body.style.backgroundColor = "gray";
        }
    },1000)
   
};
//changesetUpStatus
function changeset1(){
    if(remainTime==0) return
    step1Time = !step1Time;
}
//changeProcessingStatus
function changestep2(){
    step2Counting = !step2Counting;
}
//changeOverStatus
function changestep3(){
    step3Down = !step3Down;
}

// upDateremainTime(time.hour,time.min,time.sec);


//------------------------------------working------------------------------------
//rendering
renderTime(time.hour,time.min,time.sec);
upDateremainTime(time.hour,time.min,time.sec);

//settime
document.addEventListener('keydown',event=>{
    console.log(event);
    if(event.key.startsWith("Enter")){
        let inputhr = document.querySelector("#thr").value;
        let inputmin = document.querySelector("#tmin").value;
        let inputsec = document.querySelector("#tsec").value;

        getTime(inputhr,inputmin,inputsec);
        upDateremainTime(time.hour,time.min,time.sec);
        formatTime(remainTime);
        renderTime(time.hour,time.min,time.sec);
        changeset1();
        document.querySelector('#status').innerHTML = "Press Space To Start"
    };

    if(event.key.startsWith(" ") && step1Time){
        if(!step2Counting){
            document.querySelector('#status').innerHTML = "Press Space To pause";
        } else {   
            document.querySelector('#status').innerHTML = "Press Space To Start";
            }
        changestep2();
        countdown(remainTime);
    }
});







//------------------------------------testing------------------------------------
