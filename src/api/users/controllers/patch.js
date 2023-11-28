import UserEV from "../../../models/user.js";
import schemaProfile from "./validation.js";
import validData from "../../utils/validData.js"
import partsDate from "../../utils/date.js"
import isValidObjectId from "../../utils/valid.js"

//Registro 
const profile = async (request, response, next) => { 

  validData(schemaProfile, response, request);

  try { 
      
    //Lectura de datos
    const { name, lastName, birthdayDate, course, country} = request.body;
    const id = request.params.id

    validData(schemaProfile, response, request);
    isValidObjectId(id, response);
    
    const dateInfo = partsDate(birthdayDate, response);
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
       next (error);
    }
};
export default profile;