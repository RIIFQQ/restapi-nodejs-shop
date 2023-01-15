var express = require('express');
var router = express.Router();
const validator = require('fastest-validator');
const v = new validator();
const { Users } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('../middleware/verify');

/* POST Save Cart. */
router.post('/', async function (req, res, next) {
  try {
    const id = req.params.id;
    let users = await Users.findAll();
    if(!users){
        return res.status(404).json({
            status:404,
            message: "Users Not Found"
        });
    }

  } catch(e) {
    return res.status(500).json({
      status:500,
      message: e.message
    });
  }  
});


module.exports = router;
