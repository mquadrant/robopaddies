import React from 'react'

export default function Card({name,email}) {
    return (
        <div className="card flex-none inline-block bg-green-200 shadow-md p-3 m-2 rounded-lg">
            <img src={`https://robohash.org/${name}?size=200x200`} alt={name}/>
            <div className="my-2">
                <h4 className="font-semibold text-base text-sm text-center">{name}</h4>
                <p className="text-center text-xs">{email}</p>
            </div>
        </div>
    )
}
