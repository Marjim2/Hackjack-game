let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

function Increment(){
    count = count + 1
    countEl.textContent = count
}

function Save() {
   let myStr = + count + " - "
    saveEl.textContent = saveEl.textContent + myStr
    count = 0
    countEl.textContent = 0
}

function Reset() {
    saveEl.textContent = "Previous Enteries : "
    countEl.textContent = 0
}