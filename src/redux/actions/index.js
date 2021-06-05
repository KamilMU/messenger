export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (text) => {
  return {
    type: ADD_MESSAGE,
    payload: {
      id: Date.now(),
      userName: 'me',
      text
    }
  }
}