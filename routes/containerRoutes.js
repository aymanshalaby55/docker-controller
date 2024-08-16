const express = require('express');
const router = express.Router();

const { listContainers, startContainer, stopContainer, inspectContainer, deleteContainer } = require('../controller/ContainerController');


router.get('/list', listContainers);
router.get('/start/:id', startContainer);
router.get('/stop/:id', stopContainer);
router.get('/inspect/:id', inspectContainer);
router.delete('/delete/:id', deleteContainer);

module.exports = router;



