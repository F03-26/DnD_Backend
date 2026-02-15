const express = require('express');
const requireAuth = require('./middlewares/requireAuth.js');

const ability_score = require('./routes/ability_scores.js');
const class_ = require("./routes/classes.js");
const tool = require("./routes/tools.js");
const ability = require("./routes/abilities.js");
const armor = require("./routes/armors.js");
const weapon = require("./routes/weapons.js");
const gear = require("./routes/gears.js");
const coin = require("./routes/coins.js");
const feat = require("./routes/feats.js");
const race = require('./routes/races.js');
const trait = require('./routes/traits.js');
const language = require('./routes/languages.js');
const alignment = require('./routes/alignments.js');
const proficiencies = require('./routes/proficiencies.js');
const spells = require('./routes/spells.js');
const character = require('./routes/character.js');
const levels = require("./routes/levels.js");

const classescoins = require("./routes/classescoins.js");
const classesarmor = require("./routes/classesarmor.js");
const classesweapons = require("./routes/classesweapons.js");
const classesgear = require("./routes/classesgear.js");

const characterarmor = require("./routes/characterarmor.js");
const characterweapon = require("./routes/characterweapon.js");
const charactergear = require("./routes/charactergear.js");
const charactertool = require("./routes/charactertool.js");
const characterfeat = require("./routes/characterfeat.js");
const charactertrait = require("./routes/charactertrait.js");
const characterspell = require("./routes/characterspell.js");
const characterlanguage = require("./routes/characterlanguage.js");

const background = require("./routes/backgrounds.js");
const backgroundsweapons = require("./routes/backgroundsweapons.js");
const backgroundsgear = require("./routes/backgroundsgear.js");
const backgroundscoin = require("./routes/backgroundscoins.js");
const backgroundstool = require("./routes/backgroundstools.js");

const authentication = require("./routes/authentication.js");
const users = require("./routes/users.js");

const { expressjwt: jwtMiddleware } = require("express-jwt");
const dotenv = require("dotenv");
dotenv.config();

//====================================================================================

const router = new express.Router();

router.use('/ability_scores', requireAuth, ability_score);
router.use('/classes', requireAuth, class_);
router.use('/tools', requireAuth, tool);
router.use('/abilities', requireAuth, ability);
router.use('/armor', requireAuth, armor);
router.use('/weapons', requireAuth, weapon);
router.use('/gears', requireAuth, gear);
router.use('/coins', requireAuth, coin);
router.use('/feats', requireAuth, feat);
router.use('/races', requireAuth, race);
router.use('/traits', requireAuth, trait);
router.use('/languages', requireAuth, language);
router.use('/alignments', requireAuth, alignment);
router.use('/proficiencies', requireAuth, proficiencies);
router.use('/spells', requireAuth, spells);
router.use('/character', requireAuth, character);
router.use('/levels', requireAuth, levels);

router.use('/classescoins', requireAuth, classescoins);
router.use('/classesarmor', requireAuth, classesarmor);
router.use('/classesweapons', requireAuth, classesweapons);
router.use('/classesgear', requireAuth, classesgear);

router.use('/characterarmor', requireAuth, characterarmor);
router.use('/characterweapon', requireAuth, characterweapon);
router.use('/charactergear', requireAuth, charactergear);
router.use('/charactertool', requireAuth, charactertool);
router.use('/characterfeat', requireAuth, characterfeat);
router.use('/charactertrait', requireAuth, charactertrait);
router.use('/characterspell', requireAuth, characterspell);
router.use('/characterlanguage', requireAuth, characterlanguage);

router.use('/backgrounds', requireAuth, background);
router.use('/backgroundsweapons', requireAuth, backgroundsweapons);
router.use('/backgroundsgear', requireAuth, backgroundsgear);
router.use('/backgroundscoins', requireAuth, backgroundscoin);
router.use('/backgroundstools', requireAuth, backgroundstool);

router.use(authentication);

router.use("/users", requireAuth, users);

module.exports = router;