let hr = 0;
let min = 0;
let sec = 0;
let timeInSecond = 0;

let prossing = false;
let countdownStatus = false;



//convert & render Time
function handleTime(secTime){
    //calculate time
    hr = Math.floor(secTime/3600);
    min = Math.floor(secTime%3600/60);
    sec = Math.floor(secTime%3600%60);
    console.log(hr,min,sec);

    //formate
    if(hr<10){hr=`0${hr.toString()}`}
    if(min<10){min=`0${min.toString()}`}
    if(sec<10){sec=`0${sec.toString()}`}

    //render
    document.querySelector("#hr").innerHTML=hr;
    document.querySelector("#min").innerHTML=min;
    document.querySelector("#sec").innerHTML=sec;

    //change status
    if(secTime!==0){
        countdownStatus = true
        console.log("ready to countdown");

        if(!prossing){        
        document.querySelector('#status').innerHTML = "Press Space To Start"
        } else if(prossing){
            document.querySelector('#status').innerHTML = "Counting Down"
        }
    }
}

//start countdown
function countdownTime(reaminTime){
    if(prossing == false) return
    timeInSecond = reaminTime;
    setTimeout(()=>{
        timeInSecond-=1;
        handleTime(timeInSecond);

        console.log(timeInSecond);
        if(timeInSecond>0){
            countdownTime(timeInSecond);
        }
    },1000)
};


//get Time
document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Enter")){   
        if(document.querySelector('#thr').value){
            hr = document.querySelector('#thr').value;
        };
        if(document.querySelector('#tmin').value){
            min = document.querySelector('#tmin').value;
        };
        if(document.querySelector('#tsec').value){
            sec = document.querySelector('#tsec').value; 
        };
        timeInSecond = hr*3600+min*60+sec*1;
        console.log(timeInSecond);
        handleTime(timeInSecond);
    }
})

//start counting
if(countdownStatus=true){
    document.addEventListener("keydown", event =>{
        
        if(event.key.startsWith(" ")){
            if(!prossing){
                prossing = true;
                countdownTime(timeInSecond);
                console.log("start countdown");
            }else{
                prossing=false;
                console.log("stop countdown");
            }
            
            
            console.log(prossing);
        }
    })
}

//stop counting





