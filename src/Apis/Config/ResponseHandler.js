import { KEY_USER_INFO, LOGIN_AUTH_COOKIE } from '../../Constants/StorageKeys';
import UrlManager from '../../Routers/UrlManager';

const STATUS_SUCCESS = 'success';
const STATUS_DANGER = 'danger';

/**
 * Handler Response function is responsible
 * show errors if received from the server
 * handle errorCodes if received from the server
 * return boolean status of the request.
 *
 * @param {json} responseJson
 * @param {boolean} showSuccess
 *
 * @returns {boolean} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export const responseHandler = async(responseJson, showSuccess) => {
    var result = false;
    var messageType = STATUS_DANGER;

    if (responseJson.status === true) {
        result = true;
        messageType = STATUS_SUCCESS;
    }

    if (!(!showSuccess && messageType === STATUS_SUCCESS)) {
        messageHandler(responseJson.message, messageType);
    }

    if (responseJson.is_login_required) {
        // Cookies.remove(LOGIN_AUTH_COOKIE)
        alert('User must be logged in.');
        window.location.href = UrlManager.AUTHENTICATIONS.LOGIN;
    }

    // await errorHandler(responseJson.error)
    return result;
}

/**
 * Display error messages received from the server
 * By using getMessage function.
 *
 * @param {string|array} message
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
const messageHandler = async(message, type) => {

    const newMessage = await getMessage(message);
    //alert(newMessage);
    if (newMessage === 'User must be logged in.') {
        localStorage.removeItem(KEY_USER_INFO);
        return window.location.href = UrlManager.LOGIN;
    }
    // Toast.show({ position: 'top', type: type,
    //     buttonText: "Okay", duration: 10000,
    //     text: newMessage,
    // });
}

/**
 * Manage error message received from the
 * server and than parse into string than return
 * string.
 *
 * @param {string|array} message
 *
 * @returns {string} result
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
const getMessage = (message) => {
    var result = '';
    if (typeof message == 'string') {
        result += message;
    } else if (typeof message == 'object') {
        for (var key in message) {
            // skip loop if the property is from prototype
            if (!message.hasOwnProperty(key)) continue;
        
            var obj = message[key];
            for (var prop in obj) {
                // skip loop if the property is from prototype
                if(!obj.hasOwnProperty(prop)) continue;
        
                // your code
                result += obj[prop] + '\n'; //prop + " = " +
            }
        }
    }

    return result;
}