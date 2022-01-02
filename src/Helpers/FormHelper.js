import React, { lazy } from 'react';
import TextHelper from './TextHelper';
import DateTimeHelper from './DateTimeHelper';
import { URLS } from '../Config/env';
let FormHelper = {};

/**
 * It will create a input field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {String} defaultValue {Required}
 * @param {function} onChange {Required}
 * @param {String} type {Optional} default is text
 * @param {String} label={if label is not given and hideLabel is not given then it will create default label from name}
 * @param {String} hideLabel={true or false} default false
 * @param {String} placeholder={if placeholder is not given and hidePlaceholder is not given then it will create default label from name}
 * @param {String} hidePlaceholder={true or false} default false
 * @param {String} className='form-control' default is form-control
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
FormHelper.Input = (props) => {
    const label = (props.label) ? props.label : TextHelper.beautifyTitle(props.name);
    const placeholder = (props.placeholder) ? props.placeholder : 'Please enter ' + label;
    return (
        <div className="form-input-v1 w-100">
            {!props.hideLabel && <label>{label}</label>}
            <input
                type={props.type || 'text'}
                name={props.name}
                defaultValue={props.defaultValue}
                placeholder={!props.hidePlaceholder ? placeholder : ''}
                className={props.className ? props.className : 'form-control'}
                onChange={(e) => {
                    return props.onChange ? props.onChange(e.target.name, e.target.value) : ''
                }}
            />
            <div className="help-block">
                {props.error}
            </div>
        </div>
    )
}

/**
 * It will create a textarea field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {String} defaultValue {Required}
 * @param {function} onChange {Required}
 * @param {String} label={if label is not given and hideLabel is not given then it will create default label from name}
 * @param {String} hideLabel={true or false} default false
 * @param {String} placeholder={if placeholder is not given and hidePlaceholder is not given then it will create default label from name}
 * @param {String} hidePlaceholder={true or false} default false
 * @param {String} className='form-control' default is form-control
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
FormHelper.Textarea = (props) => {
    const label = (props.label) ? props.label : TextHelper.beautifyTitle(props.name);
    const placeholder = (props.placeholder) ? props.placeholder : 'Please enter ' + label;
    return (
        <div className="form-input-v1">
            {!props.hideLabel && <label>{label}</label>}
            <textarea
                type={props.type || 'text'}
                name={props.name}
                defaultValue={props.defaultValue}
                placeholder={!props.hidePlaceholder ? placeholder : ''}
                className={props.className ? props.className : 'form-control'}
                onChange={(e) => {
                    return props.onChange ? props.onChange(e.target.name, e.target.value) : ''
                }}
            />
            <div className="help-block">
                {props.error}
            </div>
        </div>
    )
}

/**
 * It will create a checkbox field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {String} defaultValue {Required}
 * @param {function} onChange {Required}
 * @param {String} label={if label is not given and hideLabel is not given then it will create default label from name}
 * @param {String} hideLabel={true or false} default false
 * @param {String} placeholder={if placeholder is not given and hidePlaceholder is not given then it will create default label from name}
 * @param {String} hidePlaceholder={true or false} default false
 * @param {String} className='form-control' default is form-control
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
FormHelper.Checkbox = (props) => {
    const label = (props.label) ? props.label : TextHelper.beautifyTitle(props.name);
    const placeholder = (props.placeholder) ? props.placeholder : 'Please enter ' + label;
    const id = props.id || ('id_' + props.name);

    return (
        <>
            <div className="form-check">

                <input
                    id={id}
                    type='checkbox'
                    name={props.name}
                    checked={props.defaultValue}
                    placeholder={!props.hidePlaceholder ? placeholder : ''}
                    className={props.className ? props.className : 'form-check-input'}
                    onChange={(e) => {
                        return props.onChange ? props.onChange(e.target.name, (e.target.checked) ? 1 : 0) : ''
                    }}
                />

                {!props.hideLabel && <label htmlFor={id} className='form-check-label'>{label}</label>}
                <div className="help-block">
                    {props.error}
                </div>
            </div>
        </>
    )
}

/**
 * It will dropdown field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {String} defaultValue {Required}
 * @param {function} onChange {Required}
 * @param {String} label={if label is not given and hideLabel is not given then it will create default label from name}
 * @param {String} hideLabel={true or false} default false
 * @param {String} prompt={if prompt is not given and hidePlaceholder is not given then it will create default label from name}
 * @param {String} hidePrompt={true or false} default false
 * @param {String} className='form-control' default is form-control
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
FormHelper.Dropdown = (props) => {
    const label = (props.label) ? props.label : TextHelper.beautifyTitle(props.name);
    const prompt = (props.prompt) ? props.prompt : 'Select ' + label;

    return (
        <div className="form-input-v1 fd">
            {!props.hideLabel && <label>{label}</label>}
            <select
                onChange={(e) => {
                    return props.onChange ? props.onChange(e.target.name, e.target.value) : ''
                }}
                className={props.className ? props.className : 'form-control'}
                name={props.name}
                disabled={props.disabled}
                readOnly={props.readonly}
            >
                {!props.hidePrompt && <option value=''>{prompt}</option>}
                {props.data &&
                    props.data.map((single) => (
                        <option
                            key={single.id}
                            value={single.id}
                            selected={(props.defaultValue === single.id) ? true : false}
                        >
                            {single.title}
                        </option>
                    ))}
            </select>
            <div className="help-block">
                {props.error}
            </div>
        </div>
    )
}

/**
 * It will create a file field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {String} defaultValue {Optional}
 * @param {String} defaultUrl {Optional}
 * @param {function} onChange {Required}
 * @param {String} accept {Optional} {.png, .jpg, .jpeg}
 * @param {String} theme { currently only one theme is available}
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
FormHelper.File = (props) => {
    const label = (props.label) ? props.label : ('Upload ' + TextHelper.beautifyTitle(props.name));
    const theme = 'file-upload-v1'
    const accept = (props.accept) ? props.accept : '.png, .jpg, .jpeg';
    let defaultPreview = URLS.ASSESTS_PATH + 'img/placeholders/upload.png';

    return (
        <div className={theme}>
            <label htmlFor={props.name + '_id'}>
                <div className="preview">
                    <img
                        alt="Preview"
                        id={props.name + '_imagePreview'}
                        src={
                            props.defaultUrl ? props.defaultUrl : defaultPreview
                        }
                    />
                </div>
                <div className="upload-button">
                    <input
                        onChange={(e) => props.onChange(props.name, e.target.files[0])}
                        type="file"
                        id={props.name + '_id'}
                        accept={accept}
                    />
                </div>
                {label}
            </label>
            <div className="help-block">
                {props.error}
            </div>
        </div>
    )
}

/**
 * It will create upload document field
 *
 * @param {String} name {Required}
 * @param {String} error {Required}
 * @param {function} onChange {Required}
 * @param {String} accept {Optional} {.docx,.ppt, .pptx,.pdf}
 * @param {String} theme { currently only one theme is available}
 * @param {String} message {}
 *
 * @author Gaurav Goyal <gaurav043goyal@gmail.com>
 */
FormHelper.Document = (props) => {
    const label = (props.label) ? props.label : ('Upload ' + TextHelper.beautifyTitle(props.name));
    const theme = 'file-upload-v1'
    const accept = (props.accept) ? props.accept : '.docx, .ppt, .pptx, .pdf';
    const message = props.message || 'Upload ppt, pptx, doc, docx or PDF files';


    return (
        <div className="lanUploadWrap">
            <div className={theme}>
                <label htmlFor={props.name + '_id'}>
                    <div className="lanContent">
                        <i className="fa fa-upload"></i>
                        <h4>{label}</h4>
                        <p>{message}</p>
                    </div>
                    <div className="lanUpload">
                        <input
                            onChange={(e) => props.onChange(props.name, e.target.files[0])}
                            type="file"
                            id={props.name + '_id'}
                            accept={accept}
                        />
                    </div>
                </label>
                <div className="help-block mt-2">
                    {props.error}
                </div>
            </div>
        </div>
    )
}


export default FormHelper;