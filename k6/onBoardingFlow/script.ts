import http from "k6/http";
const config = require('../../config/envConfig.ts');
const testEnv2 = config.testEnv;
//import * as loginData from "../../business_objects/jsonList/authFlowList.json";


export default function () {
    let headers = {
        'Content-Type': 'application/json',
    };
    let data = {email: "test",
    password: "test"
    };

    let res = http.post(testEnv2 + "/auth/login", JSON.stringify({data: data}), {headers: headers});
    console.log(JSON.stringify(res.body));


}

