import { useState } from 'react'
import portfolio from '../data/time'
import PortfolioItem from './portfolio'
import './App.css'

function Timeline() {
    return (
        <div>
            <div>
                {portfolio.map(project => (
                    <PortfolioItem
                    company={project.Company}
                    title={project.Title}
                    years={project.Years}
                    />
                ))}
            </div>
        </div>
    )
}

export default Timeline