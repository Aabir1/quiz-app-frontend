import React, { useState, useEffect } from 'react';

const Pagination = ({ total = 0, offset = 0, limit = 10, onPageChange}) => {
    // limit = 8;
    const [totalPages, setTotalPages] = useState(Math.ceil(total / limit))
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        setTotalPages(Math.ceil(total / limit))
        setCurrentPage(Math.ceil((offset + limit) / limit))
    }, [total, offset, limit])

    /* -------- */
    if (totalPages <= 1) {
        return null;
    }

    const pages = []
    for (let i = 1; i <= limit; i++) {
        if (pages.length < totalPages) {
            if (totalPages < Math.ceil(limit / 2)) {
                pages.push(<li
                    key={i}
                    className={currentPage === i ? "active page-item" : "page-item"}
                    onClick={() => handlePageChange(i)}>
                    <button className={currentPage === i ? "current page-link" : "page-link"}>
                        {i}
                    </button>
                </li>)
            } else {
                let page = currentPage + (i - Math.ceil(limit / 2))
                if (page > 0 && page <= totalPages) {
                    pages.push(<li
                        key={page}
                        className={currentPage === page ? "active page-item" : "page-item"}
                        onClick={() => handlePageChange(page)}>
                        <button className={currentPage === page ? "current page-link" : "page-link"}>
                            {page}
                        </button>
                    </li>)
                }
            }
        }
    }
    function handlePageChange(page) {
        let offset = (page - 1) * limit
        onPageChange(offset, limit)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }
    function handleNextPage() {
        if (currentPage < totalPages) {
            let offset = (currentPage) * limit
            onPageChange(offset, limit)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        }

    }
    function handlePreviousPage() {
        if (currentPage > 1) {
            let offset = (currentPage - 2) * limit
            onPageChange(offset, limit)
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        }
    }

    return (
        <div className="Page navigation simple-pagination mb-3 ml-3">
            <ul className='pagination'>
                <li
                    onClick={handlePreviousPage}
                    className={currentPage === 1 ? "page-item" : "active page-item"}>
                    <span className="current prev page-link">&lt; Prev</span>
                </li>

                {pages}

                <li
                    onClick={handleNextPage}
                    className={currentPage === totalPages ? "page-item" : "active page-item"}>
                    <span className="page-link next">Next &gt;</span>
                </li>
            </ul>
        </div>

    )
}

export default Pagination