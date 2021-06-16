import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
    return (
        
        <Link to={`/${props.type}/${props.id}`}>
        <div className="card">
            <div className="card_image">
                <img src="https://aecom.redvector.com/lpe/assets/core/img/large-placeholder-course.png" alt="placeholder"></img>
            </div>
            <div className="card_name">
                {props.name}
            </div>
        </div>
        </Link>
    )
}
