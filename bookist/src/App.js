import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList'
import Header from './Components/Header'
import React, {Components} from 'react'
import SearchBar from './Components/SearchBar';
import Shelf from './Components/Shelf';
import data from './data'

class App extends Components {
  constructor(props){
    super(props)

      this.state={
        books: data,
        index: 0,
        shelf: []
    };
  }

  addToShelf(index){
        let updatedShelf = this.props.shelf.slice()
        updatedShelf.push({title: this.props.books[index].title})
    
        this.setState({shelf: updatedShelf})
        console.log(this.props.shelf)
  }

  render(){

    return (
      <div className="App">
         <div className='bookist'>
           <Header />
         </div>
         <div className='search-bar'>
           <SearchBar />
         </div>
         <div className="main-section">
           <div className='book-list'>
             <BookList props={this.state}/> 
           </div>
           <div className='shelf'>
             <Shelf shelf={this.state.shelf}/>
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
