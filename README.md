# BE-DEMO
### Local setup

#### Prerequisites:
- Node.js 12.0+
- Yarn

#### Install the dependencies
```console
$ yarn install
```

#### Run test
```console
$ yarn test
```

### Structure

#### Business objects.jsonList:
List of jsons for API contracts

#### Business objects.querryResponse:
Const list of response texts

#### Business objects.authFlowObject.ts:
Object to parse .json files to variables 

#### DB connector:
List of db connector functions (Prisma is used)

#### k6 load tool folder:
To launch
```console
$ k6 run script.ts
```

#### tests:
Folder with tests

#### Utils.connectorHelper.gmailIntegration
Gmail integration helper

#### Utils.generator
List of generators like: email,uuid, etc

#### Utils.loginFlowHelper
Functions and classes to define behaviour of loginFlow like sending requests and parsing responses
