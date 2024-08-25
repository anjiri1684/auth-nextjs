import { MongoClient } from "mongodb";

function connectToDatabase() {
  MongoClient.connect(
    "mongodb+srv://vincentanjiri12:38836510@cluster0.kezkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}
