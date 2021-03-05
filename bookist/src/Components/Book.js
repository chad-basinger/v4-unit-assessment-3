import { Component } from 'react'
import data from '../data'
import books from './BookList'

const Book = (props) => {
    const{books, index} = props

        return (
            <div>
                <h3 className='individual-book'>
                    {books[index].img}
                    {books[index].title}
                </h3>
            </div>
        )
}

export default Book;