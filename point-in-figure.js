function pointInFigure([X, Y]) {
    let x = parseInt(X);
    let y = parseInt(Y);

    let pointInReact1 = x >= 2 && x <= 12 && y >= -3 && y <= 1;
    let pointInReact2 = x >= 4 && x <= 10 && y >= -5 && y <= 3;

    if (pointInReact1 || pointInReact2) {
        console.log('in');
    }
    else {
        console.log('out');
    }
}
pointInFigure([11, 2])