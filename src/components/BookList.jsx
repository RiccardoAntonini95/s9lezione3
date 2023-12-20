import SingleBook from "./SingleBook";

//destructuring
const BookList = ({listaLibri}) => {
    return(
        <div className="row">
        {listaLibri.map((book, index) => 
            <SingleBook libroSingolo={book} key={index} />      
            )}
        </div>
    )

}


export default BookList;
