import React from 'react'
import Card from './Card'

export default function CardList(props) {
    const {robots} = props;
    return (
        <div className="mt-8 container mx-auto flex flex-wrap justify-center">
            {robots?robots.map((robot,index)=>{
                return (<Card key={index} id= {robot.id} name={robot.name} email={robot.email}/>)
            }):null}
      </div>
    )
}
