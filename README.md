# Compass UOL Scholarship Program - July Challenge:

## Vinícius Sakamoto - vinicius.sakamoto.pb@compasso.com.br

# Summary:

First challenge from compass uol scholarship program. The objective is to create a proof of concept of a REST api for a veterinary franchise.

The functional requirements are to create routes that are able to take request to:

### Tutor
- Get all tutors (/tutors)
- Create a new tutor (/tutor)
- Update a tutor (/tutor/:id)
- Delete a tutor (/tutor/:id)

### Pet:
- Create a pet (/tutor/:tutorId)
- Update a pet (pet/:petId/tutor/:tutorsId)
- Delete a pet (pet/:petId/tutor/:tutorsId)

# How to run:

1. Clone the repository:
> `git clone https://github.com/vasakamoto/compass_uol_july`
2. Rename the file `.env.model` to `.env` and insert the values for:
    1. `LOCALHOST` (Location where the server will be allocated)
    2. `MONGO_URI` (URI provided by MongoDB to access the database within your account)
    3. `MONGO_COLLECTION` (Name of collection where the documents will be inserted)
3. Run the command to install the dependencies
> `npm install`
4. Transpile the `.ts` files to `.js` with the command `tsc` in the terminal
5. To start the server type the command `node dist/app.js` or `npm test`
6. Make the request with files in the folder `requests_RESTClient`
    - It's necessary to install the *REST CLient* extension in the vscode
    - Or make the requests with postman or insomnia
    - Use the models in the folder to make the requests

# Others:

The project didn't require the use of a database, but it helped with the visualization of the requests and was an opportunity to experience it for the first time.

 The field `id` was necessary because it was present in the body request of the examples used in the briefing. The `params` e `find` functions uses the `id` field of the body instead of using the `ObjectId` generated automatic with the MongoDB modole.

 The project was developed with the *REST Client* extension instead of using postman or insomnia to test the request calls.
