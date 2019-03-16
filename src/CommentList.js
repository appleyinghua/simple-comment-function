import React,{Component} from 'react';
import Comment from "./Comment";

class CommentList extends Component{
    constructor(props){
        super(props);
    }
    handleComment(index) {
        if(this.props.handleDelete){
            this.props.handleDelete(index);
        }
    }
    render(){
        // const lists = ['阳光总在风雨后','隐形的翅膀'];

        return (
            <ul className="list-group">
                {this.props.comments.map((comment, i) => <Comment onDelete={this.handleComment.bind(this)} index={i} comment={comment} key={i} />)}
            </ul>
        )
    }
}
export default CommentList;