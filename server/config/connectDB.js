import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MANGODB_URL) {
  throw new Error("Mongo url falhou em .env");
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.MANGODB_URL);
    console.log("Conectado ao banco de dados com sucesso");
  } catch (error) {
    console.log("Erro ao conectar ao banco de dados", error);
    process.exit(1);
  }
}

export default connectDB;