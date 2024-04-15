import { Response } from "express";
import HttpStatusCode from "./HttpStatusCode";

function responseNotFound(res: Response){
  const status = HttpStatusCode.NOT_FOUND;
  const mensagem = 'Rota não encontrada'
  const error = true;
  const body = {};

  return res.status(status).send({status, mensagem,error,body})
}

export default responseNotFound;