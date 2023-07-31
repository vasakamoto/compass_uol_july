import { RequestHandler } from "express";

export const getAllTutors: RequestHandler = (req, res) => {
try {
    console.log("Get all tutors working");
    res.status(200).send("Everything is ok! For now...");
}
catch (error) {
    console.log(error);    
};
}

export const createTutor: RequestHandler = (req, res) => {
    try {
        console.log("Create tutor working");
        res.status(200).send("Everything is ok! For now...");
    }
    catch (error) {
        console.log(error);
    }    
}

export const updateTutor: RequestHandler = (req, res) => {
    try {
        console.log("Update tutor working");
        res.status(200).send("Everything is ok! For now...");
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