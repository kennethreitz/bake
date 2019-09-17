/// <reference types="node" />
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
export interface ITaskAgentApiBase extends basem.ClientApiBase {
    addAgentCloud(agentCloud: TaskAgentInterfaces.TaskAgentCloud): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    deleteAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    getAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    getAgentClouds(): Promise<TaskAgentInterfaces.TaskAgentCloud[]>;
    getAgentCloudTypes(): Promise<TaskAgentInterfaces.TaskAgentCloudType[]>;
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, queueId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    deleteAgent(poolId: number, agentId: number): Promise<void>;
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): Promise<TaskAgentInterfaces.TaskAgent>;
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): Promise<TaskAgentInterfaces.TaskAgent[]>;
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    getAzureManagementGroups(): Promise<TaskAgentInterfaces.AzureManagementGroupQueryResult>;
    getAzureSubscriptions(): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
    generateDeploymentGroupAccessToken(project: string, deploymentGroupId: number): Promise<string>;
    addDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.DeploymentGroup>;
    deleteDeploymentGroup(project: string, deploymentGroupId: number): Promise<void>;
    getDeploymentGroup(project: string, deploymentGroupId: number, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands): Promise<TaskAgentInterfaces.DeploymentGroup>;
    getDeploymentGroups(project: string, name?: string, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands, continuationToken?: string, top?: number, ids?: number[]): Promise<TaskAgentInterfaces.DeploymentGroup[]>;
    updateDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupUpdateParameter, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentGroup>;
    getDeploymentGroupsMetrics(project: string, deploymentGroupName?: string, continuationToken?: string, top?: number): Promise<TaskAgentInterfaces.DeploymentGroupMetrics[]>;
    getAgentRequestsForDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForDeploymentMachines(project: string, deploymentGroupId: number, machineIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    refreshDeploymentMachines(project: string, deploymentGroupId: number): Promise<void>;
    generateDeploymentPoolAccessToken(poolId: number): Promise<string>;
    getDeploymentPoolsSummary(poolName?: string, expands?: TaskAgentInterfaces.DeploymentPoolSummaryExpands): Promise<TaskAgentInterfaces.DeploymentPoolSummary[]>;
    getAgentRequestsForDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForDeploymentTargets(project: string, deploymentGroupId: number, targetIds?: number[], ownerId?: number, completedOn?: Date, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    refreshDeploymentTargets(project: string, deploymentGroupId: number): Promise<void>;
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    addServiceEndpointExecutionRecords(input: TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput, project: string): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean, includeHostedAgentMinutesCount?: boolean): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    updateTaskHubLicenseDetails(taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails, hubName: string): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    validateInputs(inputValidationRequest: TaskAgentInterfaces.InputValidationRequest): Promise<TaskAgentInterfaces.InputValidationRequest>;
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, result?: TaskAgentInterfaces.TaskResult): Promise<void>;
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    queueAgentRequestByPool(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    generateDeploymentMachineGroupAccessToken(project: string, machineGroupId: number): Promise<string>;
    addDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): Promise<void>;
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>;
    updateDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    getDeploymentMachineGroupMachines(project: string, machineGroupId: number, tagFilters?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    updateDeploymentMachineGroupMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    addDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    deleteDeploymentMachine(project: string, deploymentGroupId: number, machineId: number): Promise<void>;
    getDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    getDeploymentMachines(project: string, deploymentGroupId: number, tags?: string[], name?: string, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    replaceDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentMachines(machines: TaskAgentInterfaces.DeploymentMachine[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    createAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    deleteAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<void>;
    getAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    getAgentPoolMaintenanceDefinitions(poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>;
    updateAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    deleteAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<void>;
    getAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    getAgentPoolMaintenanceJobLogs(poolId: number, jobId: number): Promise<NodeJS.ReadableStream>;
    getAgentPoolMaintenanceJobs(poolId: number, definitionId?: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>;
    queueAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    updateAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    deleteMessage(poolId: number, messageId: number, sessionId: string): Promise<void>;
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Promise<TaskAgentInterfaces.TaskAgentMessage>;
    refreshAgent(poolId: number, agentId: number): Promise<void>;
    refreshAgents(poolId: number): Promise<void>;
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Promise<void>;
    getPackage(packageType: string, platform: string, version: string): Promise<TaskAgentInterfaces.PackageMetadata>;
    getPackages(packageType: string, platform?: string, top?: number): Promise<TaskAgentInterfaces.PackageMetadata[]>;
    getAgentPoolMetadata(poolId: number): Promise<NodeJS.ReadableStream>;
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Promise<TaskAgentInterfaces.TaskAgentPool>;
    deleteAgentPool(poolId: number): Promise<void>;
    getAgentPool(poolId: number, properties?: string[], actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool>;
    getAgentPools(poolName?: string, properties?: string[], poolType?: TaskAgentInterfaces.TaskAgentPoolType, actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPool>;
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    createTeamProject(project?: string): Promise<void>;
    deleteAgentQueue(queueId: number, project?: string): Promise<void>;
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentQueuesByIds(queueIds: number[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentQueuesByNames(queueNames: string[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    getAgentCloudRequests(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloudRequest[]>;
    getResourceLimits(): Promise<TaskAgentInterfaces.ResourceLimit[]>;
    getResourceUsage(parallelismTag?: string, poolIsHosted?: boolean, includeRunningRequests?: boolean): Promise<TaskAgentInterfaces.ResourceUsage>;
    getTaskGroupHistory(project: string, taskGroupId: string): Promise<TaskAgentInterfaces.TaskGroupRevision[]>;
    deleteSecureFile(project: string, secureFileId: string): Promise<void>;
    downloadSecureFile(project: string, secureFileId: string, ticket: string, download?: boolean): Promise<NodeJS.ReadableStream>;
    getSecureFile(project: string, secureFileId: string, includeDownloadTicket?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile>;
    getSecureFiles(project: string, namePattern?: string, includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    getSecureFilesByIds(project: string, secureFileIds: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    getSecureFilesByNames(project: string, secureFileNames: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    querySecureFilesByProperties(condition: string, project: string, namePattern?: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    updateSecureFile(secureFile: TaskAgentInterfaces.SecureFile, project: string, secureFileId: string): Promise<TaskAgentInterfaces.SecureFile>;
    updateSecureFiles(secureFiles: TaskAgentInterfaces.SecureFile[], project: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    uploadSecureFile(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, name: string): Promise<TaskAgentInterfaces.SecureFile>;
    executeServiceEndpointRequest(serviceEndpointRequest: TaskAgentInterfaces.ServiceEndpointRequest, project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>;
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, project: string): Promise<string[]>;
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    deleteServiceEndpoint(project: string, endpointId: string): Promise<void>;
    getServiceEndpointDetails(project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string, endpointId: string, operation?: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    updateServiceEndpoints(endpoints: TaskAgentInterfaces.ServiceEndpoint[], project: string): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Promise<TaskAgentInterfaces.TaskAgentSession>;
    deleteAgentSession(poolId: number, sessionId: string): Promise<void>;
    addDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    deleteDeploymentTarget(project: string, deploymentGroupId: number, targetId: number): Promise<void>;
    getDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, expand?: TaskAgentInterfaces.DeploymentTargetExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    getDeploymentTargets(project: string, deploymentGroupId: number, tags?: string[], name?: string, partialNameMatch?: boolean, expand?: TaskAgentInterfaces.DeploymentTargetExpands, agentStatus?: TaskAgentInterfaces.TaskAgentStatusFilter, agentJobResult?: TaskAgentInterfaces.TaskAgentJobResultFilter, continuationToken?: string, top?: number, enabled?: boolean): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    replaceDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    updateDeploymentTargets(machines: TaskAgentInterfaces.DeploymentTargetUpdateParameter[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    addTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskGroup(project: string, taskGroupId: string, comment?: string): Promise<void>;
    getTaskGroup(project: string, taskGroupId: string, versionSpec: string, expand?: TaskAgentInterfaces.TaskGroupExpands): Promise<TaskAgentInterfaces.TaskGroup>;
    getTaskGroupRevision(project: string, taskGroupId: string, revision: number): Promise<NodeJS.ReadableStream>;
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean, taskIdFilter?: string, deleted?: boolean, top?: number, continuationToken?: Date, queryOrder?: TaskAgentInterfaces.TaskGroupQueryOrder): Promise<TaskAgentInterfaces.TaskGroup[]>;
    publishPreviewTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string, taskGroupId: string, disablePriorVersions?: boolean): Promise<TaskAgentInterfaces.TaskGroup[]>;
    publishTaskGroup(taskGroupMetadata: TaskAgentInterfaces.PublishTaskGroupMetadata, project: string, parentTaskGroupId: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    undeleteTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    updateTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupUpdateParameter, project: string, taskGroupId?: string): Promise<TaskAgentInterfaces.TaskGroup>;
    deleteTaskDefinition(taskId: string): Promise<void>;
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    updateAgentUpdateState(poolId: number, agentId: number, currentState: string): Promise<TaskAgentInterfaces.TaskAgent>;
    updateAgentUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    addVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string): Promise<TaskAgentInterfaces.VariableGroup>;
    deleteVariableGroup(project: string, groupId: number): Promise<void>;
    getVariableGroup(project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    getVariableGroups(project: string, groupName?: string, actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter, top?: number, continuationToken?: number, queryOrder?: TaskAgentInterfaces.VariableGroupQueryOrder): Promise<TaskAgentInterfaces.VariableGroup[]>;
    getVariableGroupsById(project: string, groupIds: number[]): Promise<TaskAgentInterfaces.VariableGroup[]>;
    updateVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    acquireAccessToken(authenticationRequest: TaskAgentInterfaces.AadOauthTokenRequest): Promise<TaskAgentInterfaces.AadOauthTokenResult>;
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: TaskAgentInterfaces.AadLoginPromptOption, completeCallbackPayload?: string, completeCallbackByAuthCode?: boolean): Promise<string>;
    getVstsAadTenantId(): Promise<string>;
}
export declare class TaskAgentApiBase extends basem.ClientApiBase implements ITaskAgentApiBase {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[], options?: VsoBaseInterfaces.IRequestOptions);
    static readonly RESOURCE_AREA_ID: string;
    /**
     * @param {TaskAgentInterfaces.TaskAgentCloud} agentCloud
     */
    addAgentCloud(agentCloud: TaskAgentInterfaces.TaskAgentCloud): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    /**
     * @param {number} agentCloudId
     */
    deleteAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    /**
     * @param {number} agentCloudId
     */
    getAgentCloud(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloud>;
    /**
     */
    getAgentClouds(): Promise<TaskAgentInterfaces.TaskAgentCloud[]>;
    /**
     * Get agent cloud types.
     *
     */
    getAgentCloudTypes(): Promise<TaskAgentInterfaces.TaskAgentCloudType[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} queueId
     */
    queueAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, queueId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     */
    addAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     */
    deleteAgent(poolId: number, agentId: number): Promise<void>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     */
    getAgent(poolId: number, agentId: number, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[]): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * @param {number} poolId
     * @param {string} agentName
     * @param {boolean} includeCapabilities
     * @param {boolean} includeAssignedRequest
     * @param {string[]} propertyFilters
     * @param {string[]} demands
     */
    getAgents(poolId: number, agentName?: string, includeCapabilities?: boolean, includeAssignedRequest?: boolean, propertyFilters?: string[], demands?: string[]): Promise<TaskAgentInterfaces.TaskAgent[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     */
    replaceAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * @param {TaskAgentInterfaces.TaskAgent} agent
     * @param {number} poolId
     * @param {number} agentId
     */
    updateAgent(agent: TaskAgentInterfaces.TaskAgent, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * Returns list of azure subscriptions
     *
     */
    getAzureManagementGroups(): Promise<TaskAgentInterfaces.AzureManagementGroupQueryResult>;
    /**
     * Returns list of azure subscriptions
     *
     */
    getAzureSubscriptions(): Promise<TaskAgentInterfaces.AzureSubscriptionQueryResult>;
    /**
     * GET a PAT token for managing (configuring, removing, tagging) deployment targets in a deployment group.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment targets are managed.
     */
    generateDeploymentGroupAccessToken(project: string, deploymentGroupId: number): Promise<string>;
    /**
     * Create a deployment group.
     *
     * @param {TaskAgentInterfaces.DeploymentGroupCreateParameter} deploymentGroup - Deployment group to create.
     * @param {string} project - Project ID or project name
     */
    addDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.DeploymentGroup>;
    /**
     * Delete a deployment group.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to be deleted.
     */
    deleteDeploymentGroup(project: string, deploymentGroupId: number): Promise<void>;
    /**
     * Get a deployment group by its ID.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter - Get the deployment group only if this action can be performed on it.
     * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand - Include these additional details in the returned object.
     */
    getDeploymentGroup(project: string, deploymentGroupId: number, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands): Promise<TaskAgentInterfaces.DeploymentGroup>;
    /**
     * Get a list of deployment groups by name or IDs.
     *
     * @param {string} project - Project ID or project name
     * @param {string} name - Name of the deployment group.
     * @param {TaskAgentInterfaces.DeploymentGroupActionFilter} actionFilter - Get only deployment groups on which this action can be performed.
     * @param {TaskAgentInterfaces.DeploymentGroupExpands} expand - Include these additional details in the returned objects.
     * @param {string} continuationToken - Get deployment groups with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment groups to return. Default is **1000**.
     * @param {number[]} ids - Comma separated list of IDs of the deployment groups.
     */
    getDeploymentGroups(project: string, name?: string, actionFilter?: TaskAgentInterfaces.DeploymentGroupActionFilter, expand?: TaskAgentInterfaces.DeploymentGroupExpands, continuationToken?: string, top?: number, ids?: number[]): Promise<TaskAgentInterfaces.DeploymentGroup[]>;
    /**
     * Update a deployment group.
     *
     * @param {TaskAgentInterfaces.DeploymentGroupUpdateParameter} deploymentGroup - Deployment group to update.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     */
    updateDeploymentGroup(deploymentGroup: TaskAgentInterfaces.DeploymentGroupUpdateParameter, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentGroup>;
    /**
     * Get a list of deployment group metrics.
     *
     * @param {string} project - Project ID or project name
     * @param {string} deploymentGroupName - Name of the deployment group.
     * @param {string} continuationToken - Get metrics for deployment groups with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment group metrics to return. Default is **50**.
     */
    getDeploymentGroupsMetrics(project: string, deploymentGroupName?: string, continuationToken?: string, top?: number): Promise<TaskAgentInterfaces.DeploymentGroupMetrics[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @param {number} completedRequestCount
     */
    getAgentRequestsForDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number[]} machineIds
     * @param {number} completedRequestCount
     */
    getAgentRequestsForDeploymentMachines(project: string, deploymentGroupId: number, machineIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    refreshDeploymentMachines(project: string, deploymentGroupId: number): Promise<void>;
    /**
     * GET a PAT token for managing (configuring, removing, tagging) deployment agents in a deployment pool.
     *
     * @param {number} poolId - ID of the deployment pool in which deployment agents are managed.
     */
    generateDeploymentPoolAccessToken(poolId: number): Promise<string>;
    /**
     * Get a list of deployment pool summaries.
     *
     * @param {string} poolName - Name of the deployment pool.
     * @param {TaskAgentInterfaces.DeploymentPoolSummaryExpands} expands - Include these additional details in the returned objects.
     */
    getDeploymentPoolsSummary(poolName?: string, expands?: TaskAgentInterfaces.DeploymentPoolSummaryExpands): Promise<TaskAgentInterfaces.DeploymentPoolSummary[]>;
    /**
     * Get agent requests for a deployment target.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the target belongs.
     * @param {number} targetId - ID of the deployment target.
     * @param {number} completedRequestCount - Maximum number of completed requests to return. Default is **50**
     */
    getAgentRequestsForDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * Get agent requests for a list deployment targets.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the targets belong.
     * @param {number[]} targetIds - Comma separated list of IDs of the deployment targets.
     * @param {number} ownerId - Id of owner of agent job request.
     * @param {Date} completedOn - Datetime to return request after this time.
     * @param {number} completedRequestCount - Maximum number of completed requests to return for each target. Default is **50**
     */
    getAgentRequestsForDeploymentTargets(project: string, deploymentGroupId: number, targetIds?: number[], ownerId?: number, completedOn?: Date, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * Upgrade the deployment targets in a deployment group.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     */
    refreshDeploymentTargets(project: string, deploymentGroupId: number): Promise<void>;
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param {TaskAgentInterfaces.TaskDefinitionEndpoint} endpoint - Describes the URL to fetch.
     */
    queryEndpoint(endpoint: TaskAgentInterfaces.TaskDefinitionEndpoint): Promise<string[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @param {number} top
     */
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput} input
     * @param {string} project - Project ID or project name
     */
    addServiceEndpointExecutionRecords(input: TaskAgentInterfaces.ServiceEndpointExecutionRecordsInput, project: string): Promise<TaskAgentInterfaces.ServiceEndpointExecutionRecord[]>;
    /**
     * @param {string} hubName
     * @param {boolean} includeEnterpriseUsersCount
     * @param {boolean} includeHostedAgentMinutesCount
     */
    getTaskHubLicenseDetails(hubName: string, includeEnterpriseUsersCount?: boolean, includeHostedAgentMinutesCount?: boolean): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    /**
     * @param {TaskAgentInterfaces.TaskHubLicenseDetails} taskHubLicenseDetails
     * @param {string} hubName
     */
    updateTaskHubLicenseDetails(taskHubLicenseDetails: TaskAgentInterfaces.TaskHubLicenseDetails, hubName: string): Promise<TaskAgentInterfaces.TaskHubLicenseDetails>;
    /**
     * @param {TaskAgentInterfaces.InputValidationRequest} inputValidationRequest
     */
    validateInputs(inputValidationRequest: TaskAgentInterfaces.InputValidationRequest): Promise<TaskAgentInterfaces.InputValidationRequest>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     * @param {TaskAgentInterfaces.TaskResult} result
     */
    deleteAgentRequest(poolId: number, requestId: number, lockToken: string, result?: TaskAgentInterfaces.TaskResult): Promise<void>;
    /**
     * @param {number} poolId
     * @param {number} requestId
     */
    getAgentRequest(poolId: number, requestId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {number} completedRequestCount
     */
    getAgentRequestsForAgent(poolId: number, agentId: number, completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {number[]} agentIds
     * @param {number} completedRequestCount
     */
    getAgentRequestsForAgents(poolId: number, agentIds?: number[], completedRequestCount?: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * @param {number} poolId
     * @param {string} planId
     * @param {string} jobId
     */
    getAgentRequestsForPlan(poolId: number, planId: string, jobId?: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     */
    queueAgentRequestByPool(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentJobRequest} request
     * @param {number} poolId
     * @param {number} requestId
     * @param {string} lockToken
     */
    updateAgentRequest(request: TaskAgentInterfaces.TaskAgentJobRequest, poolId: number, requestId: number, lockToken: string): Promise<TaskAgentInterfaces.TaskAgentJobRequest>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     */
    generateDeploymentMachineGroupAccessToken(project: string, machineGroupId: number): Promise<string>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     */
    addDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     */
    deleteDeploymentMachineGroup(project: string, machineGroupId: number): Promise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {TaskAgentInterfaces.MachineGroupActionFilter} actionFilter
     */
    getDeploymentMachineGroup(project: string, machineGroupId: number, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} machineGroupName
     * @param {TaskAgentInterfaces.MachineGroupActionFilter} actionFilter
     */
    getDeploymentMachineGroups(project: string, machineGroupName?: string, actionFilter?: TaskAgentInterfaces.MachineGroupActionFilter): Promise<TaskAgentInterfaces.DeploymentMachineGroup[]>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachineGroup} machineGroup
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     */
    updateDeploymentMachineGroup(machineGroup: TaskAgentInterfaces.DeploymentMachineGroup, project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachineGroup>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     * @param {string[]} tagFilters
     */
    getDeploymentMachineGroupMachines(project: string, machineGroupId: number, tagFilters?: string[]): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachine[]} deploymentMachines
     * @param {string} project - Project ID or project name
     * @param {number} machineGroupId
     */
    updateDeploymentMachineGroupMachines(deploymentMachines: TaskAgentInterfaces.DeploymentMachine[], project: string, machineGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    addDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     */
    deleteDeploymentMachine(project: string, deploymentGroupId: number, machineId: number): Promise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     * @param {TaskAgentInterfaces.DeploymentMachineExpands} expand
     */
    getDeploymentMachine(project: string, deploymentGroupId: number, machineId: number, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {string[]} tags
     * @param {string} name
     * @param {TaskAgentInterfaces.DeploymentMachineExpands} expand
     */
    getDeploymentMachines(project: string, deploymentGroupId: number, tags?: string[], name?: string, expand?: TaskAgentInterfaces.DeploymentMachineExpands): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     */
    replaceDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachine} machine
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     * @param {number} machineId
     */
    updateDeploymentMachine(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, machineId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * @param {TaskAgentInterfaces.DeploymentMachine[]} machines
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId
     */
    updateDeploymentMachines(machines: TaskAgentInterfaces.DeploymentMachine[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition} definition
     * @param {number} poolId
     */
    createAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    /**
     * @param {number} poolId
     * @param {number} definitionId
     */
    deleteAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<void>;
    /**
     * @param {number} poolId
     * @param {number} definitionId
     */
    getAgentPoolMaintenanceDefinition(poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    /**
     * @param {number} poolId
     */
    getAgentPoolMaintenanceDefinitions(poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition} definition
     * @param {number} poolId
     * @param {number} definitionId
     */
    updateAgentPoolMaintenanceDefinition(definition: TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition, poolId: number, definitionId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceDefinition>;
    /**
     * @param {number} poolId
     * @param {number} jobId
     */
    deleteAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<void>;
    /**
     * @param {number} poolId
     * @param {number} jobId
     */
    getAgentPoolMaintenanceJob(poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    /**
     * @param {number} poolId
     * @param {number} jobId
     */
    getAgentPoolMaintenanceJobLogs(poolId: number, jobId: number): Promise<NodeJS.ReadableStream>;
    /**
     * @param {number} poolId
     * @param {number} definitionId
     */
    getAgentPoolMaintenanceJobs(poolId: number, definitionId?: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceJob} job
     * @param {number} poolId
     */
    queueAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPoolMaintenanceJob} job
     * @param {number} poolId
     * @param {number} jobId
     */
    updateAgentPoolMaintenanceJob(job: TaskAgentInterfaces.TaskAgentPoolMaintenanceJob, poolId: number, jobId: number): Promise<TaskAgentInterfaces.TaskAgentPoolMaintenanceJob>;
    /**
     * @param {number} poolId
     * @param {number} messageId
     * @param {string} sessionId
     */
    deleteMessage(poolId: number, messageId: number, sessionId: string): Promise<void>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     * @param {number} lastMessageId
     */
    getMessage(poolId: number, sessionId: string, lastMessageId?: number): Promise<TaskAgentInterfaces.TaskAgentMessage>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     */
    refreshAgent(poolId: number, agentId: number): Promise<void>;
    /**
     * @param {number} poolId
     */
    refreshAgents(poolId: number): Promise<void>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentMessage} message
     * @param {number} poolId
     * @param {number} requestId
     */
    sendMessage(message: TaskAgentInterfaces.TaskAgentMessage, poolId: number, requestId: number): Promise<void>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {string} version
     */
    getPackage(packageType: string, platform: string, version: string): Promise<TaskAgentInterfaces.PackageMetadata>;
    /**
     * @param {string} packageType
     * @param {string} platform
     * @param {number} top
     */
    getPackages(packageType: string, platform?: string, top?: number): Promise<TaskAgentInterfaces.PackageMetadata[]>;
    /**
     * @param {number} poolId
     */
    getAgentPoolMetadata(poolId: number): Promise<NodeJS.ReadableStream>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     */
    addAgentPool(pool: TaskAgentInterfaces.TaskAgentPool): Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
     * @param {number} poolId
     */
    deleteAgentPool(poolId: number): Promise<void>;
    /**
     * @param {number} poolId
     * @param {string[]} properties
     * @param {TaskAgentInterfaces.TaskAgentPoolActionFilter} actionFilter
     */
    getAgentPool(poolId: number, properties?: string[], actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
     * @param {string} poolName
     * @param {string[]} properties
     * @param {TaskAgentInterfaces.TaskAgentPoolType} poolType
     * @param {TaskAgentInterfaces.TaskAgentPoolActionFilter} actionFilter
     */
    getAgentPools(poolName?: string, properties?: string[], poolType?: TaskAgentInterfaces.TaskAgentPoolType, actionFilter?: TaskAgentInterfaces.TaskAgentPoolActionFilter): Promise<TaskAgentInterfaces.TaskAgentPool[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentPool} pool
     * @param {number} poolId
     */
    updateAgentPool(pool: TaskAgentInterfaces.TaskAgentPool, poolId: number): Promise<TaskAgentInterfaces.TaskAgentPool>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentQueue} queue
     * @param {string} project - Project ID or project name
     */
    addAgentQueue(queue: TaskAgentInterfaces.TaskAgentQueue, project?: string): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    /**
     * @param {string} project - Project ID or project name
     */
    createTeamProject(project?: string): Promise<void>;
    /**
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     */
    deleteAgentQueue(queueId: number, project?: string): Promise<void>;
    /**
     * @param {number} queueId
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    getAgentQueue(queueId: number, project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} queueName
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    getAgentQueues(project?: string, queueName?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    /**
     * @param {number[]} queueIds
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    getAgentQueuesByIds(queueIds: number[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    /**
     * @param {string[]} queueNames
     * @param {string} project - Project ID or project name
     * @param {TaskAgentInterfaces.TaskAgentQueueActionFilter} actionFilter
     */
    getAgentQueuesByNames(queueNames: string[], project?: string, actionFilter?: TaskAgentInterfaces.TaskAgentQueueActionFilter): Promise<TaskAgentInterfaces.TaskAgentQueue[]>;
    /**
     * @param {number} agentCloudId
     */
    getAgentCloudRequests(agentCloudId: number): Promise<TaskAgentInterfaces.TaskAgentCloudRequest[]>;
    /**
     */
    getResourceLimits(): Promise<TaskAgentInterfaces.ResourceLimit[]>;
    /**
     * @param {string} parallelismTag
     * @param {boolean} poolIsHosted
     * @param {boolean} includeRunningRequests
     */
    getResourceUsage(parallelismTag?: string, poolIsHosted?: boolean, includeRunningRequests?: boolean): Promise<TaskAgentInterfaces.ResourceUsage>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     */
    getTaskGroupHistory(project: string, taskGroupId: string): Promise<TaskAgentInterfaces.TaskGroupRevision[]>;
    /**
     * Delete a secure file
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     */
    deleteSecureFile(project: string, secureFileId: string): Promise<void>;
    /**
     * Download a secure file by Id
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @param {string} ticket - A valid download ticket
     * @param {boolean} download - If download is true, the file is sent as attachement in the response body. If download is false, the response body contains the file stream.
     */
    downloadSecureFile(project: string, secureFileId: string, ticket: string, download?: boolean): Promise<NodeJS.ReadableStream>;
    /**
     * Get a secure file
     *
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     * @param {boolean} includeDownloadTicket - If includeDownloadTicket is true and the caller has permissions, a download ticket is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    getSecureFile(project: string, secureFileId: string, includeDownloadTicket?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile>;
    /**
     * Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter - Filter by secure file permissions for View, Manage or Use action. Defaults to View.
     */
    getSecureFiles(project: string, namePattern?: string, includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    /**
     * Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} secureFileIds - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    getSecureFilesByIds(project: string, secureFileIds: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    /**
     * Get secure files
     *
     * @param {string} project - Project ID or project name
     * @param {string[]} secureFileNames - A list of secure file Ids
     * @param {boolean} includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param {TaskAgentInterfaces.SecureFileActionFilter} actionFilter
     */
    getSecureFilesByNames(project: string, secureFileNames: string[], includeDownloadTickets?: boolean, actionFilter?: TaskAgentInterfaces.SecureFileActionFilter): Promise<TaskAgentInterfaces.SecureFile[]>;
    /**
     * Query secure files using a name pattern and a condition on file properties.
     *
     * @param {string} condition - The main condition syntax is described [here](https://go.microsoft.com/fwlink/?linkid=842996). Use the *property('property-name')* function to access the value of the specified property of a secure file. It returns null if the property is not set. E.g. ``` and( eq( property('devices'), '2' ), in( property('provisioning profile type'), 'ad hoc', 'development' ) ) ```
     * @param {string} project - Project ID or project name
     * @param {string} namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     */
    querySecureFilesByProperties(condition: string, project: string, namePattern?: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    /**
     * Update the name or properties of an existing secure file
     *
     * @param {TaskAgentInterfaces.SecureFile} secureFile - The secure file with updated name and/or properties
     * @param {string} project - Project ID or project name
     * @param {string} secureFileId - The unique secure file Id
     */
    updateSecureFile(secureFile: TaskAgentInterfaces.SecureFile, project: string, secureFileId: string): Promise<TaskAgentInterfaces.SecureFile>;
    /**
     * Update properties and/or names of a set of secure files. Files are identified by their IDs. Properties provided override the existing one entirely, i.e. do not merge.
     *
     * @param {TaskAgentInterfaces.SecureFile[]} secureFiles - A list of secure file objects. Only three field must be populated Id, Name, and Properties. The rest of fields in the object are ignored.
     * @param {string} project - Project ID or project name
     */
    updateSecureFiles(secureFiles: TaskAgentInterfaces.SecureFile[], project: string): Promise<TaskAgentInterfaces.SecureFile[]>;
    /**
     * Upload a secure file, include the file stream in the request body
     *
     * @param {NodeJS.ReadableStream} contentStream - Content to upload
     * @param {string} project - Project ID or project name
     * @param {string} name - Name of the file to upload
     */
    uploadSecureFile(customHeaders: any, contentStream: NodeJS.ReadableStream, project: string, name: string): Promise<TaskAgentInterfaces.SecureFile>;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpointRequest} serviceEndpointRequest
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     */
    executeServiceEndpointRequest(serviceEndpointRequest: TaskAgentInterfaces.ServiceEndpointRequest, project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpointRequestResult>;
    /**
     * Proxy for a GET request defined by an service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param {TaskAgentInterfaces.DataSourceBinding} binding - Describes the data source to fetch.
     * @param {string} project - Project ID or project name
     */
    queryServiceEndpoint(binding: TaskAgentInterfaces.DataSourceBinding, project: string): Promise<string[]>;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     */
    createServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     */
    deleteServiceEndpoint(project: string, endpointId: string): Promise<void>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     */
    getServiceEndpointDetails(project: string, endpointId: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {string[]} endpointIds
     * @param {boolean} includeFailed
     */
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string[]} endpointNames
     * @param {string} type
     * @param {string[]} authSchemes
     * @param {boolean} includeFailed
     */
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], includeFailed?: boolean): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint} endpoint
     * @param {string} project - Project ID or project name
     * @param {string} endpointId
     * @param {string} operation
     */
    updateServiceEndpoint(endpoint: TaskAgentInterfaces.ServiceEndpoint, project: string, endpointId: string, operation?: string): Promise<TaskAgentInterfaces.ServiceEndpoint>;
    /**
     * @param {TaskAgentInterfaces.ServiceEndpoint[]} endpoints
     * @param {string} project - Project ID or project name
     */
    updateServiceEndpoints(endpoints: TaskAgentInterfaces.ServiceEndpoint[], project: string): Promise<TaskAgentInterfaces.ServiceEndpoint[]>;
    /**
     * @param {string} type
     * @param {string} scheme
     */
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<TaskAgentInterfaces.ServiceEndpointType[]>;
    /**
     * @param {TaskAgentInterfaces.TaskAgentSession} session
     * @param {number} poolId
     */
    createAgentSession(session: TaskAgentInterfaces.TaskAgentSession, poolId: number): Promise<TaskAgentInterfaces.TaskAgentSession>;
    /**
     * @param {number} poolId
     * @param {string} sessionId
     */
    deleteAgentSession(poolId: number, sessionId: string): Promise<void>;
    /**
     * Register a deployment target to a deployment group. Generally this is called by agent configuration tool.
     *
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - Deployment target to register.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which the deployment target is registered.
     */
    addDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * Delete a deployment target in a deployment group. This deletes the agent from associated deployment pool too.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is deleted.
     * @param {number} targetId - ID of the deployment target to delete.
     */
    deleteDeploymentTarget(project: string, deploymentGroupId: number, targetId: number): Promise<void>;
    /**
     * Get a deployment target by its ID in a deployment group
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group to which deployment target belongs.
     * @param {number} targetId - ID of the deployment target to return.
     * @param {TaskAgentInterfaces.DeploymentTargetExpands} expand - Include these additional details in the returned objects.
     */
    getDeploymentTarget(project: string, deploymentGroupId: number, targetId: number, expand?: TaskAgentInterfaces.DeploymentTargetExpands): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * Get a list of deployment targets in a deployment group.
     *
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group.
     * @param {string[]} tags - Get only the deployment targets that contain all these comma separted list of tags.
     * @param {string} name - Name pattern of the deployment targets to return.
     * @param {boolean} partialNameMatch - When set to true, treats **name** as pattern. Else treats it as absolute match. Default is **false**.
     * @param {TaskAgentInterfaces.DeploymentTargetExpands} expand - Include these additional details in the returned objects.
     * @param {TaskAgentInterfaces.TaskAgentStatusFilter} agentStatus - Get only deployment targets that have this status.
     * @param {TaskAgentInterfaces.TaskAgentJobResultFilter} agentJobResult - Get only deployment targets that have this last job result.
     * @param {string} continuationToken - Get deployment targets with names greater than this continuationToken lexicographically.
     * @param {number} top - Maximum number of deployment targets to return. Default is **1000**.
     * @param {boolean} enabled - Get only deployment targets that are enabled or disabled. Default is 'null' which returns all the targets.
     */
    getDeploymentTargets(project: string, deploymentGroupId: number, tags?: string[], name?: string, partialNameMatch?: boolean, expand?: TaskAgentInterfaces.DeploymentTargetExpands, agentStatus?: TaskAgentInterfaces.TaskAgentStatusFilter, agentJobResult?: TaskAgentInterfaces.TaskAgentJobResultFilter, continuationToken?: string, top?: number, enabled?: boolean): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * Replace a deployment target in a deployment group. Generally this is called by agent configuration tool.
     *
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - New deployment target.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is replaced.
     * @param {number} targetId - ID of the deployment target to replace.
     */
    replaceDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * Update a deployment target and its agent properties in a deployment group. Generally this is called by agent configuration tool.
     *
     * @param {TaskAgentInterfaces.DeploymentMachine} machine - Deployment target to update.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment target is updated.
     * @param {number} targetId - ID of the deployment target to update.
     */
    updateDeploymentTarget(machine: TaskAgentInterfaces.DeploymentMachine, project: string, deploymentGroupId: number, targetId: number): Promise<TaskAgentInterfaces.DeploymentMachine>;
    /**
     * Update tags of a list of deployment targets in a deployment group.
     *
     * @param {TaskAgentInterfaces.DeploymentTargetUpdateParameter[]} machines - Deployment targets with tags to udpdate.
     * @param {string} project - Project ID or project name
     * @param {number} deploymentGroupId - ID of the deployment group in which deployment targets are updated.
     */
    updateDeploymentTargets(machines: TaskAgentInterfaces.DeploymentTargetUpdateParameter[], project: string, deploymentGroupId: number): Promise<TaskAgentInterfaces.DeploymentMachine[]>;
    /**
     * Create a task group.
     *
     * @param {TaskAgentInterfaces.TaskGroupCreateParameter} taskGroup - Task group object to create.
     * @param {string} project - Project ID or project name
     */
    addTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupCreateParameter, project: string): Promise<TaskAgentInterfaces.TaskGroup>;
    /**
     * Delete a task group.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to be deleted.
     * @param {string} comment - Comments to delete.
     */
    deleteTaskGroup(project: string, taskGroupId: string, comment?: string): Promise<void>;
    /**
     * Get task group.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {string} versionSpec - version specification of the task group. examples: 1, 1.0.
     * @param {TaskAgentInterfaces.TaskGroupExpands} expand - The properties that should be expanded. example $expand=Tasks will expand nested task groups.
     */
    getTaskGroup(project: string, taskGroupId: string, versionSpec: string, expand?: TaskAgentInterfaces.TaskGroupExpands): Promise<TaskAgentInterfaces.TaskGroup>;
    /**
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {number} revision
     */
    getTaskGroupRevision(project: string, taskGroupId: string, revision: number): Promise<NodeJS.ReadableStream>;
    /**
     * List task groups.
     *
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group.
     * @param {boolean} expanded - 'true' to recursively expand task groups. Default is 'false'.
     * @param {string} taskIdFilter - Guid of the taskId to filter.
     * @param {boolean} deleted - 'true'to include deleted task groups. Default is 'false'.
     * @param {number} top - Number of task groups to get.
     * @param {Date} continuationToken - Gets the task groups after the continuation token provided.
     * @param {TaskAgentInterfaces.TaskGroupQueryOrder} queryOrder - Gets the results in the defined order. Default is 'CreatedOnDescending'.
     */
    getTaskGroups(project: string, taskGroupId?: string, expanded?: boolean, taskIdFilter?: string, deleted?: boolean, top?: number, continuationToken?: Date, queryOrder?: TaskAgentInterfaces.TaskGroupQueryOrder): Promise<TaskAgentInterfaces.TaskGroup[]>;
    /**
     * @param {TaskAgentInterfaces.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId
     * @param {boolean} disablePriorVersions
     */
    publishPreviewTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string, taskGroupId: string, disablePriorVersions?: boolean): Promise<TaskAgentInterfaces.TaskGroup[]>;
    /**
     * @param {TaskAgentInterfaces.PublishTaskGroupMetadata} taskGroupMetadata
     * @param {string} project - Project ID or project name
     * @param {string} parentTaskGroupId
     */
    publishTaskGroup(taskGroupMetadata: TaskAgentInterfaces.PublishTaskGroupMetadata, project: string, parentTaskGroupId: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    /**
     * @param {TaskAgentInterfaces.TaskGroup} taskGroup
     * @param {string} project - Project ID or project name
     */
    undeleteTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroup, project: string): Promise<TaskAgentInterfaces.TaskGroup[]>;
    /**
     * Update a task group.
     *
     * @param {TaskAgentInterfaces.TaskGroupUpdateParameter} taskGroup - Task group to update.
     * @param {string} project - Project ID or project name
     * @param {string} taskGroupId - Id of the task group to update.
     */
    updateTaskGroup(taskGroup: TaskAgentInterfaces.TaskGroupUpdateParameter, project: string, taskGroupId?: string): Promise<TaskAgentInterfaces.TaskGroup>;
    /**
     * @param {string} taskId
     */
    deleteTaskDefinition(taskId: string): Promise<void>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     */
    getTaskContentZip(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<NodeJS.ReadableStream>;
    /**
     * @param {string} taskId
     * @param {string} versionString
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     */
    getTaskDefinition(taskId: string, versionString: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition>;
    /**
     * @param {string} taskId
     * @param {string[]} visibility
     * @param {boolean} scopeLocal
     */
    getTaskDefinitions(taskId?: string, visibility?: string[], scopeLocal?: boolean): Promise<TaskAgentInterfaces.TaskDefinition[]>;
    /**
     * @param {number} poolId
     * @param {number} agentId
     * @param {string} currentState
     */
    updateAgentUpdateState(poolId: number, agentId: number, currentState: string): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * @param {{ [key: string] : string; }} userCapabilities
     * @param {number} poolId
     * @param {number} agentId
     */
    updateAgentUserCapabilities(userCapabilities: {
        [key: string]: string;
    }, poolId: number, agentId: number): Promise<TaskAgentInterfaces.TaskAgent>;
    /**
     * Add a variable group.
     *
     * @param {TaskAgentInterfaces.VariableGroupParameters} group - Variable group to add.
     * @param {string} project - Project ID or project name
     */
    addVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string): Promise<TaskAgentInterfaces.VariableGroup>;
    /**
     * Delete a variable group
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group.
     */
    deleteVariableGroup(project: string, groupId: number): Promise<void>;
    /**
     * Get a variable group.
     *
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group.
     */
    getVariableGroup(project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    /**
     * Get variable groups.
     *
     * @param {string} project - Project ID or project name
     * @param {string} groupName - Name of variable group.
     * @param {TaskAgentInterfaces.VariableGroupActionFilter} actionFilter - Action filter for the variable group. It specifies the action which can be performed on the variable groups.
     * @param {number} top - Number of variable groups to get.
     * @param {number} continuationToken - Gets the variable groups after the continuation token provided.
     * @param {TaskAgentInterfaces.VariableGroupQueryOrder} queryOrder - Gets the results in the defined order. Default is 'IdDescending'.
     */
    getVariableGroups(project: string, groupName?: string, actionFilter?: TaskAgentInterfaces.VariableGroupActionFilter, top?: number, continuationToken?: number, queryOrder?: TaskAgentInterfaces.VariableGroupQueryOrder): Promise<TaskAgentInterfaces.VariableGroup[]>;
    /**
     * Get variable groups by ids.
     *
     * @param {string} project - Project ID or project name
     * @param {number[]} groupIds - Comma separated list of Ids of variable groups.
     */
    getVariableGroupsById(project: string, groupIds: number[]): Promise<TaskAgentInterfaces.VariableGroup[]>;
    /**
     * Update a variable group.
     *
     * @param {TaskAgentInterfaces.VariableGroupParameters} group - Variable group to update.
     * @param {string} project - Project ID or project name
     * @param {number} groupId - Id of the variable group to update.
     */
    updateVariableGroup(group: TaskAgentInterfaces.VariableGroupParameters, project: string, groupId: number): Promise<TaskAgentInterfaces.VariableGroup>;
    /**
     * @param {TaskAgentInterfaces.AadOauthTokenRequest} authenticationRequest
     */
    acquireAccessToken(authenticationRequest: TaskAgentInterfaces.AadOauthTokenRequest): Promise<TaskAgentInterfaces.AadOauthTokenResult>;
    /**
     * @param {string} tenantId
     * @param {string} redirectUri
     * @param {TaskAgentInterfaces.AadLoginPromptOption} promptOption
     * @param {string} completeCallbackPayload
     * @param {boolean} completeCallbackByAuthCode
     */
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: TaskAgentInterfaces.AadLoginPromptOption, completeCallbackPayload?: string, completeCallbackByAuthCode?: boolean): Promise<string>;
    /**
     */
    getVstsAadTenantId(): Promise<string>;
}
