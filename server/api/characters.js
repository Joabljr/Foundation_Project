const router = require("express").Router();
const Character = require("../db/Character");

router.get("/", async (req, res, next) => {
  try {
    const characters = await Character.findAll();
    res.send(characters);
  } catch (error) {
    next(error);
  }
});

router.get("/guards", async (req, res, next) => {
  try {
    const guards = await Character.findAll({
      where: {
        role: "Guard",
      },
    });
    res.send(guards);
  } catch (error) {
    next(error);
  }
});

router.get("/casters", async (req, res, next) => {
  try {
    const casters = await Character.findAll({
      where: {
        role: "Caster",
      },
    });
    res.send(casters);
  } catch (error) {
    next(error);
  }
});

router.get("/defenders", async (req, res, next) => {
  try {
    const defenders = await Character.findAll({
      where: {
        role: "Defender",
      },
    });
    res.send(defenders);
  } catch (error) {
    next(error);
  }
});

router.get("/snipers", async (req, res, next) => {
  try {
    const snipers = await Character.findAll({
      where: {
        role: "Sniper",
      },
    });
    res.send(snipers);
  } catch (error) {
    next(error);
  }
});

router.get("/specialists", async (req, res, next) => {
  try {
    const specialists = await Character.findAll({
      where: {
        role: "Specialist",
      },
    });
    res.send(specialists);
  } catch (error) {
    next(error);
  }
});

router.post("/purchased", async (req, res, next) => {
  try {
    const characterId = req.body.id;
    const thisCharacter = await Character.findByPk(characterId);
    thisCharacter.purchased = true;
    await thisCharacter.save();
    res.status(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
