const asyncHandler = require("express-async-handler");
const Part = require("../models/partModel");
const User = require("../models/userModel");

// @desc    Get parts
// @route   GET /api/parts
// @access  Private
const getParts = asyncHandler(async (req, res) => {
  const parts = await Part.find({ user: req.user._id });
  res.status(200).json(parts);
});

// @desc    Post part
// @route   POST /api/parts
// @access  Private
const postPart = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please enter a part name");
  }

  const part = await Part.create({
    name: req.body.name,
    user: req.user._id
  });
  res.status(200).json({
    part
  });
});

// @desc    Update part
// @route   PUT /api/parts/:id
// @access  Private
const updatePart = asyncHandler(async (req, res) => {
  const part = await Part.findById(req.params.id);
  if (!part) {
    res.status(400);
    throw new Error("Please enter a valid part id");
  }

  // Check for user
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error("Please enter a valid user id");
  }

  // Check if part belongs to user
  if (part.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to update this part");
  }

  const updatedPart = await Part.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    updatedPart
  });
});

// @desc    Delete part
// @route   DELETE /api/parts/:id
// @access  Private
const deletePart = asyncHandler(async (req, res) => {
  const part = await Part.findById(req.params.id);
  if (!part) {
    res.status(400);
    throw new Error("Please enter a valid part id");
  }

  // Check for user
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(401);
    throw new Error("Please enter a valid user id");
  }

  // Check if part belongs to user
  if (part.user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("Not authorized to delete this part");
  }

  const deleted = await Part.deleteOne(part);

  res.status(200).json({
    message: "Part was deleted successfully."
  });
});

module.exports = {
  getParts,
  postPart,
  updatePart,
  deletePart
};
