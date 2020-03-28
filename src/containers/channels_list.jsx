import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, setMessages } from '../actions';

class ChannelsList extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.setMessages(nextProps.selectedChannel);
    }
  }

  handleClick = (channel) => {
    this.props.selectChannel(channel);
  }
  renderList = (channel) => {
    return (
      <li
        onClick={() => this.handleClick(channel)}
        channel={channel}
        key={channel}
      >
        #{channel}
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul>{this.props.channels.map(this.renderList)}</ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel,setMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);
