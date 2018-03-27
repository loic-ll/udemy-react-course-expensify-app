import moment from 'moment'
import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  sortByDate, 
  sortByAmount 
} from '../../actions/filters.js'

test('should generate sortByAmount action obj', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should generate sortByDate action obj', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('should generate setEndDate action obj', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate setStartDate action obj', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate setTextFilter action obj\
with no value provided', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate setTextFilter action obj\
with value provided', () => {
  const action = setTextFilter('Text provided');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Text provided'
  });
});

