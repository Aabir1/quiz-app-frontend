
let ArrayHelper = {};

//DEEPAK STARTS
// set up a function that iterates through a given array
// if one of the elements is an array, call itself with that element
// (Edited)
// if elements of the array is an object, we make sure to take care of that too.
ArrayHelper.deepCopy = (arr) => {
    let copy = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copy.push(ArrayHelper.deepCopy(elem));
        } else {
            if (typeof elem === "object" && elem !== null) {
                if (typeof elem.getMonth === "function") {
                    copy.push(elem);
                } else {
                    copy.push(ArrayHelper.deepCopyObject(elem));
                }
            } else {
                copy.push(elem);
            }
        }
    });
    return copy;
};

// Helper function to deal with Objects
ArrayHelper.deepCopyObject = (obj) => {
    let tempObj = {};

    for (let [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
            tempObj[key] = ArrayHelper.deepCopy(value);
        } else {
            if (typeof value === "object" && value !== null) {
                if (typeof value.getMonth === "function") {
                    tempObj[key] = value;
                } else {
                    tempObj[key] = ArrayHelper.deepCopyObject(value);
                }
            } else {
                tempObj[key] = value;
            }
        }
    }
    return tempObj;
};
//DEEPAK ENDS


/**
 * Convert a string with separator into array
 *
 * @param query <Get Query String>
 * @param separator <String>
 *
 * @returns result <Array of values>
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ArrayHelper.explodeParam = (query, separator = ',') => {
    let result = [];

    if (query && query.trim()) {
        result = query.split(separator);
    }

    return result;
}

/**
 * Split an array into array of small array
 *
 * @param {Array} data 
 * @param {Integer} size 
 *
 * @returns {Array} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ArrayHelper.chunk = (data, size = 3) => {

    let i, j;
    let result = [];
    for (i = 0, j = data.length; i < j; i += size) {
        result.push(data.slice(i, i + size));
        // do whatever
    }

    return result;
}

ArrayHelper.objectToArray = (dataObject, indexField = 'id', valueField = 'title') => {
    let result = [];

    if (dataObject) {
        Object.keys(dataObject).map((index) => {
            return result.push({
                [indexField]: index,
                [valueField]: dataObject[index]
            });
        });
    }

    return result;
}

/**
 * Replace keys of an object inside an array
 *
 * @usage ArrayHelper.restructureArray([{ "idCourse": 4, "name": "JEE" }], {
 *       idCourse: 'id', name: 'title'
 *  });
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ArrayHelper.restructureArray = (data, cols, onlyNewEntries = true) => {
    let result = [];

    if (data && data.length) {
        data.forEach((single) => {
            let singleChild = (onlyNewEntries) ? {} : single;

            Object.keys(cols).forEach((childIndex) => {
                singleChild[cols[childIndex]] = single[childIndex];
            });

            result.push(singleChild);
        });
    }

    return result;
}

ArrayHelper.getTitleById = (data, id) => {
    let result = {};
    if (data) {
        data.forEach(single => {
            if (single.id === id) {
                result = single;
            }
        })
    }
    return (result.title) ? result.title : '--';
}

/**
 * Get Only one col from set of data.
 *
 * @param data <Array of objects>
 * @param fieldName <String>
 *
 * @returns result <Array of fielName>
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ArrayHelper.getColumn = (data, fieldName) => {
    let result = [];
    data.forEach((single) => {
        if (single[fieldName] && typeof single[fieldName] == 'object') {
            result.push(single[fieldName]);
        } else if (single[fieldName]) {
            result.push(single[fieldName].toString());
        }
    });

    return result;
}


export default ArrayHelper;