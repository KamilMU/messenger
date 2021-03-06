import React from 'react';
import { Room, RootState } from '../types';
import { RouteComponentProps } from 'react-router';
import Message from './Message';
import MessangerForm from './MessangerForm';
import { useSelector } from 'react-redux';
import RoomShelf from './RoomShelf';
const styles = require('./Room.css').default;

const Room: React.FC<RouteComponentProps<{}, {}, { currentRoom: Room }>> = ({ location }) => {
  const [inputText, setInputText] = React.useState('');
  const rooms = useSelector(
    (state: RootState) => state.rooms
  )
  const room = useSelector(
    (state: RootState) => state.rooms.find(room => room.id === location.state?.currentRoom.id)
  )

  const changeInputText = (text: string): void => {
    setInputText(text)
  }

  return (
    <main>
      <div className={styles.currentUser}>
        {location.state ? (
          <RoomShelf room={location.state?.currentRoom} />) : (
          <RoomShelf room={rooms[0]} />
        )}
      </div>
      <div className={styles.room}>
        <div className={styles.messages}>
          {room ? room.messages.map((message) => (
            <Message key={message.id} message={message} />
          )) : rooms[0].messages.map(mes => (
            <Message key={mes.id} message={mes} />
          ))}
        </div>

        <div>
          <MessangerForm
            roomId={location.state ? location.state.currentRoom.id : 1}
            inputText={inputText}
            changeInputText={changeInputText}
          />
        </div>
      </div>
    </main>
  )
}

export default Room;
