import todayString from "../../utils/date"

export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (text, roomId) => {
  return {
    type: ADD_MESSAGE,
    roomId,
    userName: 'me',
    payload: {
      id: Date.now(),
      time: todayString,
      userId: 2,
      text
    }
  }
}