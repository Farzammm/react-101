import React from 'react'

import classes from './Search.module.css';

const Search = props => {

    const onChangeHandler = event => {
        props.onSearch(event.target.value);
    }
    return (
        <>
            <label className={classes.search}>Search:</label>
        
            <input type="text" placeholder='search...' onChange={onChangeHandler} />
        </>
    )

}

export default Search;