const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());

const heroesService = "http://localhost:3000";

const threats = [
    {
        id: 1,
        displayName: 'Pisa tower is about to collapse.',
        necessaryPowers: ['flying'],
        assignedHero: 0
    },
    {
        id: 2,
        displayName: 'Engineer is going to clean up server-room.',
        necessaryPowers: ['teleporting'],
        assignedHero: 0
    },
    {
        id: 3,
        displayName: 'John will not understand the joke',
        necessaryPowers: ['clairvoyance'],
        assignedHero: 0
    }
  ];

  app.get("/threats", (req, res)=>{
      console.log("returning threats list");
      res.send(threats)
  })

  app.listen(PORT, ()=>{
      console.log("threats listening")
  })