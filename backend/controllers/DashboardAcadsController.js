const AcadsSchema = require("../models/DashboardAcadsModels");
module.exports.DashboardAcads = async (req, res) => {
    try {
        const { course , instructor } = req.body;
        const existingUser = await AcadsSchema.findOne({ course });
        if (existingUser) {
            return res.json({ message: "Course already exists" });
        }
        const acads = await AcadsSchema.create({ course, instructor });
        res.status(201).json({ message: "Course created successfully", success: true , acads});
    } catch (error) {
        console.error(error);
    }
}