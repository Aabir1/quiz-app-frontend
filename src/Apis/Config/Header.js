import { APPLICATION_TOKEN } from '../../Config/env';

/**
 * Common header template for all requests
 */
const HEADER = {
    'Accept': 'application/json',
    'Authorization': '',
    'Content-Type': 'application/json',
    'x-api-version': '6.0',
    'X-USER-DEVICE-TYPE': '1',
    'Access-Control-Allow-Origin': '*',
    "Access-Control-Allow-Credentials": true,
    "application-token": APPLICATION_TOKEN
};

/**
 * return header for the request
 * if user access token found in the localStorage
 * than append it in the header
 *
 * @param {boolean} multiPart
 *
 * @returns {json} headers
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export const getHeader = async (multiPart) => {

    let headers = { ...HEADER };

    try {

        if (multiPart) {
            delete headers["Content-Type"];
            //headers['Content-Type'] = 'multipart/form-data';
        }

        //const accessToken = await sessionStorage.getItem(LOGIN_USER_KEY);
        let accessToken = false;

        // if (GLOBAL_SETTINGS.ENVIRONMENT == ENVIRONMENT_DEV) {
        //     accessToken = GLOBAL_SETTINGS.DEV_AUTH_TOKEN;
        // } else {
            
        // }

        // accessToken = await Cookies.get(LOGIN_AUTH_COOKIE);

        // if (accessToken) {
        //     headers.Authorization = 'Bearer ' + accessToken;
        // }

    } catch (error) {
        alert('HEADERS PROBLEM => ' + JSON.stringify(error.message));
    }

    return headers;
}
