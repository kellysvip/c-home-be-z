const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema(

    // {
    //     id: {
    //       type: String,
    //     },
    //     title: {
    //       type: String,
    //     },
    //     squareInArea: {
    //       type: String,
    //     },
    //     price: {
    //       type: String,
    //     },
    //     location: {
    //       type: String,
    //     },
    //     postTime: {
    //       type: String,
    //     },
    //     postSummary: {
    //       type: String,
    //     },
    //     imageLink: {
    //       type: String,
    //     },
    //   }
);

const Home = mongoose.model("Home", homeSchema);

module.exports = Home;
