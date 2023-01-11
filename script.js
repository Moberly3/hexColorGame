function Clock(){
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    if(10 >= seconds){
        seconds = "0" + seconds;
    }

    if(10 >= minutes){
        minutes = "0" + minutes;
    }

    if(10 >= hours){
        hours = "0" + hours;
    }

    var clockBackground = "#" + seconds + minutes + hours;
    var clockLine = "#" + hours + minutes + seconds;

    document.getElementById('clock').innerHTML = clockBackground;
    document.body.style.backgroundColor = clockBackground;
    document.body.style.color = clockLine;
    setTimeout(Clock, 1000);
}
Clock();