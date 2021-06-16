import React from 'react'
import Card from './Card'

export default function Grid(props) {
    console.log(props);
    return (
        <div className="grid">
            {
                props.topics.map((topic) => <Card type={props.type} key={topic.id} id = {topic.id} name={topic.name} ></Card>)
            }
        </div>
    )
}