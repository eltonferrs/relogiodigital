function nextTime(){
    let timeStart= new Date().toLocaleTimeString()
    const time=timeStart.split(":")
    document.querySelector(".hours").innerText=time[0]
    document.querySelector(".minutes").innerText=time[1]
    document.querySelector(".seconds").innerText=time[2]
}
setInterval(nextTime, 999);
