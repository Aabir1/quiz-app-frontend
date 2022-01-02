import React, { Component } from 'react'
import ApiQuiz from '../../Apis/Quiz/ApiQuiz'
import FormHelper from '../../Helpers/FormHelper'
import ValidationHelper from '../../Helpers/ValidationHelper'
import Loader from '../../Components/Loader';
import MetaHelper from '../../Helpers/MetaHelper';
import UrlManager from '../../Routers/UrlManager';


export default class QuizSave extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            errors: {},
            model: { title: "" },
        };
    };

    handleChange = (name, value) => {
        let model = this.state.model;
        model[name] = value;

        this.setState({ model: model });
    };

    validate = () => {
        let errors = {};
        let result = true;
        this.setState({ errors: {} });

        if (!ValidationHelper.minMaxLen(this.state.model.title)) {
            errors.title = "Please enter a title of length 2-256 "
            result = false
        }

        this.setState({
            errors: errors
        })
        return result;
    }

    handleSubmit = async () => {
        if (this.validate()) {
            const result = await ApiQuiz.save(this.state.model);
            alert('Created Successfully');
            window.location.href = UrlManager.QUIZ.GET_ALL;
        }
    }

    render() {
        return (
            <div>
                <Loader loading={this.state.loading} />
                <MetaHelper title="Quiz" />

                <div className="container-fluid pt-3">
                    <div className='card'>
                        <div className='card-header'>
                            <span className='pull-left'>
                                Save Quiz
                            </span>
                            <span className="pull-right">
                                <a
                                    className='btn btn-danger btn-sm mr-2'
                                    href={UrlManager.QUIZ.GET_ALL}
                                >
                                    Go Back
                                </a>
                            </span>
                        </div>
                        <div className='card-body text-left'>
                            <div className="">
                                <FormHelper.Input
                                    name="title"
                                    error={this.state.errors.title}
                                    value={this.state.model.title}
                                    placeholder="Enter Title"
                                    onChange={this.handleChange}
                                />
                                <div className="mt-2">
                                    <button className="btn btn-sm btn-primary" onClick={this.handleSubmit}>
                                        Submit
                                    </button>
                                    <a
                                        className='btn btn-sm btn-danger ml-2'
                                        href={UrlManager.QUIZ.GET_ALL}
                                    >
                                        Cancel
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}