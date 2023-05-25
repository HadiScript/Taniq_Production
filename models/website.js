const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const websiteSchema = new Schema(
  {
    title: { type: String, required: true },
    tagLine: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    location: { type: String, required: true },

    imageAbout: { type: ObjectId, ref: "Media" },
    aboutTitle: { type: String, required: true },
    aboutDescription: { type: String, required: true },
    aboutTagline: { type: String, required: true },

    timeUpdate: { type: Date, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Web", websiteSchema);
