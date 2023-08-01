import React, { Component } from 'react'; 
import OneBookClass from './OneBook';
import './AllBooks.scss';
import MySelect from './MySelect';
import SearchForm from './SearchForm';
import axios from "axios";
import ImaginedWriter from '../ImaginedWriter';

const baseUrl = "https://reqres.in/api/users?page=1"

class AllBooks extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //selectedSort: "",
            users: [],
            keys: ["avatar", "email", "first_name", "last_name", "id"],
        }

        
        axios.get(baseUrl).then((res) => {
            this.setState({users: res.data.data})
            console.log(this.state.users)
        })

        
        
        
    }
    
    deleteBook (id) {
        console.log("AllBooDel " + id);
       this.setState({
             users: this.state.users.filter((el) => el.id !== id)
             //users: [...this.state.users, this.state.users.splice(pos, 1)]
       })
    }
    
    searchFormHandler(searchQuery){
        const keys = ["avatar", "email", "first_name", "last_name", "id"]
        console.log(searchQuery);

    //         this.setState({
    //         users: this.state.users.filter((item) => item.first_name.toLowerCase().includes(searchQuery.toLowerCase()))      
    //   })

  
    //     this.setState({
    //         users: this.state.users.filter((item) =>
    //         keys.some((key) => item[key].toLowerCase().includes(searchQuery.toLowerCase())))     
    //   })

    }

    render () {

        return (
            <div className='allBooks_body'>
                <div className='allBooks_borderClass' >
                


                    <MySelect
                        value={this.selectedSort}
                        onChange={this.onChange}
                        defaultValue="All"
                        options={[
                            {value: "headLine", name : "By title"},
                            {value: "author", name : "By author"},
                            {value: "opis", name : "By description"},
                        ]}
                    />
                    
                    <SearchForm
                        searchFormHandler={this.searchFormHandler}
                    />

                {/* {console.log(this.state.users)} */}
                {this.state.users.length === 0 
                    ? 
                    <h2>Book store is empty</h2>
                    :
                this.state.users.map((item) =>
                    
                <ImaginedWriter key={item.id}
                                number={item.id}
                                state={item}
                                 deleteBook={()=>this.deleteBook(item.id)}
                                />
                    
                    

                    // this.state.users.map((item) => 
        
                        // <OneBookClass deleteBook={()=>this.props.deleteBook(pos)} 
                        //          number={pos+1}  
                        //          state={el} 
                        //          key={el.id} 
                        //          editBook={()=>this.props.editBook} 
                        //          pos={pos}/>
                    )
                }     
                    
                </div>
            </div>
        )
    }
}

export default AllBooks