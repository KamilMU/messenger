import React from 'react';
import { Link } from 'react-router-dom';
import { Room } from '../types';
const styles = require('./Rooms.css').default;

interface Props {
  room : Room
}
const RoomShelf: React.FC<Props> = ({ room }) => {
  return (
    <Link to={{
      pathname: `/${room && room.id}`,
      state: {
        currentRoom: room && room
      }
    }}>
      <div className={styles.user}>{room && room.userName}</div>
      <img src={room && room.url}></img>
    </Link>
  )
}

export default RoomShelf
