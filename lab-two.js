function getDayOfTheWeek(year, month, date) {
    const monthCode = {
        january: 1,
        february: 4,
        march: 4,
        april: 0,
        may: 2,
        june: 5,
        july: 0,
        august: 3,
        september: 6,
        october: 1,
        november: 4,
        december: 6,
    };
    const last2OfYear = String(year).slice(-2);
    const num1 = Math.floor(last2OfYear/12);
    const num2 = last2OfYear % 12;
    const num3 = Math.floor(num2/4);
    const finalNum = num1 + num2 + num3 + parseInt(date) + monthCode[month];
    const newNumber = ((finalNum + getLeapYear(year, month)) % 7);
    const weekdayCode = {
        0: "Saturday",
        1: "Sunday",
        2: "Monday",
        3: "Tuesday", 
        4: "Wedsnday",
        5: "Thursday",
        6: "Friday"
    };
    return (weekdayCode[newNumber]);
};


function getLeapYear(year, month){
    const specialCode = {
        1600: 6,
        1700: 4,
        1800: 2,
        2000: 6,
        2100: 4,
        true: -2,
        false: 0
    };
    const last2OfYear = String(year).slice(-2);
    const century = Math.round(year/100) * 100
    if ((month == "january" || month == "february") && ((last2OfYear == "00" && year % 400 == 0) || (year % 4 == 0 && last2OfYear != "00"))) {
        return specialCode[true];
    } else if ((year <= 2100 || year >= 1600) && century != 1900) {
        return specialCode[century];
    } else {
        return specialCode[false];
    };
};


function makeCalender() {
    let days = 0
    let months = 1
    let monthlength = 31
    const monthList = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    while (days <= monthlength && months <= 12) {
        days++
        let monthTheWord = monthList[months-1]
        let weekday = getDayOfTheWeek(2022, monthTheWord, days)
        console.log(`${days} - ${months} - 2023 is a ${weekday}`)

        if (days == monthlength) {
            days = 0
            months++
            if (months == 2) {
                monthlength = 28
            } else if (monthlength == 31 || monthlength == 28) {
                monthlength = 30
            } else if (monthlength == 30) {
                monthlength = 31
            }
        }
    }
}

module.exports = { getDayOfTheWeek, getLeapYear, makeCalender };