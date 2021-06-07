import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../types';
import RoomShelf from './RoomShelf';
const styles = require('./Rooms.css').default;

const Rooms = () => {
  const rooms = useSelector((state: RootState) => state.rooms)

  return (
    <div className={styles.rooms}>
      {rooms.map((room, index) => (
        <RoomShelf room={room && room} key={index} />
      ))}
    </div>
  )
}

export default Rooms;
