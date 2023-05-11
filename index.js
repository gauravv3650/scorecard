let a = document.getElementById("scorecard")
let b = document.getElementById("scorecard2")

let home = 0
let guest = 0

function home1() {
    home+=1
    a.textContent = home
    winning()
}
function home3() {
    home+=3
    a.textContent = home
    winning()
}
function home5(){
    home+=5
    a.textContent = home
    winning()
}
function guest1(){
    guest+=1
    b.textContent = guest
    winning()
}

function guest3(){
    guest+=3
    b.textContent = guest
    winning()
}

function guest5(){
    guest+=5
    b.textContent = guest
    winning()
}

let c = document.getElementById("ptag")
function winning(){
    if (home==guest){
       c.textContent = "Draw"
    }
    else if(home>guest){
        c.textContent = "Home is Winning"
        
    }
    else{
        c.textContent = "Guest is Winning"
    }
    
}


