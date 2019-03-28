const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

const cohorts = require('./cohorts/cohortsModel.js');
const students = require('./students/studentsModel.js');

server.use('/api/cohorts', cohorts);
server.use('/api/students', students);

server.listen(5000, console.log('Listening on port 5000'));