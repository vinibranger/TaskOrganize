import HttpStatusCode from "../Responses/HttpStatusCode";
import HttpException from "./HttpException";

class UserContainTaskException extends HttpException{
  constructor(){
    super(HttpStatusCode.CONFLICT, 'Impossível excluir pois o usuário tem tarefas relacionadas ')
  }
}

export default UserContainTaskException;