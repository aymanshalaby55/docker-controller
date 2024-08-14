const express = require('express');
const router = express.Router();

const { listContainers, startContainer, stopContainer, inspectContainer } = require('../controller/ContainerController');


router.get('/list', listContainers);
router.get('/start/:id', startContainer);
router.get('/stop/:id', stopContainer);
router.get('/inspect/:id', inspectContainer);

module.exports = router;



