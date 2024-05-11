//記錄剩餘時間
let remainTime = 0;
let step1setTime = false;
let step2Counting = false;
let step3Down = false;

let showTime = {
    hr:document.querySelector('#hr'),
    min:document.querySelector('#min'),
    sec:document.querySelector('#sec')
};

//function
//時間換算＆渲染畫面
function renderTime(remainTime){
    let hour = Math.floor(remainTime / 3600 );
    let minute = Math.floor(remainTime % 3600 / 60);
    let second = Math.floor(remainTime % 3600 % 60);

    if (hour < 10) {hour = `0${hour}`}
    if (minute < 10) {minute = `0${minute}`}
    if (second < 10) {second = `0${second}`}

    showTime.hr.innerHTML = hour;
    showTime.min.innerHTML = minute;
    showTime.sec.innerHTML = second;
};

//倒數計時
function countdown(remainTime){
    setInterval(() => {
        if(step1setTime === true && step2Counting === true){
            if(remainTime < 6){
                document.body.style.backgroundColor = "red";
                document.querySelector("#avtive").style.backgroundColor = "red";

            }
            if(remainTime < 0.01) {
                changestep3();
                document.querySelector('#status').innerHTML = "Time's Up. Refresh to Restart"
                document.querySelector(".container").style.color = "LightGray"
                document.body.style.backgroundColor = "black";
                document.querySelector("#avtive").style.backgroundColor = "black";
                document.querySelector("#avtive").innerHTML = "Time's Up";


                return
            }
            remainTime -= 0.01;
            renderTime(remainTime);
            console.log(remainTime);
        }
    }, 10);
}

//切換狀態
//設定
function changeStep1(){
    step1setTime = true;
};
//執行
function changestep2(){
    step2Counting = !step2Counting;
};
//完成
function changestep3(){
    step3Down = !step3Down;
};

//轉換單位
function handleTime(hr,min,sec){
    remainTime = 0 ;
    remainTime = hr * 3600 + min * 60 + sec * 1
}

//獲取訊號
//設定時間
document.addEventListener('keydown',event=>{
    if(event.key.startsWith("Enter") && step1setTime === true){return}
    if(event.key.startsWith("Enter") && step2Counting === false){
        let inputhr
        let inputmin
        let inputsec

        if(document.querySelector("#thr").value)
        {inputhr = document.querySelector("#thr").value;}
        else{inputhr = 0;}
        if(document.querySelector("#tmin").value)
        {inputmin = document.querySelector("#tmin").value;}
        else{inputmin = 0;}
        if(document.querySelector("#tsec").value)
        {inputsec = document.querySelector("#tsec").value;}
        else{inputsec = 0;}

        handleTime(inputhr,inputmin,inputsec);
        renderTime(remainTime);
        changeStep1();
        countdown(remainTime)



        document.querySelector('#status').innerHTML = "Press Space To Start"
        document.body.style.backgroundColor = "LightGray";
        document.querySelector("form").style.display = "none";
    };
})

document.querySelector('#settime').addEventListener('click',event=>{
    if(step1setTime === true){return}
    if(step2Counting === false){
        let inputhr
        let inputmin
        let inputsec

        if(document.querySelector("#thr").value)
        {inputhr = document.querySelector("#thr").value;}
        else{inputhr = 0;}
        if(document.querySelector("#tmin").value)
        {inputmin = document.querySelector("#tmin").value;}
        else{inputmin = 0;}
        if(document.querySelector("#tsec").value)
        {inputsec = document.querySelector("#tsec").value;}
        else{inputsec = 0;}

        handleTime(inputhr,inputmin,inputsec);
        renderTime(remainTime);
        changeStep1();
        countdown(remainTime)



        document.querySelector('#status').innerHTML = "Press Space To Start"
        document.body.style.backgroundColor = "LightGray";
        document.querySelector("form").style.display = "none";
        document.querySelector("#settime").style.display = "none";
        document.querySelector("#avtive").classList.remove("hide");

    };
})

//執行&暫停倒數
document.addEventListener('keydown',event=>{
    if(event.key.startsWith(" ") && step1setTime === true){
        changestep2();
        if(step2Counting === true){
        document.querySelector('#status').innerHTML = "Press Space To Pause"
        document.body.style.backgroundColor = "LightGray";

        } else if (step2Counting === false){
        document.querySelector('#status').innerHTML = "Press Space To Start"
        document.body.style.backgroundColor = "Aqua";
        }
    }
})

document.querySelector('#avtive').addEventListener('click',event=>{
    if(step1setTime === true){
        changestep2();
        if(step2Counting === true){
        document.querySelector('#avtive').innerHTML = "Pause"
        document.body.style.backgroundColor = "LightGray";
        document.querySelector("#avtive").style.backgroundColor = "rgb(143, 140, 140)";


        } else if (step2Counting === false){
        document.querySelector('#avtive').innerHTML = "Start"
        document.body.style.backgroundColor = "Aqua";
        document.querySelector("#avtive").style.backgroundColor = "Aqua";
        }
    }
})



