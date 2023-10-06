const mongoose = require("mongoose");

const partSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter a user id"],
      ref: "User"
    },
    name: {
      type: String,
      required: [true, "Please enter a part name"]
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Part", partSchema);
