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

const App = (props)=> {
  
  const[stateValue, setNewBookValue] =useState(state)
    
     const addBookHandler = (inputValue)=>{
        setNewBookValue([...stateValue, inputValue])
    }

  const deleteBook = pos =>{

    if (window.confirm("Are you sure delete Book?")){ //modal window
    console.log(stateValue[pos])
    console.log(pos)
    const temp = [...stateValue]
    temp.splice(pos, 1)
    setNewBookValue( temp)
    //setNewBookValue(stateValue.filter(b => b.pos !== pos))
    }
  } 
 

    
  return (
    <div className="App">
      <Header addBookHandler={addBookHandler} />
      <AllBooks  stateValue={stateValue} deleteBook={deleteBook} />
      
      
      <Button classButton="success" ButtonValue="Sukces"></Button>
      <Button classButton="error" ButtonValue="Dramat"></Button>
      <Button classButton="edit" ButtonValue="Wiatry zmian"></Button>
      {/* <Edit_book></Edit_book> */}



      

      {/* <AllBooks addBookHandler={addBookHandler}/> */}

              <div className='allBooks_body'>
                <div className='allBooks_border'>
                    {stateValue.map((stateValue, index) => 
                        <OneBook  number={index+1}  state={stateValue} key={index}/> 
                    )
                }
                </div>
              </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>



    <FundamentalCours/>
      

    </div>
  )
}

export default App;
