const Router = require("koa-router");
const ability_score = require('./routes/ability_scores.js');
const class_ = require("./routes/classes.js");
const tool = require("./routes/tools.js");
const ability = require("./routes/abilities.js");
const armor = require("./routes/armors.js");
const weapon = require("./routes/weapons.js");

const router = new Router();

router.use('/ability_scores', ability_score.routes());
router.use('/classes', class_.routes());
router.use('/tools', tool.routes());
router.use('/abilities', ability.routes());
router.use('/armor', armor.routes());
router.use('/weapons', weapon.routes());

module.exports = router; 