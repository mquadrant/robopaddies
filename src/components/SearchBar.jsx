import React from 'react'

export default function SearchBar(props) {
    const {searchChange}=props;
    return (
        <div>
            <input className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='search' placeholder='Search Robots' onChange={searchChange}/>
        </div>
    )
}
