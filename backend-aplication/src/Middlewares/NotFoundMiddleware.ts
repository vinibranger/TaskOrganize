import { Request, Response} from "express";
import responseNotFound from "../Responses/ResponseNotFound";

function notFoundMiddleware (req: Request,res: Response){
    return responseNotFound(res);
}

export default notFoundMiddleware;

// SE ATENTAR NA SEQUENCIA DE MIDDLE