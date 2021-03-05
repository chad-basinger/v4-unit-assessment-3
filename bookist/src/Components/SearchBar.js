import { Component } from 'react'
import data from '../data';
import BookList from './BookList';

class SearchBar extends Component{
    constructor(){
        super();

        this.state = {
            userInput: '',
            filterBooks: '',
            books: data
        };

        this.filterBooks = this.filterBooks.bind(this)
    }

    handleUserInput(event){
        this.setState({userInput: event.target.value})
    }

    filterBooks(val){
        this.setState({filterBooks: val})
    }


    render(){
        let bookList = this.state.books
        .filter((title) => {
          return this.state.filterBooks;
        })
        .map((e, index) => {
          return <h2 key={index}>{e}</h2>
        });
        return (
            <div>
                <input value={this.state.userInput} onChange={event => this.handleUserInput(event)}/>
                <button className='search-bar-buttons' onClick={e => this.filterBooks(this.state.userInput)}>search</button>
                <button className='search-bar-buttons'>clear search</button>
                <div>
                    {bookList}
                </div>  
            </div>

            
        )
    }
}

export default SearchBar;