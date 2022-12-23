app.get('/api/users', (req, res) =>{
  const data = require('./database/data.json');
  res.json({
    nbOfUser: data.users.length,
    users: data.users
  });
});