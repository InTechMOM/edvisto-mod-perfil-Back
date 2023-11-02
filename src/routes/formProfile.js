const express = require("express");
const studentSchema = require("../schema/student");
const router = express.Router();

//create route form profile
//enpoind de crear usuario estudiante
router.post("/formstudent", (req, res) => {
  //res.send("create profile student");
const user = studentSchema(req.body);
user
// llamar la coleccion he iteracion para almacenar   new  y nombre del schema 
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}));
});
  

//get por id del estudiante
router.get("/formstudent/:id", (req, res) => {
const { id } = req.params;
studentSchema
.findById(id)
.then((data) => res.json(data))
.catch((error) => res.json({message: error}));
});

//put por id del estudiante
router.put("/formstudent/:id", (req, res) => {
  const { id } = req.params;
  const {Nombres, Apellidos, Fec_Nac, Email, Residencia, NEd } = req.body
studentSchema
.updateOne({ _id: id}, {$set: {Nombres, Apellidos, Fec_Nac, Email, Residencia, NEd}})
.then((data) => res.json(data))
.catch((error) => res.json({message: error}));
});


module.exports = router;
