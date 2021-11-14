import {google} from 'googleapis';
import {getArgs, makeOAuth2Client} from './gmailData';

let base64 = require('js-base64').Base64;

async function makeGmailClient() {
    const {clientId, clientSecret, refreshToken} = await getArgs();
    const oauth2Client = makeOAuth2Client({clientId, clientSecret});
    oauth2Client.setCredentials({
        refresh_token: refreshToken,
    });

    const gmailClient = google.gmail({
        version: 'v1',
        auth: oauth2Client,
    });
    return gmailClient;
}


export async function getLastEmailBody() {
    const gmailClient = await makeGmailClient();


    const {data: list, status} = await gmailClient.users.messages.list({userId: 'me'});
    let array2 = list.messages;
    // @ts-ignore
    const {id, threadId} = array2?.[0];


    const {data: test} = await gmailClient.users.messages.get({userId: 'me', id: id, format: 'full'});
    // @ts-ignore

    let bodyData = test.payload.parts[0].body.data;

    // @ts-ignore
    const res = base64.decode(bodyData.replace(/-/g, '+').replace(/_/g, '/')).toString();
    let regExpLink = new RegExp ('\\[ ACTIVATE NOW ](http|ftp|https):\\/\\/([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])');
    let activationLink = res.substring(426, 528);



    if (status === 200) {

    } else {
        console.log('there was an issue...', status);
    }

    return activationLink;
}


