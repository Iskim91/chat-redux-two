import React from 'react';

import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';
import ChannelsList from '../containers/channels_list';

const App = () => {
  return (
    <div className="app d-flex">
      <ChannelsList />
      <div>
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
