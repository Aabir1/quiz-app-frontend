import Caller from "../Config/Caller";
import { GET, POST } from "../Config/RequestType";
import { API_QUESTION } from "../Config/Url";
import UrlHelper from "../../Helpers/UrlHelper";

let ApiQuestions = {};

/**
 * return all question by quiz id.
 *
 * @param {object} params
 *
 * @returns {any} data
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ApiQuestions.getByQuiz = async (params) => {
    let data = false;
    try {
        const url = await UrlHelper.buildUrl(API_QUESTION.GET_BY_QUIZ, params);
        data = await Caller(url, false, GET);
    } catch (error) {
        data = false;
        alert(JSON.stringify(error.message));
    };
    return data;
};

/**
 * return all question by quiz id.
 *
 * @param {object} params
 *
 * @returns {any} data
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
 ApiQuestions.getResult = async (params) => {
    let data = false;
    try {
        const url = await UrlHelper.buildUrl(API_QUESTION.GET_RESULT, params);
        data = await Caller(url, false, GET);
    } catch (error) {
        data = false;
        alert(JSON.stringify(error.message));
    };
    return data;
};

ApiQuestions.save = async (model) => {
    let data = false;
    try {
        data = await Caller(API_QUESTION.SAVE, model, POST);
    } catch (error) {
        data = false;
        alert(JSON.stringify(error.message));
    };
    return data;
};

export default ApiQuestions;