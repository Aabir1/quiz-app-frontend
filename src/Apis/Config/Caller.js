import { getHeader } from "./Header";
import { responseHandler } from "./ResponseHandler";

/**
 * Main Api Caller is responsible for send request to
 * server and receive response from server
 * Every Api call should be made by using this function.
 *
 * @param {string} url
 * @param {object} model
 * @param {boolean} requestType
 * @param {boolean} showSuccess
 * @param {boolean} multiPart [if true the model should be send from the response of CreateFormData.js]
 *
 * @returns {any} data
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
const Caller = async (url, model, requestType, returnWithMessage = false, multiPart = false, showSuccess = false) => {
  var data = false;
  const headers = await getHeader(multiPart);

  var params = {
    method: requestType,
    mode: "cors",
    redentials: 'include',
    withCredentials: true,
    crossDomain: true,
    headers: headers,
  };

  if (model) {
    params["body"] = multiPart ? model : JSON.stringify(model);
  }

  try {
    const response = await fetch( url, params);

    const responseJson = await response.json();
    const status = await responseHandler(responseJson, showSuccess);

    if (status) {
      if (returnWithMessage) {
        data = {
          data: responseJson.data,
          message: responseJson.message
        }
      } else {
        data = responseJson.data;
      }
    }
  } catch (error) {
    //alert('CallerFunction: ' + error.message);
  }

  return data;
};

export default Caller;