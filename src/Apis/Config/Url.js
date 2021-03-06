import { URLS } from "../../Config/env";

/**
 * Api base url is server base url.
 */
export const BASE_URL_QUIZ = URLS.BASE_URL_QUIZ || "http://15.206.212.45:3099/v1/";

//all quiz apis
export const API_QUIZ = {
    SAVE: BASE_URL_QUIZ + 'quiz/save',
    GET_ALL: BASE_URL_QUIZ + 'quiz/get-all',
};

//all question apis
export const API_QUESTION = {
    SAVE: BASE_URL_QUIZ + 'quiz/questions/save',
    GET_ALL: BASE_URL_QUIZ + 'quiz/questions/get-all',
    GET_BY_QUIZ: BASE_URL_QUIZ + 'quiz/questions/get-by-quiz',
    GET_RESULT: BASE_URL_QUIZ + 'quiz/questions/get-result',
};

//all answer apis
export const API_ANSWERS = {
    SAVE: BASE_URL_QUIZ + 'quiz/answers/save',
    GET_ALL: BASE_URL_QUIZ + 'quiz/answers/get-all',
};