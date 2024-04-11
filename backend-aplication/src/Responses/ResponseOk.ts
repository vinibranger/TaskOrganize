import { Response } from "express";
import HttpStatusCode from "./HttpStatusCode";

function ResponseOK(res: Response, body: any) {
  const status = HttpStatusCode.OK;
  const mensagem = "OK";
  const error = false;

  return res.status(status).send({ status, mensagem, error, body });
}

export default ResponseOK;
