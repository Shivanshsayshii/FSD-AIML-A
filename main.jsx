function Book(book){
    return(
        <div>
            <img src = {book.image} width="200" height="200" alt="Book Image"/>
            <h4>Title: {book.title}</h4>
            <h3>Price: {book.price}</h3>
        </div>
    )
} 
const books=[{image:""},
    {image:""},
    {image:""}
]
function App(){
    return(
        <div className="book-list">
            {books.map((b,i)=>(<Book key = {i} book={b}/>))}
        </div>
    )
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>);
// ReactDOM.render(React.createElement(Book),parent);
