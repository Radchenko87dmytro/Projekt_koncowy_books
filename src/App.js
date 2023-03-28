//import logo from './logo.svg';
import './App.scss';
import AllBooks from './components/ALLBooks/AllBooks';
import Button from './components/Button';
import FundamentalCours from './components/fundamentalCoutse';
import Edit_book from './components/Edit_book';
import Header from './components/Header/Header';
import { useState } from 'react';
import OneBook from './components/ALLBooks/OneBook';


const state = [
  {
  id: 0,
  headLine: "W pustyni i puszczy",
  author: "Juliusz Słowacki",
  opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
 },
 {
  id: 1,
  headLine: "Zniewolony umysł",
  author: "Czesław Miłosz",
  opis: "Ksiązka fajna",
 },
 {
  id: 2,
  headLine: "W pustyni i puszczy",
  author: "Juliusz Słowacki",
  opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
 },
 {
  id: 3,
  headLine: "fbdfb",
  author: "dfbdfbi",
  opis: "dbdf ",
 },
 
]

const App = ()=> {
  
  const[stateValue, setNewBookValue] = useState(state)
  const[selectedSort, setSelectedSort] = useState("")

     const addBookHandler = (inputValue)=>{
        setNewBookValue([...stateValue, inputValue])
    }

  const deleteBook = (pos) =>{

    if (window.confirm("Are you sure delete Book?")){ //modal window
   
     console.log(pos)
    const temp = [...stateValue]
    temp.splice(pos, 1)
    setNewBookValue(temp)

    //setNewBookValue(stateValue.filter(item => item.id !== pos))
    }
  } 
 
  const editBook= (inputValue, index)=>{
    
    console.log("edit")
    console.log(inputValue)
    
     const allBooks = [...stateValue]
     allBooks[inputValue.id] = inputValue
     console.log(allBooks[inputValue.id])
     setNewBookValue(allBooks)
    }
  
  return (
    <div className="App">
      <Header addBookHandler={addBookHandler} />
      <AllBooks  stateValue={stateValue} deleteBook={deleteBook} editBook={editBook} />
      
      {/* <AllBooks addBookHandler={addBookHandler}/> */}

    </div>
  )
}

export default App;
