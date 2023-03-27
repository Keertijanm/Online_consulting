// const { addWeeks } = require('date-fns')
const { google } = require("googleapis");
const credentials = require("./_credentials.json");

const scopes = ["https://www.googleapis.com/auth/calendar"];

const client = google.auth.getClient({
  credentials,
  scopes,
});

client.subject = "<SERVICE_ACCOUNT_EMAIL>";

const calendar = google.calendar({ version: "v3", auth: client });
const attendeesEmails = [

];
const eventData = {
  summary: "Coding class",
  location: "Virtual / Google Meet",
  description: "Learn how to code with Javascript",
  start: {
    dateTime: "2023-20-18T09:00:00-07:00",
    timeZone: "America/Los_Angeles",
  },
  end: {
    dateTime: "2023-20-18T09:30:00-07:00",
    timeZone: "America/Los_Angeles",
  },
  attendees: attendeesEmails,
  reminders: {
    useDefault: false,
    overrides: [
      { method: "email", minutes: 24 * 60 },
      { method: "popup", minutes: 10 },
    ],
  },
  conferenceData: {
    createRequest: {
      conferenceSolutionKey: {
        type: "hangoutsMeet",
      },
      requestId: "coding-calendar-demo",
    },
  },
};
calendar.events.insert(
  {
    calendarId: "primary",
    resource: eventData,
  },
  (err, event) => {
    if (err) console.log("Error", err);
    console.log(event);
  }
);
