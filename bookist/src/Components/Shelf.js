import React, { Component } from 'react'

class Shelf extends Component{
    render(){
        return (
            <div className='shelf-items'>
                <h2>Your Shelf</h2>
                <button className='shelf-button'>clear shelf</button>
            </div>
        )
    }
}

export default Shelf;