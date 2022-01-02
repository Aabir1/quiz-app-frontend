import React, { Component } from 'react'
import TextHelper from '../../../Helpers/TextHelper';

/**
 * Display single question
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export default class Single extends Component {
    render() {
        return (
            <tr>
                <td title={this.props.data.question}>{TextHelper.limitText(this.props.data.question, 30)}</td>
                <td title={this.props.data.optionOne}>{TextHelper.limitText(this.props.data.optionOne, 30)}</td>
                <td title={this.props.data.optionTwo}>{TextHelper.limitText(this.props.data.optionTwo, 30)}</td>
                <td title={this.props.data.optionThree}>{TextHelper.limitText(this.props.data.optionThree, 30)}</td>
                <td title={this.props.data.rightOption}>{TextHelper.limitText(this.props.data.rightOption, 30)}</td>
                <td title={this.props.data.createdAt}>
                    {this.props.data.displayTime}
                </td>
            </tr >
        )
    }
}