const Router = require("koa-router");
const ability_score = require('./routes/ability_scores.js');
const class_ = require("./routes/classes.js");
const tool = require("./routes/tools.js");

const router = new Router();

router.use('/ability_scores', ability_score.routes());
router.use('/classes', class_.routes());
router.use('/tools', tool.routes());

module.exports = router; 