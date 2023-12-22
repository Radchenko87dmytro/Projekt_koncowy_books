import React from 'react'
import "./ALLBooks/AllBooks.scss"

const Pagination = ({usersPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    const selectedPage = "selectedPage"

  return (
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a onClick={() => paginate(number)}  className={currentPage === number && selectedPage}  >
                       {number} 
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination