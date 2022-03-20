const router = require("express").Router();
const Blog = require("../models/Blog");

router
  .get("/contact", (req, res) => {
    res.render("contact");
  })
  module.exports = router;