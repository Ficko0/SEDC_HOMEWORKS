fetch ('http://localhost:3000/api/students')
    .then (data => data.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(console.log(`All done`));