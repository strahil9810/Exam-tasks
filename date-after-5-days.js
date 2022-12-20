function dateAfterFiveDays([Date, Month]) {
    let date = parseInt(Date);
    let month = Number(Month);

    let dayOfMonth = 31;

    if (month === 2) {
        dayOfMonth = 28;
    }

    if (month === 4 || month === 6 || month === 9 || month === 11) {
        dayOfMonth = 30;
    }

    date += 5;

    if (date > dayOfMonth) {
        date -= dayOfMonth;
        month++;
        if (month > 12) {
            month = 1;
        }
    }

    let monthToPrint = month;

    if (month < 10) {
        monthToPrint = '0' + monthToPrint;
    }
    console.log(date + '.' + monthToPrint);
}
dateAfterFiveDays([26,02])