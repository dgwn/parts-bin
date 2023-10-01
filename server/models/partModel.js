const mongoose = require("mongoose");

const partSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a part name"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Part", partSchema);
