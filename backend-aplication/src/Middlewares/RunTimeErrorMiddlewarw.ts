import { NextFunction } from "express";
import HttpException from "../Errors/HttpException";
import HttpStatusCode from "../Responses/HttpStatusCode";
import responseRunTimeError from "../Responses/ResponseRunTimeError";



function runRimeErrorMiddleware(error: HttpException, req:Request, res:Response, next: NextFunction){
    const status = error.status || HttpStatusCode.INTERNAL_SERVER_ERROR;
// primerio tenta pegar esse status caso vir  nulo vai disponibilizar o erro interno
    const message = error.message || "ERRO NÃO IDENTIFICADO"

    responseRunTimeError(res, status,message)
}