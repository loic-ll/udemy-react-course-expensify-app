import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {database, firebase, googleAuthProvider};
