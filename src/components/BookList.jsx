import SingleBook from "./SingleBook";

//destructuring
const BookList = (props) => {
    console.log("questo è listalibri", props.listaLibri) //array contenuto in oggetto props
    console.log("questo è props", props) //oggetto
    return(
        <div className="row">
        {props.listaLibri.map((book, index) => 
            <SingleBook libroSingolo={book} key={index} />      
            )}
        </div>
    )
}


export default BookList;
