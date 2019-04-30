const express = require('express');
const app = express();

//Settings
app.set('port', process.env.PORT || 3001);

//Middleware
app.use(express.json());

//Routes
app.use('/api/clients/', require('./routes/clients'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});