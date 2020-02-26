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
// Add fontawesome icons later
const TEMP_SELF = {
    name: "Cathleen Carbonell-Ballar",
    profileImg: "*** INSERT URL FROM IMAGES DIR HERE ***",
    gitHubUsername: "catcarbonell",
    personalUrl: "http://catcarbn.com",
    gitHubUrl: "http://github.com/catcarbonell",
    currentCity: "Vallejo, CA",
    socialMedia:  [
    {type: "Twitter", handle: "@catcarbn", url: "http://twitter.com/catcarbn"},
    {type: "Instagram", handle: "@catcarbn", url: "http://instagram.com/catcarbn"},
    {type:"LinkedIn", handle: "/in/catcarbonell", url: "http://linkedin.com/in/catcarbonell"},
    {type: "Facebook", handle: "/catcarbonell", url: "http://facebook.com/catcarbonell"}
    ]
}
//console.log(TEMP_SELF);

 /**********
 * ROUTES *
 **********/
// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`

app.get('/profile', (req, res) => {
    res.json(TEMP_SELF);
  });

// *** PROJECTS ROUTES *** //
app.get('/projects', (req, res) => {
    // something goes here??
    console.log("Projects go here");
});

app.post('/projects', (req, res)=>{
    console.log("Projects go here");
});

app.put('/projects:id', (req, res)=> {
    console.log("Individual project update");
});

app.delete('/projects:id', (req, res) => {
    console.log("Delete project")
});


  // *** PORTFOLIO PROJECTS *** //

 /**********
 * HTML Endpoints *
 **********/
// app.get('/', function homepage(req, res){
//     res.sendFile('/views/index.html', {root: __dirname});
// });


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

            // ** PORTFOLIO ** //
            {method: "GET",
            path: "/api/portfolio",
            description: "My projects done so far"},
            //   RECOMMENDED: projects that you have built for this class
            // _id, name, description, githubRepoUrl, deployedUrl, screenshot

            {method: "POST",
            path: "/api/projects",
            description: "Post more projects!"
            },

            {method: "PUT",
            path: "/api/projects/:id",
            description: "Edit a project"},

            {method: "DELETE",
            path: "/api/projects/:id",
            description: "Delete a project"},

            // ** STICKER GALLERY ** //
            {method: "GET",
            path: "/api/store",
            description: "A gallery of all available store to purchase from me!"
            },

            {method: "POST",
            path: "/api/store",
            description: "Post more store!"
            },

            {method: "PUT",
            path: "/api/store/:id",
            description: "Edit a sticker"},

            {method: "DELETE",
            path: "/api/store/:id",
            description: "Delete a sticker"}
        ]
    })
});


/**********
 * SERVER *
 **********/
app.listen(PORT, () => console.log(`Express server is up and running on http://localhost:${PORT}`));