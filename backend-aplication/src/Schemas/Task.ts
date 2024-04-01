import {Schema, model, Document} from "mongoose"
import { UserInterface } from "./User";
 
export enum StatusEnum{
    OPEN = 'OPEN',
    FINISHED ='FINISHED'
}

export interface TaskInterface extends Document{
   description: string,
   status: StatusEnum,
   concluded: Date,
   responsible: UserInterface,
   creation: Date,
}

const TaskSchema = new Schema({
   name:{
       type : String,
       unique: true,
       required: [true,'Nome Obrigatório'],
   },
   emai:{
       type: String,
       required: [true ,'E-mail Obrigatório'],
       unique: true,
       lowercase: true,
   },
   password:{
       type: String,
       required: [true ,'Senha Obrigatória'],
       select: false, //colocar assim para não trazer no momento da consulta no banco
   },
   creation:{
       type: Date,
       default: Date.now, //coloquei isso pois no bache já vai pegar a data do cadastro

   }
});

export default model<TaskInterface>('Task',TaskSchema);