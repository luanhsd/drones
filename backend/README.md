<p align="center">
    <a href="http://nestjs.com/" target="blank">
        <img src="https://user-images.githubusercontent.com/10083265/91772328-0f84e200-ebbb-11ea-81ce-2c4685405d82.png" width="320" alt="Nest Logo" />
    </a>
</p>

## Description

back-end : Drones Management Project

### [Acessar back-end na heroku](https://ondrone-api.herokuapp.com/api/ 'OnDrone API')

## Installation

```bash
$ npm install
# or
$ yarn install
```

## Environment Variables Settings

create the .env file and copy the defined keys in .env.example

```bash
#APPLICATION SETTINGS
PORT=

#MYSQL CONNECTION
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=

# s3: production mode
# local: development mode
STORAGE_TYPE=

#S3 AWS
BUCKET_NAME=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

#WITH YARN

# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Documentation

```bash
# development
http://localhost:<port>/api/

#production mode
http://<address>/api/
```
