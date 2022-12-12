    //task1    "минут : секунд : дойл гэж харагддаг дижитал цаг хийнэ үү."

let [milliseconds,seconds,minutes,] = [0,0,0];

let timer = document.querySelector('.timer');
let button = document.getElementById("startTimer");

const change = () => {
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
            } 
        }
    }

let m = minutes;
let s = seconds;
let ms = milliseconds;
timer.innerHTML = ` ${m} : ${s} : ${ms}`;
} 
button.addEventListener("click" , change);