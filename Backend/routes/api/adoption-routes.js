// Creating the adoption route

const express = require('express');
const router = express.Router();
//pulling information from adoption controller to get all pets and get them by their ids
const {getAllPets, getPetsbyID} = require("../../controllers/adoption")

router.get("/",getAllPets);

router.get('/:id',getPetsbyID);
//exporting the two gets into the router function.
module.exports = router;