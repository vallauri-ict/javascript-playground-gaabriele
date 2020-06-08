"use strict"

let ris = 0;
let numero = '';
let _btnNum;
let _btnOperatore;
let _btnReset;
let _btnRis;
let _txtDisplay;
let segno = '';
let a  = 0;

window.onload = function () {
    _btnNum = document.getElementsByName("btnNum");
    _btnOperatore = document.getElementsByName("btnOperatore");
    _btnReset = document.getElementById("btnReset");
    _btnRis = document.getElementsByName("btnRis");
    _txtDisplay = document.getElementById("txtDisplay");
}

function num(n) {
    numero += n;
    _txtDisplay.value = numero;
}

function operazione(s) {
    console.log(numero);
    console.log(ris)
    if (a != 1) {
        calcola();
    }  
    a = 0;
    segno = s;
    _txtDisplay.value = segno;
    numero = '';
}

function calcola() {
    if (segno == '') {
        ris = parseFloat(numero);
    } else {
        switch (segno) {
            case '/':
                ris = ris / parseFloat(numero);
                break;
            case '*':
                ris = ris * parseFloat(numero);
                break;
            case '+':
                ris = ris + parseFloat(numero);
                break;
            case '-':
                ris = ris - parseFloat(numero);
                break;
        }
    }
}

function calcolaRis() {
    if (segno != '' && numero != '') {
        calcola();
        _txtDisplay.value = ris;
    }
    a = 1;
}

function resetta() {
    _txtDisplay.value = '';
    ris = 0;
    a = 0;
    numero = '';
    segno = '';
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}