let li = [];
li = Array.from(document.querySelectorAll("li"));
let li2 = $("li");
let next = 0;
let before;
let btnNext = document.getElementById("suivant");
let btnBefore = document.getElementById("précédent");
let btnStart = document.getElementById("commencer");
let btnTotal = document.getElementById("total");
let bonneReponseDiv = document.getElementById("bonneReponse");

/*******START JS********/

btnStart.addEventListener("click", function () {
   this.classList.add("none");
   btnNext.classList.remove("none");
   next++;
   li[next].classList.add("up");
});

/********START Jquery*********/
/*
let nextJQ = $(".suivant");
$("#commencer").click(function () {
    next++;
   $(this).addClass("none");
   nextJQ.eq(next).removeClass("none");
   li2.eq(next).addClass("up");
});
 */

/*****NEXT JS*******/

btnNext.addEventListener("click", function () {
    next++;
    li[next].classList.add("up");
    li[before = next-1].classList.remove("up");
    btnBefore.classList.add("up");

    /*********RESULTAT***********/

    if (next===12){
        btnNext.classList.add("none");
        btnBefore.classList.remove("up");
        let input = [];
        input = Array.from(document.querySelectorAll('input[value="1"]:checked'));
        let bonneReponse = input.length;
        bonneReponseDiv.innerHTML = bonneReponse;
    }else {
        defaultStatus;
    }
});

/**********NEXT Jquery**********/
/*
$("#suivant").click(function () {
   next++;
   li2.eq(next).addClass("up");
   li2.eq(next=next-1).removeClass("up");
});
*/

/********PRECEDENT JS**********/

btnBefore.addEventListener("click", function () {
    next--;
    li[next].classList.add("up");
    li[before = next+1].classList.remove("up");
    if (next===1){
        btnBefore.classList.remove("up");
    }else{
        defaultStatus;
    }
});


    /*********VERIFICATION DE MES REPONSES*****************/

/***********Jquery***********/
/*
$("#total").click(function () {
    let input = $("input[value=1]").is(":checked");
    $("#bonneReponse").text(input.length);
});
*/
/********JS*************/
/*
btnTotal.addEventListener("click",function () {
    let input = [];
    input = Array.from(document.querySelectorAll('input[value="1"]:checked'));
    let bonneReponse = input.length;
    bonneReponseDiv.innerHTML = bonneReponse;
});
 */

