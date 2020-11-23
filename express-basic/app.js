const debug = require('debug')('app:startup');
const config = require('config');
const helmet = require('helmet');
const morgan = require('morgan');
const Joi = require('joi');
const logger = require('./routes/middleware/logger');
const home = require('./routes/home');
const courses = require('./routes/courses');
const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.json());
// Direct Link to file in public folder - http://localhost:5000/readme.txt
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use('/', home);
app.use('/api/courses', courses);

// Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Name: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  debug('Morgan enabled...');
}

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
