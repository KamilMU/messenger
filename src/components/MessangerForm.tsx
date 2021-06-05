import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/actions/index';
import { store } from '../main';
const styles = require('./MessengerForm.css').default;

interface Props {
  id?: number;
  inputText: string;
  // setInputText: React.Dispatch<React.SetStateAction<string>>;
  changeInputText: (text: string) => void;
  // addMessage: () => void;
}

// interface RootState {
//   messages: {
//     id: number;
//     text: string;
//   }[]
// }
type AppDispatch = typeof store.dispatch

const MessangerForm: React.FC<Props> = ({ id, inputText, changeInputText }) => {
  // const messages = useSelector((state: RootState) => state.messages)
  const dispatch = useDispatch<AppDispatch>();

  return (
    <form
      className={styles.container}
      onSubmit={
        (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (inputText) {
            dispatch(addMessage(inputText));
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
