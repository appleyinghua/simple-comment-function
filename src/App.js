import React, { Component } from 'react';
import './App.css';
import Input from "./Input";
import CommentList from "./CommentList";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {comments:[]}
  }
  _saveComments(comments) {
    localStorage.setItem('comment',JSON.stringify(comments));
  }
  componentWillMount(){
    let comments = localStorage.getItem('comment');
    if(comments) {
      comments = JSON.parse(comments);
      this.setState({comments});
    }
  }
  handleSubmit(comment) {
    if(comment){
      const comments = this.state.comments;
      comments.unshift(comment.content);
      this.setState({comments});
      console.log(comments);
      this._saveComments(this.state.comments);
    }
  }
    deleteComment(index) {
      const comments = this.state.comments;
      comments.splice(index,1);
      this.setState({comments});
      this._saveComments(comments);
  }
  render() {
    return (
        <div id='App'>
          <Input onSubmit={this.handleSubmit.bind(this)}/>
          <CommentList handleDelete={this.deleteComment.bind(this)} comments={this.state.comments}/>
        </div>
    )
  }
}
export default App;
