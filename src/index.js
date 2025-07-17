const app = require('./app');
const db = require('./models');
const dotenv = require('dotenv');
// const socketSetup = require('./socket')
const http = require('http');

dotenv.config();
/* eslint-disable no-undef */
const PORT = process.env.PORT || 3000;
/* eslint-enable no-undef */

const server = http.createServer(app);

// const io = socketSetup(server);


server.listen(PORT, () => {
    console.log('Server running...')
})

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        console.log(`Listening in port ${PORT}`);
    })
    .catch((error) => { console.log('Unable to connect to the database:', error); });

// module.exports = io;