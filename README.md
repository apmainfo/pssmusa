# PSSM-USA

## Pyramid Spiritual Societies Moment, USA

Start Instructions

npm install

On PowerShell/gitbash, Run the following command:
$env:NODE_OPTIONS = "--openssl-legacy-provider"

npm start

it will open on localhost:3000

To Update pages in the front page:

1. Update the image in the src/images directory:
2. Go to src/ProgramDetails.js and add the following details in the list.
   -> Online Programs
   {
   id: 1, // id should be unique, could be a sequence number from previous list
   title: "CHANGE YOUR MIND AND CHANGE YOUR LIFE", // Title of the program
   date: "Dates: Dec 12th to Jan 12th ",  
    time: "5.30 am EST",
   img: require("./images/flyer1.jpeg"), //path of the image from the /src/image/<filename>.jpg
   zoom_link:
   "https://us02web.zoom.us/j/83299568390?pwd=SUJOZWsyUGE3ei9naEUvMTJUdHEwdz09",
   zoom_meeting_id: "832 9956 8390",
   zoom_passcode: "801942",
   youtube_link: "https://youtube.com/live/f1P5AepH3no?feature=share",
   },
   -> In Person Programs
   {
   id: 1, // id should be unique, could be a sequence number from previous list
   title: "CHANGE YOUR MIND AND CHANGE YOUR LIFE", // Title of the program
   date: "Dates: Dec 12th to Jan 12th ",  
    time: "5.30 am EST",
   img: require("./images/flyer1.jpeg"), //path of the image from the /src/image/<filename>.jpg
   registration_link:
   "<registration_link>",
   Live_on: "https://youtube.com/@PMCUSA",
   },

3. Save the file
