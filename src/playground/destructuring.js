console.log('destruturing');

/// Object destructuring
(() => {
  const person = {
    //  name: 'Loic LL',
    age: 34,
    location: {
      city: 'rennes',
      temp: 10
    }
  };


  const { name: fullname = 'John Doe', age } = person;
  console.log(`${fullname} is ${age}`);

  const { city, temp: temperature } = person.location;
  if (city && temperature) {
    console.log(`${temperature} in ${city}`);
  }


  const book = {
    title: 'Ego LOL',
    author: 'Dr LOL',
    publisher: {
      //name: 'Penguin'
    }
  };
  const { name: publisherName = 'Self Publish' } = book.publisher;
  console.log(publisherName); // Penguin / Self Publish
})();

///
/// Array Destructuring
(() => {
  const address = ['98 rue des profs pelle', 'Rennes', 'BZH', '35700'];

  const [, city, state = 'UNKNOWN',] = address;
  console.log(`You are in ${city}, ${state}`);

  // beverage, small price, medium, high
  const item = ['coffee', 2.00, 2.50, 3.00],
    [beverage, , price] = item,
    formatter = new Intl.NumberFormat('fr', { style: 'currency', currency: 'EUR' });

  console.log(`A medium ${beverage} costs ${formatter.format(price)}`);
})();