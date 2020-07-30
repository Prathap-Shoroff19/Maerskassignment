//selectors
sortelement = document.querySelector("#sort")
shuffleelement = document.querySelector("#shuffle")
valuesdisplay = document.querySelector(".values")

//eventListerns
sortelement.addEventListener("click", sortfunction)
shuffleelement.addEventListener("click", shufflefunction)

//variables
let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]

//functions
function sortfunction(){
    removeElement(".values")
    for(let idx = 1; idx < 10;idx++){
        const blockelement = document.createElement("div")
        blockelement.classList.add("element")
        blockelement.innerText = idx
        valuesdisplay.appendChild(blockelement)
    }
}

function shufflefunction(){
    //logic was derived from fisher yates
    removeElement(".values")
    for (let idx = arr.length - 1 ; idx > 0; idx--){
        let rdx = Math.floor(Math.random() * (idx + 1))
        let tempvar = arr[idx]
        arr[idx] = arr[rdx]
        arr[rdx] = tempvar
    }

    for(let idx = 0; idx < 9;idx++){
        const blockelement = document.createElement("div")
        blockelement.classList.add("element")
        blockelement.innerText = arr[idx]
        valuesdisplay.appendChild(blockelement)
    }
    
}

function removeElement(type){
    var component = document.querySelector(type)
    let initialelement = component.firstElementChild;
    while(initialelement){
        initialelement.remove()
        initialelement = component.firstElementChild
    }
}