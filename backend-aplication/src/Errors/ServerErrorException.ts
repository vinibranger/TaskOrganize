import HttpStatusCode from "../Responses/HttpStatusCode";
import HttpException from "./HttpException";


class ServerErrorException extends HttpException {
  constructor(error) {
    super(getStatus(error), getMessage(error));
  }
}

function getStatus(error:any): number {
  if (isMongoException(error)) return HttpStatusCode.BAD_REQUEST;
  return HttpStatusCode.INTERNAL_SERVER_ERROR;
}

function isMongoException(error:any): boolean {
  if (isMongoError(error) || isValidationError(error)) return true;
  return false;
}

function isMongoError(error:any): boolean {
  return error.name === 'MongoError';
}

function isValidationError(error:any): boolean {
  return error.name === 'ValidationError';
}

function getMessage(error:any): string {
  try {
    if (isMongoException(error)) {
      if (isKeyUniqueError(error)) return getMessageKeyUnique(error);
      if (isValidationError(error)) return getMessageValidationError(error);
    } else return getMessageGeneric();
  } catch (error) {
    return getMessageGeneric();
  }
  return getMessageGeneric();
}

function isKeyUniqueError(error:any) {
  return isMongoError(error) && error.code === 11000;
}

function getMessageKeyUnique(error:any): string {
  const { keyPattern } = error;
  const listFormatedErros: string[] = [];
  Object.keys(keyPattern).forEach((field) => {
    listFormatedErros.push(`${field} deve ser único`);
  });
  return listFormatedErros.join(' | ');
}

function getMessageValidationError(error:any): string {
  const { errors } = error;
  const listFormatedErros: string[] = [];
  Object.keys(errors).forEach((field: string) => {
    listFormatedErros.push(errors[field].message);// ESSE SERIA PARA PEGAR A MSG DO REQUIRE DO USER NO CASO NOME/EMAIL 
  });
  return listFormatedErros.join(' | ');
}

function getMessageGeneric(): string {
  return 'Erro interno no servidor.';
}




export default ServerErrorException;


//Quando você usa any como tipo para uma variável ou parâmetro, você está essencialmente dizendo ao TypeScript para não realizar checagens de tipo nessa variável ou parâmetro.
//Isso permite que você trabalhe com valores de qualquer tipo sem receber erros de tipo do TypeScript