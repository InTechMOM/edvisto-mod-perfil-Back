import UserEV from "../../../models/user.js";
import isValidObjectId from "../../utils/valid.js"

//Recuperar datos
const user = async (request, response, next) => { 
    const id = request.params.id

    try { 
        
        isValidObjectId(id);
     
        const getUser = await UserEV.findById(id);
        if (!getUser) {
          return response.status(404).json({
            message:"User Not Found"})
        }     
        
        return response.status(200).json({
           message:"User successfully extracted",
           data: getUser
          })
          
      } catch (error) { 
        if (error.message === 'Id Not Valid'){
          return response.status(422).json({
            message:"Id Not Valid"
          });
    
        } else {
        next (error);
        }
      };
    }
    export default user;