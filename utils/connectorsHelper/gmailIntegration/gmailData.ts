import {google} from 'googleapis';
import yargs from 'yargs/yargs';

const {hideBin} = require('yargs/helpers');

export async function getArgs() {
    const argv = await Promise.resolve(yargs(hideBin(process.argv)).argv);
    const clientId = "";
    const clientSecret = "";
    const refreshToken = "";
    const code = argv.code as string | undefined;
    const test = argv.test as boolean;

    if (!clientId) throw new Error('No clientId ');
    console.log('clientId is valid');

    if (!clientSecret) throw new Error('No clientSecret');
    console.log('clientSecret is valid');

    if (code) console.log('code is valid');
    if (refreshToken) console.log('refreshToken is vallid');

    return {code, clientId, clientSecret, refreshToken, test};
}

export function makeOAuth2Client({
                                     clientId,
                                     clientSecret,
                                 }: {
    clientId: string;
    clientSecret: string;
}) {
    return new google.auth.OAuth2(
        /* YOUR_CLIENT_ID */ clientId,
        /* YOUR_CLIENT_SECRET */ clientSecret,
        /* YOUR_REDIRECT_URL */ 'http://localhost:8080'
    );
}