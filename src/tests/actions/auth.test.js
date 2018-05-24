import {login, logout} from '../../actions/auth';

test('should setup login action obj', () => {
  const action = login('someuid');
  expect(action).toEqual({
    type: 'LOGIN',
    payload: 'someuid',
  });
});

test('should setup logout action obj', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
