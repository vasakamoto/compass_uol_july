import express from 'express';
import * as controller from './controller'

const routes = express.Router();

routes.get('/tutors', controller.getAllTutors);

routes.post('/tutor', controller.createTutor);

routes.put('/tutor/:id', controller.updateTutor);

routes.delete('/tutor/:id', controller.deleteTutor);

routes.post('/pet/:tutorId', controller.createPet);

routes.put('/pet/:petId/tutor/:tutorId', controller.updatePet);

routes.delete('/pet/:petId/tutor/:tutorId', controller.deletePet);

export default routes;