// API Endpoints
// Require necessities (express, bodyParser, etc)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4200;

app.use(bodyParser.json());

/************
 * DATABASE *
 ************/
// Setting up TEMP info


 /**********
 * ROUTES *
 **********/
// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

 /**********
 * HTML Endpoints *
 **********/


 /**********
 * JSON API ENDPOINTS *
 **********/
app.get('/api', (req, res) => {
    res.json({
        message: "Hello world! :B",
        documentationUrl: "https://github.com/catcarbonell/personal-api/README.md",
        baseURL: "http://catballar-api.herokuapp.com",
        endpoints: [
            {method: "GET",
            path: "/api",
            description: "Lists all available endpoints"
            },
            {method: "GET",
            path: "/api/profile",
            description: "All about moi"},

            {method: "POST",
            path: "/api/stickers",
            description: "A gallery of all available stickers to purchase from me!"
            }
        ]
    })
});


/**********
 * SERVER *
 **********/
app.listen(PORT, () => console.log(`Express server is up and running on http://localhost:${PORT}`));