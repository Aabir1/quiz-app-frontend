import React from 'react';
import UrlManager from '../Routers/UrlManager';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href={UrlManager.QUIZ.GET_ALL}>Quiz Application</a>
            </nav>
        );
    }
}