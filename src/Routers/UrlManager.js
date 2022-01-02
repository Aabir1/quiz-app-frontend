
/**
 * It will contain all urls which can be accessed
 * from browser
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
let UrlManager = {}

//all quiz urls
UrlManager.QUIZ = {
    SAVE: '/quiz/save',
    GET_ALL: '/'
}


//all questions urls
UrlManager.QUESTIONS = {
    GET_ALL: '/questions/get-all',
    GET_RESULTS: '/questions/get-result',
    SAVE: '/questions/save'
}

export default UrlManager