import React, { Component } from 'react'
import FormHelper from '../../Helpers/FormHelper'
import ValidationHelper from '../../Helpers/ValidationHelper'
import Loader from '../../Components/Loader';
import MetaHelper from '../../Helpers/MetaHelper';
import UrlManager from '../../Routers/UrlManager';
import UrlHelper from '../../Helpers/UrlHelper';
import ApiQuestions from '../../Apis/Questions/ApiQuestions';

/**
 * Display and handle question save
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export default class QuestionsSave extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            errors: {},
            model: {
                question: "",
                rightOption: '',
                optionOne: '',
                optionTwo: '',
                optionThree: '',
                quiz: UrlHelper.getParams('quiz')
            }
        };
    };

    /**
     * Save values to state when user enter
     *
     * @param {String} name 
     * @param {String} value 
     *
     * @author Aabir Hussain <aabir.hussain1@gmail.com>
     */
    handleChange = (name, value) => {
        let model = this.state.model;
        model[name] = value;

        this.setState({ model: model });
    };

    /**
     * validate complete form data
     *
     * @returns {Boolean} result
     *
     * @author Aabir Hussain <aabir.hussain1@gmail.com>
     */
    validate = () => {
        let errors = {};
        let result = true;
        this.setState({ errors: {} });

        if (!ValidationHelper.minMaxLen(this.state.model.question)) {
            errors.question = "Please enter a question of length 2-256 ";
            result = false
        }
        if (!ValidationHelper.minMaxLen(this.state.model.optionOne)) {
            errors.optionOne = "Please enter a optionOne of length 2-256 ";
            result = false
        }
        if (!ValidationHelper.minMaxLen(this.state.model.optionTwo)) {
            errors.optionTwo = "Please enter a optionTwo of length 2-256 ";
            result = false
        }
        if (!ValidationHelper.minMaxLen(this.state.model.optionThree)) {
            errors.optionThree = "Please enter a optionThree of length 2-256 ";
            result = false
        }
        if (ValidationHelper.isEmpty(this.state.model.rightOption)) {
            errors.rightOption = "Please select rightOption";
            result = false
        }

        this.setState({ errors: errors });

        return result;
    }

    /**
     * validate and save data into api
     *
     * @author Aabir Hussain <aabir.hussain1@gmail.com>
     */
    handleSubmit = async () => {
        if (this.validate()) {
            const result = await ApiQuestions.save(this.state.model);
            if (result) {
                alert('Created Successfully');
                window.location.href = UrlManager.QUESTIONS.GET_ALL + '?quiz=' + this.state.model.quiz;
            }
        }
    }

    render() {
        return (
            <div>
                <Loader loading={this.state.loading} />
                <MetaHelper title="Questions" />

                <div className="container-fluid pt-3">
                    <div className='card'>
                        <div className='card-header'>
                            <span className='pull-left'>
                                Save Question for QuizId: {this.state.model.quiz}
                            </span>
                            <span className="pull-right">
                                <a
                                    className='btn btn-danger btn-sm mr-2'
                                    href={UrlManager.QUESTIONS.GET_ALL + '?quiz=' + this.state.model.quiz}
                                >
                                    Go Back
                                </a>
                            </span>
                        </div>
                        <div className='card-body text-left'>

                            <div className='mt-2 row col-12'>
                                <div className='col-8'>
                                    <FormHelper.Input
                                        name="question"
                                        error={this.state.errors.question}
                                        value={this.state.model.question}
                                        placeholder="Enter question"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormHelper.Dropdown
                                        name="rightOption"
                                        error={this.state.errors.rightOption}
                                        value={this.state.model.rightOption}
                                        data={[
                                            { id: 'optionOne', title: 'optionOne' },
                                            { id: 'optionTwo', title: 'optionTwo' },
                                            { id: 'optionThree', title: 'optionThree' },
                                        ]}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className='mt-2 row col-12'>
                                <div className='col-4'>
                                    <FormHelper.Input
                                        name="optionOne"
                                        error={this.state.errors.optionOne}
                                        value={this.state.model.optionOne}
                                        placeholder="Enter optionOne"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormHelper.Input
                                        name="optionTwo"
                                        error={this.state.errors.optionTwo}
                                        value={this.state.model.optionTwo}
                                        placeholder="Enter optionTwo"
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className='col-4'>
                                    <FormHelper.Input
                                        name="optionThree"
                                        error={this.state.errors.optionThree}
                                        value={this.state.model.optionThree}
                                        placeholder="Enter optionThree"
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mt-3 ml-3">
                                <button className="btn btn-sm btn-primary" onClick={this.handleSubmit}>
                                    Submit
                                </button>
                                <a
                                    className='btn btn-sm btn-danger ml-2'
                                    href={UrlManager.QUESTIONS.GET_ALL + '?quiz=' + this.state.model.quiz}
                                >
                                    Cancel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}