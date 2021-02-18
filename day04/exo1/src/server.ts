import express from 'express';
import {
	ReasonPhrases,
	StatusCodes,
	getReasonPhrase,
	getStatusCode,
} from 'http-status-codes';

let server = express()

server.get('/hello', function (req, res) {
    if (process.env["HELLO_MESSAGE"] == null) {
      res.status(400).send("Bad Request");
    }
    res.send(process.env["HELLO_MESSAGE"]);
  })

  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  server.use(bodyParser.json());
  server.use(cookieParser());

  server.get('/repeat-my-query', function (req, res) {
    let rec = req.query.message;
    if (rec === null) {
      res.status(400).send("Bad Request");
    } else {
      res.send(rec);
    }
  })

  server.get('/repeat-my-query/:message', function (req, res) {
    let rec = req.params.message;
    res.send(rec);
  })
  
  server.post('/repeat-my-body', function (req, res) {
    console.log(req.body);
    if(req.body == null) {
      res.status(400).send("Bad Request");
    }
    res.send(req.body);
    console.log("recieved");
  })

  server.get('/repeat-my-header', function (req, res) {
    if(req.header == null) {
      res.status(400).send("Bad Request");
    }
    res.send(req.header('message'));
    console.log(req.header('message'));
  })

  server.get('/repeat-my-cookie', function (req, res) {
    if(req.header == null) {
      res.status(400).send("Bad Request");
    }
    res.send(req.cookies["Message"]);
    console.log(req.header);
  })

  server.get('/health', function (req, res) {
    res
    .status(StatusCodes.OK)
    .send(ReasonPhrases.OK);
  })

  interface queries {
      key: string;
      value: string | number;
  }

  /*server.get('/repeat-my-query', function (req, res) {
    
    let rec = req.query.message;
    if (rec === null) {
      res.status(400).send("Bad Request");
    }
    const queriez: Array<queries> =

  }*/

server.listen(8080)