import React, { useState } from 'react';
import { Link } from 'gatsby';

const DumpsList = ({posts}) => {
    const perPage = 20;
    const pages = Math.ceil(posts.length / perPage);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (move) => {
        if (move > 0 && currentPage < pages - 1) {
          setCurrentPage(currentPage + 1);
        }
        if (move < 0 && currentPage > 0) {
          setCurrentPage(currentPage - 1);
        }
      }
    return <>
        <ul className="menu-list">
            {posts.slice(currentPage * perPage, (currentPage + 1) * perPage).map(({ node }) =>
                (<li key={node.fields.slug}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></li>)
            )}
        </ul>
        <div className="is-navigation">
            <button onClick={() => handlePageChange(-1)} disabled={currentPage === 0} className="pagination-previous">Previous</button>
            <button onClick={() => handlePageChange(1)} disabled={currentPage + 1 === pages} className="pagination-next" >Next page</button>
        </div>
    </>
}

export default DumpsList;