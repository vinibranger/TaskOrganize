import HttpStatusCode from "../Responses/HttpStatusCode";
import HttpException from "./HttpException";

class IdInvalidException extends HttpException{
  constructor(){
    super(HttpStatusCode.BAD_REQUEST, 'ID invalido, favor verificar')
  }
}

export default IdInvalidException;