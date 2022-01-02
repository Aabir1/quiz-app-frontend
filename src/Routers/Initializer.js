import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UrlManager from './UrlManager';
import Header from "../Components/Header";

import QuizSave from "../Pages/Quiz/Save";
import QuizList from "../Pages/Quiz/List";

import QuestionsList from "../Pages/Questions/List";
import Result from "../Pages/Questions/Result";
import QuestionsSave from "../Pages/Questions/Save";

/**
 * initializer contains all routes
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
class Initializer extends React.Component {

    render() {
        return (
            <>
                <Header />
                <Router>
                    <Switch>
                        <Route
                            path={UrlManager.QUIZ.SAVE}
                            exact
                            render={() => <QuizSave />}
                        />
                        <Route
                            path={UrlManager.QUIZ.GET_ALL}
                            exact
                            render={() => <QuizList />}
                        />

                        <Route
                            path={UrlManager.QUESTIONS.SAVE}
                            exact
                            render={() => <QuestionsSave />}
                        />
                        <Route
                            path={UrlManager.QUESTIONS.GET_ALL}
                            exact
                            render={() => <QuestionsList />}
                        />

                        <Route
                            path={UrlManager.QUESTIONS.GET_RESULTS}
                            exact
                            render={() => <Result />}
                        />
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Initializer
