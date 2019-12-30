import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView'
class App extends React.Component {
constructor(props){
  super(props)
  this.state={
    title:'',
    content:'',
    results:[],

  }
}

componentDidMount(){

  this.getPosts()
}

async getPosts(){

  const _results=await api.getAllPosts()
  this.setState({results:_results.data})

}
handlingChange=(event)=>{
  this.setState({[event.target.name]:event.target.value})
}

handlingSubmit= async (event)=>{
  event.preventDefault()
  let result= await api.createPost({title:this.state.title, content:this.state.content})
  console.log("완료됨!",result)
  this.setState({title:'',content:''})
  this.getPosts()
}
handlingDelete= async (event)=>{
  await api.deletePost(event.target.value)
  this.getPosts()

}
  render(){
  return (
    <div className="App">
      <div className="PostingSection">
        <h2>대나무 숲 글 작성하기</h2>
        <form onSubmit={this.handlingSubmit}>
        <input
        name="title"
        value={this.state.title}
        onChange={this.handlingChange}
         />
        <textarea 
        name="content"
        value={this.state.content}
        onChange={this.handlingChange}
        />
        <button type="submit">제출하기</button>
</form>
      </div>
      <div className="viewSection">
        {
          this.state.results.map((post)=>
          <div>
          <PostView key={post.id} id={post.id} title={post.title} content={post.content}/>
          <button value={post.id} onClick={this.handlingDelete}> 삭제하기</button>
         </div>
        )
        }

      </div>
    </div>
  );
}}

export default App;
