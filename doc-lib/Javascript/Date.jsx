/*
 * Returns a new Date object holding the current date and time.
 * @constructor
   *
 * @param {Number} year The year expressed in four digits.
 * @param {Number} [month] An integer value from 0 (Jan) to 11 (Dec).
 * @param {Number} [day] An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
 * @param {Number} [hours] An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
 * @param {Number} [min] An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
 * @param {Number} [sec] An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
 * @param {Number} [ms] An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
 */
function Date(year, month, day, hours, min, sec, ms) {
  /*
   * Parses a string, returning a new Date object. The string should be similar to the string returned bt toString().
   *
   * @param {String} text The string to parse.
   * @returns {Date}
   */
  this.parse = function(text) {
    return new Date();
  }
  
  /*
   * Returns the number of milliseconds between midnight January 1, 1970, UTC, and the specified time.
   *
   * @param {Number} year The year expressed in four digits, for example, 2001.
   * @param {Number} [month] An integer value from 0 (Jan) to 11 (Dec).
   * @param {Number} [day] An integer value from 1 to 31, If this argument is not supplied, its value is set to 0.
   * @param {Number} [hours] An integer value from 0 (midnight) to 23 (11 PM). If this argument is not supplied, its value is set to 0.
   * @param {Number} [min] An integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param {Number} [sec] An Integer value from 0 to 59. If this argument is not supplied, its value is set to 0.
   * @param {Number} [ms] An integer value from 0 to 999. If this argument is not supplied, its value is set to 0.
   * @returns {Date}
   */
  this.UTC = function(year, month, day, hours, min, sec, ms) {
    return new Date();
  }
  
  /*
   * Returns the day of the month of the specified Date object in local time.
   * @returns {Number}
   */
  this.getDate = function() {
    return new Number();
  }
  
  /*
   * Returns the day of the week for the specified Date object in local time.
   * @returns {Number}
   */
  this.getDay = function() {
    return new Number();
  }
  
  /*
   * Returns the year of the specified Date object, as a difference from 1900, in local time.
   * @returns {Number}
   */
  this.getYear = function() {
    return new Number();
  }
  
  /*
   * Returns the four digit year of the specified Date object in local time.
   * @returns {Number}
   */
  this.getFullYear = function() {
    return new Number();
  }
  
  /*
   * Returns the hour of the specified Date object in local time.
   * @returns {Number}
   */
  this.getHours = function() {
    return new Number();
  }
  
  /*
   * Returns the milliseconds of the specified Date object in local time.
   * @returns {Number}
   */
  this.getMilliseconds = function() {
    return new Number();
  }
  
  /*
   * Returns the minutes of the specified Date object in local time.
   * @returns {Number}
   */
  this.getMinutes = function() {
    return new Number();
  }
  
  /*
   * Returns the month of the specified Date object in local time.
   * @returns {Number}
   */
  this.getMonth = function() {
    return new Number();
  }
  
  /*
   * Returns the seconds of the specified Date object in local time.
   * @returns {Number}
   */
  this.getSeconds = function() {
    return new Number();
  }
  
  /*
   * Returns the number of milliseconds since midnight January 1,1970 UTC for the specified Date object.
   * @returns {Number}
   */
  this.getTime = function() {
    return new Number();
  }
  
  /*
   * Returns the difference in minutes between the computer's local time and UTC.
   * @returns {Number}
   */
  this.getTimezoneOffset = function() {
    return new Number();
  }
  
  /*
   * Returns the day of the month of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCDate = function() {
    return new Number();
  }
  
  /*
   * Returns the day of the week for the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCDay = function() {
    return new Number();
  }
  
  /*
   * Returns the four digit year of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCFullYear = function() {
    return new Number();
  }
  
  /*
   * Returns the hour of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCHours = function() {
    return new Number();
  }
  
  /*
   * Returns the milliseconds of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCMilliseconds = function() {
    return new Number();
  }
  
  /*
   * Returns the minutes of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCMinutes = function() {
    return new Number();
  }
  
  /*
   * Returns the month of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCMonth = function() {
    return new Number();
  }
  
  /*
   * Returns the seconds of the specified Date object according to UTC.
   * @returns {Number}
   */
  this.getUTCSeconds = function() {
    return new Number();
  }
  
  /*
   * Sets the day of the month of a specified Date object according to local time.
   *
   * @param {Number} date An integer from 1 to 31 indicating the day of the month.
   * @returns {Number}
   */
  this.setDate = function(date) {
    return new Number();
  }
  
  /*
   * Sets the year of a specified Date object according to local time.
   *
   * @param {Number} year A four-digit integer value indicating the year to set.
   * @returns {Number}
   */
  this.setFullYear = function(year) {
    return new Number();
  }
  
  /*
   * Sets the hours of a specified Date object according to local time.
   *
   * @param {Number} hour An integer value from 0 (midnight) to 23 (11 PM).
   * @returns {Number}
   */
  this.setHours = function(hour) {
    return new Number();
  }
  
  /*
   * Sets the milliseconds of a specified Date object according to local time.
   *
   * @param {Number} ms An integer value from 0 to 999.
   * @returns {Number}
   */
  this.setMilliseconds = function(ms) {
    return new Number();
  }
  
  /*
   * Sets the minutes of a specified Date object according to local time.
   *
   * @param {Number} minutes An integer value from 0 to 59.
   * @returns {Number}
   */
  this.setMinutes = function(minutes) {
    return new Number();
  }
  
  /*
   * Sets the seconds of a specified Date object according to local time.
   *
   * @param {Number} seconds An integer value from 0 to 59.
   * @returns {Number}
   */
  this.setSeconds = function(seconds) {
    return new Number();
  }
  
  /*
   * Sets the month of a specified Date object according to local time.
   *
   * @param {Number} month An integer value from 0 (Jan) to 11 (Dec).
   * @returns {Number}
   */
  this.setMonth = function(month) {
    return new Number();
  }
  
  /*
   * Sets the date of a specified Date object according to universal time.
   *
   * @param {Number} date An integer from 1 to 31 indicating the day of the month.
   * @returns {Number}
   */
  this.setUTCDate = function(date) {
    return new Number();
  }
  
  /*
   * Sets the year of a specified Date object according to UTC, can also set the month and date.
   *
   * @param {Number} year The year expressed in four digits.
   * @returns {Number}
   */
  this.setUTCFullYear = function(year) {
    return new Number();
  }
  
  /*
   * Sets the hours of a specified Date object according to UTC.
   *
   * @param {Number} hours An integer value from 0 (midnight) to 23 (11 PM) indicating the hour to be set.
   * @returns {Number}
   */
  this.setUTCHours = function(hours) {
    return new Number();
  }
  
  /*
   * Sets the milliseconds of a specified Date object according to UTC.
   *
   * @param {Number} ms An integer value in the range of 0 to 999 indicating the number of milliseconds to set.
   * @returns {Number}
   */
  this.setUTCMilliseconds = function(ms) {
    return new Number();
  }
  
  /*
   * Sets the minutes of a specified Date object according to UTC.
   *
   * @param {Number} min An integer value in the range 0 to 59 indicating the number of minutes to be set.
   * @returns {Number}
   */
  this.setUTCMinutes = function(min) {
    return new Number();
  }
  
  /*
   * Sets the seconds of a specified Date object according to UTC.
   *
   * @param {Number} sec An integer value in the range 0 to 59 indicating the number of seconds to set.
   * @returns {Number}
   */
  this.setUTCSeconds = function(sec) {
    return new Number();
  }
  
  /*
   * Sets the month of a specified Date object according to UTC.
   *
   * @param {Number} month An integer value in the range 0 (Jan.) to 11 (Dec.) indicating the month to set.
   * @returns {Number}
   */
  this.setUTCMonth = function(month) {
    return new Number();
  }
  
  /*
   * Sets the date of a specified Date object in milliseconds since midnight, January 1, 1970.
   *
   * @param {Number} ms An integer indicating the number of milliseconds between the date set and midnight, January 1, 1970.
   * @returns {Number}
   */
  this.setTime = function(ms) {
    return new Number();
  }
  
  /*
   * Sets the year of a specified Date object according to local time, as a difference between the current year and 1900.
   *
   * @param {Number} year An integer value indicating the year to set.
   * @returns {Number}
   */
  this.setYear = function(year) {
    return new Number();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toDateString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toTimeString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toLocaleString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toLocaleDateString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toLocaleTimeString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toGMTString = function() {
    return new String();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toUTCString = function() {
    return new String();
  }
  
  /*
   * Returns a string value representing the date and time stored in the Date object in human readable format.
   * @returns {String}
   */
  this.toString = function() {
    return new String();
  }
  
  /*
   * The valueOf() method returns the number of milliseconds that have passed since midnight, Returns an integer.
   * @returns {Number}
   */
  this.valueOf = function() {
    return new Number();
  }
  
  /*
   * undefined
   * @returns {String}
   */
  this.toSource = function() {
    return new String();
  }
  
}
