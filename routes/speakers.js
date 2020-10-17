const express = require('express');

const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params.speakersService;

  router.get('/speaker', async (request, response) => {
    const speakers = await speakersService.getList();
    console.log(speakers);
    return response.json(speakers);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Details page of ${request.params.shortname}`);
  });

  return router;
};
