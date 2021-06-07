import React from 'react';
import Rooms from './components/Rooms';
import Header from './components/Header';
import Navigation from './navigation/Navigation';
import RoomShelf from './components/RoomShelf';
import { useSelector } from 'react-redux';
import { RootState } from './types';
const styles = require('./App.css').default;

const App = () => {
  const rooms = useSelector((state: RootState) => state.rooms)

  return (
    <div className={styles.container}>
      <aside>
        <Header />
        <Rooms />
      </aside>

      <Navigation />
    </div>
  )
}

export default App
