const express = require('express');
const path = require('path');

const FeedbackService = require('./services/FeedbackService.js');
const SpeakerService = require('./services/SpeakerService.js');

const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakerService('./data/speakers.json');

const routes = require('./routes');

const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({ feedbackService, speakersService }));

app.listen(port, () => {
  console.log(`Express Server Listening on Port ${port}`);
});
