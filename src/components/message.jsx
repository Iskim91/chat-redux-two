import React, { Component } from 'react';

class Message extends Component{

  render(){
    const { author, content, created_at} = this.props.message;
    return(
      <div>
        <p>{author}{created_at}</p>
        <p>{content}</p>
      </div>
    );
  }
}

export default Message;
