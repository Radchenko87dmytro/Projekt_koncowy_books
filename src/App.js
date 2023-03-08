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
  id: 1,
  headLine: "W pustyni i puszczy",
  author: "Juliusz Słowacki",
  opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
 },
 {
  id: 2,
  headLine: "W pustyni",
  author: "Juliusz ",
  opis: "Ksiązka długa, . ",
 },
 {
  id: 3,
  headLine: "W pustyni i puszczy",
  author: "Juliusz Słowacki",
  opis: "Ksiązka długa, fajna i nudna jedocześnie. ",
 },
 {
  id: 4,
  headLine: "fbdfb",
  author: "dfbdfbi",
  opis: "dbdf ",
 },
 
]

const App = (props)=> {
  const [input, setInValue] = useState([])

  
  const[stateValue, setNewBookValue] =useState(state)
    
     const addBookHandler = (inputValue)=>{
        console.log(inputValue)
        
        setInValue(inputValue)
        console.log(input)
        setNewBookValue([...stateValue, inputValue])
    }

   
    
  return (
    <div className="App">
      <Header addBookHandler={addBookHandler}
              
              />
     
      <AllBooks addBookHandler={input}></AllBooks>
      
      <Button classButton="success" ButtonValue="Sukces"></Button>
      <Button classButton="error" ButtonValue="Dramat"></Button>
      <Button classButton="edit" ButtonValue="Wiatry zmian"></Button>
      {/* <Edit_book></Edit_book> */}




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
