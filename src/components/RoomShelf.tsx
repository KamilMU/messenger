import React from 'react';
import { NavLink } from 'react-router-dom';
import { Room } from '../types';
const styles = require('./RoomShelf.css').default;

interface Props {
  room: Room
}
const RoomShelf: React.FC<Props> = ({ room }) => {
  const [clicked, setClicked] = React.useState(false)
  console.log(room)

  return (
    <NavLink
      activeClassName={clicked ? styles.active : ''}
      className={styles.shelf}
      onClick={() => setClicked(true)}
      to={{
        pathname: `/${room && room.id}`,
        state: {
          currentRoom: room && room
        }
      }}>
      <div className={styles.user}>{room && room.userName}</div>
      <img src={room && room.url}></img>
    </NavLink>
  )
}

export default RoomShelf
