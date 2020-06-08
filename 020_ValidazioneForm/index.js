"use strict"

let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;
let _tel;

window.onload = function () {
    _cognome = this.document.getElementById("cognome");
    _nome = this.document.getElementById("nome");
    _matricola = this.document.getElementById("matricola");
    _regione = this.document.getElementById("regione");
    _email = this.document.getElementById("email");
    _tel = this.document.getElementById("tel");

    _regione.selectedIndex = 1;
}

function validaForm() {
    console.log(_tel.value);
    // cognome
    if ((!(/^[a-zA-Z]+$/.test(_cognome.value))) || (_cognome.value == "")) {
        _cognome.classList.add("redBorder");
        return false;
    } else {
        _cognome.classList.remove("redBorder");
    }
    // nome
    if ((!(/^[a-zA-Z]+$/.test(nome.value))) || (_nome.value == "")) {
        _nome.classList.add("redBorder");
        return false;
    } else {
        _nome.classList.remove("redBorder");
    }
    // matricola
    if (_matricola.value == "" || isNaN(_matricola.value)) {
        _matricola.classList.add("redBorder");
        alert("La matricola deve essere un numero");
        return false;
    } else {
        _matricola.classList.remove("redBorder");
    }
    // eMail e tel
    if (_email.value != "" || _tel.value != "") {
        if (_email.value != "") {
            if ((!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(_email.value)))) {
                _email.classList.add("redBorder");
                return false;
            } else {
                _email.classList.remove("redBorder");
            }      
        }
        if (_tel.value != "") {
            if ((!(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(_tel.value)))) {
                _tel.classList.add("redBorder");
                return false;
            } else {
                _tel.classList.remove("redBorder");
            }
        }
    } else {
        alert("Inserire e-mail o il numero di telefono")
        return false;
    }

    return true;
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}