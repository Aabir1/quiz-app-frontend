import Caller from "../Config/Caller";
import { GET, POST } from "../Config/RequestType";
import { API_QUIZ } from "../Config/Url";
import UrlHelper from "../../Helpers/UrlHelper";

let ApiQuiz = {};

/**
 * ApiQuiz
 *
 * @param {object} params
 *
 * @returns {any} data
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ApiQuiz.getAll = async (params) => {
    let data = false;
    try {
        const url = await UrlHelper.buildUrl(API_QUIZ.GET_ALL, params);
        data = await Caller(url, false, GET);
    } catch (error) {
        data = false;
        alert(JSON.stringify(error.message));
    };
    return data;
};

/**
 * save quiz
 *
 * @param {object} model
 *
 * @returns {any} data
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
ApiQuiz.save = async (model) => {
    let data = false;
    try {
        data = await Caller(API_QUIZ.SAVE, model, POST);
    } catch (error) {
        data = false;
        alert(JSON.stringify(error.message));
    };
    return data;
};

export default ApiQuiz;