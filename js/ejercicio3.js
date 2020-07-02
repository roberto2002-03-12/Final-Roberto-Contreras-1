function mostrardato() {
    let hijosB, comision, bruto, descuento, neto;
    let hijos = parseFloat(document.getElementById('hij0s').value);
    let ventas = parseFloat(document.getElementById('vent4sT').value);
    hijosB = Number(hijos * 50);
    comision = Number(ventas * 0.075);
    bruto = Number(comision + 600)
    descuento = Number(bruto * 0.11);
    neto = Number(bruto - descuento + hijosB);
    
    //mostrar datos
    document.registro.mostrarComision.value = comision;
    document.registro.mostrarComisionH.value = hijosB;
    document.registro.mostrarSueldoB.value = bruto;
    document.registro.mostrarImpuesto.value = descuento;
    document.registro.mostrarSueldoN.value = neto;
}