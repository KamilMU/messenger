import React from 'react';
import { Message } from '../types';
const styles = require('./Message.css').default;

interface Props {
  message: Message
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div key={message.id}
      className={styles.text}
      style={message.userId === 1 ? { marginLeft: 'auto' } : { marginRight: 'auto', backgroundColor: '#90BDFF' }}>
      {message && message.text}
    </div>
  )
}

export default Message;
