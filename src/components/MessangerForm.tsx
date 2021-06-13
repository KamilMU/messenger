import React from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../redux/actions/index';
import { store } from '../main';
const styles = require('./MessengerForm.css').default;
interface Props {
  roomId: number;
  inputText: string;
  changeInputText: (text: string) => void;
}

type AppDispatch = typeof store.dispatch

const MessangerForm: React.FC<Props> = ({ inputText, changeInputText, roomId }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form
      className={styles.container}
      onSubmit={
        (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (inputText && roomId) {
            dispatch(addMessage(inputText, roomId));
          }
          changeInputText('');
        }
      }>
      <input
        type="text"
        placeholder="message..."
        autoFocus
        value={inputText}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          changeInputText(e.target.value);
        }}
      />
      <button type="submit">Отправить</button>
    </form>
  )
}

export default MessangerForm;
