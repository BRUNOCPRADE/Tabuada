function GerarTabuada() {
    let num = document.getElementById('txtn');
    let res = document.getElementById('res');

    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!');
        res.innerHTML = 'Nenhum número informado.';
    } else {
        let n = Number(num.value);
        res.innerHTML = `<strong>Tabuada do ${n}:</strong><br><br>`;
        for (let i = 1; i <= 10; i++) {
            res.innerHTML += `${n} x ${i} = ${n * i}<br> `;
        }
        }
}