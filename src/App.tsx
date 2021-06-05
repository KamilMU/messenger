import React from 'react';
import { Route, Switch } from 'react-router';
import MessangerForm from './components/MessangerForm';
import Rooms from './components/Rooms';
import ScreenWithMessages from './components/ScreenWithMessages';
import ScreenOfMessages from './components/ScreenWithMessages';
const styles = require('./App.css').default;
import { useSelector } from 'react-redux';
import Header from './components/Header';

interface Message {
  id: number,
  userName: string,
  text: string
}

interface RootState {
  rooms: Message[][]
}

const App = () => {
  const rooms = useSelector((state: RootState) => state.rooms)
  const [inputText, setInputText] = React.useState('');

  console.log(rooms[0], 'rooms')

  const changeInputText = (text: string): void => {
    setInputText(text)
  }

  return (
    <div className={styles.container}>
      <aside>
        <Header />
        <Rooms />
      </aside>

      <main className="main">
        <Switch>
          <Route
            path="/"
            component={ScreenWithMessages} />
          {rooms.map((room, index) => (
            <Route
              path={`/${++index}`}
              render={() => <ScreenWithMessages currentRoom={room} />}
            />
          ))}
          <Route
            path="*"
            render={() => <div>Page doesnt exist</div>} />
        </Switch>
        <MessangerForm
          inputText={inputText}
          changeInputText={changeInputText}
        />
      </main>
    </div>
  )
}

export default App
