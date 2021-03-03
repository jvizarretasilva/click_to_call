module.exports = {
  accountSid: process.env.TWILIO_ACCOUNT_SID || 'AC5567e1b0a447413900b650d16bb18e53',
  appSid: process.env.TWILIO_APP_SID || 'AP45ebdd3e1002c4f91654d3ba4958c9cb',
  twilioPhoneNumber: process.env.TWILIO_PHONE_NUMBER || '+19724306129' ,
  apiKey: process.env.TWILIO_API_KEY || 'SK0411da3acf81ddc05783e374bdf990a4' ,
  apiSecret: process.env.TWILIO_API_SECRET || 'uRxk9xLs6lQGuyOyHtZCnkb6h63mtVVT',
  port: process.env.PORT || 3000,
};