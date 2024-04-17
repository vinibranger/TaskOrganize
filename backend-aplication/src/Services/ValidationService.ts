import { NextFunction } from "express";
import { isValidObjectId } from "mongoose";
import IdInvalidException from "../Errors/IdInvalidException";

class ValidationsService {
  public validId(id: string, next:NextFunction): boolean {
    if (!isValidObjectId(id)) {
      next(new IdInvalidException());
      return true;
    } 
      return false;
  }
}

export default new ValidationsService();
