const { Schema, model } = require('mongoose');

const adoptionSchema = new Schema({
  /*name: {
    type: String,
    required: true,
    unique: true,
  },*/
  breed: {
    type: String,
    required: true,
    unique: false,
  },
  age: {
    type: Number,
    required: true,
    unique: false
  }
});

/*const adoptionList =[
  {
    id:0,
    name
  }
]
*/
// Need to figure out which one will work. 
// const Adoption = mongoose.model('Adoption', Adopt);
const Adoption = model('Adoption', adoptionSchema);

module.exports = Adoption;

// We need to make sure that this works in order to push to main.
const Adopt = new Schema({
  name: {type: String},
  adoptionSchema: [
    {
      breed: {type: String, required: true, unique: false},
      age: {type: Number, required: true, unique: false}
    }
  ]
})