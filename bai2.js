n = prompt("Enter number one triangle: ");
function numberOneTriangle(n) {
    var i, j, val = 1;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++)
            document.write("*" + " ");
        document.write("<br>");
    }
}

numberOneTriangle(n);