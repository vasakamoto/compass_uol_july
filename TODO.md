- # feats:
    - ## main: 
        - ### (*app.ts*):
            - [x] Create server

    - ## controllers:
        - ### *tutors.ts*
            - [x] Logic for route to get all tutors
            - [x] Logic for route to create a new tutor
            - [x] Logic for route to update a tutor
            - [x] Logic for route to delete a tutor

        - ### *pets.ts*
            - [x] Logic for route to create a new pet
            - [x] Logic for route to uptade a pet
            - [x] Logic for route to delete a pet

    - ## models:
        - ### *tutor.ts*
            - [x] Class/ Interface for tutor

        - ### *pet.ts*
            - [x] Class/ Interface for pet

    - ## routers:
        - ### *tutorRoutes.ts*
            - [x] Route to GET at endpoint /tutors
            - [x] Route to POST at endpoint /tutor
            - [x] Route to PUT at endpoint /tutor/:id
            - [x] Route to DELETE at endpoint /tutor/:id

        - ### *petRoutes.ts*
            - [x] Route to POST at endpoint /pet/:tutorId
            - [x] Route to PUT at endpoint /pet/:petId/tutor/:tutorId
            - [x] Route to DELETE at endpoint /pet/:petId/tutor/:tutorId

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
- [x] REST.http to make/ test request
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