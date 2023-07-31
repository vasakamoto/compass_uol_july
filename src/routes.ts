import express from 'express';

const routes = express.Router();

routes.get('/tutors');

routes.post('/tutor');

routes.route('tutor/:id').put().delete();

routes.post('pet/:tutorId');

routes.route('pet/:petId/tutor/:tutorId').put().delete();