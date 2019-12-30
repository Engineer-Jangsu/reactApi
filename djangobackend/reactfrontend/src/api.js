import axios from "axios"

axios.defaults.baseURL= "http://127.0.0.1:8000/api"

export default {

    getAllPosts(){
        return axios.get('/posts/')

    },

    createPost(data){
        return axios.post('/posts/',data)
    },

    deletePost(id){
        return axios.delete('/posts/'+String(id))
    },

}