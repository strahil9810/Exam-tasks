function flowers(input) {
    let numberChryzantemums = Number(input[0]);
    let numberRose = Number(input[1]);
    let numberTulis = Number(input[2]);
    let season = input[3];
    let holydai = input[4];

    let allFlowers = numberChryzantemums + numberRose + numberTulis;

    let price = 0;
    let holydaiBonus = 0;

    switch (season) {
        case 'Spring':
            if (holydai === 'Y') {
                price = numberChryzantemums * 2 + numberRose * 4.10 + numberTulis * 2.50;
                holydaiBonus = price + ((price * 15) / 100);

                if (numberTulis > 7) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 5) / 100);
                }
                else {
                    console.log((holydaiBonus + 2).toFixed(2));
                }

                if (allFlowers > 20) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 20) / 100);
                    console.log((holydaiBonus + 2).toFixed(2));
                }
            }
            else if (holydai === 'N') {
                price = numberChryzantemums * 2 + numberRose * 4.10 + numberTulis * 2.50;

                if (numberTulis > 7) {
                    price = price - ((price * 5) / 100);
                }

                if (allFlowers > 20) {
                    price = price - ((price * 20) / 100);
                    console.log((price + 2).toFixed(2));
                }
                else {
                    console.log((price + 2).toFixed(2));
                }
            }
            break;
        case 'Summer':
            if (holydai === 'Y') {
                price = numberChryzantemums * 2 + numberRose * 4.10 + numberTulis * 2.50;
                holydaiBonus = price + ((price * 15) / 100);

                if (allFlowers > 20) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 20) / 100);
                    console.log((holydaiBonus + 2).toFixed(2));
                }
                else {
                    console.log((holydaiBonus + 2).toFixed(2));
                }
            }
            else if (holydai === 'N') {
                price = numberChryzantemums * 2 + numberRose * 4.10 + numberTulis * 2.50;
                if (allFlowers > 20) {
                    price = price - ((price * 20) / 100);
                    console.log((price + 2).toFixed(2));
                }
                else {
                    console.log((price + 2).toFixed(2));
                }
            }
            break;
        case 'Autumn':
            if (holydai === 'Y') {
                price = numberChryzantemums * 3.75 + numberRose * 4.50 + numberTulis * 4.15;
                holydaiBonus = price + ((price * 15) / 100);

                if (allFlowers > 20) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 20) / 100);
                    console.log((holydaiBonus + 2).toFixed(2));
                }
                else {
                    console.log((holydaiBonus + 2).toFixed(2));
                }
            }
            else if (holydai === 'N') {
                price = numberChryzantemums * 3.75 + numberRose * 4.50 + numberTulis * 4.15;

                if (allFlowers > 20) {
                    price = price - ((price * 20) / 100);
                    console.log((price + 2).toFixed(2));
                }
                else {
                    console.log((price + 2).toFixed(2));
                }
            }
            break;
        case 'Winter':
            if (holydai === 'Y') {
                price = numberChryzantemums * 3.75 + numberRose * 4.50 + numberTulis * 4.15;
                holydaiBonus = price + ((price * 15) / 100);

                if (numberRose >= 10) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 10) / 100);
                }
                else {
                    console.log((holydaiBonus + 2).toFixed(2));
                }

                if (allFlowers > 20) {
                    holydaiBonus = holydaiBonus - ((holydaiBonus * 20) / 100);
                    console.log((holydaiBonus + 2).toFixed(2));
                }
            }
            else if (holydai === 'N') {
                price = numberChryzantemums * 3.75 + numberRose * 4.50 + numberTulis * 4.15;

                if (numberRose >= 10) {
                    price = price - ((price * 10) / 100);
                }
                else {
                    console.log((price + 2).toFixed(2));
                }

                if (allFlowers > 20) {
                    price = price - ((price * 20) / 100);
                    console.log((price + 2).toFixed(2));
                }
            }
            break;
    }
}
flowers([3, 10, 9, 'Spring', 'N'])