 import {Schema, model, Document} from "mongoose"
 
 export interface UserInterface extends Document{
    name: string,
    email: string,
    password: string,
    creation : Date,
 }

 const UserShema = new Schema({
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

 export default model<UserInterface>('User',UserSchema);