import React, { Component } from 'react'
import TextHelper from '../../../Helpers/TextHelper';

export default class Single extends Component {
    constructor(props) {
        super(props);
        console.log('this.props.data', this.props.data.answer);
    }
    render() {
        return (
            <tr>
                <td title={this.props.data.question}>{TextHelper.limitText(this.props.data.question, 30)}</td>
                <td>{this.props.data.rightOption}</td>
                {
                    this.props.data.answer && <>
                        <td>{this.props.data.answer.selectedOption}</td>
                        <td title={this.props.data.answer.answer}>
                            {TextHelper.limitText(this.props.data.answer.answer, 7)}
                        </td>
                        <td title={this.props.data.answer.createdAt}>
                            {this.props.data.answer.displayTime || this.props.data.answer.createdAt}
                        </td>
                    </>
                }
            </tr >
        )
    }
}