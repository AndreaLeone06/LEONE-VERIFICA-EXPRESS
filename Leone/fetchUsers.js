const fs = require('fs');
const axios = require('axios');

axios.get('https://randomuser.me/api/?results=5&inc=gender,name,nat,id,city,picture,nat')
  .then(response => {
    const users = response.data.results.map(user => ({
      ...user,
      email: `${user.name.first}.${user.name.last}@example.com`.toLowerCase()
    }));
    
    fs.writeFileSync('./users.json', JSON.stringify(users, null, 2));
    console.log('Utenti salvati in users.json');
  })
  .catch(error => console.error('Errore:', error));