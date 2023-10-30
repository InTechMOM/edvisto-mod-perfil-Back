const mongoose = require("mongoose");

const dataSchemaStudent = mongoose.Schema({
  ImgProfile: {
    type: String,
    required: true,
  },
  Nombres: {
    type: String,
    required: true,
  },
  Apellidos: {
    type: String,
    required: true,
  },

  Fec_Nac: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Residencia: {
    type: String,
    required: true,
  },
  NEd: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('data',dataSchemaStudent);
