import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UrlManager from './UrlManager';
import Header from "../Components/Header";

import QuizSave from "../Pages/Quiz/Save";
import QuizList from "../Pages/Quiz/List";

import QuestionsList from "../Pages/Questions/List";
import QuestionsSave from "../Pages/Questions/Save";

class Initializer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogin: false,
            user: false,
            isSuperAdmin: false,
            isReady: false
        }
    }

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
                    </Switch>
                </Router>
            </>
        )
    }
}

export default Initializer
