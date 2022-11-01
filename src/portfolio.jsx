import React from 'react'

function PortfolioItem({ company, title, years }) {
    return (
        <div>
            <h3>{company}</h3>
            <p>{title}</p>
            <p>{years}</p>
        </div>
    )
}

export default PortfolioItem