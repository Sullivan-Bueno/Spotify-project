import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://sullivanbhs:H0PYasVMCtcvHH6g@cluster0.oiasm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("Spotify");
// const artistsCollection = await db.collection("artists").find({}).toArray();

// console.log(artistsCollection);