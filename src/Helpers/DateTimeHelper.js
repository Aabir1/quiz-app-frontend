import moment from "moment";

const SUNDAY = 7;

const DAYS = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

/**
 * In minutes
 */
const DEFAULT_DURATIONS = {
    30: '30 Minutes',
    60: '60 Minutes',
    90: '90 Minutes',
    120: '120 Minutes'
};

const START_YEAR = 1980;
const END_YEAR = 2030;

export const yearRange = (startYear = START_YEAR, endYear = END_YEAR) => {

    let years = [];

    while ( startYear <= endYear ) {
        const currentYear = endYear--;
        years.push({
            id: currentYear,
            title: currentYear
        });
    }

    return years;
}


/**
 * Get week day from week number
 *
 * @param {*} weekNumber 
 */
export const getWeekDay = (weekNumber) => {
    return DAYS[weekNumber];
};

/**
 * return weekdays
 *
 * @param {String} weekNumbers comma separated list
 *
 * @returns {String} weekDays comma separated list
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export const getWeekDays = (weekNumbers) => {
    let result = '';
    try {
        if (weekNumbers) {
            result = [];
            const weekNumbersArray = [...new Set(weekNumbers.split(',').sort())];
            weekNumbersArray.forEach(single => {
                result.push(getWeekDay(single));
            });

            result = result.join(", ");
        }
    } catch (error) {
        console.log('ERROR', error);
    }

    return result;
};

/**
 * Return number of a week
 *
 * @param {Integer} date
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 *
 * @returns 1-7
 */
export const getWeekNumber = (date) => {
    const weekDay = moment(date).weekday();
    return (weekDay === 0) ? SUNDAY : weekDay;
};

export const getWeekNumbers = (dates) => {
    let result = [];

    dates.forEach((single) => {
        result.push(getWeekNumber(single).toString());
    });

    return result;
}


// export const getDaysBetweenDateRange = (startDate, endDate, day, isTimetableSelected = false) => {
//     let result = [];
//     if (isTimetableSelected) {
//         let start = moment(startDate);
//         let end = moment(endDate);

//         var arr = [];
//         // Get "next" monday
//         let tmp = start.clone().day(day);
//         if (tmp.isAfter(start, "d") || tmp.isSame(start, "d")) {
//             arr.push(tmp.format("YYYY-MM-DD"));
//         }

//         while (tmp.isBefore(end) || tmp.isSame(end)) {
//             arr.push(tmp.format("YYYY-MM-DD"));
//             tmp.add(7, "days");
//         }

//         result = [...new Set(arr)];
//     }

//     return result;
// }


export const getDaysBetweenDateRange = (startDate, endDate, day, isTimetableSelected = false) => {
    let result = [];
    if (isTimetableSelected) {
        let start = moment(startDate);
        let end = moment(endDate);

        const momentDay = (day === SUNDAY) ? 0 : day;

        if (getWeekNumber(formatDate(startDate)) === day) {
            result.push(formatDate(start));
        }

        while (start.day(7 + momentDay).isBefore(end)) {
            result.push(formatDate(start.clone()));
        }

        if (formatDate(endDate) !== formatDate(startDate) && getWeekNumber(formatDate(endDate)) === day) {
            result.push(formatDate(end));
        }
    }

    return result;
}

export const formatDate = (date, format = 'yyyy-MM-DD') => {
    return moment(date).format(format);
}

export const isPastDate = (date, fromDate = new Date(), onlyDate = true) => {
    fromDate = onlyDate ? formatDate(fromDate) : fromDate;
    date = onlyDate ? formatDate(date) : date;
    return (moment(date).diff(fromDate) < 0) ? true : false;
}


export const isGreater = (date, fromDate = new Date(), onlyDate = true) => {
    fromDate = onlyDate ? formatDate(fromDate) : fromDate;
    date = onlyDate ? formatDate(date) : date;
    return (moment(date).diff(fromDate) > 0) ? true : false;
}

export const formatTime = (time, preFormat = 'HH:mm', format = 'h:mm A') => {
    let result = '';
    if (preFormat) {
        result = moment(time, preFormat).format(format);
    } else {
        result = moment(time).format(format);
    }
    return result;
}


/**
 * Format a date to moment object
 * @param {*} inputDate 
 */
export const toDate = (inputDate, format = false) => {
    let result = false;

    if (format) {
        result = moment(inputDate, format).toDate();
    } else {
        result = moment(inputDate).toDate();
    }

    return result;
}

export const getDiff = (dateOne, dateTwo, type = 'minutes') => {
    let result = '';

    let query = moment.duration(moment(dateOne).diff(moment(dateTwo)));

    if (type === 'days') {
        result = query.asDays();
    } else {
        result = query.asMinutes();
    }

    return result;
}

export const getAllDates = (startDate, endDate, includingStartEnd = true) => {
    let dates = [];

    if (includingStartEnd) {
        dates.push(startDate);
        if (startDate !== endDate) {
            dates.push(endDate);
        }
    }

    let currDate = moment(startDate).startOf('day');
    let lastDate = moment(endDate).startOf('day');

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
        dates.push(formatDate(currDate.clone().toDate()));
    }

    return dates.sort();
}

export const notAllowedDays = (selectedWeeks, startDate, endDate) => {
    let result = [];
    const daysDiff = getDiff(endDate, startDate, 'days');

    if (daysDiff < 7) {
        const dates = getAllDates(startDate, endDate);
        const allowedWeeks = getWeekNumbers(dates);
        selectedWeeks.forEach((single) => {
            if (!allowedWeeks.includes(single.toString())) {
                result.push(single);
            }
        });
    }

    if (result.length) {
        result = getWeekDays(result.join(","));
    } else {
        result = false
    }

    return result;
}

export const getToday = (format = 'DD-MM-YYYY') => {
    return moment().format(format);
}


export const getDateWithCondition = (date, days, format = 'DD-MM-YYYY', optioration = '-') => {
    return moment(date, format).subtract(days, 'days').format(format);
}

const DateTimeHelper = {
    formatDate, formatTime, isGreater, isPastDate, getDaysBetweenDateRange, yearRange,
    getWeekNumber, getWeekDay, toDate, getDiff, notAllowedDays, getAllDates, getToday,
    getDateWithCondition,
    DAYS, DEFAULT_DURATIONS
};


// export const currentYear = () => {
//     return currentYear = new Date().getFullYear() 
// }

export default DateTimeHelper;