

/**
 * Create a request with form data.
 *
 * @param {fileObject} file
 * @param {object} model
 *
 * @returns {boolean} status
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
 export const CreateFormData = (files, model = false) => {
    const data = new FormData();

    if (files) {
        Object.keys(files).forEach(key => {
            data.append(key, files[key]);
        });
    }

    if (model) {
        Object.keys(model).forEach(key => {
            data.append(key, model[key]);
        });
    }

    return data;
};