import express from "express";
import cors from "cors";
import mongoose from "mongoose";

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    this.app.use(cors());
    this.initMongoose();
    this.connectDataBase();
  }

  private initMongoose(): void {
    mongoose.set("runValidators", true); //aqui é true para que as validação do schema funcione certo
  }

  private connectDataBase(): void {
    mongoose.connect("mongodb+srv://vinibranger:2dqW6b06yvekte1I@cluster0.3te1hrw.mongodb.net/projetoCrud?retryWrites=true&w=majority&appName=Cluster0",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Aplicação iniciada na porta: ${port}`);
    });
  }
}

export default App;
