import React from 'react';
import UrlManager from '../Routers/UrlManager';

/**
 * Header of the application
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href={UrlManager.QUIZ.GET_ALL}>Quiz Application</a>
            </nav>
        );
    }
}