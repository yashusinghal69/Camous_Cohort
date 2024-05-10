const router = require("express").Router();
const { CreatePanel  } = require("../controllers/AppController");
const { DashboardAcads } = require("../controllers/DashboardAcadsController");

router.post("/panel", CreatePanel);
router.post("/dashboardacads", DashboardAcads);
module.exports = router;
