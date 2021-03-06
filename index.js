'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/', function(req, res) {
     console.log("JSON Data: " + req);
  
 //   var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    
    
    if(req.body.result.metadata.intentName === "Play-Intent"){
        return res.json({
            speech: "Ok Playing the Video",
            displayText: "Ok Playing the Video",
            source: 'webhook-echo-sample'
        });    
    }else if(req.body.result.metadata.intentName === "Stop-Intent"){
        return res.json({
            speech: "Ok Stoping the Video",
            displayText: "Ok Stoping the Video",
            source: 'webhook-echo-sample'
        });    
    }else{
        return res.json({
            speech: "Sorry I couldn't get it" ,
            displayText: "Sorry I couldn't get it",
            source: 'webhook-echo-sample'
    });
    }

	
});

restService.post('/slack-test', function(req, res) {

    var slack_message = {
        "text": "Details of JIRA board for Browse and Commerce",
        "attachments": [{
            "title": "JIRA Board",
            "title_link": "http://www.google.com",
            "color": "#36a64f",

            "fields": [{
                "title": "Epic Count",
                "value": "50",
                "short": "false"
            }, {
                "title": "Story Count",
                "value": "40",
                "short": "false"
            }],

            "thumb_url": "https://stiltsoft.com/blog/wp-content/uploads/2016/01/5.jira_.png"
        }, {
            "title": "Story status count",
            "title_link": "http://www.google.com",
            "color": "#f49e42",

            "fields": [{
                "title": "Not started",
                "value": "50",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }, {
                "title": "Development",
                "value": "40",
                "short": "false"
            }]
        }]
    }
    return res.json({
        speech: "speech",
        displayText: "speech",
        source: 'webhook-echo-sample',
        data: {
            "slack": slack_message
        }
    });
});

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
