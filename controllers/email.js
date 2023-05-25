const Email = require("../models/email");

const sendEmailFromClientSide = async (req, res) => {
  const { name, message, email } = req.body;
  console.log(name, message, email);
  try {
    if (!name) return res.json({ error: "name is requried" });
    if (!message) return res.json({ error: "message is requried" });
    if (!email) return res.json({ error: "email is requried" });
    const create = await new Email({
      name,
      email,
      message,
    }).save();
    res.json(create);
  } catch (error) {
    console.log(err);
  }
};

const allEmail = async (req, res) => {
  try {
    const create = await Email.find({});
    res.json(create);
  } catch (error) {
    console.log(err);
  }
};

const removeEmail = async (req, res) => {
  try {
    const create = await Email.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (error) {
    console.log(err);
  }
};

module.exports = { sendEmailFromClientSide, allEmail, removeEmail };
