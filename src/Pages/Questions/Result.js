import React, { Component } from 'react'
import Loader from '../../Components/Loader'
import MetaHelper from '../../Helpers/MetaHelper'
import Single from './Partials/SingleResult'
import ApiQuestions from '../../Apis/Questions/ApiQuestions'
import UrlHelper from '../../Helpers/UrlHelper'
import UrlManager from '../../Routers/UrlManager'


export default class Results extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            data: [],
            quiz: UrlHelper.getParams('quiz')
        }
    }

    componentDidMount = async () => {
        this.getData();
    }

    getData = async () => {
        this.setState({ loading: true });

        const response = await ApiQuestions.getResult({
            quiz: this.state.quiz,
        });

        if (response) {
            this.setState({ data: response });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <div>
                <Loader loading={this.state.loading} />
                <MetaHelper title="Questions" />
                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid pt-3">
                            <div className='card'>
                                <div className='card-header'>
                                    <span className='pull-left'>
                                        Result for QuizID: {this.state.quiz}
                                    </span>
                                    <span className='pull-right'>
                                        <a className='btn btn-danger btn-sm' href={UrlManager.QUIZ.GET_ALL}>
                                            Go Back
                                        </a>
                                    </span>
                                </div>
                                <div className='card-body'>
                                    <table className="table table-bordered word_wrap">
                                        <thead>
                                            <tr>
                                                <th>Question</th>
                                                <th>Right Option</th>
                                                <th>USER Selected Option</th>
                                                <th>USER Input Text</th>
                                                <th>USER Answered At</th>
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
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}