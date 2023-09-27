import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBodySection({ data }) {
    return (
        <div key={data.imageSrc}>
            <img src={data.imageSrc} alt={data.imageAlt} />
            <h3>{data.description}</h3>
            <Link to={data.targetURL}>{data.buttonText}</Link>
        </div>
    )
}
