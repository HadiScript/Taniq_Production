const nodemailer = require("nodemailer");
const { SendEmailWithNodemailer } = require("../helpers/SendingEmail");
const Website = require("../models/website");

const contact = async (req, res) => {
  const { name, email, message } = req.body;
  const emailData = {
    from: "contact@hadiraza.com",
    to: email,
    subject: "Thanks for your message.",
    text: `Hi ${name},`,
    html: `<h4>Thank You For subscribe hadiraza:</h4>
             <hr />
             <p>Visit my site</p>
             <a href="https://hadiraza.com/" target="_blank">hadiraza.com</a>
            `,
  };
  try {
    SendEmailWithNodemailer(req, res, emailData);
    res.json({ ok: true });
  } catch (error) {
    console.log(error);
  }
};

// const createData = async (req, res) => {
//   try {
//     const newPost = await new Website({
//       ...req.body,
//       timeUpdate: Date.now(),
//     }).save();

//     res.json(newPost);
//   } catch (error) {
//     console.log(error);
//   }
// };

const editData = async (req, res) => {
  const {
    id,
    title,
    tagLine,
    phoneNumber,
    address,
    location,
    aboutImage,
    imageAbout,
    aboutTitle,
    aboutDescription,
    aboutTagline,
  } = req.body;
  try {
    const post = await Website.findByIdAndUpdate(
      id,
      {
        title,
        tagLine,
        phoneNumber,
        address,
        location,
        aboutImage,
        imageAbout,
        aboutTitle,
        aboutDescription,
        aboutTagline,
        timeUpdate: Date.now(),
      },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

const websiteData = async (req, res) => {
  try {
    const post = await Website.findById({ _id: req.params.id }).populate(
      "imageAbout"
    );
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  contact,
  // createData,
  editData,
  websiteData,
};
