export interface Message {
  id: number,
  userName: string,
  userId: number,
  text: string
}

export interface Room {
  id: number,
  url: string,
  userName: string,
  messages: Message[]
}

export interface RootState {
  rooms: Room[],
}