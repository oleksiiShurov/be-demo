import {loginByEmail} from "../../utils/loginFlowHelper/loginWithEmail";
import {getLastEmailBody} from "../../utils/connectorsHelper/gmailIntegration/googleMailData";
import {incorrectCreds} from "../../business_objects/querryResponses/commonRes";


describe("Post API", () => {
    it("Positive Auth API Request", async () => {
        let bearerToken = await loginByEmail(true);
        expect(bearerToken.token).not.toBe(null);
        console.log(bearerToken.token);
    });

    it("Negative Auth API Request", async () => {
        let bearerToken = await loginByEmail(false);
        expect(bearerToken.message).toBe(incorrectCreds);
        console.log(bearerToken.message);
        expect(bearerToken.code).toBe(401);
        console.log(bearerToken.code);
    });
    it("Email verification link", async () => {
        let emailBody = await getLastEmailBody();
        console.log(emailBody)


    });

});