function mostrardato() {
    let boniH, boniC, boniT, monto;
    let hijos = parseInt(document.getElementById('comisi0nH'));
    let categoria = String(document.getElementById('categor1a'));
    let condicion = String(document.getElementById('nombrad0'))
    
    if (hijos <= 3) {
        boniH = Number(hijos * 3);
        if (categoria == "A") {
            monto = Number(2350);
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }
        else if (categoria == "B") {
            monto = Number(2000)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }

        else if (categoria == "C") {
            monto = Number(1850)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }

        else if (categoria == "D") {
            monto = Number(1500)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }
    
    }

    else if (hijos > 3) {
        boniH = Number(75 + 10(hijos - 3));
        if (categoria == "A") {
            monto = Number(2350);
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }
        else if (categoria == "B") {
            monto = Number(2000)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }

        else if (categoria == "C") {
            monto = Number(1850)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }

        else if (categoria == "D") {
            monto = Number(1500)
            if (condicion == "si") {
                boniC = Number(monto * 0.15);
            }
            else if (condicion == "no") {
                boniC = Number(monto * 0.10);
            }

            boniT = Number(boniC + boniH);
        }
    }
    document.registro.mostrarBoniH.value = boniH;
    document.registro.mostrarBoniL.value = boniC;
    document.registro.mostrarBoniT.value = boniT;
}