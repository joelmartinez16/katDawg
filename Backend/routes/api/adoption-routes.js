// Creating the adoption route

const express = require('express');
const router = express.Router();

const {getAllPets, getPetsbyID} = require("../../controllers/adoption")

router.get("/",getAllPets);

router.get('/:id',getPetsbyID);

module.exports = router;