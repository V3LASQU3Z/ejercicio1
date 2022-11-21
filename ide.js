function trig() {
    var x = parseInt(document.getElementById("x").value);
    var coseno = Math.cos(x * Math.PI / 180);
    var seno = Math.sin(x * Math.PI / 180);
    //PARA A)
    a = Math.pow((seno + coseno), 2);
    a1 = (1 + 2 * seno * coseno);
    //PARA B)
    var num = 1 - 2 * coseno - 3 * Math.pow(coseno, 2);
    var den = Math.pow(seno, 2);
    b = num / den;
    b1 = ((1 - 3 * coseno) / (1 - coseno));

    if (a.toFixed(5) == a1.toFixed(5) && b.toFixed(5) == b1.toFixed(5)) {

        document.getElementById('tri').innerHTML = "<h3>Se verifica la identidad en ambos casos</h3>" + "<br>" + a + " = " + a1 + "<br>" + b + " = " + b1;

    }
}