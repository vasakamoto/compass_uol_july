import { MongoClient } from 'mongodb';
import * as models from './models';
require('dotenv').config();

const client = new MongoClient(process.env.MONGO_URI!);

const tutorsCollection = client.db().collection<models.Tutors>(process.env.MONGO_COLLECTION!);

export async function getAllDocuments() {
    const tutorsArray = [];
    await client.connect();
    console.log("Connected to MongoDB, fetching tutors...")
    const tutors = await tutorsCollection.find().toArray();
    for await (const tutor of tutors) {
        tutorsArray.push(tutor);
    }
    await client.close();
    return tutorsArray;
}

export async function createTutor(tutor: models.Tutors) {
    await client.connect();
    console.log(`Connected to MongoDB, inserting ${tutor.name}`);
    await tutorsCollection.insertOne(tutor);
    await client.close();
}