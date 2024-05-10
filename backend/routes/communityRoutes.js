const express = require('express');
const router = express.Router();
const joinCommunities = require('../controllers/communityController');


// API endpoint to get all communities
router.get('/', joinCommunities);

module.exports = router;
