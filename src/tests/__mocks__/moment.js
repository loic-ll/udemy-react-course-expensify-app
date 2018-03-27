const realmoment = require.requireActual('moment')

const moment = (timestamp = 0) => {
  return realmoment(timestamp);
}

export default moment;

