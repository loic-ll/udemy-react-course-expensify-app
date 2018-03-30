import moment from 'moment'

const expenses = [
  {
    id: '0',
    description: 'abc',
    note: 'now',
    amount: 10,
    createdAt: 0
  }, 
  {
    id: '1',
    description: 'bcd',
    note: 'before',
    amount: 22,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '2',
    description: 'cde',
    note: 'after',
    amount: 300,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];

export default expenses;
