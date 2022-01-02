import React, { Component } from 'react'
import Pagination from '../../Components/Pagination'
import Loader from '../../Components/Loader'
import MetaHelper from '../../Helpers/MetaHelper'
import Single from './Partials/Single'
import ApiQuiz from '../../Apis/Quiz/ApiQuiz'
import UrlManager from '../../Routers/UrlManager'


export default class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            offset: 0,
            limit: 10,
            total: 0,
            loading: false,
            data: []
        }
    }

    componentDidMount = async () => {
        this.getData();
    }

    getData = async () => {
        this.setState({ loading: true });

        const response = await ApiQuiz.getAll({
            limit: this.state.limit,
            offset: this.state.offset
        });
        if (response) {
            this.setState({
                data: response.data,
                limit: response.limit,
                offset: response.offset,
                total: response.total
            })
        }
        this.setState({
            loading: false
        })
    }

    onPageChange = (offset, limit) => {
        this.setState({
            offset: offset,
            limit: limit
        }, this.getData)
    }

    render() {
        return (
            <div>
                <Loader loading={this.state.loading} />
                <MetaHelper title="Quiz" />
                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid pt-3">
                            <div className='card'>
                                <div className='card-header'>
                                    <span className='pull-left'>
                                        Quiz ({this.state.total})
                                    </span>
                                    <span className="pull-right">
                                        <a
                                            className='btn btn-primary btn-sm mr-2'
                                            href={UrlManager.QUIZ.SAVE}
                                        >
                                            <i className='fa fa-plus-circle'></i> Add New
                                        </a>
                                    </span>
                                </div>
                                <div className='card-body'>
                                    <table className="table table-bordered word_wrap">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Title</th>
                                                <th>Created At</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {(this.state.data && this.state.data.length !== 0) && <tbody>
                                            {this.state.data.map((single, key) => <Single
                                                key={key}
                                                data={single}
                                            />)}
                                        </tbody>}
                                    </table>
                                </div>
                                <Pagination
                                    offset={this.state.offset}
                                    limit={this.state.limit}
                                    total={this.state.total}
                                    onPageChange={this.onPageChange}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}