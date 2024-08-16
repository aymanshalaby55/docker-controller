const express = require('express');
const router = express.Router();

const { listImages, createImage, startImage, stopImage, inspectImage, deleteImgae } = require('../controller/imageController');

// Assuming there are functions defined elsewhere to handle these routes
// For example, in a controller file similar to ContainerController.js
// These functions would handle the logic for listing, creating, starting, stopping, and inspecting images

router.get('/list', listImages);
router.post('/create', createImage);
router.get('/start/:id', startImage);
router.get('/stop/:id', stopImage);
router.get('/inspect/:id', inspectImage);
router.get('/delete/:id', deleteImgae);

module.exports = router;


