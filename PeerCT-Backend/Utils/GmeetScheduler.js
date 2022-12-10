const { google } = require('googleapis')

// Require oAuth2 from our google instance.
const { OAuth2 } = google.auth

// Create a new instance of oAuth and set our Client ID & Client Secret.
const oAuth2Client = new OAuth2(
    '255198830201-3hjbvkh7l4f6iugsdflo0qca65tbp83b.apps.googleusercontent.com',
    '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'
)

// Call the setCredentials method on our oAuth2Client instance and set our refresh token.
oAuth2Client.setCredentials({
    refresh_token: '1//04KWyBJMfo2gsCgYIARAAGAQSNwF-L9IrGb7emYrxENwC3VYW95r39mgaqTKZq5-5URwNq_gQRIHXiMs6U8BkJYr8xe_RpqKD9rU',
})

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })

const createSessions = async ({ dd, mm, yyyy, hr, min }, duration, tittle, {
    mail1, mail2
}) => {
    
    const attendeesEmails = [
        { 'email': mail1 },
        { 'email': mail2 }
    ];
    console.log(yyyy, dd, mm)
    const date = new Date(yyyy, mm, dd, hr, min);
    date.setHours(date.getHours() - 5);
    date.setMinutes(date.getMinutes() - 30);
    console.log(date)
    console.log(new Date())
    let endDate = new Date(date);
    endDate.setMinutes(endDate.getMinutes() + duration);
    const event = {
        summary: tittle,
        location: 'Virtual / Google Meet',
        description: "One to One Meet",
        start: {
            dateTime: date,
        },
        end: {
            dateTime: endDate,
        },
        attendees: attendeesEmails,
        reminders: {
            useDefault: false,
            overrides: [
                { method: 'email', 'minutes': 24 * 60 },
                { method: 'popup', 'minutes': 10 },
            ],
        },
        conferenceData: {
            createRequest: {
                conferenceSolutionKey: {
                    type: 'hangoutsMeet'
                },
                requestId: 'One to One mentor Session'
            }
        },
    };

    try {
        const response = await calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion: 1
        });
        const { config: { data: { summary, location, start, end, attendees } }, data: { conferenceData } } = response;
        const { uri } = conferenceData.entryPoints[0];
        return `📅 Calendar event created: ${summary} at ${location}, from ${start.dateTime} to ${end.dateTime}, attendees:\n${attendees.map(person => `🧍 ${person.email}`).join('\n')} \n 💻 Join conference call link: ${uri}`
    } catch (err) {
        console.log(err);
    }

}

module.exports = createSessions;