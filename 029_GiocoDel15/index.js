"use strict"

const DIM = 4;

window.onload = function () {
    let _wrapper = this.document.getElementById("wrapper");
    let vet = [];

    for (let i = 0; i < 15; i++) {
        vet[i] = i + 1;
    }

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = document.createElement("div");
            _div.id = "btn-" + i + "-" + j;
            _div.innerHTML = "";
            _div.addEventListener("click", sposta);
            _wrapper.appendChild(_div);

            if (vet.length > 0) {
                let pos = generaNumero(0, vet.length - 1);
                _div.innerHTML = vet[pos].toString();
                vet.splice(pos, 1);
                _div.style.backgroundColor = "blue";
            }
        }
    }


    function sposta() {
        let id = this.id.split("-");
        let row = parseInt(id[1]); let col = parseInt(id[2]);

        if (col > 0) {
            let _div2 = document.getElementById("btn-" + row + "-" + (col - 1));
            if (_div2.innerHTML == "") {
                swap(this, _div2);
            }
        }
        if (col < 3) {
            let _div2 = document.getElementById("btn-" + row + "-" + (col + 1));
            if (_div2.innerHTML == "") {
                swap(this, _div2);
            }
        }
        if (row > 0) {
            let _div2 = document.getElementById("btn-" + (row - 1) + "-" + col);
            if (_div2.innerHTML == "") {
                swap(this, _div2);
            }
        }
        if (row < 3) {
            let _div2 = document.getElementById("btn-" + (row + 1) + "-" + col);
            if (_div2.innerHTML == "") {
                swap(this, _div2);
            }
        }
    }

    function swap(_div1, _div2) {
        let aus = _div1.innerHTML;
        _div1.innerHTML = _div2.innerHTML;
        _div2.innerHTML = aus;
        aus = _div1.style.backgroundColor;
        _div1.style.backgroundColor = _div2.style.backgroundColor;
        _div2.style.backgroundColor = aus;

    }
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random() + min);
    return n;
}