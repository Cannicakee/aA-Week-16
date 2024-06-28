if (!fetch) {
  var fetch = require('./test/node-fetch')(1);
}

/**
 * Do not change code above this line.
 * See README.md for instructions

 ******************************************************************************/
const url = '/colors/1'
const data = {
  color: 'green'
};

const options = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}
fetch(url, options)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log('Response body:')
    console.log(data);
  })