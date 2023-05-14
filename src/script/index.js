function nextTime(){
    let timeStart= new Date().toLocaleTimeString()
    const time=timeStart.split(":")
    document.querySelector(".hours").innerText=time[0]
    document.querySelector(".minutes").innerText=time[1]
    document.querySelector(".seconds").innerText=time[2]
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