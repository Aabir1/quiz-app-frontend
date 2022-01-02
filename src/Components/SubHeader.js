import React from 'react';
import { Link } from 'react-router-dom';

export const SubHeader = ({ title, btnBackUrl = false, btnAddUrl = false }) => {

    return (
        <div className='d-flex justify-content-between pt-2 col-sm-12'>
            <div>
                <h3>
                    {(title) ? title : ''}
                </h3>
            </div>
            <div className="">
                {(btnBackUrl) ? <Link to={btnBackUrl} className="btn btn-primary btn-xs">
                    GO BACK
                </Link> : ''}
                {
                    (btnAddUrl) ?
                        <Link to={btnAddUrl} className="btn btn-primary btn-xs ml-2">
                            ADD MORE
                    </Link> : ''
                }
            </div>
        </div>

    )
}