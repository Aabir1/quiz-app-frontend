import React, { Component } from 'react'
import UrlManager from '../../../Routers/UrlManager';

/**
 * Single component responsible to show single
 * quiz information
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export default class Single extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.title}</td>
                <td title={this.props.data.createdAt}>
                    {this.props.data.displayTime}
                </td>
                <td>
                    <a
                        href={UrlManager.QUESTIONS.GET_RESULTS + '?quiz=' + this.props.data.id}
                        title={'View Results'}
                    >
                        <i className='fa fa-sticky-note-o'></i>
                    </a>
                    <a
                        href={UrlManager.QUESTIONS.GET_ALL + '?quiz=' + this.props.data.id}
                        title={'View/Add Questions'}
                        className={'ml-2'}
                    >
                        <i className='fa fa-pencil'></i>
                    </a>
                </td>
            </tr >
        )
    }
}