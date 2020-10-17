const express = require('express');

const router = express.Router();

module.exports = (params) => {

  const {feedbackService} = params;

  router.get('/speaker',async (request, response) => {
    const feedback = await feedbackService.getList();
    return response.json(feedback);
  });

  router.post('/', (request, response) => {
    return response.send('feedback posted');
  });

  return router;
};
