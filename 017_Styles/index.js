"use strict"

let _divTitolo;
let _txtSize;
let _img;

let color;
let bg;
let border;

window.onload = function () {
    _divTitolo = this.document.getElementById("titolo");

    _txtSize = this.document.getElementById("txtSize");

    _img = document.getElementById("imgBox");

    color = false;
    bg = false;
    border = false;
}

function colore() {
    /* alternare i colori del titolo e dello 
     sfondo (giallo / blu e blu / giallo) */

    if (!color) {
        _divTitolo.setAttribute("style", "color:blue; background-color:yellow;");
    } else {
        _divTitolo.setAttribute("style", "color:yellow; background-color:blue;");
    }

    color = !color;
}

function sfondo() {
    if (!bg) {
        document.body.style.background = "#eaeaea url(bg.gif) center repeat-y";
    } else {
        document.body.style.backgroundColor = "dodgerblue";
        document.body.style.backgroundImage = "none";
    }

    bg = !bg;
}

function dim(){
    let sz = _txtSize.value;

    if (sz <= 0) {
        alert("ATTENZIONE: inserisci numeri positivi");
    } else {
        _txtSize.style.fontSize = sz;
    }
}

function img(n){
    if (n!=0) {
        _img.setAttribute("src", "img/img" +n+".jpg");
    } else {
        _img.removeAttribute("src");
    }
}

function bordo(){
    if (!border) {
        _divTitolo.style.borderStyle = "hidden";
    } else {
        _divTitolo.style.borderStyle = "solid"
    }

    border = !border;
}
