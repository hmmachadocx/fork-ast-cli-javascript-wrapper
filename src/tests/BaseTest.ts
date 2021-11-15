export class BaseTest {
    baseUri: string = "";
    clientId: string = "";
    clientSecret: string = "";
    apiKey: string = "";
    pathToExecutable: string;
    tenant: string;

    constructor() {
        this.baseUri = process.env["CX_BASE_URI"];
        this.clientId = process.env["CX_CLIENT_ID"];
        this.clientSecret = process.env["CX_CLIENT_SECRET"];
        this.tenant = process.env["CX_TENANT"];
        this.apiKey = process.env["CX_APIKEY"];
        if (process.env["PATH_TO_EXECUTABLE"] !== null && process.env["PATH_TO_EXECUTABLE"] !== undefined) {
            this.pathToExecutable = process.env["PATH_TO_EXECUTABLE"];
        }
    }
}