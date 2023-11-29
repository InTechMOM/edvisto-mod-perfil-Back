import UserEV from "../../../models/user.js";
import schemaProfile from "./validation.js";
import partsDate from "../../utils/date.js"
import isValidObjectId from "../../utils/valid.js"

//Registro 
const profile = async (request, response, next) => { 

  try { 
      
    //Lectura de datos
    const { name, lastName, birthdayDate, course, country} = request.body;
    const id = request.params.id

    isValidObjectId(id);

    //Validación de datos
    const {error} = schemaProfile.validate(request.body);
    if (error) { 
      return response.status(422).json({error: error.details[0].message}) 
    }
    
    const dateInfo = partsDate(birthdayDate);
      const {day, month, year} = dateInfo;
      const isoDate =`${year}-${month}-${day}T00:00:00.000Z`; 

      const userUpdate = await UserEV.findByIdAndUpdate(id , {
        name: name.toUpperCase(),
        lastName: lastName.toUpperCase(),
        birthdayDate: new Date(isoDate),
        course, 
        country
      }, {new:true});
     
      if (!userUpdate) {
        return response.status(404).json({
          message:"User Not Found"})
      } else {
        return response.status(200).json({
          message:"User Modified Successfully",
          data: userUpdate})
      }
    } catch (error) { 
      if (error.message === "Invalid date" || error.message === "Wrong date format") {
        return response.status(422).json("Invalid date.");
      } else if (error.message === 'Id Not Valid'){
        return response.status(422).json({message:"Id Not Valid"});
        } else {
        next (error);
      };
    }
};

export default profile