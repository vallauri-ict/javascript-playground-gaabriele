"use strict"

let _imgBox;
let _imgRoll;
let _lst;
let _opts;

window.onload = function(){
    _imgBox = this.document.getElementById("imgBox");
    _imgRoll = this.document.getElementById("imgRoll");
    _imgBox.style.backgroundImage = "url(img/img1.jpg)";
    _imgRoll.style.backgroundImage = "url(img/img1.jpg)";
    _lst = this.document.getElementById("lstImmagini");
    _opts = this.document.getElementsByName("opt");
}


function setRadioButtonsClick() {
    for (let i = 0; i < _opts.length; i++) {
        _opts[i].addEventListern("click", function () { cambiaImmagine(this.value) });
    }
}

function cambiaImmagine(num) {
    let imageNum = Number(num) + 1;
    //console.log(imageNum);
    _imgBox.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
    _lst.value = num;
    _opts[num].checked = true;
}

function rollOn () {
    let imageNum = generaNumero(2, 4);
    _imgRoll.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
}

function rollOff() {
    _imgRoll.style.backgroundImage = "url(img/img1.jpg)";
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}