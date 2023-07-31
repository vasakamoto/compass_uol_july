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
    console.log(`Connected to MongoDB, inserting\n ${JSON.stringify(tutor, null, 4)}`);
    await tutorsCollection.insertOne(tutor);
    await client.close();
}

export async function updateTutor(tutorId: string, update: object) {
    await client.connect();
    console.log(`Connected to MongoDB, updating id: ${tutorId} update:\n ${JSON.stringify(update, null, 4)}`);
    await tutorsCollection.updateOne({ id: tutorId }, { $set: { ...update } });
    await client.close();
}

export async function deleteTutor(tutorId: string) {
    await client.connect();
    await tutorsCollection.deleteOne({ id: tutorId });
    await client.close();
}

export async function createPet(tutorId: string, pet: models.Pets) {
    await client.connect();
    const tutor = await tutorsCollection.find<models.Tutors>({id : tutorId}).toArray();
    let newPetsArray = [...tutor[0].pets, pet];
    console.log(`Tutor: \n${JSON.stringify(tutor[0])} \nPets: \n${newPetsArray}`);
    await tutorsCollection.updateOne({ id: tutorId }, { $set: { pets: newPetsArray } });
    await client.close();
}

export async function updatePet(tutorId: string, petId: string, pet: models.Pets) {
    await client.connect();
    const tutor = await tutorsCollection.find<models.Tutors>({ id: tutorId }).toArray();
    let newPetsArray = [...tutor[0].pets];
    const petIndex = newPetsArray.findIndex((petInArray) => petInArray.id === petId);
    newPetsArray[petIndex] = pet;
    console.log(`Tutor: \n${JSON.stringify(tutor[0])} \nPets ${petId}: \n${newPetsArray}`);
    await tutorsCollection.updateOne({id : tutorId}, {$set: {pets : newPetsArray}})
    await client.close();
}