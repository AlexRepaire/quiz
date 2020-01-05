/*
let li = $("li");
let next = 0;
let bonneRep = [];
let bonneReponse = 0;
let mauvaiseReponse = 0;
let temps;

bonneRep = Array.from(document.querySelectorAll('input[value="1"]:checked'));
function verification() {
    if ($("input").hasClass("bonneReponse").checked){
        bonneReponse++;
    }else {
        mauvaiseReponse++;
    }
}

$("#commencer").click(function () {
    $(this).addClass("none");
    li.eq(next).addClass("up");
    $("#précédent, #suivant").removeClass("none");


    $("#suivant").click(function () {
        next++;
        li.eq(next).addClass("up");
        alert(verification())

    });
});
*/

let li = [];
li = Array.from(document.querySelectorAll("li"));
let input = document.getElementsByTagName("input");
input = Array.from(document.querySelectorAll("input"));
let next = 0;
let before;

let btnNext = document.getElementById("suivant");
let btnStart = document.getElementById("commencer");
let btnTotal = document.getElementById("total");
let bonneReponse = 0;
let mauvaiseReponse = 0;

btnStart.addEventListener("click", function () {
   this.classList.add("none");
   btnNext.classList.remove("none");
   next++;
   li[next].classList.add("up");
});

btnNext.addEventListener("click", function () {
    next++;
    li[next].classList.add("up");
    li[before = next-1].classList.remove("up");
});
/*
btnTotal.addEventListener("click", function () {
    for (let i = 0; i < $("input").length; i++) {
        if ($("input[value=1]")[i].checked) {
            bonneReponse++;
        } else {
            mauvaiseReponse++;
        }
    }
    alert(bonneReponse);
});

 */

$("#total").click(function () {
    for (let i = 0; i < $("input").length; i++) {
        if ($("input[class = bonneReponse]").is(":checked")) {
            bonneReponse++;
        }
    }
   alert(bonneReponse);
});
