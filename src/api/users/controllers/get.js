import UserEV from "../../../models/user.js";

//Servidor
export const serverRead = (response) => { 
  response.send("Status:OK")
}

//Listar
const allUsers = async (request, response, next) => { 
  const { name, lastName, birthdayDate, email, course, country } = request.query;

  try {
     
    const filters = { 
      ...name && { name:name.toUpperCase()},
      ...lastName && { lastName:lastName.toUpperCase()},
      ...birthdayDate && { birthdayDate },
      ...email && { email },
      ...course && { course },
      ...country && { country }
    }; 

    const arrayUsers = await UserEV.find(filters); 

    if (arrayUsers?.length === 0) {
      return response.status(404).json({ 
        message:"Users Not Found"});
    }
    return response.status(200).json({ 
      message:"Users found successfully",
      "Users":arrayUsers});
  } catch (error) { 
    next (error);
  }
}

export default allUsers;