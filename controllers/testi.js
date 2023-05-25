const Testi = require("../models/testi");

const add = async (req, res) => {
  try {
    const { name, role, at, message } = req.body;
    if (!name) return res.json({ error: "name is requried" });
    if (!message) return res.json({ error: "message is requried" });
    if (!role) return res.json({ error: "role is requried" });
    if (!Atomics) return res.json({ error: "he is from which company?" });
    const create = await new Testi({
      name,
      at,
      message,
      role,
    }).save();
    res.json(create);
  } catch (error) {
    console.log(err);
  }
};

const allTesti = async (req, res) => {
  try {
    const create = await Testi.find({});
    res.json(create);
  } catch (error) {
    console.log(err);
  }
};

const removeTesti = async (req, res) => {
  try {
    const create = await Testi.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.log(err);
  }
};

module.exports = { add, allTesti, removeTesti };
