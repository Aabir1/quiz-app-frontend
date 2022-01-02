import React from "react";
import { Helmet } from "react-helmet";

/**
 * add meta tags in header
 *
 * @params {String} title
 * @params {String} description
 * @params {String} image
 * @params {String} url
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export default class MetaHelper extends React.Component {
    render() {
        return (
            <Helmet>
                <title>{this.props.title ? (this.props.title) : 'Home - Notesgen Analytics'} </title>
                <meta name="description" content={this.props.description} />
                <meta property="og:title" content={this.props.title ? (this.props.title) : 'Home - Notesgen Analytics'} />
                <meta property="og:url" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={this.props.description} />
                {this.props.image && <meta name="og:image" content={this.props.image} />}
                <meta property="twitter:title" content={this.props.title ? (this.props.title) : 'Home - Notesgen Analytics'} />
                <meta property="twitter:description" content={this.props.description} />
                {this.props.image && <meta property="twitter:image" content={this.props.image} />}
                <meta property="twitter:card" content="summary" />
                <meta property="og:url" content={this.props.url || window.location.href} />
            </Helmet>
        )
    }
}