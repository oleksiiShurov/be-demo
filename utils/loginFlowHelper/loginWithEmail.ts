import {authFlowObject, wrongAuthFlowObject} from "../../business_objects/authFlowObject";

const request = require('supertest');
const config = require('../../config/envConfig.ts');
const testEnv2 = config.testEnv;
let body = new authFlowObject();
let wrongBody = new wrongAuthFlowObject();



export async function loginByEmail( isPassed: boolean
)
{
    if (isPassed) {
        const authRequest = await request(testEnv2)
            .post("/auth/login")
            .send(body);
        const token_resp = authRequest.body;
        const {token} = token_resp;
        return {token};
    }
    const authRequest = await request(testEnv2)
        .post("/auth/login")
        .send(wrongBody);
    const token_resp = authRequest.body;
    const {code,message} = token_resp;
    return {code,message};


}