const Router = require("koa-router");
const ability_score = require('./routes/ability_scores.js');
const class_ = require("./routes/classes.js");
const tool = require("./routes/tools.js");
const ability = require("./routes/abilities.js");
const armor = require("./routes/armors.js");
const weapon = require("./routes/weapons.js");
const gear = require("./routes/gears.js");
const coin = require("./routes/coins.js");
const feat = require("./routes/feats.js");

const classescoins = require("./routes/classescoins.js");
const classesarmor = require("./routes/classesarmor.js");
const classesweapons = require("./routes/classesweapons.js");
const classesgear = require("./routes/classesgear.js");

const background = require("./routes/backgrounds.js");
const backgroundsweapons = require("./routes/backgroundsweapons.js");
const backgroundsgear = require("./routes/backgroundsgear.js");
const backgroundscoin = require("./routes/backgroundscoins.js");
const backgroundstool = require("./routes/backgroundstools.js");

const router = new Router();

router.use('/ability_scores', ability_score.routes());
router.use('/classes', class_.routes());
router.use('/tools', tool.routes());
router.use('/abilities', ability.routes());
router.use('/armor', armor.routes());
router.use('/weapons', weapon.routes());
router.use('/gear', gear.routes());
router.use('/coins', coin.routes());
router.use('/feats', feat.routes());

router.use('/classescoins', classescoins.routes());
router.use('/classesarmor', classesarmor.routes());
router.use('/classesweapons', classesweapons.routes());
router.use('/classesgear', classesgear.routes());

router.use('/backgrounds', background.routes());
router.use('/backgroundsweapons', backgroundsweapons.routes());
router.use('/backgroundsgear', backgroundsgear.routes());
router.use('/backgroundscoins', backgroundscoin.routes());
router.use('/backgroundstools', backgroundstool.routes());

module.exports = router; 