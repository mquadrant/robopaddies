import React from 'react'

interface ISearchBoxProps {
    searchChange(event:React.SyntheticEvent<HTMLInputElement>):void
}

export default function SearchBar(props:ISearchBoxProps) {
    const {searchChange}:ISearchBoxProps=props;
    return (
        <div>
            <input className="shadow appearance-none border rounded w-36 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type='text' name='search' placeholder='Search Robots' onChange={searchChange}/>
        </div>
    )
}
