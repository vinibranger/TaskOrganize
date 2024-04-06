import HttpStatusCode from "../Responses/HttpStatusCode";
import HttpException from "./HttpException";

class NoContentException extends HttpException{
constructor(){
  super(HttpStatusCode.NOT_FOUND, 'Nenhum arquivo encontrado')
}
}

export default NoContentException;