import { Component } from 'react'
import data from '../data'
import Book from './Book'

class BookList extends Component{
    constructor(props){
        super(props)

        this.state={
            books: data,
            index: 0,
            shelf: []
        };

        this.addToShelf = this.addToShelf.bind(this)
    }

    addToShelf(index){
        let updatedShelf = this.state.shelf.slice()
        updatedShelf.push({title: this.state.books[index].title})

        this.setState({shelf: updatedShelf})
        console.log(this.state.shelf)
    }

    render(){

        return (
            <div className='books'>
                {/* <Book books={this.state.books} index={this.state.index}/> */}
                { this.state.books.map((element, index) => (
                    <div className='individual-book' key={index}>
                        <img src={element.img} alt={element.title}
                        onClick={e => this.addToShelf(index)}/>
                        <p className='book-title-text'>{element.title}</p>
                    </div>
                )) }
            </div>
        )
    }
}

export default BookList;