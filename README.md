# Punchlock

The main project of the UeK: 223 (Multi-User-Applikationen objektorientiert realisieren).


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [OpenJDK 11](https://openjdk.java.net/projects/jdk/11/)
- [NodeJS](https://nodejs.org/en/)

### Installing

1. Go to the /server directory.
2. Run `./gradlew bootRun` to start the backend of the application.
3. Go to the /web directory.
4. Run `npm install` to load all needed dependencies.
5. When the previous step is finished, run `npm run start` to start the frontend of the application.
6. Open your browser on `http://localhost:4200`

To access the admin page, go to /admin.
Per default, the admin credentials are: username: "admin", password: "toor".

## Running the tests

Follow these steps to run all available server tests.

1. Go to the /server directory.
2. Run `./gradlew test`

## Built With

* [Spring](https://spring.io/) - The Java application framework used
* [Gradle](https://gradle.org/) - Dependency Management & Build Tool
* [Angular 8](https://angular.io/) - The web application framework used