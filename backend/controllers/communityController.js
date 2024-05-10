const Community = require('../models/communityModel');

const joinCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = joinCommunities