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

export const deleteTutor: RequestHandler = (req, res) => {
    try {
        console.log("Delete tutor working");
        res.status(200).send("Everything is ok! For now...");

    }
    catch (error) {
        console.log(error)    
    }
}

export const createPet: RequestHandler = (req, res) => {
    try {
        console.log("Create pet working");
        res.status(200).send("Everything is ok! For now...");

    }
    catch (error) {
        console.log(error)    
    }
}

export const updatePet: RequestHandler = (req, res) => {
    try {
        console.log("Update pet working");
        res.status(200).send("Everything is ok! For now...");

    }
    catch (error) {
        console.log(error)    
    }
}

export const deletePet: RequestHandler = (req, res) => {
    try {
        console.log("Delete pet working");
        res.status(200).send("Everything is ok! For now...");

    }
    catch (error) {
        console.log(error)    
    }
}