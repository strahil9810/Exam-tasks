function hat(input) {
    let n = Number(input);
    let rows = 2 * n - 1;
    let dots = 2 * n - 2;
    let underscores = 1;


    console.log('.'.repeat(2 * n - 1) + '/' + '|' + '\\' + '.'.repeat(2 * n - 1));
    console.log('.'.repeat(2 * n - 1) + '\\' + '|' + '/' + '.'.repeat(2 * n - 1));
    console.log('.'.repeat((2 * n - 1)) + '***' + '.'.repeat(n * 2 - 1));

    for (let i = 0; i < rows; i++) {
        console.log('.'.repeat(dots) + '*' + '-'.repeat(underscores) + '*' + '-'.repeat(underscores) + '*' + '.'.repeat(dots));
        dots--;
        underscores++;
    }

    console.log('*'.repeat(4 * n + 1));
    console.log('*.'.repeat(2 * n) + '*');
    console.log('*'.repeat(4 * n + 1));
}
hat(4)