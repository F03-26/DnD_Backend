const express = require('express');
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

router.use('/ability_scores', ability_score);
router.use('/classes', class_);
router.use('/tools', tool);
router.use('/abilities', ability);
router.use('/armor', armor);
router.use('/weapons', weapon);
router.use('/gears', gear);
router.use('/coins', coin);
router.use('/feats', feat);
router.use('/races', race);
router.use('/traits', trait);
router.use('/languages', language);
router.use('/alignments', alignment);
router.use('/proficiencies', proficiencies);
router.use('/spells', spells);
router.use('/character', character);

router.use('/classescoins', classescoins);
router.use('/classesarmor', classesarmor);
router.use('/classesweapons', classesweapons);
router.use('/classesgear', classesgear);

router.use('/characterarmor', characterarmor);
router.use('/characterweapon', characterweapon);
router.use('/charactergear', charactergear);
router.use('/charactertool', charactertool);
router.use('/characterfeat', characterfeat);
router.use('/charactertrait', charactertrait);
router.use('/characterspell', characterspell);
router.use('/characterlanguage', characterlanguage);

router.use('/backgrounds', background);
router.use('/backgroundsweapons', backgroundsweapons);
router.use('/backgroundsgear', backgroundsgear);
router.use('/backgroundscoins', backgroundscoin);
router.use('/backgroundstools', backgroundstool);

router.use(authentication);

router.use("/users", jwtMiddleware({secret: process.env.JWT_SECRET, algorithms: ["HS256"]}), users);

module.exports = router; 