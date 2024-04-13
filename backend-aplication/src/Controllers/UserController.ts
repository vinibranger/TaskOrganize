import { NextFunction, Request, Response } from "express";
import Controller from "./Controller";
import User from "../Schemas/User";
import ValidationService from "../Services/ValidationService";
import HttpStatusCode from "../Responses/HttpStatusCode";
import ServerErrorException from "../Errors/ServerErrorException";
import IdInvalidException from "../Errors/IdInvalidException";
import NoContentException from "../Errors/NoContentException";
import ResponseCreate from "../Responses/ResponseCreate";
import ResponseOK from "../Responses/ResponseOk";
import HttpException from "../Errors/HttpException";
class UserController extends Controller {
  constructor() {
    super("/user");
  }

  protected initRoutes(): void {
    this.router.get(this.path, this.list);
    this.router.get(this.path + "/:id", this.findById);
    this.router.post(this.path, this.create);
    this.router.put(this.path + "/:id", this.edit);
    this.router.delete(this.path + "/:id", this.delete);
  }

  private async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const users = await User.find();
      return ResponseOK(res,users);
    } catch (error) {
      return res.send(new ServerErrorException(error));
     //return res.send(new HttpException(HttpStatusCode.INTERNAL_SERVER_ERROR,'ERROR NA API'));
    }
  }

  private async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try{
    const { id } = req.params;
    if (ValidationService.validId(id))
      return res.status(HttpStatusCode.BAD_REQUEST).send(new IdInvalidException());
      const user = await User.findById(id);
      return ResponseOK(res,user);
    }catch(error){
      return res.send(new ServerErrorException(error));
    }
  }
  private async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return ResponseCreate(res,user);
    } catch (error) {
      return res.send(new ServerErrorException(error));
    }
  }
  private async edit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params;
    if (ValidationService.validId(id))
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(new IdInvalidException());
    try {
      const user = await User.findByIdAndUpdate(id, req.body);
     return ResponseOK(res,user);
    } catch (error) {
      return res.send(new ServerErrorException(error));
    }
  }

  private async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
    const { id } = req.params;
    if (ValidationService.validId(id))
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(new IdInvalidException());
      const user = await User.findById(id);
      if (user) {
        user.deleteOne();
        return ResponseOK(res,user);
      } 
       return res.status(HttpStatusCode.NO_CONTENT).send(new NoContentException());
      //return res.status(204).send()
    } catch (error) {
      return res.send(new ServerErrorException(error));
    }
  }
}

export default UserController;
