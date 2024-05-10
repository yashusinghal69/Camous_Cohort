const panelSchema =require("../models/PanelModels") ;


module.exports.CreatePanel = async (req, res) => {
    try {
        const { topic, description } = req.body;
        const existingUser = await panelSchema.findOne({ topic });
        if (existingUser) {
            return res.json({ message: "Topic already exists" });
        }
        const panel = await panelSchema.create({ topic, description });
        res.status(201).json({ message: "Panel created successfully", success: true , panel});
    } catch (error) {
        console.error(error);
    }
}
