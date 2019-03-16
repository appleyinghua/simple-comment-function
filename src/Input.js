import React,{Component} from 'react';

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {content:''};
    }
    handleComment(e) {
        this.setState({content:e.target.value});
    }
    componentDidMount() {
        this.input.focus();
    }
    clickBtn() {
        if(this.props.onSubmit){
            const {content} = this.state;
            this.props.onSubmit({content});
        }
        this.state.content = '';
    }
    render(){
        return (
            <div className='input-group'>
                <label htmlFor='input'>评论区</label>
                <input ref={(input)=>this.input=input} type='text' className='form-control' id='input' value={this.state.content} onChange={this.handleComment.bind(this)}/>
                <button type='button' id='btn' onClick={this.clickBtn.bind(this)} className='btn btn-success'>发布</button>
            </div>
        )
    }
}
export default Input;