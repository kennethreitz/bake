[![Build Status](https://dev.azure.com/ms/azure-devops-node-api/_apis/build/status/Microsoft.azure-devops-node-api?branchName=master)](https://dev.azure.com/ms/azure-devops-node-api/_build/latest?definitionId=89&branchName=master)

# Azure DevOps Client for Node.js

Integrate with Azure DevOps from your Node.js apps.

### Install the library
```
npm install azure-devops-node-api --save
```

## News

vso-node-api has been renamed and released as azure-devops-node-api

## Get started

### Samples

See [samples](./samples) for complete coding examples

### Install the library
```
npm install azure-devops-node-api --save
```

![Intellisense](docs/intellisense.png)  

### Create a connection
```javascript
import * as azdev from "azure-devops-node-api";

// your collection url
let orgUrl = "https://dev.azure.com/yourorgname";

// ideally from config
let token: string = "cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha"; 

let authHandler = azdev.getPersonalAccessTokenHandler(token); 
let connection = new azdev.WebApi(orgUrl, authHandler);    
```

### Get an instance of a client

```javascript
import * as ba from "azure-devops-node-api/BuildApi";

let build: ba.IBuildApi = await connection.getBuildApi();
```

#### Available clients

These clients are available:

* Build
* Core
* Dashboard
* ExtensionManagement
* FeatureManagement
* FileContainer
* Git
* Locations
* Notification
* Policy
* Profile
* ProjectAnalysis
* Release
* SecurityRoles
* TaskAgent
* Task
* Test
* Tfvc
* Wiki
* Work
* WorkItemTracking
* WorkItemTrackingProcess
* WorkItemTrackingProcessDefinitions

### Use the client
 
Coding is easy using linear coding with async/await in TypeScript

```javascript
import * as bi from "azure-devops-node-api/interfaces/BuildInterfaces";

async function run() {
    let project: string = "myProject";
    let defs: bi.DefinitionReference[] = await build.getDefinitions(project);

    defs.forEach((defRef: bi.DefinitionReference) => {
        console.log(`${defRef.name} (${defRef.id})`);
    });    
}

run();
```

## APIs

To see what APIs are available, see the appropriate client interface. For example, [GitApi.ts](https://github.com/Microsoft/azure-devops-node-api/blob/master/api/GitApi.ts)

More detailed information for the endpoints of each API can be found at https://docs.microsoft.com/en-us/rest/api/vsts/?view=vsts-rest-4.1

## Running Samples

Pre-reqs: [Node >= 4.4.7 LTS](https://nodejs.org) and [typescript (tsc) >= 1.8](https://www.npmjs.com/package/typescript)  

Run `npm install` first

Set environment variables using set or export:

```bash
API_URL=https://dev.azure.com/yourorgname

// use your token
API_TOKEN=cbdeb34vzyuk5l4gxc4qfczn3lko3avfkfqyb47etahq6axpcqha  

API_PROJECT=myProject  
```

Run samples:  

```bash
$ npm run samples
```

Run a specific sample:

```bash
$ npm run samples -- http
```

## API and TFS Mapping

Below you'll find a quick mapping of azure-devops-node-api versions and their corresponding TFS releases. All API versions will work on the server version mentioned as well as later versions.

 |**TFS Version** | **Node API VERSION**|
 |-------------------|------------------|
 |TFS 2018 Update 2  |  6.6.2|
 |TFS 2017 Update 2  |  6.2.8-preview|
 |TFS 2017 Update 1  |  5.1.2|
 |TFS 2017 RTW       |  5.0.0|
 |TFS 2015 Update 2  |  0.7.0|

## Contributing

To contribute to this repository, see the [contribution guide](./CONTRIBUTING.md)

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
