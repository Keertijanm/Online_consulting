const Meeting = require("google-meet-api").meet;

Meeting({
  clientId:
    ".apps.googleusercontent.com",
  clientSecret: "",
  refreshToken: "",
  date: "2023-04-01",
    time: "11:59",
  summary: "summary",
  location: "location",
  description: "description",
}).then(function (result) {
  console.log(result); //result is the final link
}).catch(err=>console.log(err));
