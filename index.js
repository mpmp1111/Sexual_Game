let dice = document.querySelector(".dice")
let Nicolas =document.querySelector(".Nicolas")
let Louan = document.querySelector(".Louan")
let resultDice = document.querySelector(".result")
let gage = document.querySelector(".gage")
let active = document.querySelector(".active")
let time = document.querySelector(".time")
let stop = document.querySelector(".stop")
let randDice;
let current = 0;

let deplacement_Boy = 5
let deplacement_Girl = 3
let CaseBoy = 0
let CaseGirl = 0

let seconde = 60;



/* Function */
function useMan(PlayerCase){
    sousRand = Math.floor(Math.random()*SousHomme.length)
    preliRand = Math.floor(Math.random()*preliHomme.length)
    calinRand = Math.floor(Math.random()*calinHomme.length)
    objRand = Math.floor(Math.random() * objHomme.length)

    if(PlayerCase == 0 || PlayerCase == 4 || PlayerCase == 8){
        gage.textContent = SousHomme[sousRand]
    }
    else if(PlayerCase == 2 || PlayerCase == 6 || PlayerCase == 7){
        gage.textContent = preliHomme[preliRand]
    }
    else if(PlayerCase == 1 || PlayerCase == 5 || PlayerCase == 9)
    {
        gage.textContent = calinHomme[calinRand]
    }
    else
    {
        gage.textContent = objHomme[objRand]
    }
}
function UseGirl(PlayerCase){
    sousRand = Math.floor(Math.random()*SousGirl.length)
    preliRand = Math.floor(Math.random()*preliGirl.length)
    calinRand = Math.floor(Math.random()*calinGirl.length)
    objRand = Math.floor(Math.random() * objGirl.length)

    if(PlayerCase == 0 || PlayerCase == 4 || PlayerCase == 8){
        gage.textContent = SousGirl[sousRand]

    }
    else if(PlayerCase == 2 || PlayerCase == 6 || PlayerCase == 7){
        gage.textContent = preliGirl[preliRand]
    }
    else if(PlayerCase == 1 || PlayerCase == 5 || PlayerCase == 9)
    {
        gage.textContent = calinGirl[calinRand]
    }
    else
    {
        gage.textContent = objGirl[objRand]
    }
}



function deplacement(rand, Player,idP){

    if(idP == 0){ 
        for(e = 0; e != rand; e++){
            CaseBoy += 1
            sol = (CaseBoy * 10 + 5) +"%";
            Player.style.left = sol;
            if(CaseBoy > 9){
                CaseBoy = 0
                sol = (CaseBoy * 10 + deplacement_Boy) +"%";
                Player.style.left = sol;
            }
        }
        useMan(CaseBoy)
    }
    else
    {
        for(e = 0; e != rand; e++){
            CaseGirl += 1
            sol = (CaseGirl * 10 + 3) +"%" ;
            Player.style.left = sol;

            if(CaseGirl > 9){
                CaseGirl = 0
                sol = (CaseGirl * 10 + deplacement_Girl) +"%" ;
                Player.style.left = sol;
            }
        }
        UseGirl(CaseGirl)
    }

}


/* timer */



active.addEventListener("click", function c(){
    var b = setInterval(function timer()
    {
        stop.addEventListener("click", function e(){
            clearInterval(b)
        })

        seconde = seconde - 1;
        time.textContent = seconde;
        if(seconde > 30){
            time.style.color = "green"
        }
        else if  (seconde > 10){
            time.style.color = "orange"
        }
        else
        {
            time.style.color = "red"
        }
        if(seconde == -1){
            clearInterval(b)
        }
    }, 1000)
})


dice.addEventListener("click", function e(){
    seconde = 60
    time.textContent = seconde;
    gage.textContent = ""
    randDice = Math.floor(Math.random() * 6)
    if(randDice == 0){
        randDice = 1
    }
    resultDice.textContent = randDice;

    
    if(current == 0){
        deplacement(randDice,Nicolas,current)
        current = 1
    }
    else
    {
        deplacement(randDice,Louan,current)
        current = 0
    }
})