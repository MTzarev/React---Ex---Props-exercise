import BookListItems from "./BookListItems";
//import React from "react";
import {useState} from 'react'
function BookList (){
    //let bookState = React.useState([]);
    //let count = bookState[0];
    //let setCount = bookState[1]
    let [count, setCount] = useState(0)
    let [name, setName] = useState()
    let addButtonClickHandler = function (){
        setCount(count+1)
    }
    let inputTypeHandler  = (e) => {
        setName(e.target.value);
    }
   if (name === "Miro"){
    name = "Miro"
   }else {
    name = "Guest"
   }
    return(
        <>
        <h2>Hello {name}!</h2>
     
        <ul>
            <BookListItems>{count}</BookListItems>
            
        </ul>
        <input type="text" onBlur={inputTypeHandler} />
        <button onClick={addButtonClickHandler}>+</button>
        </>
    );
}
export default BookList;