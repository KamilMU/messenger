const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const todayString = today.toLocaleDateString().toString();

export default todayString;