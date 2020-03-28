import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from '../components/message';

class MessageList extends Component {


  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  renderMessages = () => {
    return this.props.messages.map((message) => {
      return <Message message={message} key={message.created_at} />;
    });
  }

  render() {
    return (
      <div className="messages">
        {this.renderMessages()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setMessages: bindActionCreators(setMessages, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
