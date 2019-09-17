"use strict";
/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const basem = require("./ClientApiBases");
const BuildInterfaces = require("./interfaces/BuildInterfaces");
class BuildApi extends basem.ClientApiBase {
    constructor(baseUrl, handlers, options) {
        super(baseUrl, handlers, 'node-Build-api', options);
    }
    /**
     * Associates an artifact with a build.
     *
     * @param {BuildInterfaces.BuildArtifact} artifact - The artifact.
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     */
    createArtifact(artifact, buildId, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, artifact, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a specific artifact for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} artifactName - The name of the artifact.
     * @param {string} project - Project ID or project name
     */
    getArtifact(buildId, artifactName, project) {
        return __awaiter(this, void 0, void 0, function* () {
            if (artifactName == null) {
                throw new TypeError('artifactName can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    artifactName: artifactName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a specific artifact for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} artifactName - The name of the artifact.
     * @param {string} project - Project ID or project name
     */
    getArtifactContentZip(buildId, artifactName, project) {
        return __awaiter(this, void 0, void 0, function* () {
            if (artifactName == null) {
                throw new TypeError('artifactName can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    artifactName: artifactName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/zip", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all artifacts for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     */
    getArtifacts(buildId, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a file from the build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} artifactName - The name of the artifact.
     * @param {string} fileId - The primary key for the file.
     * @param {string} fileName - The name that the file will be set to.
     * @param {string} project - Project ID or project name
     */
    getFile(buildId, artifactName, fileId, fileName, project) {
        return __awaiter(this, void 0, void 0, function* () {
            if (artifactName == null) {
                throw new TypeError('artifactName can not be null or undefined');
            }
            if (fileId == null) {
                throw new TypeError('fileId can not be null or undefined');
            }
            if (fileName == null) {
                throw new TypeError('fileName can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    artifactName: artifactName,
                    fileId: fileId,
                    fileName: fileName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "1db06c96-014e-44e1-ac91-90b2d4b3e984", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/octet-stream", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the list of attachments of a specific type that are associated with a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} type - The type of attachment.
     */
    getAttachments(project, buildId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    type: type
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "f2192269-89fa-4f94-baf6-8fb128c55159", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a specific attachment.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} timelineId - The ID of the timeline.
     * @param {string} recordId - The ID of the timeline record.
     * @param {string} type - The type of the attachment.
     * @param {string} name - The name of the attachment.
     */
    getAttachment(project, buildId, timelineId, recordId, type, name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    timelineId: timelineId,
                    recordId: recordId,
                    type: type,
                    name: name
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "af5122d3-3438-485e-a25a-2dbbfde84ee6", routeValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/octet-stream", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a badge that indicates the status of the most recent build for a definition.
     *
     * @param {string} project - The project ID or name.
     * @param {number} definitionId - The ID of the definition.
     * @param {string} branchName - The name of the branch.
     */
    getBadge(project, definitionId, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    branchName: branchName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "de6a4df8-22cd-44ee-af2d-39f6aa7a4261", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of branches for the given source code repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
     */
    listBranches(project, providerName, serviceEndpointId, repository) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "e05d4403-9b81-4244-8763-20fde28d1976", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a badge that indicates the status of the most recent build for the specified branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType - The repository type.
     * @param {string} repoId - The repository ID.
     * @param {string} branchName - The branch name.
     */
    getBuildBadge(project, repoType, repoId, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    repoType: repoType
                };
                let queryValues = {
                    repoId: repoId,
                    branchName: branchName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a badge that indicates the status of the most recent build for the specified branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} repoType - The repository type.
     * @param {string} repoId - The repository ID.
     * @param {string} branchName - The branch name.
     */
    getBuildBadgeData(project, repoType, repoId, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    repoType: repoType
                };
                let queryValues = {
                    repoId: repoId,
                    branchName: branchName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "21b3b9ce-fad5-4567-9ad0-80679794e003", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Deletes a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     */
    deleteBuild(buildId, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a build
     *
     * @param {number} buildId
     * @param {string} project - Project ID or project name
     * @param {string} propertyFilters
     */
    getBuild(buildId, project, propertyFilters) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    propertyFilters: propertyFilters,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} definitions - A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
     * @param {number[]} queues - A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
     * @param {string} buildNumber - If specified, filters to builds that match this build number. Append * to do a prefix search.
     * @param {Date} minTime - If specified, filters to builds that finished/started/queued after this date based on the queryOrder specified.
     * @param {Date} maxTime - If specified, filters to builds that finished/started/queued before this date based on the queryOrder specified.
     * @param {string} requestedFor - If specified, filters to builds requested for the specified user.
     * @param {BuildInterfaces.BuildReason} reasonFilter - If specified, filters to builds that match this reason.
     * @param {BuildInterfaces.BuildStatus} statusFilter - If specified, filters to builds that match this status.
     * @param {BuildInterfaces.BuildResult} resultFilter - If specified, filters to builds that match this result.
     * @param {string[]} tagFilters - A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
     * @param {string[]} properties - A comma-delimited list of properties to retrieve.
     * @param {number} top - The maximum number of builds to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
     * @param {number} maxBuildsPerDefinition - The maximum number of builds to return per definition.
     * @param {BuildInterfaces.QueryDeletedOption} deletedFilter - Indicates whether to exclude, include, or only return deleted builds.
     * @param {BuildInterfaces.BuildQueryOrder} queryOrder - The order in which builds should be returned.
     * @param {string} branchName - If specified, filters to builds that built branches that built this branch.
     * @param {number[]} buildIds - A comma-delimited list that specifies the IDs of builds to retrieve.
     * @param {string} repositoryId - If specified, filters to builds that built from this repository.
     * @param {string} repositoryType - If specified, filters to builds that built from repositories of this type.
     */
    getBuilds(project, definitions, queues, buildNumber, minTime, maxTime, requestedFor, reasonFilter, statusFilter, resultFilter, tagFilters, properties, top, continuationToken, maxBuildsPerDefinition, deletedFilter, queryOrder, branchName, buildIds, repositoryId, repositoryType) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    definitions: definitions && definitions.join(","),
                    queues: queues && queues.join(","),
                    buildNumber: buildNumber,
                    minTime: minTime,
                    maxTime: maxTime,
                    requestedFor: requestedFor,
                    reasonFilter: reasonFilter,
                    statusFilter: statusFilter,
                    resultFilter: resultFilter,
                    tagFilters: tagFilters && tagFilters.join(","),
                    properties: properties && properties.join(","),
                    '$top': top,
                    continuationToken: continuationToken,
                    maxBuildsPerDefinition: maxBuildsPerDefinition,
                    deletedFilter: deletedFilter,
                    queryOrder: queryOrder,
                    branchName: branchName,
                    buildIds: buildIds && buildIds.join(","),
                    repositoryId: repositoryId,
                    repositoryType: repositoryType,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Queues a build
     *
     * @param {BuildInterfaces.Build} build
     * @param {string} project - Project ID or project name
     * @param {boolean} ignoreWarnings
     * @param {string} checkInTicket
     * @param {number} sourceBuildId
     */
    queueBuild(build, project, ignoreWarnings, checkInTicket, sourceBuildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    ignoreWarnings: ignoreWarnings,
                    checkInTicket: checkInTicket,
                    sourceBuildId: sourceBuildId,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, build, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates a build.
     *
     * @param {BuildInterfaces.Build} build - The build.
     * @param {number} buildId - The ID of the build.
     * @param {string} project - Project ID or project name
     * @param {boolean} retry
     */
    updateBuild(build, buildId, project, retry) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    retry: retry,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, build, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates multiple builds.
     *
     * @param {BuildInterfaces.Build[]} builds - The builds to update.
     * @param {string} project - Project ID or project name
     */
    updateBuilds(builds, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.4", "build", "0cd358e1-9217-4d94-8269-1c1ee6f93dcf", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, builds, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the changes associated with a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} continuationToken
     * @param {number} top - The maximum number of changes to return
     * @param {boolean} includeSourceChange
     */
    getBuildChanges(project, buildId, continuationToken, top, includeSourceChange) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    continuationToken: continuationToken,
                    '$top': top,
                    includeSourceChange: includeSourceChange,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "54572c7b-bbd3-45d4-80dc-28be08941620", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Change, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the changes made to the repository between two given builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId - The ID of the first build.
     * @param {number} toBuildId - The ID of the last build.
     * @param {number} top - The maximum number of changes to return.
     */
    getChangesBetweenBuilds(project, fromBuildId, toBuildId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    fromBuildId: fromBuildId,
                    toBuildId: toBuildId,
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "f10f0ea5-18a1-43ec-a8fb-2042c7be9b43", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Change, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a controller
     *
     * @param {number} controllerId
     */
    getBuildController(controllerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    controllerId: controllerId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildController, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets controller, optionally filtered by name
     *
     * @param {string} name
     */
    getBuildControllers(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {};
                let queryValues = {
                    name: name,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "fcac1932-2ee1-437f-9b6f-7f696be858f6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildController, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Creates a new definition.
     *
     * @param {BuildInterfaces.BuildDefinition} definition - The definition.
     * @param {string} project - Project ID or project name
     * @param {number} definitionToCloneId
     * @param {number} definitionToCloneRevision
     */
    createDefinition(definition, project, definitionToCloneId, definitionToCloneRevision) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    definitionToCloneId: definitionToCloneId,
                    definitionToCloneRevision: definitionToCloneRevision,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, definition, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinition, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Deletes a definition and all associated builds.
     *
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     */
    deleteDefinition(definitionId, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a definition, optionally at a specific revision.
     *
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     * @param {number} revision - The revision number to retrieve. If this is not specified, the latest version will be returned.
     * @param {Date} minMetricsTime - If specified, indicates the date from which metrics should be included.
     * @param {string[]} propertyFilters - A comma-delimited list of properties to include in the results.
     * @param {boolean} includeLatestBuilds
     */
    getDefinition(definitionId, project, revision, minMetricsTime, propertyFilters, includeLatestBuilds) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    revision: revision,
                    minMetricsTime: minMetricsTime,
                    propertyFilters: propertyFilters && propertyFilters.join(","),
                    includeLatestBuilds: includeLatestBuilds,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinition, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of definitions.
     *
     * @param {string} project - Project ID or project name
     * @param {string} name - If specified, filters to definitions whose names match this pattern.
     * @param {string} repositoryId - A repository ID. If specified, filters to definitions that use this repository.
     * @param {string} repositoryType - If specified, filters to definitions that have a repository of this type.
     * @param {BuildInterfaces.DefinitionQueryOrder} queryOrder - Indicates the order in which definitions should be returned.
     * @param {number} top - The maximum number of definitions to return.
     * @param {string} continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of definitions.
     * @param {Date} minMetricsTime - If specified, indicates the date from which metrics should be included.
     * @param {number[]} definitionIds - A comma-delimited list that specifies the IDs of definitions to retrieve.
     * @param {string} path - If specified, filters to definitions under this folder.
     * @param {Date} builtAfter - If specified, filters to definitions that have builds after this date.
     * @param {Date} notBuiltAfter - If specified, filters to definitions that do not have builds after this date.
     * @param {boolean} includeAllProperties - Indicates whether the full definitions should be returned. By default, shallow representations of the definitions are returned.
     * @param {boolean} includeLatestBuilds - Indicates whether to return the latest and latest completed builds for this definition.
     * @param {string} taskIdFilter - If specified, filters to definitions that use the specified task.
     * @param {number} processType - If specified, filters to definitions with the given process type.
     * @param {string} yamlFilename - If specified, filters to YAML definitions that match the given filename.
     */
    getDefinitions(project, name, repositoryId, repositoryType, queryOrder, top, continuationToken, minMetricsTime, definitionIds, path, builtAfter, notBuiltAfter, includeAllProperties, includeLatestBuilds, taskIdFilter, processType, yamlFilename) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    name: name,
                    repositoryId: repositoryId,
                    repositoryType: repositoryType,
                    queryOrder: queryOrder,
                    '$top': top,
                    continuationToken: continuationToken,
                    minMetricsTime: minMetricsTime,
                    definitionIds: definitionIds && definitionIds.join(","),
                    path: path,
                    builtAfter: builtAfter,
                    notBuiltAfter: notBuiltAfter,
                    includeAllProperties: includeAllProperties,
                    includeLatestBuilds: includeLatestBuilds,
                    taskIdFilter: taskIdFilter,
                    processType: processType,
                    yamlFilename: yamlFilename,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinitionReference, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Restores a deleted definition
     *
     * @param {number} definitionId - The identifier of the definition to restore.
     * @param {boolean} deleted - When false, restores a deleted definition.
     * @param {string} project - Project ID or project name
     */
    restoreDefinition(definitionId, deleted, project) {
        return __awaiter(this, void 0, void 0, function* () {
            if (deleted == null) {
                throw new TypeError('deleted can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    deleted: deleted,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, null, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinition, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates an existing definition.
     *
     * @param {BuildInterfaces.BuildDefinition} definition - The new version of the defintion.
     * @param {number} definitionId - The ID of the definition.
     * @param {string} project - Project ID or project name
     * @param {number} secretsSourceDefinitionId
     * @param {number} secretsSourceDefinitionRevision
     */
    updateDefinition(definition, definitionId, project, secretsSourceDefinitionId, secretsSourceDefinitionRevision) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    secretsSourceDefinitionId: secretsSourceDefinitionId,
                    secretsSourceDefinitionRevision: secretsSourceDefinitionRevision,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.6", "build", "dbeaf647-6167-421a-bda9-c9327b25e2e6", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.replace(url, definition, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinition, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the contents of a file in the given source code repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
     * @param {string} commitOrBranch - The identifier of the commit or branch from which a file's contents are retrieved.
     * @param {string} path - The path to the file to retrieve, relative to the root of the repository.
     */
    getFileContents(project, providerName, serviceEndpointId, repository, commitOrBranch, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                    commitOrBranch: commitOrBranch,
                    path: path,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "29d12225-b1d9-425f-b668-6c594a981313", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("text/plain", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Creates a new folder.
     *
     * @param {BuildInterfaces.Folder} folder - The folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path of the folder.
     */
    createFolder(folder, project, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    path: path
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.replace(url, folder, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Folder, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Deletes a definition folder. Definitions and their corresponding builds will also be deleted.
     *
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path to the folder.
     */
    deleteFolder(project, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    path: path
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of build definition folders.
     *
     * @param {string} project - Project ID or project name
     * @param {string} path - The path to start with.
     * @param {BuildInterfaces.FolderQueryOrder} queryOrder - The order in which folders should be returned.
     */
    getFolders(project, path, queryOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    path: path
                };
                let queryValues = {
                    queryOrder: queryOrder,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Folder, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates an existing folder at given  existing path
     *
     * @param {BuildInterfaces.Folder} folder - The new version of the folder.
     * @param {string} project - Project ID or project name
     * @param {string} path - The full path to the folder.
     */
    updateFolder(folder, project, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    path: path
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "a906531b-d2da-4f55-bda7-f3e676cc50d9", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, folder, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Folder, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the latest build for a definition, optionally scoped to a specific branch.
     *
     * @param {string} project - Project ID or project name
     * @param {string} definition - definition name with optional leading folder path, or the definition id
     * @param {string} branchName - optional parameter that indicates the specific branch to use
     */
    getLatestBuild(project, definition, branchName) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definition: definition
                };
                let queryValues = {
                    branchName: branchName,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "54481611-01f4-47f3-998f-160da0f0c229", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Build, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets an individual log file for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} logId - The ID of the log file.
     * @param {number} startLine - The start line.
     * @param {number} endLine - The end line.
     */
    getBuildLog(project, buildId, logId, startLine, endLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    logId: logId
                };
                let queryValues = {
                    startLine: startLine,
                    endLine: endLine,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("text/plain", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets an individual log file for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} logId - The ID of the log file.
     * @param {number} startLine - The start line.
     * @param {number} endLine - The end line.
     */
    getBuildLogLines(project, buildId, logId, startLine, endLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    logId: logId
                };
                let queryValues = {
                    startLine: startLine,
                    endLine: endLine,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the logs for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     */
    getBuildLogs(project, buildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildLog, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the logs for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     */
    getBuildLogsZip(project, buildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/zip", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets an individual log file for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} logId - The ID of the log file.
     * @param {number} startLine - The start line.
     * @param {number} endLine - The end line.
     */
    getBuildLogZip(project, buildId, logId, startLine, endLine) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    logId: logId
                };
                let queryValues = {
                    startLine: startLine,
                    endLine: endLine,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "35a80daf-7f30-45fc-86e8-6b813d9c90df", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/zip", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets build metrics for a project.
     *
     * @param {string} project - Project ID or project name
     * @param {string} metricAggregationType - The aggregation type to use (hourly, daily).
     * @param {Date} minMetricsTime - The date from which to calculate metrics.
     */
    getProjectMetrics(project, metricAggregationType, minMetricsTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    metricAggregationType: metricAggregationType
                };
                let queryValues = {
                    minMetricsTime: minMetricsTime,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "7433fae7-a6bc-41dc-a6e2-eef9005ce41a", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildMetric, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets build metrics for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {Date} minMetricsTime - The date from which to calculate metrics.
     */
    getDefinitionMetrics(project, definitionId, minMetricsTime) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    minMetricsTime: minMetricsTime,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "d973b939-0ce0-4fec-91d8-da3940fa1827", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildMetric, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all build definition options supported by the system.
     *
     * @param {string} project - Project ID or project name
     */
    getBuildOptionDefinitions(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "591cb5a4-2d46-4f3a-a697-5cd42b6bd332", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildOptionDefinition, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the contents of a directory in the given source code repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get branches. Can only be omitted for providers that do not support multiple repositories.
     * @param {string} commitOrBranch - The identifier of the commit or branch from which a file's contents are retrieved.
     * @param {string} path - The path contents to list, relative to the root of the repository.
     */
    getPathContents(project, providerName, serviceEndpointId, repository, commitOrBranch, path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                    commitOrBranch: commitOrBranch,
                    path: path,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "7944d6fb-df01-4709-920a-7a189aa34037", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets properties for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string[]} filter - A comma-delimited list of properties. If specified, filters to these specific properties.
     */
    getBuildProperties(project, buildId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    filter: filter && filter.join(","),
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "0a6312e9-0627-49b7-8083-7d74a64849c9", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates properties for a build.
     *
     * @param {VSSInterfaces.JsonPatchDocument} document - A json-patch document describing the properties to update.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     */
    updateBuildProperties(customHeaders, document, project, buildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                customHeaders = customHeaders || {};
                customHeaders["Content-Type"] = "application/json-patch+json";
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "0a6312e9-0627-49b7-8083-7d74a64849c9", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    options.additionalHeaders = customHeaders;
                    let res;
                    res = yield this.rest.update(url, document, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets properties for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string[]} filter - A comma-delimited list of properties. If specified, filters to these specific properties.
     */
    getDefinitionProperties(project, definitionId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    filter: filter && filter.join(","),
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "d9826ad7-2a68-46a9-a6e9-677698777895", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates properties for a definition.
     *
     * @param {VSSInterfaces.JsonPatchDocument} document - A json-patch document describing the properties to update.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     */
    updateDefinitionProperties(customHeaders, document, project, definitionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                customHeaders = customHeaders || {};
                customHeaders["Content-Type"] = "application/json-patch+json";
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "d9826ad7-2a68-46a9-a6e9-677698777895", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    options.additionalHeaders = customHeaders;
                    let res;
                    res = yield this.rest.update(url, document, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a pull request object from source provider.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} pullRequestId - Vendor-specific id of the pull request.
     * @param {string} repositoryId - Vendor-specific identifier or the name of the repository that contains the pull request.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     */
    getPullRequest(project, providerName, pullRequestId, repositoryId, serviceEndpointId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName,
                    pullRequestId: pullRequestId
                };
                let queryValues = {
                    repositoryId: repositoryId,
                    serviceEndpointId: serviceEndpointId,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "d8763ec7-9ff0-4fb4-b2b2-9d757906ff14", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of related work items for a list of commits.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string[]} commits - The comma separated list of vendor-specific identifiers of commits/check-ins.
     * @param {string} repositoryId - If specified, the vendor-specific identifier or the name of the repository that contains the commits or the pull request.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {number} top - Integer specifying the maximum number of work items to return.
     */
    getRelatedWorkItemsForCommits(project, providerName, commits, repositoryId, serviceEndpointId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            if (commits == null) {
                throw new TypeError('commits can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    commits: commits && commits.join(","),
                    repositoryId: repositoryId,
                    serviceEndpointId: serviceEndpointId,
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "caca4f48-db96-4935-9b76-71de7d9d69dc", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of related work items for a particular Pull Request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} pullRequestId - The vendor-specific identifier of a Pull Request object.
     * @param {string} repositoryId - If specified, the vendor-specific identifier or the name of the repository that contains the commits or the pull request.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {number} top - Integer specifying the maximum number of work items to return.
     */
    getRelatedWorkItemsForPullRequest(project, providerName, pullRequestId, repositoryId, serviceEndpointId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            if (pullRequestId == null) {
                throw new TypeError('pullRequestId can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    pullRequestId: pullRequestId,
                    repositoryId: repositoryId,
                    serviceEndpointId: serviceEndpointId,
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "caca4f48-db96-4935-9b76-71de7d9d69dc", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a build report.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} type
     */
    getBuildReport(project, buildId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    type: type,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a build report.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} type
     */
    getBuildReportHtmlContent(project, buildId, type) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    type: type,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "45bcaa88-67e1-4042-a035-56d3b4a7d44c", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("text/html", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of source code repositories.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of a single repository to get.
     * @param {BuildInterfaces.ResultSet} resultSet - 'top' for the repositories most relevant for the endpoint. If not set, all repositories are returned. Ignored if 'repository' is set.
     * @param {boolean} pageResults - If set to true, this will limit the set of results and will return a continuation token to continue the query.
     * @param {string} continuationToken - When paging results, this is a continuation token, returned by a previous call to this method, that can be used to return the next set of repositories.
     */
    listRepositories(project, providerName, serviceEndpointId, repository, resultSet, pageResults, continuationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                    resultSet: resultSet,
                    pageResults: pageResults,
                    continuationToken: continuationToken,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "d44d1680-f978-4834-9b93-8c6e132329c9", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * @param {BuildInterfaces.DefinitionResourceReference[]} resources
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    authorizeDefinitionResources(resources, project, definitionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "ea623316-1967-45eb-89ab-e9e6110cf2d6", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, resources, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * @param {string} project - Project ID or project name
     * @param {number} definitionId
     */
    getDefinitionResources(project, definitionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "ea623316-1967-45eb-89ab-e9e6110cf2d6", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets information about build resources in the system.
     *
     */
    getResourceUsage() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {};
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "3813d06c-9e36-4ea1-aac3-61a485d60e3d", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all revisions of a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     */
    getDefinitionRevisions(project, definitionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "7c116775-52e5-453e-8c5d-914d9762d8c4", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinitionRevision, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the build settings.
     *
     * @param {string} project - Project ID or project name
     */
    getBuildSettings(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates the build settings.
     *
     * @param {BuildInterfaces.BuildSettings} settings - The new settings.
     * @param {string} project - Project ID or project name
     */
    updateBuildSettings(settings, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "aa8c1c9c-ef8b-474a-b8c4-785c7b191d0d", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, settings, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Get a list of source providers and their capabilities.
     *
     * @param {string} project - Project ID or project name
     */
    listSourceProviders(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "3ce81729-954f-423d-a581-9fea01d25186", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.SourceProviderAttributes, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * <p>Gets the build status for a definition, optionally scoped to a specific branch, stage, job, and configuration.</p> <p>If there are more than one, then it is required to pass in a stageName value when specifying a jobName, and the same rule then applies for both if passing a configuration parameter.</p>
     *
     * @param {string} project - Project ID or project name
     * @param {string} definition - Either the definition name with optional leading folder path, or the definition id.
     * @param {string} branchName - Only consider the most recent build for this branch.
     * @param {string} stageName - Use this stage within the pipeline to render the status.
     * @param {string} jobName - Use this job within a stage of the pipeline to render the status.
     * @param {string} configuration - Use this job configuration to render the status
     * @param {string} label - Replaces the default text on the left side of the badge.
     */
    getStatusBadge(project, definition, branchName, stageName, jobName, configuration, label) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definition: definition
                };
                let queryValues = {
                    branchName: branchName,
                    stageName: stageName,
                    jobName: jobName,
                    configuration: configuration,
                    label: label,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "07acfdce-4757-4439-b422-ddd13a2fcc10", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Adds a tag to a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} tag - The tag to add.
     */
    addBuildTag(project, buildId, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    tag: tag
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.replace(url, null, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Adds tags to a build.
     *
     * @param {string[]} tags - The tags to add.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     */
    addBuildTags(tags, project, buildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, tags, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Removes a tag from a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {string} tag - The tag to remove.
     */
    deleteBuildTag(project, buildId, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    tag: tag
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the tags for a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     */
    getBuildTags(project, buildId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "6e6114b2-8161-44c8-8f6c-c5505782427f", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Adds a tag to a definition
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string} tag - The tag to add.
     */
    addDefinitionTag(project, definitionId, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId,
                    tag: tag
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "cb894432-134a-4d31-a839-83beceaace4b", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.replace(url, null, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Adds multiple tags to a definition.
     *
     * @param {string[]} tags - The tags to add.
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     */
    addDefinitionTags(tags, project, definitionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "cb894432-134a-4d31-a839-83beceaace4b", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, tags, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Removes a tag from a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {string} tag - The tag to remove.
     */
    deleteDefinitionTag(project, definitionId, tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId,
                    tag: tag
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "cb894432-134a-4d31-a839-83beceaace4b", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the tags for a definition.
     *
     * @param {string} project - Project ID or project name
     * @param {number} definitionId - The ID of the definition.
     * @param {number} revision - The definition revision number. If not specified, uses the latest revision of the definition.
     */
    getDefinitionTags(project, definitionId, revision) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    definitionId: definitionId
                };
                let queryValues = {
                    revision: revision,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "cb894432-134a-4d31-a839-83beceaace4b", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of all build and definition tags in the project.
     *
     * @param {string} project - Project ID or project name
     */
    getTags(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "d84ac5c6-edc7-43d5-adc9-1b34be5dea09", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Deletes a build definition template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the template.
     */
    deleteTemplate(project, templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    templateId: templateId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a specific build definition template.
     *
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the requested template.
     */
    getTemplate(project, templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    templateId: templateId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinitionTemplate, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all definition templates.
     *
     * @param {string} project - Project ID or project name
     */
    getTemplates(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinitionTemplate, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates an existing build definition template.
     *
     * @param {BuildInterfaces.BuildDefinitionTemplate} template - The new version of the template.
     * @param {string} project - Project ID or project name
     * @param {string} templateId - The ID of the template.
     */
    saveTemplate(template, project, templateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    templateId: templateId
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.3", "build", "e884571e-7f92-4d6a-9274-3f5649900835", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.replace(url, template, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.BuildDefinitionTemplate, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a Zip file of the artifact with the given name for a build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} projectId - The project ID.
     * @param {string} artifactName - The name of the artifact.
     * @param {String} downloadTicket - A valid ticket that gives permission to download artifacts
     */
    getTicketedArtifactContentZip(customHeaders, buildId, projectId, artifactName, downloadTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            if (projectId == null) {
                throw new TypeError('projectId can not be null or undefined');
            }
            if (artifactName == null) {
                throw new TypeError('artifactName can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    buildId: buildId
                };
                let queryValues = {
                    projectId: projectId,
                    artifactName: artifactName,
                };
                customHeaders = customHeaders || {};
                customHeaders["X-VSS-DownloadTicket"] = "downloadTicket";
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "731b7e7a-0b6c-4912-af75-de04fe4899db", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/zip", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a Zip file of the logs for a given build.
     *
     * @param {number} buildId - The ID of the build.
     * @param {string} projectId - The project ID.
     * @param {String} downloadTicket - A valid ticket that gives permission to download the logs.
     */
    getTicketedLogsContentZip(customHeaders, buildId, projectId, downloadTicket) {
        return __awaiter(this, void 0, void 0, function* () {
            if (projectId == null) {
                throw new TypeError('projectId can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    buildId: buildId
                };
                let queryValues = {
                    projectId: projectId,
                };
                customHeaders = customHeaders || {};
                customHeaders["X-VSS-DownloadTicket"] = "downloadTicket";
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "917890d1-a6b5-432d-832a-6afcf6bb0734", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let apiVersion = verData.apiVersion;
                    let accept = this.createAcceptHeader("application/zip", apiVersion);
                    resolve((yield this.http.get(url, { "Accept": accept })).message);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets details for a build
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {string} planId
     */
    getBuildTimeline(project, buildId, timelineId, changeId, planId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId,
                    timelineId: timelineId
                };
                let queryValues = {
                    changeId: changeId,
                    planId: planId,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "8baac422-4c6e-4de5-8532-db96d92acffa", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.Timeline, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Recreates the webhooks for the specified triggers in the given source code repository.
     *
     * @param {BuildInterfaces.DefinitionTriggerType[]} triggerTypes - The types of triggers to restore webhooks for.
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get webhooks. Can only be omitted for providers that do not support multiple repositories.
     */
    restoreWebhooks(triggerTypes, project, providerName, serviceEndpointId, repository) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "793bceb8-9736-4030-bd2f-fb3ce6d6b478", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, triggerTypes, options);
                    let ret = this.formatResponse(res.result, null, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets a list of webhooks installed in the given source code repository.
     *
     * @param {string} project - Project ID or project name
     * @param {string} providerName - The name of the source provider.
     * @param {string} serviceEndpointId - If specified, the ID of the service endpoint to query. Can only be omitted for providers that do not use service endpoints, e.g. TFVC or TFGit.
     * @param {string} repository - If specified, the vendor-specific identifier or the name of the repository to get webhooks. Can only be omitted for providers that do not support multiple repositories.
     */
    listWebhooks(project, providerName, serviceEndpointId, repository) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    providerName: providerName
                };
                let queryValues = {
                    serviceEndpointId: serviceEndpointId,
                    repository: repository,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "build", "8f20ff82-9498-4812-9f6e-9c01bdc50e99", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, BuildInterfaces.TypeInfo.RepositoryWebhook, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the work items associated with a build.
     *
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} top - The maximum number of work items to return.
     */
    getBuildWorkItemsRefs(project, buildId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the work items associated with a build, filtered to specific commits.
     *
     * @param {string[]} commitIds - A comma-delimited list of commit IDs.
     * @param {string} project - Project ID or project name
     * @param {number} buildId - The ID of the build.
     * @param {number} top - The maximum number of work items to return, or the number of commits to consider if no commit IDs are specified.
     */
    getBuildWorkItemsRefsFromCommits(commitIds, project, buildId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    buildId: buildId
                };
                let queryValues = {
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "5a21f5d2-5642-47e4-a0bd-1356e6731bee", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, commitIds, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all the work items between two builds.
     *
     * @param {string} project - Project ID or project name
     * @param {number} fromBuildId - The ID of the first build.
     * @param {number} toBuildId - The ID of the last build.
     * @param {number} top - The maximum number of work items to return.
     */
    getWorkItemsBetweenBuilds(project, fromBuildId, toBuildId, top) {
        return __awaiter(this, void 0, void 0, function* () {
            if (fromBuildId == null) {
                throw new TypeError('fromBuildId can not be null or undefined');
            }
            if (toBuildId == null) {
                throw new TypeError('toBuildId can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                let queryValues = {
                    fromBuildId: fromBuildId,
                    toBuildId: toBuildId,
                    '$top': top,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "build", "52ba8915-5518-42e3-a4bb-b0182d159e2d", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, null, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
BuildApi.RESOURCE_AREA_ID = "965220d5-5bb9-42cf-8d67-9b146df2a5a4";
exports.BuildApi = BuildApi;
