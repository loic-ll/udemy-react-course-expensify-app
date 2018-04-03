const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      Name: 'LETS',
      age: 34
    });

    //reject('Something\'s wrong');
  }, 1500);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);
    return 'more stuff';
  })
  .then((data) => {
    console.log('2', data);
  })
  .catch(error => {
    console.log('error:', error);
  });

console.log('after');
