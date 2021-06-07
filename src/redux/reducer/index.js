import { ADD_MESSAGE } from '../actions/index'

const initialState = {
  rooms: [
    {
      id: 1,
      userName: 'Dave',
      url: 'https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
      messages: [
        {
          id: 1,
          userId: 1,
          text: "hi"
        },
        {
          id: 2,
          userId: 1,
          text: 'how'
        }
      ]
    },
    {
      id: 2,
      userName: 'Mishel',
      url: 'https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
      messages: [
        {
          id: 1,
          userId: 1,
          text: "Are you here?"
        }
      ]
    },
    {
      id: 3,
      userName: 'Jon',
      url: 'https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png',
      messages: [
        {
          id: 1,
          userId: 1,
          text: "Like so.."
        },
        {
          id: 2,
          userId: 1,
          text: 'yes'
        }
      ]
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      // const currentRoom = state.rooms.find(r => r.id === action.roomId)
      // if (!currentRoom) return;
      return {
        ...state,
        rooms: state.rooms.map((room) => {
          if (room.id === action.roomId) {
            return {
              ...room,
              messages: [...room.messages, action.payload]
            }
          } else {
            return {
              ...room,
              messages: [...room.messages]
            }
          }
        })
      }

    default:
      return state
  }

}