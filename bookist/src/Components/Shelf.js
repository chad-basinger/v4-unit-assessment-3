import React, { Component } from 'react'
import props from './BookList'

class Shelf extends Component{
    constructor(props){
        super(props);
    };

    render(){
        let shelfList = this.props.shelf;
        return (
            <div className='shelf-items'>
                <h2>Your Shelf</h2>
                <button className='shelf-button' onClick={this.props.clearShelf}>clear shelf</button>
                {/* <span>{shelfList}</span> */}
                {this.props.shelf.map((element, index) => (
                    <div className='shelf-list' key={index}>
                        <p className='shelf-item-title'>{element.title}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Shelf;