import HttpStatusCode from "./HttpStatusCode";
import { Response } from "express";

function responseRunTimeError(res: Response,status:HttpStatusCode,mensagem: string){
  const error = true;
  const body = {}

  return res.status(status).send({status,mensagem,error,body})
}

export default responseRunTimeError;