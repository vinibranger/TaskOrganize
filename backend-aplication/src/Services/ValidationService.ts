import { NextFunction } from "express";
import { isValidObjectId } from "mongoose";

class ValidationsService {
  public validadeId(id: string): boolean {
    if (!isValidObjectId(id)) {
      return true;
    } else {
      return false;
    }
  }
}

export default new ValidationsService();
