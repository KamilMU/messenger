import { ADD_MESSAGE } from '../actions/index'

const initialState = {
  rooms: [
    [
      {
        id: 1,
        userName: "David",
        text: 'hello'
      }
    ],
    [
      {
        id: 1,
        userName: "Mike",
        text: 'hi'
      }
    ],
    [
      {
        id: 1,
        userName: "Den",
        text: 'how are you'
      }
    ],
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        rooms: [...state.rooms.map(room => {
          return [
            ...room,
            action.payload
          ]
        })]
      }
    default:
      return state
  }

}