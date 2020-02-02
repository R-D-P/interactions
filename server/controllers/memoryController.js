const Memory = require("./../models/memoryModel");

exports.getAllMemories = async (req, res) => {
  try {
    // const memory = await Memory.find({ occupation: /host/ }).
    // where('name.last').equals('Ghost').
    // where('age').gt(17).lt(66).
    // where('likes').in(['vaporizing', 'talking']).
    // limit(10).
    // sort('-occupation').
    // select('name occupation').

    const memories = await Memory.find({}).limit(2);

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: memories.length,
      data: {
        memories
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        memory
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.createMemory = async (req, res) => {
  try {
    const newMemory = await Memory.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        memory: newMemory
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateMemory = async (req, res) => {
  try {
    const memory = await Memory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: "success",
      data: {
        memory
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteMemory = async (req, res) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};
