import React, { Component } from 'react'
import props from './BookList'

class Shelf extends Component{
    constructor(props){
        super(props);

        this.state = {
            shelf: []

        }
        this.resetShelf = this.resetShelf.bind(this)
    }

    resetShelf(){
        this.setState({shelf: ''})
        console.log(this.state.shelf)
    }


    render(){
        let shelfList = props.shelf;
        return (
            <div className='shelf-items'>
                <h2>Your Shelf</h2>
                <button className='shelf-button' onClick={this.resetShelf}>clear shelf</button>
                <span>{shelfList}</span>
            </div>
        )
    }
}

export default Shelf;