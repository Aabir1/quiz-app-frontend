import React from 'react';


export const ParamParser = async (params) => {
    var result = '';
    if (params) {
        result = '?';
        if (typeof params == 'object') {
            Object.keys(params).map((index) => {
                result += index + '=' + params[index] + '&';
            });
        } else {
            params.map((item) => {
                result += item.key + '=' + item.value + '&';
            });
        }

        // we should remove last & from string.
        result.substring(0, result.length - 1);
    }

    return result;
}