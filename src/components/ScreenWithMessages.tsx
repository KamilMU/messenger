import React from 'react'
import { useSelector } from 'react-redux';
const styles = require('./ScreenWithMessages.css').default;

interface Props {
  currentRoom: {
    id: number;
    userName: string,
    text: string;
  }[]
}

const ScreenWithMessages: React.FC<Props> = ({ currentRoom }) => {
  // let messages = useSelector((state: Props) => state.room)
  console.log(currentRoom, 'room')

  return (
    <ul className={styles.container}>
      {currentRoom && currentRoom.map((message) => (
        <li key={message.id} className={styles.text}>{message.text}</li>
      ))}
    </ul>
  )
}

export default ScreenWithMessages;
