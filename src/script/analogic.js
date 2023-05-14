let timeStart= new Date().toLocaleTimeString()
const time=timeStart.split(":")
let degSecond=time[2]*(6)
let degMinutes=time[1]*(6)
let degHours=time[0]*(30)
function nextTime(){
    document.querySelector(".pointer__hours").style.transform= `rotate(${degHours}deg)`
    document.querySelector(".pointer__minutes").style.transform= `rotate(${degMinutes}deg)`
    document.querySelector(".pointer__seconds").style.transform= `rotate(${degSecond}deg)`
    degSecond+=6
    degMinutes+=1/6
    degHours+=1/180
}
setInterval(nextTime, 999);
document.querySelector(".mode__button").addEventListener("click", event=>{
    document.querySelector("html").classList.toggle("dark")
    const text=document.querySelector(".material-symbols-outlined").innerText
    if(text=="dark_mode"){
        document.querySelector(".material-symbols-outlined").innerText="light_mode"
    }else{
        document.querySelector(".material-symbols-outlined").innerText="dark_mode"
    }
})
document.querySelector(".type__button").addEventListener("click", event=>{
    window.location.replace("../../index.html")
})
