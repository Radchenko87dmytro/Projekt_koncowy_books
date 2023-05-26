import './App.scss';
import AllBooks from './components/ALLBooks/AllBooks';
import Header from './components/Header/Header';
import { useState } from 'react';
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"

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
    headLine: "Dwukropek",
    author: "Wisława Szymborska",
    opis: "Nie nudna ksiązka",
  },
  {
    id: 3,
    headLine: "JavaScript",
    author: "Sochacki Tomasz",
    opis: "Nauka się wykorzystać go w praktyce",
  },
]


const App = ()=> {


  axios.get(baseUrl).then((res) => {
    console.log(res.data.data)
    //setNewBookValue(res.data.data)
  })

  
  
  const[stateValue, setNewBookValue] = useState(state)

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

  const addBookHandler = (inputValue)=>{
    setNewBookValue([...stateValue, inputValue])
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
      <AllBooks stateValue={stateValue} 
                deleteBook={deleteBook} 
                editBook={editBook} 
                onChange={onChange} 
                searchFormHandler={searchFormHandler}/>


      
    </div>
  )
}

export default App;
