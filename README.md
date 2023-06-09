# Whoami Microservice

![Banner](https://github.com/z-bj/Whoami-Microservice/blob/master/Banner.jpg)



![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black) [![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/) [![Express.js](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)](https://expressjs.com/) ![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white)  ![JSON](https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white)

Whoami Microservice is a request header Parser that extracts and returns a JSON object containing the IP address, language, and software keys from the request header.

This project is my solution for the APIs and Microservices Projects - Request Header Parser Microservice, which is part of the APIs and Microservices Certification by freeCodeCamp.

## Features

-   Parses request headers to extract IP address, language, and software information.
-   Returns a JSON object with IP address, language, and software information.
-   Provides a simple solution for implementing a request header parser microservice.

## Requirements

To meet the requirements of the project, the microservice should:

-   Return a JSON object with the IP address in the ipaddress key when the endpoint /api/whoami is accessed.
-   Return a JSON object with the preferred language in the language key when the endpoint /api/whoami is accessed.
-   Return a JSON object with the software in the software key when the endpoint /api/whoami is accessed.

## Core

``` javascript

app.get("/api/whoami", (req, res) => {
  res.json({
    ipaddress: req.ip, // The IP address of the client making the request
    language: req.headers["accept-language"], // The language accepted by the client
    software: req.headers["user-agent"], // The client's user agent information
  });
});

```

## Installation

To install and run the project:

1.  Install dependencies using the following command:
    

    
    ``` bash
    
    npm install
    
    ```
    
2.  Start the server using the following command:
    

    
    ``` bash

    node index.js

    ```
    
## License

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/%5Busername%5D/%5Brepo%5D/blob/main/LICENSE)


 _Thank you for checking it out!_

