function pointOnSegment([firstNumber, secondNumber, pointNumber]) {
    let first = parseInt(firstNumber);
    let second = parseInt(secondNumber);
    let point = parseInt(pointNumber);

    let left = Math.min(first, second);
    let right = Math.max(first, second);

    let distanceLeft = Math.abs(left - point);
    let distanceRight = Math.abs(right - point);

    let minDistance = Math.min(distanceLeft, distanceRight);

    if (point >= left && point <= right) {
        console.log('in');
    }
    else {
        console.log('out');
    }
    console.log(minDistance)
}
pointOnSegment([1, -2, 3])