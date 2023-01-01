function tiles(input) {
    let sum = Number(input[0]);
    let underWidth = Number(input[1]);
    let underLong = Number(input[2]);
    let tileSide = Number(input[3]);
    let tileHieght = Number(input[4]);
    let priceOneTile = Number(input[5]);
    let sumMaster = Number(input[6]);

    let underArea = underWidth * underLong;
    let tileArea = tileSide * tileHieght / 2;

    let needTiles = Math.ceil(underArea / tileArea) + 5;
    let needSum = needTiles * priceOneTile + sumMaster;

    if (needSum <= sum) {
        let leftPrice = sum - needSum;
        console.log(`${leftPrice.toFixed(2)} lv left.`);
    }
    else {
        let needPrice = needSum - sum;
        console.log(`You'll need ${needPrice.toFixed(2)} lv more.`);
    }
}
tiles([3000, 3, 4, 0.33, 0.33, 4.80, 1000])