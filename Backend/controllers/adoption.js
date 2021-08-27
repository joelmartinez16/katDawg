const adoptionList = require("../models/Adoption")

const getAllPets = async(req,res) => {
    try {
        const pets = await adoptionList.find({});

        res.json(pets);
    } catch (err){
        console.log(err);
        res.status(400).json({message:"Server has made an error"});
    }
}

const getPetsbyID = async(req,res) =>{
    try{
        const pets = await adoptionList.findbyID(req.params.id);

        res.json(pets);
    } catch (err) {
        console.log(err);
        res.status(400).json({message:"Server has made an error"});
    }
}

module.exports = {
    getAllPets,getPetsbyID
}