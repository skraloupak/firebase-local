# Lesbianapp API

[![Build Status](https://api.travis-ci.com/lesbianapp/API.svg?token=QfqpaXVLvbPfD9U6SX9S&branch=master)](https://travis-ci.com/lesbianapp/API)

## What's included
- Koa 2
- Babel transpilation using Make
- Mocha tests with Instanbul (Nyc) code coverage
- ESlint with STRV JavaScript rules
- Sequelize migrations
- Database initialization with Docker
- Swagger documentation
- Travis build configuration
- Snyk security check

## Running the project

### Prerequisites
- install Node.js current release (<https://nodejs.org/en/>)
- install Docker (<https://docs.docker.com/engine/installation/mac/>)
- buildpack for graphicsmagick (`brew install graphicsmagick`) and add buildpack to heroku:
  - `heroku buildpacks:add --index 1 https://github.com/mcollina/heroku-buildpack-graphicsmagick.git --app lesbianapp-development`
  - (another: https://elements.heroku.com/buildpacks/xerpa/heroku-buildpack-graphicsmagick)
- setup Firebase for local development:
  - create your own Firebase (eg. `https://zoe-local-lukas.firebaseio.com/`)
  - copy content of `firebase-database-rules.json` to your Firebase database rules
  - generate service account certificate and save it as `src/config/firebase/firebase-zoe-local.json`
  - add your Firebase URL to .env file (eg. `FIREBASE_LOCAL_URL=https://zoe-local-lukas.firebaseio.com/`)
  - add spec to `worker_eueue` - `{
                                    "specs" : {
                                      "spec_retries" : {
                                        "in_progress_state" : "in_progress",
                                        "retries" : 1
                                      }
                                    }
                                  }`

### Run
1. `npm i` - to install Node.js packages
2. start Docker
3. `./bin/infrastracture-start` - to initialize project services (starts the Postgres database)
4. rename `.env-sample` file in the project root to `.env` and setup your connection string values (if you are running database with docker you can use default values)
5. `./bin/migrate-db` - to migrate database to the latest version
6. `./bin/run` - to start the API server
7. `./bin/run-worker` - to start workers on local
8. open <http://localhost:3000>

### Documentation
- run the project and open `http://localhost:3000/docs`

## Available commands
- `./bin/clean` - removes generated files
- `./bin/compile` - runs Babel transpilation
- `./bin/coverage` - generates Istanbul coverage
- `./bin/debug` - runs code in debug mode
- `./bin/infrastructure-restart` - restarts all project services
- `./bin/infrastructure-start` - starts all project services
- `./bin/infrastructure-stop` - stops all project services
- `./bin/lint` - runs ESlint
- `./bin/lint-fix` - fix ESlint warnings
- `./bin/logs` - read current production app logs or `./bin/logs development` to read development logs
- `./bin/migrate-db` - runs sequelize database migrations (dev database)
- `./bin/migrate-test-db` - the same as above for test database
- `./bin/reset-db` - resets database into initial state (reverts all migrations, seeds the database and migrates to the latest version)
- `./bin/reset-test-db` - the same as above for test database
- `./bin/run` - runs the API server
- `./bin/run-worker` - runs the worker server
- `./bin/test` - runs Mocha tests
- `./bin/watch` - runs server in the watch mode (autorestarts when change is made)
- `./bin/watch-worker` - runs worker in the watch mode (autorestarts when change is made)
