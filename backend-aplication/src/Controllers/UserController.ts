import { NextFunction, Request, Response } from "express";
import Controller from "./Controller";
import User from "../Schemas/User";
import { Types } from "mongoose";

class UserController extends Controller {
  constructor() {
    super("/user");
  }

  protected initRoutes(): void {
    this.router.get(this.path, this.list);
  }

  private async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const users = await User.find();
    return res.send(users);
  }

  private async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params; //22:37

    if(!Types.ObjectId.isValid(id))
  }
}

export default UserController;
