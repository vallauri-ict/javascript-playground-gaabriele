const DIM = 10;
let livello = 0;

window.onload = function () {
    let _wrapper = this.document.getElementById("wrapper");

    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            let _div = this.document.createElement("div");
            _div.id = "btn-" + i + "-" + j;
            _wrapper.appendChild(_div);
        }
    }

    setInterval(visualizza, 500);

    function visualizza() {
        reset();
        disegnaCornice();
        livello++;
        if (livello == DIM / 2) {
            livello = 0;
        }
    }

    function reset() {
        for (let i = 0; i < DIM; i++) {
            for (let j = 0; j < DIM; j++) {
                let _btn = document.getElementById("btn-" + i + "-" + j);
                _btn.style.backgroundColor = '#ccc';
            }
        }
    }

    function disegnaCornice() {
        let rc1 = livello;
        let rc2 = DIM - livello - 1;
        for (let j = livello; j < DIM - livello; j++) {
            let _btn1 = document.getElementById("btn-" + rc1 + "-" + j);
            _btn1.style.backgroundColor = '#f00';
            let _btn2 = document.getElementById("btn-" + rc2 + "-" + j);
            _btn2.style.backgroundColor = '#f00';

            _btn1 = document.getElementById("btn-" + j + "-" + rc1);
            _btn1.style.backgroundColor = '#f00';
            _btn2 = document.getElementById("btn-" + j + "-" + rc2);
            _btn2.style.backgroundColor = '#f00';
        }
    }
}