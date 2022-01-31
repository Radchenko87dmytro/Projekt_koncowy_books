import axios from 'axios';

const url = 'http://localhost:4000/books'
const getAllBooks = () => {
    return axios.get(url)
}




const getOneBook =(id) => {
    return axios.get(url + '/${id}')
}


export default {
    getAllBooks,
    getOneBook
}