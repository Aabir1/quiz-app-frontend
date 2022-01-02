import React from 'react';
import { URLS } from '../Config/env';

const loadingStyle = {
    position: 'fixed',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    zIndex: '9999',
    background: "rgba(0, 0, 0, 0.8)",
    'overflow': 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Loader = ({ loading, hideBackground = true }) => {
    return (
        <div>
            {loading && <div className="preloader" style={loadingStyle}>
                <img 
                src={URLS.ASSESTS_PATH + "img/loading.gif"} 
                style={{ height: "100px", width: "100px" }}
                alt='Loader'
            />
            </div>}
            {loading && document.body.classList.add('overflow-hidden')}
            {!loading && document.body.classList.remove('overflow-hidden')}
        </div>
    )
}

export default Loader;