import * as data from './jsonList/authFlowList.json';
import * as wrongData from './jsonList/wrongAuthFlowList.json';



export class authFlowObject  {

    email: string;
    password: string;

    get bodyArray(): any {
        return [ this.email, this.password
        ]
    }


    constructor() {

        this.email = data.email;
        this.password = data.password;
    }

}

Object.assign(new authFlowObject(), data);

export class wrongAuthFlowObject  {

    email: string;
    password: string;

    get bodyArray(): any {
        return [ this.email, this.password
        ]
    }


    constructor() {

        this.email = wrongData.email;
        this.password = wrongData.password;
    }

}

Object.assign(new wrongAuthFlowObject(), data);



