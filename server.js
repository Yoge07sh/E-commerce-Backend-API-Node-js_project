
const app = require('./app');
const connect = require('./config/db');
connect();
app.listen(3000, () => {
    console.log('server is running on 3000');
})