const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const VoiceResponse = twilio.twiml.VoiceResponse;

const config = require('../config');

// POST /calls/connect
router.post('/connect', twilio.webhook({validate: false}), function(req, res, next) {
  var phoneNumber = '+51 990 604 285';
  var callerId = config.twilioPhoneNumber;
  var twiml = new VoiceResponse();

  twiml.say('Hello welcome to this app for B C P. Have fun!')

  var dial = twiml.dial({callerId : callerId});
  if (phoneNumber) {
    dial.number({}, phoneNumber);
  } else {
    dial.client({}, "support_agent");
  }

  res.send(twiml.toString());
});

module.exports = router;
