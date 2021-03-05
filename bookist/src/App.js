import logo from './logo.svg';
import './App.css';
import BookList from './Components/BookList'
import Header from './Components/Header'
import React, {Components} from 'react'
import SearchBar from './Components/SearchBar';
import Shelf from './Components/Shelf';

function App() {
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
            <BookList /> 
          </div>
          <div className='shelf'>
            <Shelf />
          </div>
        </div>
    </div>
  );
}


export default App;
