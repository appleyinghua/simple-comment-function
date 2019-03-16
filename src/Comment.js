import React,{Component} from 'react';

class Comment extends Component{
    constructor(props){
        super(props);
    }
    handleDelete() {
        if(this.props.onDelete){
            this.props.onDelete(this.props.index);
        }
    }
    render(){
        return (

           <li className="list-group-item" id='list-item'>{this.props.comment}
               <span type="button" onClick={this.handleDelete.bind(this)} className='btn btn-warning'>删除</span></li>
        )
    }
}
export default Comment;