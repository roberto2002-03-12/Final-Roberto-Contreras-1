function mostrardato() {
    let categoria;
    let nume = parseFloat(document.getElementById('n0ta').value);
    if (nume >= 17) {
        categoria = String("A");
    }
    else if (nume >= 14 & nume < 17) {
        categoria = String("B");
    }
    else if (nume >= 12 & nume < 14) {
        categoria = String("C");
    }
    else if (nume < 12) {
        categoria = String("D")
    }

    document.registro.mostrarCategoria.value = categoria;
}