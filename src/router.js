const Router = require("koa-router");
const ability_score = require('./routes/ability_scores.js');
const class_ = require("./routes/classes.js");
const tool = require("./routes/tools.js");
const ability = require("./routes/abilities.js");
const armor = require("./routes/armors.js");
const weapon = require("./routes/weapons.js");
const gear = require("./routes/gears.js");
const coin = require("./routes/coins.js");
const classescoins = require("./routes/classescoins.js");
const classesarmor = require("./routes/classesarmor.js");
const classesweapons = require("./routes/classesweapons.js");
const classesgear = require("./routes/classesgear.js");

const router = new Router();

router.use('/ability_scores', ability_score.routes());
router.use('/classes', class_.routes());
router.use('/tools', tool.routes());
router.use('/abilities', ability.routes());
router.use('/armor', armor.routes());
router.use('/weapons', weapon.routes());
router.use('/gear', gear.routes());
router.use('/coins', coin.routes());
router.use('/classescoins', classescoins.routes());
router.use('/classesarmor', classesarmor.routes());
router.use('/classesweapons', classesweapons.routes());
router.use('/classesgear', classesgear.routes());

module.exports = router; 