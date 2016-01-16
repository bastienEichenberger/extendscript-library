/**
 * @class Date
 */

/**
 * Function to format a date
 * @return {string} the date as string in this format yyyy-mm-dd
 */
Date.prototype.year_month_day = function () {

    var year, month, day;

    year = this.getFullYear();
    month = this.getMonth() + 1;
    day = this.getDate();

    if (month.toString().length === 1) {
        month = '0' + month;
    }

    if (day.toString().length === 1) {
        day = '0' + day;
    }

    return year + '-' + month + "-" + day;
}

/**
 * Function to format time
 * @return {string} the date as string in this format hh-mm-ss
 */
Date.prototype.hours_minutes_seconds = function () {

    var hours, minutes, seconds;

    hours = this.getHours();
    minutes = this.getMinutes();
    seconds = this.getSeconds();

    if (hours.toString().length === 1) {
        hours = '0' + hours;
    }

    if (minutes.toString().length === 1) {
        minutes = '0' + minutes;
    }

    if (seconds.toString().length === 1) {
        seconds = '0' + seconds;
    }

    return hours + '-' + minutes + '-' + seconds;

}
