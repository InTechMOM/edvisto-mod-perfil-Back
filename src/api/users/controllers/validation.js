import Joi from "joi"; 
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);

const valuesCourse = ["SegundoA", "SegundoB", "TerceroA", "TerceroB", "CuartoA", "CuartoB", "QuintoA", "QuintoB"];
const valuesCountry=[
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Paraguay", "Perú", "Uruguay", "Costa Rica",
  "Cuba", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá" ]

// Esquema Modificación de perfil
const schemaProfile = Joi.object ({
  name: Joi.string().min(3).max(50).strict().required(),
  lastName: Joi.string().min(3).max(50).strict().required(),
  birthdayDate: extendedJoi.date().format("DD-MM-YYYY").required(),
  course: Joi.string().valid(...valuesCourse).required(),
  country: Joi.string().valid(...valuesCountry)
})

export default schemaProfile;