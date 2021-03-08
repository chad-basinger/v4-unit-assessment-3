import { Component } from 'react'
import data from '../data';
import BookList from './BookList';

class SearchBar extends Component{
    constructor(){
        super();

        this.state = {
            userInput: ''
        };

        this.handleClear = this.handleClear.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
    }

    handleUserInput(event){
        this.setState({userInput: event.target.value})
    }

    handleClear(){
        this.setState({userInput: ''})
        this.props.filterReset()
    }

    // filterBooks(val){
    //     this.setState({filterBooks: val})
    // }

    // filterReset(value){
    //     this.setState({userInput: ''})
    // }


    render(){
        // let bookList = this.state.books
        // .filter((title) => {
        //   return this.state.filterBooks;
        // })
        // .map((e, index) => {
        //   return <h2 key={index}>{e}</h2>
        // });
        return (
            <div>
                <input id='myInput' value={this.state.userInput} onChange={event => this.handleUserInput(event)}/>
                <button className='search-bar-buttons' onClick={() => this.props.filterBooks(this.state.userInput)}>search</button>
                <button className='search-bar-buttons'
                onClick={() => this.handleClear()}>
                    Clear Search
                </button>
            </div>

            
        )
    }
}

export default SearchBar;