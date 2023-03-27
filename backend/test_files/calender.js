const { google } = require("googleapis");
// const blogger = google.blogger({
//   version: 'v3',
//   auth: '' // specify your API key here
// });

const calender = google.calendar({
  version: "v3",
  auth: "", // specify your API key here
});

async function execute() {
  const attendeesEmails = [

  ];
  const event = {
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

  const response = await calender.events.insert({
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });

  const {
    config: {
      data: { summary, location, start, end, attendees },
    },
    data: { conferenceData },
  } = response;

  // Get the Google Meet conference URL in order to join the call
  const { uri } = conferenceData.entryPoints[0];
  console.log(
    `📅 Calendar event created: ${summary} at ${location}, from ${
      start.dateTime
    } to ${end.dateTime}, attendees:\n${attendees
      .map((person) => `🧍 ${person.email}`)
      .join("\n")} \n 💻 Join conference call link: ${uri}`
  );
}

// const params = {
//   blogId: '3213900'
// };

// async function main(params) {
//   const res = await blogger.blogs.get({blogId: params.blogId}).catch(err => console.log(err));
//   console.log(`${res.data.name} has ${res.data.posts.totalItems} posts! The blog url is ${res.data.url}`)
// };

// async function main() {
//   var event = {
//     summary: "My first event!",
//     location: "Hyderabad,India",
//     description: "First event with nodeJS!",
//     start: {
//       dateTime: "2023-04-12T09:00:00-07:00",
//       timeZone: "Asia/Dhaka",
//     },
//     end: {
//       dateTime: "2023-04-14T17:00:00-07:00",
//       timeZone: "Asia/Dhaka",
//     },
//     attendees: [],
//     reminders: {
//       useDefault: false,
//       overrides: [
//         { method: "email", minutes: 24 * 60 },
//         { method: "popup", minutes: 10 },
//       ],
//     },
//   };
//   //   const auth = new google.auth.GoogleAuth({
//   //     keyFile: "<full-path-of-JSON-file>",
//   //     scopes: "https://www.googleapis.com/auth/calendar",
//   //   });
//   //   auth.getClient().then((a) => {
//     calender.events.insert(
//     {
//       resource: event,
//     },
//     function (err, event) {
//       if (err) {
//         console.log(
//           "There was an error contacting the Calendar service: " + err
//         );
//         return;
//       }
//       console.log("Event created: %s", event.data);
//       res.jsonp("Event successfully created!");
//     }
//   );
//   //   });
// }

execute().catch((err) => console.log(err));
