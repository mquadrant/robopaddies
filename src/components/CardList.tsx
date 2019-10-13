import React from 'react'
import Card from './Card'

export default function CardList(props:any) {
    const {robots} = props;
    return (
        <div className="mt-8 container mx-auto flex flex-wrap justify-center">
            {robots?robots.map((robot:any,index:any)=>{
                return (<Card key={index} id= {robot.id} name={robot.name} email={robot.email}/>)
            }):null}
      </div>
    )
}
