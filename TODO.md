- # feats:
    - ## main: 
        - ### (*app.ts*):
            - [x] Create server

    - ## controllers:
        - ### *tutors.ts*
            - [ ] Logic for route to get all tutors
            - [ ] Logic for route to create a new tutor
            - [ ] Logic for route to update a tutor
            - [ ] Logic for route to delete a tutor

        - ### *pets.ts*
            - [ ] Logic for route to create a new pet
            - [ ] Logic for route to uptade a pet
            - [ ] Logic for route to delete a pet

    - ## models:
        - ### *tutor.ts*
            - [ ] Class/ Interface for tutor

        - ### *pet.ts*
            - [ ] Class/ Interface for pet

    - ## routers:
        - ### *tutorRoutes.ts*
            - [ ] Route to GET at endpoint /tutors
            - [ ] Route to POST at endpoint /tutor
            - [ ] Route to PUT at endpoint /tutor/:id
            - [ ] Route to DELETE at endpoint /tutor/:id

        - ### *petRoutes.ts*
            - [ ] Route to POST at endpoint /pet/:tutorId
            - [ ] Route to PUT at endpoint /pet/:petId/tutor/:tutorId
            - [ ] Route to DELETE at endpoint /pet/:petId/tutor/:tutorId

    - ## dbUtil:
        - ### *dbUtil.ts*
            - [ ] Connect to database
            - [ ] Get params or/ and req.body
        
        - ### *dbUtilTutor.ts*
            - [ ] Create tutor
            - [ ] Update tutor
            - [ ] Delete tutor
        
        - ### *dbUtilPet.ts*
            - [ ] Create pet
            - [ ] Update pet
            - [ ] Delete pet

- # Chores:
- [ ] README 
- [ ] .env e .env.dummy
- [x] manage JS packages
- [x] configure tsconfig
- [x] .gitignore
- [ ] REST.http to make/ test request
- [ ] Create a local database with arrays
- [ ] console.log() everything


# Requisitos funcionais:

- GET /tutors -- Retrieves all tutors.
- POST/tutor -- Create a new tutor.
- PUT/tutor/id -- Updates a tutor.
- DELETE/tutor/id -- Deletes a tutor.
- POST/pet/tutorId-- Creates a pet and adds it to a tutor.
- PUT/pet/petId/tutor/tutorId -- updates a pet's info
- DELETE/pet/petId/tutor/tutorId -- deletes a pet from a tutor.

# Requisitos não-funcionais:

- Readability
- Private repository
- Small commits
- Commit pattern
- TypeScript
- Express
- Readme.md
- Explanation of how to run locally
- Share the repository's access with the class monitors for evaluation