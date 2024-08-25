import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://vincentanjiri12:38836510@cluster0.kezkw.mongodb.net/auth-next?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
