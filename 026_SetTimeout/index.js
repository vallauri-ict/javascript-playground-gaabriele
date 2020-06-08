"use strict"

window.onload = function () {
    let _img = this.document.getElementById("imgCarta");
    let _btnGioca = this.document.getElementById("btnGioca");
    let _lblSomma = this.document.getElementById("lblSomma");
    let _lblCarte = this.document.getElementById("lblCarte");
    let _lblRisultato = this.document.getElementById("lblRisultato");

    _btnGioca.addEventListener("click", gioca);
    _lblRisultato.style.visibility = "hidden";

    let vet = [];
    function gioca() {
        if (!_btnGioca.disabled) {
            _btnGioca.disabled = true;
            _lblSomma.innerHTML = 0;
            _lblCarte.innerHTML = 0;
            _lblRisultato.style.visibility = "hidden";
            vet=[];
        }

        let rnd;
        do {
            rnd = generaNumero(1, 10);
        } while (vet.includes(rnd));
        vet.push(rnd);

        _img.src = "img/bg_d" + rnd + ".gif";

        if (rnd > 7) {
            rnd = 0.5;
        }

        _lblCarte.innerHTML = vet.length;
        _lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + rnd;
        
        if (vet.length < 3) {
            setTimeout(gioca, 1500);
        } else {
            if (parseFloat(_lblSomma.innerHTML) > 7.5) {
                _lblRisultato.innerHTML = "HAI PERSO";
            } else {
                _lblRisultato.innerHTML = "HAI VINTO";
            }
            _lblRisultato.style.visibility = "visible";
            _btnGioca.disabled = false; 
        }
    }
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}