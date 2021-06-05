export function addMessage(arr, text) {
  return Object.assign({}, [...arr, {
    id: Date.now(),
    text
  }])
}