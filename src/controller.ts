import { RequestHandler } from 'express';
import * as dbUtils from './dbUtil'
import * as models from './models'

export const getAllTutors: RequestHandler = async (req, res) => {
try {
    console.log("Get all tutors working");
    const tutorsArray = await dbUtils.getAllDocuments();
    res.status(200).send(tutorsArray);
}
catch (error) {
    console.log(error);    
};
}

export const createTutor: RequestHandler = async (req, res) => {
    try {
        if (req.body.id, req.body.name && req.body.phone && req.body.email && req.body.date_of_birth 
            && req.body.zipCode) {
            console.log("Create tutor working");
            const newTutor = new models.Tutors(req.body.id, req.body.name, req.body.phone, req.body.email,
                req.body.date_of_birth, req.body.zipCode);
            await dbUtils.createTutor(newTutor);
            res.status(200).send(`New tutor created:\n ${JSON.stringify(req.body, null, 4)}`);
        }
        else {
            console.log("Missing parameters from body");
            res.status(502).send("Please, insert all values, and valid values, to create a tutor!");
        }
    }
    catch (error) {
        console.log(error);
    }    
}

export const updateTutor: RequestHandler = async (req, res) => {
    try {
        if (req.params.id && (req.body.name || req.body.phone || req.body.email || req.body.date_of_birth
        || req.body.zipCode)) {
            console.log("Update tutor working");
            await dbUtils.updateTutor(req.params.id, { ...req.body });
            res.status(200).send(`Tutor with id ${req.params.id} updated:\n ${JSON.stringify(req.body, null, 4)}`);
        }
        else {
            console.log("Missing parameters from body");
            res.status(502).send("Please, insert valid values, to update a tutor!");
        }
    }
    catch (error) {
        console.log(error);    
    }
}

export const deleteTutor: RequestHandler = async (req, res) => {
    try {
        console.log("Delete tutor working");
        await dbUtils.deleteTutor(req.params.id);
        res.status(200).send(`Tutor with id ${req.params.id} deleted`);
    }
    catch (error) {
        console.log(error);
    }
}

export const createPet: RequestHandler = async (req, res) => {
    try {
        const pet = new models.Pets(req.body.id, req.body.name, req.body.species, req.body.carry,
        req.body.weight, req.body.date_of_birth);
        console.log(`Pet acquired from request ${JSON.stringify(pet, null, 4)}`);
        await dbUtils.createPet(req.params.tutorId, pet);
        res.status(200).send(`Pet created at tutor with id ${req.params.tutorId}: \n${JSON.stringify(pet, null, 4)}`);
    }
    catch (error) {
        console.log(error)    
    }
}

export const updatePet: RequestHandler = async (req, res) => {
    try {
        if (req.params.petId && req.params.tutorId && (req.body.id || req.body.name
            || req.body.species || req.body.date_of_birth || req.body.carry || req.body.weight)) {
            const pet = new models.Pets(req.body.id, req.body.name, req.body.species, req.body.carry,
                req.body.weight, req.body.date_of_birth);
            await dbUtils.updatePet(req.params.tutorId, req.params.petId, pet);
            res.status(200).send(`Pet with id ${req.params.petId}, tutor id ${req.params.tutorId}, updated to:\n
            ${JSON.stringify(pet, null, 4)}`);
        }
        else {
            console.log("Missing parameters from body");
            res.status(502).send("Please, insert valid values, to update a tutor!");
        }
    }
    catch (error) {
        console.log(error)    
    }
}

export const deletePet: RequestHandler = async (req, res) => {
    try {
        console.log("Delete pet working");
        await dbUtils.deletePet(req.params.tutorId, req.params.petId)
        res.status(200).send(`Pet with id ${req.params.petId} deleted from tutor ${req.params.tutorId}`);
    }
    catch (error) {
        console.log(error)    
    }
}