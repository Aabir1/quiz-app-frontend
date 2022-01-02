let UrlHelper = {};

UrlHelper.addParams = (pageParam, paramValue, preParams) => {
    //get current url without params
    var mainUrl = window.location.href.split('?')[0];

    let paramsObj = UrlHelper.getParams();

    // console.log('ONE', paramsObj);

    if (pageParam) {
        paramsObj[pageParam] = paramValue;

        // console.log(paramsObj);
        const url = UrlHelper.buildUrl(mainUrl, paramsObj);
        //push params without refreshing the page.
        window.history.pushState(false, false, url ? url.replace(new RegExp('%2B', 'gi'), '+') : '');
    }
}

/**
 * Return the list of current url and if paramName is given
 * then check for param in url and return its value
 *
 * @param {String|Boolean} name
 *
 * @returns {String|Object} params
 *
 * @author Aabir Hussain <aabir.hussain1@gmail.com>
 */
export const getParams = (name = false, defaultValue = false) => {
    let qs = window.location.search;
    qs = qs.split('+').join(' ');

    let params = {}, tokens, re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    if (name) {
        return params[name] || defaultValue;
    } else {
        return params;
    }
}

/**
 * Return the Get URL with all query params
 * 
 *
 *
 * @returns {Object} parameters
 *
 * @author Vimal Kumar
 */
const buildUrl = (url, parameters, uriEncode = true) => {
    let qs = '';
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            if (typeof value === 'object') {
                value.forEach((singleValue, singleIndex) => {
                    qs += key + "["+ singleIndex +"]=" + singleValue + "&";
                })
            } else {
                if (uriEncode) {
                    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
                } else {
                    qs += key + "=" + value + "&";
                }
            }
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); // chop off last "&"
        url = `${url}?${qs}`;
    }
    return url;
};

export const isYoutubeURL = (url) => {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    var matches = url.match(p);
    if (matches) {
        return matches[1];
    }
    return false;
};

UrlHelper.loadScript = (id, url, callback, toBody = true) => {
    const existingScript = document.getElementById(id);
    if (!existingScript) {
        const script = document.createElement('script');
        script.src = url;
        script.id = id;
        if (toBody) {
            document.body.appendChild(script);
        } else {
            document.head.appendChild(script);
        }
        script.onload = () => {
            if (callback) {
                callback();
            }
        };
    }
}

UrlHelper.loadCss = (id, url, preLoad = false, callback) => {
    const existingCss = document.getElementById(id);
    if (!existingCss) {
        const link = document.createElement('link');
        link.href = url;

        link.id = id;
        if (preLoad) {
            link.rel = 'preload stylesheet';
            link.as = 'style';
            link.type = "text/css";
        } else {
            link.rel = 'stylesheet';
        }
        document.head.appendChild(link);
        link.onload = () => {
            if (callback) {
                callback();
            }
        };
    }
}

UrlHelper.isLocation = (localtions) => {
   
    const currentPath = window.location.pathname;
    return (localtions.includes(currentPath) ? true : false);
}

UrlHelper.getParams = getParams;
UrlHelper.isYoutubeURL = isYoutubeURL;
UrlHelper.buildUrl = buildUrl;

export default UrlHelper;