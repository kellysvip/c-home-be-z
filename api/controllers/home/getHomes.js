const mongoose = require("mongoose");
const Home = require("../../../models/Home");

const getHomes = async (req, res, next) => {
  try {
    // const filter = req.query;

    const listOfFound = await Home.find()
    
    res.status(200).send({data: listOfFound.slice(0,20)})
  } catch (error) {
    next(error);
  }
};

module.exports = { getHomes };
