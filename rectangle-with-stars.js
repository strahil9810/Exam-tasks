function rectangle(input) {
    let n = Number(input);

    console.log("%".repeat(2 * n));

    let row = n;
    if (row % 2 === 0) {
        row--;
    }

    for (let i = 0; i < row; i++) {
        if (i === (row - 1) / 2) {
            console.log('%' + ' '.repeat(n - 2) +
                '**' + ' '.repeat(n - 2) + '%');
        }
        else {
            console.log('%' + ' '.repeat(2 * n - 2) + '%');
        }
    }

    console.log("%".repeat(2 * n));
}
rectangle(4)