import authReducers from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducers(undefined, {type: '@@INIT'});
  expect(state).toEqual({});
});

test('should set uid on login', () => {
  const state = authReducers({}, {type: 'LOGIN', payload: 'someuid'});
  expect(state).toEqual({uid: 'someuid'});
});

test('should remove uid on logout', () => {
  const state = authReducers({}, {type: 'LOGOUT'});
  expect(state).toEqual({uid: undefined});
});
