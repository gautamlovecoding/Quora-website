import bcrypt from "bcrypt";
import userModel from "../model/userModel.js";
import {isValid,isValidRequestBody,isValidName,isValidPhone,isValidEmail} from '../validator/validation.js'

const register = async (req, res) => {
  const { fname, lname, email, phone, password, creditScore } = req.body;

};


export {register}