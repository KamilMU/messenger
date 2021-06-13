import React from 'react';
import Rooms from './components/Rooms';
import Header from './components/Header';
import Navigation from './navigation/Navigation';
const styles = require('./App.css').default;

const App = () => {
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
