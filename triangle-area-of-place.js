function triangleArea([X1, Y1, X2, Y2, X3, Y3]) {
    let x1 = Number(X1);
    let y1 = Number(Y1);
    let x2 = Number(X2);
    let y2 = Number(Y2);
    let x3 = Number(X3);
    let y3 = Number(Y3);

    let a = Math.abs(x2 - x3);
    let h = Math.abs(y2 - y1);

    let s = (a * h) / 2;

    console.log(s);
}
triangleArea([4, 1, -1, -3, 3, -3])