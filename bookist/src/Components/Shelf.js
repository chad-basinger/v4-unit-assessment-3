import React, { Component } from 'react'
import props from './BookList'

class Shelf extends Component{
    constructor(){
        super();

    }
    render(){
        let shelfList = props.shelf;
        return (
            <div className='shelf-items'>
                <h2>Your Shelf</h2>
                <button className='shelf-button'>clear shelf</button>
                <span>{shelfList}</span>
            </div>
        )
    }
}

export default Shelf;