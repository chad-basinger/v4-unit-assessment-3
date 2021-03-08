import { Component } from 'react'

class BookList extends Component{
    constructor(props){
        super(props)
        // const{books, index} = props

        // this.state={
        //     books: data,
        //     index: 0,
        //     shelf: []
        // };

        // this.addToShelf = this.addToShelf.bind(this)
    }

    // addToShelf(index){
    //     let updatedShelf = this.props.shelf.slice()
    //     updatedShelf.push({title: this.props.books[index].title})

    //     this.setState({shelf: updatedShelf})
    //     console.log(this.props.shelf)
    // }

    render(){
        console.log(this.props)
        return (
            <div className='books'>
                {/* <Book books={this.state.books} index={this.state.index}/> */}
                { this.props.books.map((element, index) => (
                    <div className='individual-book' key={index}>
                        <img src={element.img} alt={element.title}
                        onClick={() => this.props.addToShelf(index)}/>

                        <p className='book-title-text'>{element.title}</p>
                    </div>
                )) }
                
            </div>
        )
    }
}

export default BookList;