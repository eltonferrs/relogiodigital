let deg=0
let degS=0
function nextTime(){
    let timeStart= new Date().toLocaleTimeString()
    const time=timeStart.split(":")
    document.querySelector(".hours").innerText=time[0]
    document.querySelector(".minutes").innerText=time[1]
    document.querySelector(".seconds").innerText=time[2]
   /* document.querySelector(".seconds").style.transform=`rotate(${degS}deg)`
    document.querySelector(".time__seconds").style.transform=`rotatex(${deg}deg)`
    deg+=180
    degS+=360*/
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
    window.location.replace("./src/pages/analogic.html")
})