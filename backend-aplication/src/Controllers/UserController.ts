import { NextFunction, Request, Response } from "express";
import Controller from "./Controller";
import User from "../Schemas/User";
import { isValidObjectId } from "mongoose";
import ValidationService from "../Services/ValidationService";
import HttpException from "../Errors/HttpException";
import HttpStatusCode from "../Responses/HttpStatusCode";

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
      return res.send(users);
    } catch (error) {
      return res.send(
        new HttpException(HttpStatusCode.INTERNAL_SERVER_ERROR, "ERRO INTERNO")
      );
    }
  }

  private async findById(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params;
    if (ValidationService.validadeId(id))
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(
          new HttpException(HttpStatusCode.BAD_REQUEST, "Requisição Invalida")
        );
    const user = await User.findById(id);
    return res.send(user);
  }

  private async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.send(user);
    } catch (error) {
      return res.send(
        new HttpException(HttpStatusCode.INTERNAL_SERVER_ERROR, "ERRO INTERNO")
      );
    }
  }
  private async edit(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params;
    if (ValidationService.validadeId(id))
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(
          new HttpException(HttpStatusCode.BAD_REQUEST, "Requisição Invalida")
        );
    try {
      const user = await User.findByIdAndUpdate(id, req.body);
      return res.send(user);
    } catch (error) {
      return res.send(
        new HttpException(HttpStatusCode.INTERNAL_SERVER_ERROR, "ERRO INTERNO")
      );
    }
  }

  private async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> {
    const { id } = req.params;
    if (ValidationService.validadeId(id))
      return res
        .status(HttpStatusCode.BAD_REQUEST)
        .send(new HttpException(HttpStatusCode.BAD_REQUEST, "Req invalida"));
    try {
      const user = await User.findById(id);
      if (user) {
        user.deleteOne();
        return res.send(user);
      } else {
        return res.status(HttpStatusCode.NOT_FOUND).send(new HttpException(HttpStatusCode.NOT_FOUND,'Erro ao excluir'));
      }
    } catch (error) {
      return res.send(
        new HttpException(HttpStatusCode.INTERNAL_SERVER_ERROR, "ERRO INTERNO")
      );
    }
  }
}

export default UserController;
