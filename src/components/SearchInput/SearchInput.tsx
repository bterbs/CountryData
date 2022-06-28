import React, { ChangeEventHandler } from 'react';

export interface SearchInputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    handleChange: ChangeEventHandler,
}


const SearchInput:React.FC<SearchInputProps> = ({ handleChange, ...props }) => {
    return (
        <><label htmlFor="search" /><input id="search" type="text" placeholder="Search Countries..." onChange={handleChange}/></>
    )
}

export default SearchInput