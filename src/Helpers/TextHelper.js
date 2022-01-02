
let TextHelper = {};
/**
 * It will truncate string with ending ...
 *
 * @param {String} text 
 * @param {Integer} defaultLimit 
 * @param {String} ending 
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
TextHelper.limitText = (text, defaultLimit = 15, ending = '...') => {
    let result = '';
    if (text) {
        if (text.length > defaultLimit) {
            result = text.substring(0, defaultLimit - ending.length) + ending;
        } else {
            result = text;
        }
    }

    return result;
}

TextHelper.copyToClipboard = (idField) => {
    const field = document.getElementById(idField);
    let result = true;

    if (field) {
        field.select();
        document.execCommand("copy");
    } else {
        result = false;
    }

    return result;
}

/**
 * Beautify title from string will work like this
 * startDateTime, start_date_time, start date time => Start Date Time
 *
 * @param {String} words 
 *
 * @returns {String} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
TextHelper.beautifyTitle = (words) => {
    let result = '';

    if (words) {
        //for camel case to separate words
        words = words.replace( /([A-Z])/g, " $1" );

        //snake case to seprate words
        words = words.replace(/_/g, " ");

        // make all words separate
        var separateWord = words.toLowerCase().split(' ');

        //capitalize first later of each of word
        for (var i = 0; i < separateWord.length; i++) {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                separateWord[i].substring(1);
        }

        result = separateWord.join(' ');
    }

    return result;
}

/**
 * It will remove the comma white space from the end of the string
 * if need to make a proper comma separated string.
 *
 * @param {String} preString 
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
TextHelper.formatCommaString = (preString) => {
    return preString.replace(/,\s*$/, "");
}


export default TextHelper;