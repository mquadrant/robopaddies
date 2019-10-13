import React from 'react'

export default function Scroll(props:any){
    const {children} = props;
    return (
        <div style={{overflowY:'scroll',height:'620px'}}>
        {children}
        </div>
    )
}