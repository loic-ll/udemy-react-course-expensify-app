import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

const db = firebase.database();
const expensesRef = db.ref('expenses');

const snapToArray = snapshot => {
  const expenses = [];
  snapshot.forEach(childSnapshot => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
 return expenses;
};

expensesRef.on('child_removed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

expensesRef.on('child_changed', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

expensesRef.on('child_added', snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// expensesRef.on('value', snapshot => {
//   console.log(snapToArray(snapshot));
// });

// expensesRef.once('value')
//   .then(snapshot => { 
//     console.log(snapToArray(snapshot));
//   });


// expensesRef.push({ 
//   note: 'todo1', 
//   description: 'something', 
//   amount: 1, 
//   createdAt: Date.now(),
// });
//


// db.ref('notes').push({
//   title: 'to do more',
//   body: 'why?',
// });

// db.ref().on('value', 
//   (snapshot) => { 
//     const {name, job} = snapshot.val();
//     console.log(`${name} is a ${job.title} at ${job.company}`); 
//   },
//   (e) => { console.log('Error on fetching'); }
// );
//
// db.ref().once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => { console.log('Error: fetching data'); })

// db.ref().set({
//   name: 'Loic El Thesea',
//   age: 34,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Self-company',
//   },
//   location: {
//     city: 'Rennes',
//     country: 'France',
//   }
// }).then(() => {
//     console.log('Data saved');
//   })
//   .catch(e => {
//     console.log('Failed!', e);
//   });
//
// db.ref().update({
//   stressLevel: 5,
//   'job/company': 'Dreams',
//   'location/city': 'Paris',
// });
//
// db.ref('isSingle').set(null);
// db.ref('isSingle').remove()
//   .then(() => { console.log('Data removed') })
//   .catch((e) => { console.log('Remove failed') });
