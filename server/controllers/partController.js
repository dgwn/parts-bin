// @desc    Get parts
// @route   GET /api/parts
// @access  Private
const getParts = (req, res) => {
  res.status(200).json({
    message: "Get parts"
  });
};

// @desc    Post part
// @route   POST /api/parts
// @access  Private
const postPart = (req, res) => {
  res.status(200).json({
    message: "Post part"
  });
};

// @desc    Update part
// @route   PUT /api/parts/:id
// @access  Private
const putPart = (req, res) => {
  res.status(200).json({
    message: `Update part ${req.params.id}`
  });
};

// @desc    Delete part
// @route   DELETE /api/parts/:id
// @access  Private
const deletePart = (req, res) => {
  res.status(200).json({
    message: `Delete part ${req.params.id}`
  });
};

module.exports = {
  getParts,
  postPart,
  putPart,
  deletePart
};
