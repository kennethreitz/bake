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
const WikiInterfaces = require("./interfaces/WikiInterfaces");
class WikiApi extends basem.ClientApiBase {
    constructor(baseUrl, handlers, options) {
        super(baseUrl, handlers, 'node-Wiki-api', options);
    }
    /**
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
     * @param {string} path - Wiki page path.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - GitVersionDescriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    getPageText(project, wikiIdentifier, path, recursionLevel, versionDescriptor, includeContent) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                let queryValues = {
                    path: path,
                    recursionLevel: recursionLevel,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "wiki", "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b", routeValues, queryValues);
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
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki Id or name.
     * @param {string} path - Wiki page path.
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel - Recursion level for subpages retrieval. Defaults to `None` (Optional).
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor - GitVersionDescriptor for the page. Defaults to the default branch (Optional).
     * @param {boolean} includeContent - True to include the content of the page in the response for Json content type. Defaults to false (Optional)
     */
    getPageZip(project, wikiIdentifier, path, recursionLevel, versionDescriptor, includeContent) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                let queryValues = {
                    path: path,
                    recursionLevel: recursionLevel,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "wiki", "25d3fbc7-fe3d-46cb-b5a5-0b6f79caf27b", routeValues, queryValues);
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
     * Creates a new page view stats resource or updates an existing page view stats resource.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {GitInterfaces.GitVersionDescriptor} wikiVersion - Wiki version.
     * @param {string} path - Wiki page path.
     * @param {string} oldPath - Old page path. This is optional and required to rename path in existing page view stats.
     */
    createOrUpdatePageViewStats(project, wikiIdentifier, wikiVersion, path, oldPath) {
        return __awaiter(this, void 0, void 0, function* () {
            if (wikiVersion == null) {
                throw new TypeError('wikiVersion can not be null or undefined');
            }
            if (path == null) {
                throw new TypeError('path can not be null or undefined');
            }
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                let queryValues = {
                    wikiVersion: wikiVersion,
                    path: path,
                    oldPath: oldPath,
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.1", "wiki", "1087b746-5d15-41b9-bea6-14e325e7f880", routeValues, queryValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, null, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiPageViewStats, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Creates the wiki resource.
     *
     * @param {WikiInterfaces.WikiCreateParametersV2} wikiCreateParams - Parameters for the wiki creation.
     * @param {string} project - Project ID or project name
     */
    createWiki(wikiCreateParams, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "wiki", "288d122c-dbd4-451d-aa5f-7dbbba070728", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.create(url, wikiCreateParams, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiV2, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Deletes the wiki corresponding to the wiki name or Id provided.
     *
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {string} project - Project ID or project name
     */
    deleteWiki(wikiIdentifier, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "wiki", "288d122c-dbd4-451d-aa5f-7dbbba070728", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.del(url, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiV2, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets all wikis in a project or collection.
     *
     * @param {string} project - Project ID or project name
     */
    getAllWikis(project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "wiki", "288d122c-dbd4-451d-aa5f-7dbbba070728", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiV2, true);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Gets the wiki corresponding to the wiki name or Id provided.
     *
     * @param {string} wikiIdentifier - Wiki name or id.
     * @param {string} project - Project ID or project name
     */
    getWiki(wikiIdentifier, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "wiki", "288d122c-dbd4-451d-aa5f-7dbbba070728", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.get(url, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiV2, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    /**
     * Updates the wiki corresponding to the wiki Id or name provided using the update parameters.
     *
     * @param {WikiInterfaces.WikiUpdateParameters} updateParameters - Update parameters.
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {string} project - Project ID or project name
     */
    updateWiki(updateParameters, wikiIdentifier, project) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let routeValues = {
                    project: project,
                    wikiIdentifier: wikiIdentifier
                };
                try {
                    let verData = yield this.vsoClient.getVersioningData("5.0-preview.2", "wiki", "288d122c-dbd4-451d-aa5f-7dbbba070728", routeValues);
                    let url = verData.requestUrl;
                    let options = this.createRequestOptions('application/json', verData.apiVersion);
                    let res;
                    res = yield this.rest.update(url, updateParameters, options);
                    let ret = this.formatResponse(res.result, WikiInterfaces.TypeInfo.WikiV2, false);
                    resolve(ret);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
}
WikiApi.RESOURCE_AREA_ID = "bf7d82a0-8aa5-4613-94ef-6172a5ea01f3";
exports.WikiApi = WikiApi;
