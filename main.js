

const bulb = document.querySelector("#on");
const off = document.querySelector("#off");
const btnon = document.querySelector("#btnon");
const btnoff = document.querySelector("#btnoff")
 


btnon.addEventListener("click", () => {

        bulb.style.display ="block"
        off.style.display ="none"
    })
    
    btnoff.addEventListener("click", () => {
        bulb.style.display ="none"
        off.style.display ="block"
    })