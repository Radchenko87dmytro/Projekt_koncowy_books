import './App.scss';
import AllBooks from './components/ALLBooks/AllBooks';
import AllBooksClass from './components/ALLBooks/AllBooksClass';
import Header from './components/Header/Header';
import { useState } from 'react';
import axios from "axios";

const state = [
    {
    id: 1,
    headLine: "W pustyni i puszczy",
    author: "Juliusz Słowacki",
    opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
  },
  {
    id: 2,
    headLine: "Zniewolony umysł",
    author: "Czesław Miłosz",
    opis: "Ksiązka fajna",
  },
  {
    id: 3,
    headLine: "Dwukropek",
    author: "Wisława Szymborska",
    opis: "Nie nudna ksiązka",
  },
  {
    id: 4,
    headLine: "JavaScript",
    author: "Sochacki Tomasz",
    opis: "Nauka się wykorzystać go w praktyce",
  },
]

const App = ()=> {

  const[stateValue, setNewBookValue] = useState(state)
  
  const addBookHandler = (inputValue)=>{
    inputValue.id=stateValue.length + 1
    setNewBookValue([...stateValue, inputValue])
  }


  const onChange = (sortValue) =>{
    setNewBookValue([...stateValue].sort((a, b)=>a[sortValue].localeCompare(b[sortValue])))  //.sort() method sorts the elements of an array   The localeCompare() method compares two strings in the current locale
    //setNewBookValue(currentItems.sort((a, b)=>a.sortValue < b.sortValue ? 1 : -1))
  }
  
  const searchFormHandler = (searchQuery)=>{
    !searchQuery 
    ?
    setNewBookValue([...stateValue])
    :
    setNewBookValue([...stateValue].filter(item => item.headLine.toLowerCase().includes(searchQuery.toLowerCase())))                   
  }

  

  const deleteBook = (pos) =>{
    if (window.confirm("Are you sure delete Book?")){ //modal window
    const temp = [...stateValue]
    temp.splice(pos, 1)
    setNewBookValue(temp)
    //setNewBookValue(stateValue.filter(item => item.id !== pos))
    }
  } 
 
  const editBook= (inputValue)=>{
     const allBooks = [...stateValue]
     allBooks[inputValue.id] = inputValue
     setNewBookValue(allBooks)
    }
  
  return (
    <div className="App">
      <Header addBookHandler={addBookHandler} />
      <hr></hr>

      <AllBooks stateValue={stateValue} 
                deleteBook={deleteBook} 
                editBook={editBook} 
                onChange={onChange} 
                searchFormHandler={searchFormHandler}/>
      <hr></hr>
      
      <AllBooksClass  
                deleteBook={deleteBook} 
                editBook={editBook} 
                onChange={onChange} 
                searchFormHandler={searchFormHandler}/>
                
    </div>
  )
}

export default App;
