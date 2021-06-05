import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const styles = require('./Rooms.css').default;

interface Message {
  id: number,
  userName: string,
  text: string
}

interface RootState {
  rooms: Message[][]
}

const Rooms = () => {
  const rooms = useSelector((state: RootState) => state.rooms)
  console.log(rooms, 'links')
  // const [rooms, setRooms] = React.useState([
  //   {
  //     userName: 'David',
  //     lastMessageTime: '',
  //     lasMessage: '',
  //   },
  //   {
  //     userName: 'Den',
  //     lastMessageTime: '',
  //     lasMessage: ''
  //   },
  //   {
  //     userName: 'Michle',
  //     lastMessageTime: '',
  //     lasMessage: ''
  //   }
  // ])

  return (
    <div className={styles.rooms}>
      {rooms.map((room, index) => (
        room.map(mes => (
          <Link to={`/${index + 1}`} key={index}>
            <div className={styles.user}>{mes.userName}</div>
            <div>{mes.text}</div>
          </Link>
        ))
      ))}
    </div>
  )
}

export default Rooms;
