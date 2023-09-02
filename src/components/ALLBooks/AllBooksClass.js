import React, { Component } from 'react'; 
import './AllBooks.scss';
import MySelect from './MySelect';
import SearchForm from './SearchForm';
import axios from "axios";
import ImaginedWriter from '../ImaginedWriter';

const baseUrl = "https://reqres.in/api/users"  //?page=2

class AllBooks extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //selectedSort: "",
            users: [],
            loading: false,
            currentPage: 1,
            usersPerPage: 2,
            keys: ["email", "first_name", "last_name"],
        }

        const fetchPosts = async () => { 
            this.setState({loading: true})
             
            await axios.get(baseUrl).then((res) => {
                
            this.setState({users: res.data.data})
            console.log(this.state.users)
            console.log(res.data.total_pages)
            
            })
            this.setState({loading: false})
            
            console.log(this.state.loading);


         


        }
        
       fetchPosts()
       
    }   
 
    
    
    deleteBook (id) {
        console.log("AllBooDel " + id);
       this.setState({
             users: this.state.users.filter((el) => el.id !== id)
             //users: [...this.state.users, this.state.users.splice(pos, 1)]
       })
    }
    
    searchFormHandler(searchQuery){
        console.log(searchQuery);
        this.setState({
            users: this.state.users.filter((item) =>
            this.state.keys.some((key) => item[key].toLowerCase().includes(searchQuery.toLowerCase())))     
      })
    }

    onChange(val){ //some refactoring for AllBooksClass component
        console.log(val);
        if(val==="headLine"){
            val="first_name"
        } else if(val==="author"){
            val="last_name"
        } else if(val==="opis"){
            val="email"
        }
        console.log(val);
        this.setState({
            users: this.state.users.sort((a, b)=>a[val].localeCompare(b[val]))     
      })

    }

    render () {
        const loading = this.state.loading

        const indexOfLastUser = this.state.currentPage * this.state.usersPerPage
         const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage
         const currentUsers = this.state.users.slice(indexOfFirstUser, indexOfLastUser)
         
         //const currentUsers = Math.ceil(this.state.users.length / this.state.usersPerPage)  

        return (
            <div className='allBooks_body'>
                <div className='allBooks_borderClass' >
                
                    <MySelect
                        value={this.selectedSort}
                        onChange={(val)=>this.onChange(val)}
                        defaultValue="All"
                        options={[
                            //{value: "all", name : "All"},
                            {value: "headLine", name : "By title/First name"},
                            {value: "author", name : "By author/Last name"},
                            {value: "opis", name : "By description/Email"},
                        ]}
                    />
                    
                    <SearchForm
                        searchFormHandler={(searchQuery)=>this.searchFormHandler(searchQuery)}
                    />

                {/* {console.log(this.state.users)} */}
                {currentUsers.length === 0 
                    ? 
                    <h2>Book store is empty</h2>
                    :
                    // this.state.loading
                    // ?
                    // <h2>Loading...</h2>
                    // :
                    currentUsers.map((item) =>
                    
                <ImaginedWriter key={item.id}
                                number={item.id}
                                state={item}
                                deleteBook={()=>this.deleteBook(item.id)}
                                loading={loading}
                                />
                    )
                }     
                    
                </div>
            </div>
        )
    }
}

export default AllBooks