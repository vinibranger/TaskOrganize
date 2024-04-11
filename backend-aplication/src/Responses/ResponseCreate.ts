import { Response } from "express";
import HttpStatusCode from "./HttpStatusCode";

function ResponseCreate(res: Response, body: any) {
  const status = HttpStatusCode.CREATED;
  const mensagem = "Criado com sucesso";
  const error = false;

  return res.status(status).send({ status, mensagem, error, body });
}

export default ResponseCreate;