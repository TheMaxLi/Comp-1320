const getDayOfTheWeek = require("./lab-two").getDayOfTheWeek;
const getLeapYear = require("./lab-two").getLeapYear;
const makeCalender = require("./lab-two").makeCalender
const readline = require("readline-sync");

function getDayOfTheWeekForUser() {
    let year = readline.question("input a year for the system to find the weekday of the date: ")
    let month = readline.question("and a month: ")
    let monthUndercase = month.toLowerCase();
    let date = readline.question("and lastly, a date: ")

    console.log(getDayOfTheWeek(year, monthUndercase, date))
}

makeCalender()
getDayOfTheWeekForUser()