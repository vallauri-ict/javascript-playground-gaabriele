"use strict"

let _txtNome, _optSesso, _sltAteneo, _chkLav, _txtDescr, _txtCap;

window.onload = function inizializza() {
    _txtNome = document.getElementById("nominativo");
    _optSesso = document.getElementsByName("sesso");
    _sltAteneo = document.getElementById("ateneo");
    _chkLav = document.getElementById("lavoratore");
    _txtDescr = document.getElementById("descr");
    _txtCap = this.document.getElementById("cap");

    _sltAteneo.selectedIndex = 1;
    _txtNome.classList.toggle("redBorder", true);
    _txtCap.classList.toggle("redBorder", true);
    // _txtDescr.classList.toggle("redBorder", true);
}

function ValidaForm() {
    if (_txtNome.value == "") {
        _txtNome.classList.toggle("redBorder", true);
        alert("Inserisci nome");
        return false;
    } else {
        _txtNome.classList.toggle("redBorder", false);
    }

    if (_optSesso[0].checked == false && _optSesso[1].checked == false) {
        alert("Seleziona il sesso");
        return false;
    }

    if (_sltAteneo.selectedIndex == 0) {
        alert("Selezionare Ateneo");
        return false;
    }

    if ((_txtCap.value == "") || (_txtCap.value.length < 5)) {
        if (_txtCap.value == "") {
            alert("Inserisci il CAP");
        } else {
            alert("Il cap deve essere lungo 5");
        }

        return false;
    }

    if ((_chkLav.checked == true) && (_txtDescr.value == "")) {
        _txtDescr.classList.toggle("redBorder", true);
        alert("Inserisci la descrizione o disattiva spunta lavoratore");
        return false;
    }
    else {
        _txtDescr.classList.toggle("redBorder", false);
    }

    return true;
}

function Cap() {
    let cap = _txtCap.value;
    let i = 0;
    while ((i < cap.length) && (!isNaN(cap[i++])));
    if (isNaN(cap[i - 1]) || (cap.length < 5)) {
        _txtCap.classList.toggle("redBorder", true);
        if (isNaN(cap[i - 1])) {
            alert("Cap contiene lettere");
        } else {
            alert("il CAP deve contenere 5 numeri");
        }
    }
    else {
        _txtCap.classList.toggle("redBorder", false);
    }
}

function Nome() {
    let nome = _txtNome.value;
    let i = 0;
    while ((i < nome.length) && (isNaN(nome[i++])));
    if ((!isNaN(nome[i - 1])) && (nome[i-1]!=" ")/* || (nome.length == 0) */) {
        _txtNome.classList.toggle("redBorder", true);
        if (!isNaN(nome[i - 1])) {
            alert("Il nome coniene dei numeri");
        } /*else {
            alert("Il nome non è presente");
        }*/
        return false;
    }
    else {
        _txtNome.classList.toggle("redBorder", false);
    }
}

function Desc() {
    if (_chkLav.checked) {
        _txtDescr.disabled = false;
    }
    else {
        _txtDescr.disabled = true;
    }
}