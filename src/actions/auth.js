import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = uid => ({
  payload: uid,
  type: 'LOGIN',
});

export const logout = uid => ({
  type: 'LOGOUT',
});

export const startLogin = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};
