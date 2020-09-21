//@desc    Get All Bootcamps
//@route   GET /api/v1/bootcamps/
//@access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show bootcamps` });
};

//@desc    Get single Bootcamps
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamps for ${req.params.id}` });
};

//@desc    Create All Bootcamps
//@route   POST /api/v1/bootcamps/
//@access  Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create bootcamp` });
};

//@desc    Update single Bootcamps
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamps for ${req.params.id}` });
};

//@desc    Delete single Bootcamps
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamps for ${req.params.id}` });
};
