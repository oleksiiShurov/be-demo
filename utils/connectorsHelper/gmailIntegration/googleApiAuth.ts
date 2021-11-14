import { getArgs, makeOAuth2Client } from './gmailData';

async function getToken() {
    const { clientId, clientSecret, code } = await getArgs();
    const oauth2Client = makeOAuth2Client({ clientId, clientSecret });

    if (code) await getRefreshToken(code);
    else getAuthUrl();

    async function getAuthUrl() {
        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',

            scope: [
                'https://mail.google.com/',

            ],
        });

        console.log(`Go to this URL to acquire a refresh token:\n\n${url}\n`);
    }

    async function getRefreshToken(code: string) {
        const token = await oauth2Client.getToken(code);
        console.log(token);
    }
}

getToken();