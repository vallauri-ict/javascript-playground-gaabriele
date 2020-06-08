"use strict"

window.onload = function () {
    let _wrapper = this.document.getElementById("wrapper");
    let _btnStop = this.document.getElementById("btnStop");
    let _btnRestart = this.document.getElementById("btnRestart");

    let timer = setInterval(generaOggetti, 100);
    _btnRestart.disabled = true;

    let wrapperWidth = parseInt(this.getComputedStyle(_wrapper).width);
    let wrapperHeight = parseInt(this.getComputedStyle(_wrapper).height);

    _btnStop.addEventListener("click", function name(params) {
        if (timer) clearInterval(timer);
        _btnRestart.disabled = false;
        this.disabled = true;
    })

    _btnRestart.addEventListener("click", function name(params) {
        timer = setInterval(generaOggetti, 100);
        this.disabled = true;
        _btnStop.disabled = false;
    });

    function generaOggetti() {
        // crea un tag div in memoria NON visibile all'interno della pagina
        let _div = document.createElement("div");

        // assegno width e height
        let w = generaNumero(1, 100); _div.style.width = w;
        let h = generaNumero(1, 100); _div.style.height = h;

        // colore di sfondo
        let red = generaNumero(0, 255);
        let green = generaNumero(0, 255);
        let blue = generaNumero(0, 255);
        _div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";

        // assegno posizione
        let x = generaNumero(0, wrapperWidth - w);
        let y = generaNumero(0, wrapperHeight - h);
        _div.style.position = "absolute";
        _div.style.left = x;
        _div.style.top = y;

        // appendo _div al _wrapper
        _wrapper.appendChild(_div);
    }

}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}