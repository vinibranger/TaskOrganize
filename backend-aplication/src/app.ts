import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Controller from "./Controllers/Controller";

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.app.use(cors());

    this.initMongoose();
    this.connectDataBase();
    this.initExpressJson();
  }

  private initMongoose(): void {
    mongoose.set("runValidators", true); //aqui é true para que as validação do schema funcione certo
  }

  private connectDataBase = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://vinibranger:1fddMGUbq71sk9fb@cluster0.3te1hrw.mongodb.net/projetoCrud?retryWrites=true&w=majority&appName=Cluster0"
      );
      console.log("connected to mongodb");
    } catch (error) {
      console.log("error while connecting mongodb", error.message);
    }
  };
  private initExpressJson(): void {
    this.app.use(express.json()); //Aqui eu defino que quero utilizar o padrao json para leitura e resposta
  }
  private initControllers(constrollers: Controller[]): void {
    constrollers.forEach((Controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Aplicação iniciada na porta: ${port}`);
    });
  }
}

export default App;
