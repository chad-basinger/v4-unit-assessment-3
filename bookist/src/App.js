import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList'
import Header from './Components/Header'
import React, {Component} from 'react'
import SearchBar from './Components/SearchBar';
import Shelf from './Components/Shelf';
import data from './data'

class App extends Component {
  constructor(props){
    super(props);

      this.state={
        books: data,
        index: 0,
        shelf: []
    };

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterReset = this.filterReset.bind(this)
    this.filterBooks = this.filterBooks.bind(this)

  }

  addToShelf(index){
    console.log('addToShelf', index);
        let updatedShelf = this.state.shelf.slice()
        updatedShelf.push({title: this.state.books[index].title})
    
        this.setState({shelf: updatedShelf})
        // console.log(this.state.shelf)

  }

  clearShelf(){
    this.setState({shelf: []})
    // console.log(this.props.shelf)
  }

  filterBooks(val){
    this.setState({books: data})
    let filteredBooks = this.state.books.filter(function(book) {
      // // console.log(this)
      // console.log(book.title.includes(this))
      if(book.title.toLowerCase().includes(this.toLowerCase())){
        return book
      }
    }, val)

    this.setState({books: filteredBooks})
    // console.log(book.title.includes(this))
    // console.log(this.state.books, val)
  }

  filterReset(){
    this.setState({books: data})
  }

  render(){

    return (
      <div className="App">
         <div className='bookist'>
           <Header />
         </div>
         <div className='search-bar'>
           <SearchBar filterBooks={this.filterBooks} filterReset={this.filterReset}/>
         </div>
         <div className="main-section">
           <div className='book-list'>
             <BookList books={this.state.books} addToShelf={this.addToShelf}/> 
           </div>
           <div className='shelf'>
             <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
           </div>
         </div>
     </div>
    )
  }
  
}
//   function addToShelf(index){
//     let updatedShelf = this.props.shelf.slice()
//     updatedShelf.push({title: this.props.books[index].title})

//     this.setState({shelf: updatedShelf})
//     console.log(this.props.shelf)
// };

//   return (
//     <div className="App">
//         <div className='bookist'>
//           <Header />
//         </div>
//         <div className='search-bar'>
//           <SearchBar />
//         </div>
//         <div className="main-section">
//           <div className='book-list'>
//             <BookList props={state}/> 
//           </div>
//           <div className='shelf'>
//             <Shelf shelf={state.shelf}/>
//           </div>
//         </div>
//     </div>
//   );
// }


export default App;
