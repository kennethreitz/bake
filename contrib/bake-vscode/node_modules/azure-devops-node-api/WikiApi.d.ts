/// <reference types="node" />
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import GitInterfaces = require("./interfaces/GitInterfaces");
import WikiInterfaces = require("./interfaces/WikiInterfaces");
export interface IWikiApi extends basem.ClientApiBase {
    getPageText(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    getPageZip(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    createOrUpdatePageViewStats(project: string, wikiIdentifier: string, wikiVersion: GitInterfaces.GitVersionDescriptor, path: string, oldPath?: string): Promise<WikiInterfaces.WikiPageViewStats>;
    createWiki(wikiCreateParams: WikiInterfaces.WikiCreateParametersV2, project?: string): Promise<WikiInterfaces.WikiV2>;
    deleteWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    getAllWikis(project?: string): Promise<WikiInterfaces.WikiV2[]>;
    getWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    updateWiki(updateParameters: WikiInterfaces.WikiUpdateParameters, wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
}
export declare class WikiApi extends basem.ClientApiBase implements IWikiApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions);
    static readonly RESOURCE_AREA_ID: string;
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
    getPageText(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
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
    getPageZip(project: string, wikiIdentifier: string, path?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, versionDescriptor?: GitInterfaces.GitVersionDescriptor, includeContent?: boolean): Promise<NodeJS.ReadableStream>;
    /**
     * Creates a new page view stats resource or updates an existing page view stats resource.
     *
     * @param {string} project - Project ID or project name
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {GitInterfaces.GitVersionDescriptor} wikiVersion - Wiki version.
     * @param {string} path - Wiki page path.
     * @param {string} oldPath - Old page path. This is optional and required to rename path in existing page view stats.
     */
    createOrUpdatePageViewStats(project: string, wikiIdentifier: string, wikiVersion: GitInterfaces.GitVersionDescriptor, path: string, oldPath?: string): Promise<WikiInterfaces.WikiPageViewStats>;
    /**
     * Creates the wiki resource.
     *
     * @param {WikiInterfaces.WikiCreateParametersV2} wikiCreateParams - Parameters for the wiki creation.
     * @param {string} project - Project ID or project name
     */
    createWiki(wikiCreateParams: WikiInterfaces.WikiCreateParametersV2, project?: string): Promise<WikiInterfaces.WikiV2>;
    /**
     * Deletes the wiki corresponding to the wiki name or Id provided.
     *
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {string} project - Project ID or project name
     */
    deleteWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    /**
     * Gets all wikis in a project or collection.
     *
     * @param {string} project - Project ID or project name
     */
    getAllWikis(project?: string): Promise<WikiInterfaces.WikiV2[]>;
    /**
     * Gets the wiki corresponding to the wiki name or Id provided.
     *
     * @param {string} wikiIdentifier - Wiki name or id.
     * @param {string} project - Project ID or project name
     */
    getWiki(wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
    /**
     * Updates the wiki corresponding to the wiki Id or name provided using the update parameters.
     *
     * @param {WikiInterfaces.WikiUpdateParameters} updateParameters - Update parameters.
     * @param {string} wikiIdentifier - Wiki name or Id.
     * @param {string} project - Project ID or project name
     */
    updateWiki(updateParameters: WikiInterfaces.WikiUpdateParameters, wikiIdentifier: string, project?: string): Promise<WikiInterfaces.WikiV2>;
}
