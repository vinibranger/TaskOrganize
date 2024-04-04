import { NextFunction, Request, Response } from "express";
import Controller from "./Controller";
import User from "../Schemas/User";
import { isValidObjectId } from "mongoose";

class UserController extends Controller {
  constructor() {
    super("/user");
  }

  protected initRoutes(): void {
    this.router.get(this.path, this.list);
    this.router.get(this.path + "/:id", this.findById);
    this.router.post(this.path, this.create);
    this.router.put(this.path, this.edit);
    this.router.delete(this.path, this.delete);
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
    const { id } = req.params; 
    if (!isValidObjectId(id)) return res.status(400).send("ERROR");
    const user = await User.findById(id);
    return res.send(user);
  }

  private async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const user = await User.create(req.body)
    return res.send(user);
  }

  private async edit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params; 
    if (!isValidObjectId(id)) return res.status(400).send("ERROR");
    const user = await User.findByIdAndUpdate(id, req.body);
    return res.send(user)
  }

  private async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params; 
    if (!isValidObjectId(id)) return res.status(400).send("ERROR");
    
    const user = await User.findById(id);
    if (user){
      user.deleteOne();
      return res.send(user)
    }else {
      return res.status (204).send();
    }
    return res.send(user)
  }



}

export default UserController;
