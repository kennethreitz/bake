import DistributedTaskCommonInterfaces = require("../interfaces/DistributedTaskCommonInterfaces");
import FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
import VSSInterfaces = require("../interfaces/common/VSSInterfaces");
export declare enum AadLoginPromptOption {
    /**
     * Do not provide a prompt option
     */
    NoOption = 0,
    /**
     * Force the user to login again.
     */
    Login = 1,
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching bewtween the variants of a dual-homed user.
     */
    SelectAccount = 2,
    /**
     * Force the user to login again. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login. </remarks>
     */
    FreshLogin = 3,
    /**
     * Force the user to login again with mfa. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login, if MFA is required. </remarks>
     */
    FreshLoginWithMfa = 4,
}
export interface AadOauthTokenRequest {
    refresh?: boolean;
    resource?: string;
    tenantId?: string;
    token?: string;
}
export interface AadOauthTokenResult {
    accessToken?: string;
    refreshTokenCache?: string;
}
export interface AgentChangeEvent {
    agent?: TaskAgent;
    eventType?: string;
    pool?: TaskAgentPoolReference;
    poolId?: number;
    timeStamp?: Date;
}
export interface AgentJobRequestMessage extends JobRequestMessage {
    lockedUntil?: Date;
    lockToken?: string;
    requestId?: number;
    tasks?: TaskInstance[];
}
export interface AgentMigrationMessage {
    accessToken?: string;
}
export interface AgentPoolEvent {
    eventType?: string;
    pool?: TaskAgentPool;
}
export interface AgentQueueEvent {
    eventType?: string;
    queue?: TaskAgentQueue;
}
export interface AgentQueuesEvent {
    eventType?: string;
    queues?: TaskAgentQueue[];
}
export interface AgentRefreshMessage {
    agentId?: number;
    targetVersion?: string;
    timeout?: any;
}
export declare enum AuditAction {
    Add = 1,
    Update = 2,
    Delete = 3,
    Undelete = 4,
}
export interface AuthenticationSchemeReference {
    inputs?: {
        [key: string]: string;
    };
    type?: string;
}
export interface AuthorizationHeader {
    /**
     * Gets or sets the name of authorization header.
     */
    name?: string;
    /**
     * Gets or sets the value of authorization header.
     */
    value?: string;
}
export interface AzureKeyVaultPermission extends AzureResourcePermission {
    vault?: string;
}
export interface AzureKeyVaultVariableGroupProviderData extends VariableGroupProviderData {
    lastRefreshedOn?: Date;
    serviceEndpointId?: string;
    vault?: string;
}
export interface AzureKeyVaultVariableValue extends VariableValue {
    contentType?: string;
    enabled?: boolean;
    expires?: Date;
}
/**
 * Azure Management Group
 */
export interface AzureManagementGroup {
    /**
     * Display name of azure management group
     */
    displayName?: string;
    /**
     * Id of azure management group
     */
    id?: string;
    /**
     * Azure management group name
     */
    name?: string;
    /**
     * Id of tenant from which azure management group belogs
     */
    tenantId?: string;
}
/**
 * Azure management group query result
 */
export interface AzureManagementGroupQueryResult {
    /**
     * Error message in case of an exception
     */
    errorMessage?: string;
    /**
     * List of azure management groups
     */
    value?: AzureManagementGroup[];
}
export interface AzurePermission {
    provisioned?: boolean;
    resourceProvider?: string;
}
export interface AzureResourcePermission extends AzurePermission {
    resourceGroup?: string;
}
export interface AzureRoleAssignmentPermission extends AzurePermission {
    roleAssignmentId?: string;
}
export interface AzureSpnOperationStatus {
    state?: string;
    statusMessage?: string;
}
export interface AzureSubscription {
    displayName?: string;
    subscriptionId?: string;
    subscriptionTenantId?: string;
    subscriptionTenantName?: string;
}
export interface AzureSubscriptionQueryResult {
    errorMessage?: string;
    value?: AzureSubscription[];
}
export interface ClientCertificate {
    /**
     * Gets or sets the value of client certificate.
     */
    value?: string;
}
export interface CounterVariable {
    prefix?: string;
    seed?: number;
    value?: number;
}
export interface DataSource {
    authenticationScheme?: AuthenticationSchemeReference;
    endpointUrl?: string;
    headers?: AuthorizationHeader[];
    name?: string;
    resourceUrl?: string;
    resultSelector?: string;
}
export interface DataSourceBinding extends DistributedTaskCommonInterfaces.DataSourceBindingBase {
}
export interface DataSourceDetails {
    dataSourceName?: string;
    dataSourceUrl?: string;
    headers?: AuthorizationHeader[];
    parameters?: {
        [key: string]: string;
    };
    resourceUrl?: string;
    resultSelector?: string;
}
export interface Demand {
    name?: string;
    value?: string;
}
export interface DemandEquals extends Demand {
}
export interface DemandExists extends Demand {
}
export interface DemandMinimumVersion extends Demand {
}
export interface DependencyBinding {
    key?: string;
    value?: string;
}
export interface DependencyData {
    input?: string;
    map?: {
        key: string;
        value: {
            key: string;
            value: string;
        }[];
    }[];
}
export interface DependsOn {
    input?: string;
    map?: DependencyBinding[];
}
export interface DeploymentGatesChangeEvent {
    gateNames?: string[];
}
/**
 * Deployment group.
 */
export interface DeploymentGroup extends DeploymentGroupReference {
    /**
     * Description of the deployment group.
     */
    description?: string;
    /**
     * Number of deployment targets in the deployment group.
     */
    machineCount?: number;
    /**
     * List of deployment targets in the deployment group.
     */
    machines?: DeploymentMachine[];
    /**
     * List of unique tags across all deployment targets in the deployment group.
     */
    machineTags?: string[];
}
/**
 * This is useful in getting a list of deployment groups, filtered for which caller has permissions to take a particular action.
 */
export declare enum DeploymentGroupActionFilter {
    /**
     * All deployment groups.
     */
    None = 0,
    /**
     * Only deployment groups for which caller has **manage** permission.
     */
    Manage = 2,
    /**
     * Only deployment groups for which caller has **use** permission.
     */
    Use = 16,
}
/**
 * Properties to create Deployment group.
 */
export interface DeploymentGroupCreateParameter {
    /**
     * Description of the deployment group.
     */
    description?: string;
    /**
     * Name of the deployment group.
     */
    name?: string;
    /**
     * Deployment pool in which deployment agents are registered. This is obsolete. Kept for compatibility. Will be marked obsolete explicitly by M132.
     */
    pool?: DeploymentGroupCreateParameterPoolProperty;
    /**
     * Identifier of the deployment pool in which deployment agents are registered.
     */
    poolId?: number;
}
/**
 * Properties of Deployment pool to create Deployment group.
 */
export interface DeploymentGroupCreateParameterPoolProperty {
    /**
     * Deployment pool identifier.
     */
    id?: number;
}
/**
 * Properties to be included or expanded in deployment group objects. This is useful when getting a single or list of deployment grouops.
 */
export declare enum DeploymentGroupExpands {
    /**
     * No additional properties.
     */
    None = 0,
    /**
     * Deprecated: Include all the deployment targets.
     */
    Machines = 2,
    /**
     * Include unique list of tags across all deployment targets.
     */
    Tags = 4,
}
/**
 * Deployment group metrics.
 */
export interface DeploymentGroupMetrics {
    /**
     * List of deployment group properties. And types of metrics provided for those properties.
     */
    columnsHeader?: MetricsColumnsHeader;
    /**
     * Deployment group.
     */
    deploymentGroup?: DeploymentGroupReference;
    /**
     * Values of properties and the metrics. E.g. 1: total count of deployment targets for which 'TargetState' is 'offline'. E.g. 2: Average time of deployment to the deployment targets for which 'LastJobStatus' is 'passed' and 'TargetState' is 'online'.
     */
    rows?: MetricsRow[];
}
/**
 * Deployment group reference. This is useful for referring a deployment group in another object.
 */
export interface DeploymentGroupReference {
    /**
     * Deployment group identifier.
     */
    id?: number;
    /**
     * Name of the deployment group.
     */
    name?: string;
    /**
     * Deployment pool in which deployment agents are registered.
     */
    pool?: TaskAgentPoolReference;
    /**
     * Project to which the deployment group belongs.
     */
    project?: ProjectReference;
}
/**
 * Deployment group update parameter.
 */
export interface DeploymentGroupUpdateParameter {
    /**
     * Description of the deployment group.
     */
    description?: string;
    /**
     * Name of the deployment group.
     */
    name?: string;
}
/**
 * Deployment target.
 */
export interface DeploymentMachine {
    /**
     * Deployment agent.
     */
    agent?: TaskAgent;
    /**
     * Deployment target Identifier.
     */
    id?: number;
    /**
     * Tags of the deployment target.
     */
    tags?: string[];
}
export interface DeploymentMachineChangedData extends DeploymentMachine {
    addedTags?: string[];
    deletedTags?: string[];
}
export declare enum DeploymentMachineExpands {
    None = 0,
    Capabilities = 2,
    AssignedRequest = 4,
}
export interface DeploymentMachineGroup extends DeploymentMachineGroupReference {
    machines?: DeploymentMachine[];
    size?: number;
}
export interface DeploymentMachineGroupReference {
    id?: number;
    name?: string;
    pool?: TaskAgentPoolReference;
    project?: ProjectReference;
}
export interface DeploymentMachinesChangeEvent {
    machineGroupReference?: DeploymentGroupReference;
    machines?: DeploymentMachineChangedData[];
}
/**
 * Deployment pool summary.
 */
export interface DeploymentPoolSummary {
    /**
     * List of deployment groups referring to the deployment pool.
     */
    deploymentGroups?: DeploymentGroupReference[];
    /**
     * Number of deployment agents that are offline.
     */
    offlineAgentsCount?: number;
    /**
     * Number of deployment agents that are online.
     */
    onlineAgentsCount?: number;
    /**
     * Deployment pool.
     */
    pool?: TaskAgentPoolReference;
}
/**
 * Properties to be included or expanded in deployment pool summary objects. This is useful when getting a single or list of deployment pool summaries.
 */
export declare enum DeploymentPoolSummaryExpands {
    /**
     * No additional properties
     */
    None = 0,
    /**
     * Include deployment groups referring to the deployment pool.
     */
    DeploymentGroups = 2,
}
/**
 * Properties to be included or expanded in deployment target objects. This is useful when getting a single or list of deployment targets.
 */
export declare enum DeploymentTargetExpands {
    /**
     * No additional properties.
     */
    None = 0,
    /**
     * Include capabilities of the deployment agent.
     */
    Capabilities = 2,
    /**
     * Include the job request assigned to the deployment agent.
     */
    AssignedRequest = 4,
    /**
     * Include the last completed job request of the deployment agent.
     */
    LastCompletedRequest = 8,
}
/**
 * Deployment target update parameter.
 */
export interface DeploymentTargetUpdateParameter {
    /**
     * Identifier of the deployment target.
     */
    id?: number;
    tags?: string[];
}
export interface DiagnosticLogMetadata {
    agentId?: number;
    agentName?: string;
    fileName?: string;
    phaseName?: string;
    phaseResult?: string;
    poolId?: number;
}
export interface EndpointAuthorization {
    /**
     * Gets or sets the parameters for the selected authorization scheme.
     */
    parameters?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the scheme used for service endpoint authentication.
     */
    scheme?: string;
}
/**
 * Represents url of the service endpoint.
 */
export interface EndpointUrl {
    /**
     * Gets or sets the dependency bindings.
     */
    dependsOn?: DependsOn;
    /**
     * Gets or sets the display name of service endpoint url.
     */
    displayName?: string;
    /**
     * Gets or sets the help text of service endpoint url.
     */
    helpText?: string;
    /**
     * Gets or sets the visibility of service endpoint url.
     */
    isVisible?: string;
    /**
     * Gets or sets the value of service endpoint url.
     */
    value?: string;
}
export interface EventsConfig {
}
export interface ExpressionValidationItem extends ValidationItem {
}
export interface HelpLink {
    text?: string;
    url?: string;
}
export interface InputBindingContext {
    /**
     * Value of the input
     */
    value?: string;
}
export interface InputValidationItem extends ValidationItem {
    /**
     * Provides binding context for the expression to evaluate
     */
    context?: InputBindingContext;
}
export interface InputValidationRequest {
    inputs?: {
        [key: string]: ValidationItem;
    };
}
export interface Issue {
    category?: string;
    data?: {
        [key: string]: string;
    };
    message?: string;
    type?: IssueType;
}
export declare enum IssueType {
    Error = 1,
    Warning = 2,
}
export interface JobAssignedEvent extends JobEvent {
    request?: TaskAgentJobRequest;
}
export interface JobCancelMessage {
    jobId?: string;
    timeout?: any;
}
export interface JobCompletedEvent extends JobEvent {
    requestId?: number;
    result?: TaskResult;
}
/**
 * Represents the context of variables and vectors for a job request.
 */
export interface JobEnvironment {
    endpoints?: ServiceEndpoint[];
    mask?: MaskHint[];
    options?: {
        [key: string]: JobOption;
    };
    secureFiles?: SecureFile[];
    /**
     * Gets or sets the endpoint used for communicating back to the calling service.
     */
    systemConnection?: ServiceEndpoint;
    variables?: {
        [key: string]: string;
    };
}
export interface JobEvent {
    jobId?: string;
    name?: string;
}
export interface JobEventConfig {
    timeout?: string;
}
export interface JobEventsConfig extends EventsConfig {
    jobAssigned?: JobEventConfig;
    jobCompleted?: JobEventConfig;
    jobStarted?: JobEventConfig;
}
/**
 * Represents an option that may affect the way an agent runs the job.
 */
export interface JobOption {
    data?: {
        [key: string]: string;
    };
    /**
     * Gets the id of the option.
     */
    id?: string;
}
export interface JobRequestMessage {
    environment?: JobEnvironment;
    jobId?: string;
    jobName?: string;
    jobRefName?: string;
    messageType?: string;
    plan?: TaskOrchestrationPlanReference;
    timeline?: TimelineReference;
}
export interface JobStartedEvent extends JobEvent {
}
export declare enum MachineGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
/**
 * Represents a purchase of resource units in a secondary marketplace.
 */
export interface MarketplacePurchasedLicense {
    /**
     * The Marketplace display name.
     */
    marketplaceName?: string;
    /**
     * The name of the identity making the purchase as seen by the marketplace
     */
    purchaserName?: string;
    /**
     * The quantity purchased.
     */
    purchaseUnitCount?: number;
}
export interface MaskHint {
    type?: MaskType;
    value?: string;
}
export declare enum MaskType {
    Variable = 1,
    Regex = 2,
}
/**
 * Meta data for a metrics column.
 */
export interface MetricsColumnMetaData {
    /**
     * Name.
     */
    columnName?: string;
    /**
     * Data type.
     */
    columnValueType?: string;
}
/**
 * Metrics columns header
 */
export interface MetricsColumnsHeader {
    /**
     * Properties of deployment group for which metrics are provided. E.g. 1: LastJobStatus E.g. 2: TargetState
     */
    dimensions?: MetricsColumnMetaData[];
    /**
     * The types of metrics. E.g. 1: total count of deployment targets. E.g. 2: Average time of deployment to the deployment targets.
     */
    metrics?: MetricsColumnMetaData[];
}
/**
 * Metrics row.
 */
export interface MetricsRow {
    /**
     * The values of the properties mentioned as 'Dimensions' in column header. E.g. 1: For a property 'LastJobStatus' - metrics will be provided for 'passed', 'failed', etc. E.g. 2: For a property 'TargetState' - metrics will be provided for 'online', 'offline' targets.
     */
    dimensions?: string[];
    /**
     * Metrics in serialized format. Should be deserialized based on the data type provided in header.
     */
    metrics?: string[];
}
/**
 * Represents a downloadable package.
 */
export interface PackageMetadata {
    /**
     * The date the package was created
     */
    createdOn?: Date;
    /**
     * A direct link to download the package.
     */
    downloadUrl?: string;
    /**
     * The UI uses this to display instructions, i.e. "unzip MyAgent.zip"
     */
    filename?: string;
    /**
     * MD5 hash as a base64 string
     */
    hashValue?: string;
    /**
     * A link to documentation
     */
    infoUrl?: string;
    /**
     * The platform (win7, linux, etc.)
     */
    platform?: string;
    /**
     * The type of package (e.g. "agent")
     */
    type?: string;
    /**
     * The package version.
     */
    version?: PackageVersion;
}
export interface PackageVersion {
    major?: number;
    minor?: number;
    patch?: number;
}
export interface PlanEnvironment {
    mask?: MaskHint[];
    options?: {
        [key: string]: JobOption;
    };
    variables?: {
        [key: string]: string;
    };
}
export declare enum PlanGroupStatus {
    Running = 1,
    Queued = 2,
    All = 3,
}
export declare enum PlanGroupStatusFilter {
    Running = 1,
    Queued = 2,
    All = 3,
}
export interface ProjectReference {
    id?: string;
    name?: string;
}
export interface PublishTaskGroupMetadata {
    comment?: string;
    parentDefinitionRevision?: number;
    preview?: boolean;
    taskGroupId?: string;
    taskGroupRevision?: number;
}
export interface ResourceLimit {
    failedToReachAllProviders?: boolean;
    hostId?: string;
    isHosted?: boolean;
    isPremium?: boolean;
    parallelismTag?: string;
    resourceLimitsData?: {
        [key: string]: string;
    };
    totalCount?: number;
    totalMinutes?: number;
}
export interface ResourceUsage {
    resourceLimit?: ResourceLimit;
    runningRequests?: TaskAgentJobRequest[];
    usedCount?: number;
    usedMinutes?: number;
}
export interface ResultTransformationDetails {
    resultTemplate?: string;
}
export interface SecureFile {
    createdBy?: VSSInterfaces.IdentityRef;
    createdOn?: Date;
    id?: string;
    modifiedBy?: VSSInterfaces.IdentityRef;
    modifiedOn?: Date;
    name?: string;
    properties?: {
        [key: string]: string;
    };
    ticket?: string;
}
export declare enum SecureFileActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface SendJobResponse {
    events?: JobEventsConfig;
    variables?: {
        [key: string]: string;
    };
}
export interface ServerExecutionDefinition {
    events?: EventsConfig;
    handlerName?: string;
}
export interface ServerTaskRequestMessage extends JobRequestMessage {
    taskDefinition?: TaskDefinition;
    taskInstance?: TaskInstance;
}
/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export interface ServiceEndpoint {
    /**
     * Gets or sets the identity reference for the administrators group of the service endpoint.
     */
    administratorsGroup?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization?: EndpointAuthorization;
    /**
     * Gets or sets the identity reference for the user who created the Service endpoint.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    data?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the description of endpoint.
     */
    description?: string;
    groupScopeId?: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id?: string;
    /**
     * EndPoint state indictor
     */
    isReady?: boolean;
    /**
     * Indicates whether service endpoint is shared with other projects or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name?: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus?: any;
    /**
     * Gets or sets the identity reference for the readers group of the service endpoint.
     */
    readersGroup?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the type of the endpoint.
     */
    type?: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url?: string;
}
export interface ServiceEndpointAuthenticationScheme {
    /**
     * Gets or sets the authorization headers of service endpoint authentication scheme.
     */
    authorizationHeaders?: AuthorizationHeader[];
    /**
     * Gets or sets the certificates of service endpoint authentication scheme.
     */
    clientCertificates?: ClientCertificate[];
    /**
     * Gets or sets the display name for the service endpoint authentication scheme.
     */
    displayName?: string;
    /**
     * Gets or sets the input descriptors for the service endpoint authentication scheme.
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the scheme for service endpoint authentication.
     */
    scheme?: string;
}
export interface ServiceEndpointDetails {
    authorization?: EndpointAuthorization;
    data?: {
        [key: string]: string;
    };
    type?: string;
    url?: string;
}
/**
 * Represents service endpoint execution data.
 */
export interface ServiceEndpointExecutionData {
    /**
     * Gets the definition of service endpoint execution owner.
     */
    definition?: TaskOrchestrationOwner;
    /**
     * Gets the finish time of service endpoint execution.
     */
    finishTime?: Date;
    /**
     * Gets the Id of service endpoint execution data.
     */
    id?: number;
    /**
     * Gets the owner of service endpoint execution data.
     */
    owner?: TaskOrchestrationOwner;
    /**
     * Gets the plan type of service endpoint execution data.
     */
    planType?: string;
    /**
     * Gets the result of service endpoint execution.
     */
    result?: TaskResult;
    /**
     * Gets the start time of service endpoint execution.
     */
    startTime?: Date;
}
export interface ServiceEndpointExecutionRecord {
    /**
     * Gets the execution data of service endpoint execution.
     */
    data?: ServiceEndpointExecutionData;
    /**
     * Gets the Id of service endpoint.
     */
    endpointId?: string;
}
export interface ServiceEndpointExecutionRecordsInput {
    data?: ServiceEndpointExecutionData;
    endpointIds?: string[];
}
export interface ServiceEndpointRequest {
    dataSourceDetails?: DataSourceDetails;
    resultTransformationDetails?: ResultTransformationDetails;
    serviceEndpointDetails?: ServiceEndpointDetails;
}
export interface ServiceEndpointRequestResult {
    errorMessage?: string;
    result?: any;
    statusCode?: string;
}
/**
 * Represents type of the service endpoint.
 */
export interface ServiceEndpointType {
    /**
     * Authentication scheme of service endpoint type.
     */
    authenticationSchemes?: ServiceEndpointAuthenticationScheme[];
    /**
     * Data sources of service endpoint type.
     */
    dataSources?: DataSource[];
    /**
     * Dependency data of service endpoint type.
     */
    dependencyData?: DependencyData[];
    /**
     * Gets or sets the description of service endpoint type.
     */
    description?: string;
    /**
     * Gets or sets the display name of service endpoint type.
     */
    displayName?: string;
    /**
     * Gets or sets the endpoint url of service endpoint type.
     */
    endpointUrl?: EndpointUrl;
    /**
     * Gets or sets the help link of service endpoint type.
     */
    helpLink?: HelpLink;
    helpMarkDown?: string;
    /**
     * Gets or sets the icon url of service endpoint type.
     */
    iconUrl?: string;
    /**
     * Input descriptor of service endpoint type.
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the name of service endpoint type.
     */
    name?: string;
    /**
     * Trusted hosts of a service endpoint type.
     */
    trustedHosts?: string[];
    /**
     * Gets or sets the ui contribution id of service endpoint type.
     */
    uiContributionId?: string;
}
export interface TaskAgent extends TaskAgentReference {
    /**
     * Gets the Agent Cloud Request that's currently associated with this agent
     */
    assignedAgentCloudRequest?: TaskAgentCloudRequest;
    /**
     * Gets the request which is currently assigned to this agent.
     */
    assignedRequest?: TaskAgentJobRequest;
    /**
     * Gets or sets the authorization information for this agent.
     */
    authorization?: TaskAgentAuthorization;
    /**
     * Gets the date on which this agent was created.
     */
    createdOn?: Date;
    /**
     * Gets the last request which was completed by this agent.
     */
    lastCompletedRequest?: TaskAgentJobRequest;
    /**
     * Gets or sets the maximum job parallelism allowed on this host.
     */
    maxParallelism?: number;
    /**
     * Gets the pending update for this agent.
     */
    pendingUpdate?: TaskAgentUpdate;
    properties?: any;
    /**
     * Gets the date on which the last connectivity status change occurred.
     */
    statusChangedOn?: Date;
    systemCapabilities?: {
        [key: string]: string;
    };
    userCapabilities?: {
        [key: string]: string;
    };
}
/**
 * Provides data necessary for authorizing the agent using OAuth 2.0 authentication flows.
 */
export interface TaskAgentAuthorization {
    /**
     * Gets or sets the endpoint used to obtain access tokens from the configured token service.
     */
    authorizationUrl?: string;
    /**
     * Gets or sets the client identifier for this agent.
     */
    clientId?: string;
    /**
     * Gets or sets the public key used to verify the identity of this agent.
     */
    publicKey?: TaskAgentPublicKey;
}
export interface TaskAgentCloud {
    /**
     * Gets or sets a AcquireAgentEndpoint using which a request can be made to acquire new agent
     */
    acquireAgentEndpoint?: string;
    agentCloudId?: number;
    getAgentDefinitionEndpoint?: string;
    getAgentRequestStatusEndpoint?: string;
    /**
     * Signifies that this Agent Cloud is internal and should not be user-manageable
     */
    internal?: boolean;
    name?: string;
    releaseAgentEndpoint?: string;
    /**
     * Gets or sets the type of the endpoint.
     */
    type?: string;
}
export interface TaskAgentCloudRequest {
    agent?: TaskAgentReference;
    agentCloudId?: number;
    agentConnectedTime?: Date;
    agentData?: any;
    agentSpecification?: any;
    pool?: TaskAgentPoolReference;
    provisionedTime?: Date;
    provisionRequestTime?: Date;
    releaseRequestTime?: Date;
    requestId?: string;
}
export interface TaskAgentCloudType {
    /**
     * Gets or sets the display name of agnet cloud type.
     */
    displayName?: string;
    /**
     * Gets or sets the input descriptors
     */
    inputDescriptors?: FormInputInterfaces.InputDescriptor[];
    /**
     * Gets or sets the name of agent cloud type.
     */
    name?: string;
}
export interface TaskAgentDelaySource {
    delays?: any[];
    taskAgent?: TaskAgentReference;
}
export interface TaskAgentJobRequest {
    agentDelays?: TaskAgentDelaySource[];
    agentSpecification?: any;
    assignTime?: Date;
    data?: {
        [key: string]: string;
    };
    definition?: TaskOrchestrationOwner;
    demands?: Demand[];
    expectedDuration?: any;
    finishTime?: Date;
    hostId?: string;
    jobId?: string;
    jobName?: string;
    lockedUntil?: Date;
    matchedAgents?: TaskAgentReference[];
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    planId?: string;
    planType?: string;
    poolId?: number;
    queueId?: number;
    queueTime?: Date;
    receiveTime?: Date;
    requestId?: number;
    reservedAgent?: TaskAgentReference;
    result?: TaskResult;
    scopeId?: string;
    serviceOwner?: string;
}
/**
 * This is useful in getting a list of deployment targets, filtered by the result of their last job.
 */
export declare enum TaskAgentJobResultFilter {
    /**
     * Only those deployment targets on which last job failed (**Abandoned**, **Canceled**, **Failed**, **Skipped**).
     */
    Failed = 1,
    /**
     * Only those deployment targets on which last job Passed (**Succeeded**, **Succeeded with issues**).
     */
    Passed = 2,
    /**
     * Only those deployment targets that never executed a job.
     */
    NeverDeployed = 4,
    /**
     * All deployment targets.
     */
    All = 7,
}
export interface TaskAgentManualUpdate extends TaskAgentUpdateReason {
}
/**
 * Provides a contract for receiving messages from the task orchestrator.
 */
export interface TaskAgentMessage {
    /**
     * Gets or sets the body of the message. If the <c>IV</c> property is provided the body will need to be decrypted using the <c>TaskAgentSession.EncryptionKey</c> value in addition to the <c>IV</c>.
     */
    body?: string;
    /**
     * Gets or sets the intialization vector used to encrypt this message.
     */
    iV?: number[];
    /**
     * Gets or sets the message identifier.
     */
    messageId?: number;
    /**
     * Gets or sets the message type, describing the data contract found in <c>TaskAgentMessage.Body</c>.
     */
    messageType?: string;
}
export interface TaskAgentMinAgentVersionRequiredUpdate extends TaskAgentUpdateReason {
    jobDefinition?: TaskOrchestrationOwner;
    jobOwner?: TaskOrchestrationOwner;
    minAgentVersion?: Demand;
}
export interface TaskAgentPool extends TaskAgentPoolReference {
    /**
     * Gets or sets an agentCloudId
     */
    agentCloudId?: number;
    /**
     * Gets or sets a value indicating whether or not a queue should be automatically provisioned for each project collection or not.
     */
    autoProvision?: boolean;
    /**
     * Gets or sets a value indicating whether or not the pool should autosize itself based on the Agent Cloud Provider settings
     */
    autoSize?: boolean;
    /**
     * Gets the identity who created this pool. The creator of the pool is automatically added into the administrators group for the pool on creation.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets the date/time of the pool creation.
     */
    createdOn?: Date;
    /**
     * Gets the identity who owns or administrates this pool.
     */
    owner?: VSSInterfaces.IdentityRef;
    properties?: any;
}
export declare enum TaskAgentPoolActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentPoolMaintenanceDefinition {
    /**
     * Enable maintenance
     */
    enabled?: boolean;
    /**
     * Id
     */
    id?: number;
    /**
     * Maintenance job timeout per agent
     */
    jobTimeoutInMinutes?: number;
    /**
     * Max percentage of agents within a pool running maintenance job at given time
     */
    maxConcurrentAgentsPercentage?: number;
    options?: TaskAgentPoolMaintenanceOptions;
    /**
     * Pool reference for the maintenance definition
     */
    pool?: TaskAgentPoolReference;
    retentionPolicy?: TaskAgentPoolMaintenanceRetentionPolicy;
    scheduleSetting?: TaskAgentPoolMaintenanceSchedule;
}
export interface TaskAgentPoolMaintenanceJob {
    /**
     * The maintenance definition for the maintenance job
     */
    definitionId?: number;
    /**
     * The total error counts during the maintenance job
     */
    errorCount?: number;
    /**
     * Time that the maintenance job was completed
     */
    finishTime?: Date;
    /**
     * Id of the maintenance job
     */
    jobId?: number;
    /**
     * The log download url for the maintenance job
     */
    logsDownloadUrl?: string;
    /**
     * Orchestration/Plan Id for the maintenance job
     */
    orchestrationId?: string;
    /**
     * Pool reference for the maintenance job
     */
    pool?: TaskAgentPoolReference;
    /**
     * Time that the maintenance job was queued
     */
    queueTime?: Date;
    /**
     * The identity that queued the maintenance job
     */
    requestedBy?: VSSInterfaces.IdentityRef;
    /**
     * The maintenance job result
     */
    result?: TaskAgentPoolMaintenanceJobResult;
    /**
     * Time that the maintenance job was started
     */
    startTime?: Date;
    /**
     * Status of the maintenance job
     */
    status?: TaskAgentPoolMaintenanceJobStatus;
    targetAgents?: TaskAgentPoolMaintenanceJobTargetAgent[];
    /**
     * The total warning counts during the maintenance job
     */
    warningCount?: number;
}
export declare enum TaskAgentPoolMaintenanceJobResult {
    Succeeded = 1,
    Failed = 2,
    Canceled = 4,
}
export declare enum TaskAgentPoolMaintenanceJobStatus {
    InProgress = 1,
    Completed = 2,
    Cancelling = 4,
    Queued = 8,
}
export interface TaskAgentPoolMaintenanceJobTargetAgent {
    agent?: TaskAgentReference;
    jobId?: number;
    result?: TaskAgentPoolMaintenanceJobResult;
    status?: TaskAgentPoolMaintenanceJobStatus;
}
export interface TaskAgentPoolMaintenanceOptions {
    /**
     * time to consider a System.DefaultWorkingDirectory is stale
     */
    workingDirectoryExpirationInDays?: number;
}
export interface TaskAgentPoolMaintenanceRetentionPolicy {
    /**
     * Number of records to keep for maintenance job executed with this definition.
     */
    numberOfHistoryRecordsToKeep?: number;
}
export interface TaskAgentPoolMaintenanceSchedule {
    /**
     * Days for a build (flags enum for days of the week)
     */
    daysToBuild?: TaskAgentPoolMaintenanceScheduleDays;
    /**
     * The Job Id of the Scheduled job that will queue the pool maintenance job.
     */
    scheduleJobId?: string;
    /**
     * Local timezone hour to start
     */
    startHours?: number;
    /**
     * Local timezone minute to start
     */
    startMinutes?: number;
    /**
     * Time zone of the build schedule (string representation of the time zone id)
     */
    timeZoneId?: string;
}
export declare enum TaskAgentPoolMaintenanceScheduleDays {
    /**
     * Do not run.
     */
    None = 0,
    /**
     * Run on Monday.
     */
    Monday = 1,
    /**
     * Run on Tuesday.
     */
    Tuesday = 2,
    /**
     * Run on Wednesday.
     */
    Wednesday = 4,
    /**
     * Run on Thursday.
     */
    Thursday = 8,
    /**
     * Run on Friday.
     */
    Friday = 16,
    /**
     * Run on Saturday.
     */
    Saturday = 32,
    /**
     * Run on Sunday.
     */
    Sunday = 64,
    /**
     * Run on all days of the week.
     */
    All = 127,
}
export interface TaskAgentPoolReference {
    id?: number;
    /**
     * Gets or sets a value indicating whether or not this pool is managed by the service.
     */
    isHosted?: boolean;
    name?: string;
    /**
     * Gets or sets the type of the pool
     */
    poolType?: TaskAgentPoolType;
    scope?: string;
    /**
     * Gets the current size of the pool.
     */
    size?: number;
}
export interface TaskAgentPoolSummary {
    columnsHeader?: MetricsColumnsHeader;
    deploymentGroups?: DeploymentGroupReference[];
    pool?: TaskAgentPoolReference;
    queues?: TaskAgentQueue[];
    rows?: MetricsRow[];
}
export declare enum TaskAgentPoolType {
    Automation = 1,
    Deployment = 2,
}
/**
 * Represents the public key portion of an RSA asymmetric key.
 */
export interface TaskAgentPublicKey {
    /**
     * Gets or sets the exponent for the public key.
     */
    exponent?: number[];
    /**
     * Gets or sets the modulus for the public key.
     */
    modulus?: number[];
}
export interface TaskAgentQueue {
    /**
     * Id of the queue
     */
    id?: number;
    /**
     * Name of the queue
     */
    name?: string;
    /**
     * Pool reference for this queue
     */
    pool?: TaskAgentPoolReference;
    /**
     * Project Id
     */
    projectId?: string;
}
export declare enum TaskAgentQueueActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface TaskAgentReference {
    _links?: any;
    /**
     * Gets the access point of the agent.
     */
    accessPoint?: string;
    /**
     * Gets or sets a value indicating whether or not this agent should be enabled for job execution.
     */
    enabled?: boolean;
    /**
     * Gets the identifier of the agent.
     */
    id?: number;
    /**
     * Gets the name of the agent.
     */
    name?: string;
    /**
     * Gets the OS of the agent.
     */
    oSDescription?: string;
    /**
     * Gets or sets the current provisioning state of this agent
     */
    provisioningState?: string;
    /**
     * Gets the current connectivity status of the agent.
     */
    status?: TaskAgentStatus;
    /**
     * Gets the version of the agent.
     */
    version?: string;
}
/**
 * Represents a session for performing message exchanges from an agent.
 */
export interface TaskAgentSession {
    /**
     * Gets or sets the agent which is the target of the session.
     */
    agent?: TaskAgentReference;
    /**
     * Gets the key used to encrypt message traffic for this session.
     */
    encryptionKey?: TaskAgentSessionKey;
    /**
     * Gets or sets the owner name of this session. Generally this will be the machine of origination.
     */
    ownerName?: string;
    /**
     * Gets the unique identifier for this session.
     */
    sessionId?: string;
    systemCapabilities?: {
        [key: string]: string;
    };
}
/**
 * Represents a symmetric key used for message-level encryption for communication sent to an agent.
 */
export interface TaskAgentSessionKey {
    /**
     * Gets or sets a value indicating whether or not the key value is encrypted. If this value is true, the Value property should be decrypted using the <c>RSA</c> key exchanged with the server during registration.
     */
    encrypted?: boolean;
    /**
     * Gets or sets the symmetric key value.
     */
    value?: number[];
}
export declare enum TaskAgentStatus {
    Offline = 1,
    Online = 2,
}
/**
 * This is useful in getting a list of deployment targets, filtered by the deployment agent status.
 */
export declare enum TaskAgentStatusFilter {
    /**
     * Only deployment targets that are offline.
     */
    Offline = 1,
    /**
     * Only deployment targets that are online.
     */
    Online = 2,
    /**
     * All deployment targets.
     */
    All = 3,
}
export interface TaskAgentUpdate {
    /**
     * The current state of this agent update
     */
    currentState?: string;
    /**
     * The reason of this agent update
     */
    reason?: TaskAgentUpdateReason;
    /**
     * The identity that request the agent update
     */
    requestedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets the date on which this agent update was requested.
     */
    requestTime?: Date;
    /**
     * Gets or sets the source agent version of the agent update
     */
    sourceVersion?: PackageVersion;
    /**
     * Gets or sets the target agent version of the agent update
     */
    targetVersion?: PackageVersion;
}
export interface TaskAgentUpdateReason {
    code?: TaskAgentUpdateReasonType;
}
export declare enum TaskAgentUpdateReasonType {
    Manual = 1,
    MinAgentVersionRequired = 2,
}
export interface TaskAssignedEvent extends TaskEvent {
}
export interface TaskAttachment {
    _links?: any;
    createdOn?: Date;
    lastChangedBy?: string;
    lastChangedOn?: Date;
    name?: string;
    recordId?: string;
    timelineId?: string;
    type?: string;
}
export interface TaskCompletedEvent extends TaskEvent {
    result?: TaskResult;
}
export interface TaskDefinition {
    agentExecution?: TaskExecution;
    author?: string;
    category?: string;
    contentsUploaded?: boolean;
    contributionIdentifier?: string;
    contributionVersion?: string;
    dataSourceBindings?: DataSourceBinding[];
    definitionType?: string;
    demands?: Demand[];
    deprecated?: boolean;
    description?: string;
    disabled?: boolean;
    execution?: {
        [key: string]: any;
    };
    friendlyName?: string;
    groups?: TaskGroupDefinition[];
    helpMarkDown?: string;
    hostType?: string;
    iconUrl?: string;
    id?: string;
    inputs?: TaskInputDefinition[];
    instanceNameFormat?: string;
    minimumAgentVersion?: string;
    name?: string;
    outputVariables?: TaskOutputVariable[];
    packageLocation?: string;
    packageType?: string;
    postJobExecution?: {
        [key: string]: any;
    };
    preJobExecution?: {
        [key: string]: any;
    };
    preview?: boolean;
    releaseNotes?: string;
    runsOn?: string[];
    satisfies?: string[];
    serverOwned?: boolean;
    showEnvironmentVariables?: boolean;
    sourceDefinitions?: TaskSourceDefinition[];
    sourceLocation?: string;
    version?: TaskVersion;
    visibility?: string[];
}
export interface TaskDefinitionEndpoint {
    /**
     * An ID that identifies a service connection to be used for authenticating endpoint requests.
     */
    connectionId?: string;
    /**
     * An Json based keyselector to filter response returned by fetching the endpoint <c>Url</c>.A Json based keyselector must be prefixed with "jsonpath:". KeySelector can be used to specify the filter to get the keys for the values specified with Selector. <example> The following keyselector defines an Json for extracting nodes named 'ServiceName'. <code> endpoint.KeySelector = "jsonpath://ServiceName"; </code></example>
     */
    keySelector?: string;
    /**
     * The scope as understood by Connected Services. Essentialy, a project-id for now.
     */
    scope?: string;
    /**
     * An XPath/Json based selector to filter response returned by fetching the endpoint <c>Url</c>. An XPath based selector must be prefixed with the string "xpath:". A Json based selector must be prefixed with "jsonpath:". <example> The following selector defines an XPath for extracting nodes named 'ServiceName'. <code> endpoint.Selector = "xpath://ServiceName"; </code></example>
     */
    selector?: string;
    /**
     * TaskId that this endpoint belongs to.
     */
    taskId?: string;
    /**
     * URL to GET.
     */
    url?: string;
}
export interface TaskDefinitionReference {
    /**
     * Gets or sets the definition type. Values can be 'task' or 'metaTask'.
     */
    definitionType: string;
    /**
     * Gets or sets the unique identifier of task.
     */
    id: string;
    /**
     * Gets or sets the version specification of task.
     */
    versionSpec: string;
}
export declare enum TaskDefinitionStatus {
    Preinstalled = 1,
    ReceivedInstallOrUpdate = 2,
    Installed = 3,
    ReceivedUninstall = 4,
    Uninstalled = 5,
    RequestedUpdate = 6,
    Updated = 7,
    AlreadyUpToDate = 8,
    InlineUpdateReceived = 9,
}
export interface TaskEvent extends JobEvent {
    taskId?: string;
}
export interface TaskExecution {
    /**
     * The utility task to run.  Specifying this means that this task definition is simply a meta task to call another task. This is useful for tasks that call utility tasks like powershell and commandline
     */
    execTask?: TaskReference;
    /**
     * If a task is going to run code, then this provides the type/script etc... information by platform. For example, it might look like. net45: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } net20: { typeName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShellTask", assemblyName: "Microsoft.TeamFoundation.Automation.Tasks.PowerShell.dll" } java: { jar: "powershelltask.tasks.automation.teamfoundation.microsoft.com", } node: { script: "powershellhost.js", }
     */
    platformInstructions?: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface TaskGroup extends TaskDefinition {
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Gets or sets the identity who created.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets date on which it got created.
     */
    createdOn?: Date;
    /**
     * Gets or sets as 'true' to indicate as deleted, 'false' otherwise.
     */
    deleted?: boolean;
    /**
     * Gets or sets the identity who modified.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets date on which it got modified.
     */
    modifiedOn?: Date;
    /**
     * Gets or sets the owner.
     */
    owner?: string;
    /**
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Gets or sets revision.
     */
    revision?: number;
    /**
     * Gets or sets the tasks.
     */
    tasks?: TaskGroupStep[];
}
export interface TaskGroupCreateParameter {
    /**
     * Sets author name of the task group.
     */
    author?: string;
    /**
     * Sets category of the task group.
     */
    category?: string;
    /**
     * Sets description of the task group.
     */
    description?: string;
    /**
     * Sets friendly name of the task group.
     */
    friendlyName?: string;
    /**
     * Sets url icon of the task group.
     */
    iconUrl?: string;
    /**
     * Sets input for the task group.
     */
    inputs?: TaskInputDefinition[];
    /**
     * Sets display name of the task group.
     */
    instanceNameFormat?: string;
    /**
     * Sets name of the task group.
     */
    name?: string;
    /**
     * Sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Sets RunsOn of the task group. Value can be 'Agent', 'Server' or 'DeploymentGroup'.
     */
    runsOn?: string[];
    /**
     * Sets tasks for the task group.
     */
    tasks?: TaskGroupStep[];
    /**
     * Sets version of the task group.
     */
    version?: TaskVersion;
}
export interface TaskGroupDefinition {
    displayName?: string;
    isExpanded?: boolean;
    name?: string;
    tags?: string[];
    visibleRule?: string;
}
export declare enum TaskGroupExpands {
    None = 0,
    Tasks = 2,
}
/**
 * Specifies the desired ordering of taskGroups.
 */
export declare enum TaskGroupQueryOrder {
    /**
     * Order by createdon ascending.
     */
    CreatedOnAscending = 0,
    /**
     * Order by createdon descending.
     */
    CreatedOnDescending = 1,
}
export interface TaskGroupRevision {
    changedBy?: VSSInterfaces.IdentityRef;
    changedDate?: Date;
    changeType?: AuditAction;
    comment?: string;
    fileId?: number;
    revision?: number;
    taskGroupId?: string;
}
/**
 * Represents tasks in the task group.
 */
export interface TaskGroupStep {
    /**
     * Gets or sets as 'true' to run the task always, 'false' otherwise.
     */
    alwaysRun?: boolean;
    /**
     * Gets or sets condition for the task.
     */
    condition?: string;
    /**
     * Gets or sets as 'true' to continue on error, 'false' otherwise.
     */
    continueOnError?: boolean;
    /**
     * Gets or sets the display name.
     */
    displayName?: string;
    /**
     * Gets or sets as task is enabled or not.
     */
    enabled?: boolean;
    /**
     * Gets dictionary of environment variables.
     */
    environment?: {
        [key: string]: string;
    };
    /**
     * Gets or sets dictionary of inputs.
     */
    inputs?: {
        [key: string]: string;
    };
    /**
     * Gets or sets the reference of the task.
     */
    task?: TaskDefinitionReference;
    /**
     * Gets or sets the maximum time, in minutes, that a task is allowed to execute on agent before being cancelled by server. A zero value indicates an infinite timeout.
     */
    timeoutInMinutes?: number;
}
export interface TaskGroupUpdateParameter {
    /**
     * Sets author name of the task group.
     */
    author?: string;
    /**
     * Sets category of the task group.
     */
    category?: string;
    /**
     * Sets comment of the task group.
     */
    comment?: string;
    /**
     * Sets description of the task group.
     */
    description?: string;
    /**
     * Sets friendly name of the task group.
     */
    friendlyName?: string;
    /**
     * Sets url icon of the task group.
     */
    iconUrl?: string;
    /**
     * Sets the unique identifier of this field.
     */
    id?: string;
    /**
     * Sets input for the task group.
     */
    inputs?: TaskInputDefinition[];
    /**
     * Sets display name of the task group.
     */
    instanceNameFormat?: string;
    /**
     * Sets name of the task group.
     */
    name?: string;
    /**
     * Gets or sets parent task group Id. This is used while creating a draft task group.
     */
    parentDefinitionId?: string;
    /**
     * Sets revision of the task group.
     */
    revision?: number;
    /**
     * Sets RunsOn of the task group. Value can be 'Agent', 'Server' or 'DeploymentGroup'.
     */
    runsOn?: string[];
    /**
     * Sets tasks for the task group.
     */
    tasks?: TaskGroupStep[];
    /**
     * Sets version of the task group.
     */
    version?: TaskVersion;
}
export interface TaskHubLicenseDetails {
    enterpriseUsersCount?: number;
    failedToReachAllProviders?: boolean;
    freeHostedLicenseCount?: number;
    freeLicenseCount?: number;
    hasLicenseCountEverUpdated?: boolean;
    hostedAgentMinutesFreeCount?: number;
    hostedAgentMinutesUsedCount?: number;
    hostedLicensesArePremium?: boolean;
    marketplacePurchasedHostedLicenses?: MarketplacePurchasedLicense[];
    msdnUsersCount?: number;
    /**
     * Microsoft-hosted licenses purchased from VSTS directly.
     */
    purchasedHostedLicenseCount?: number;
    /**
     * Self-hosted licenses purchased from VSTS directly.
     */
    purchasedLicenseCount?: number;
    totalHostedLicenseCount?: number;
    totalLicenseCount?: number;
    totalPrivateLicenseCount?: number;
}
export interface TaskInputDefinition extends DistributedTaskCommonInterfaces.TaskInputDefinitionBase {
}
export interface TaskInstance extends TaskReference {
    alwaysRun?: boolean;
    condition?: string;
    continueOnError?: boolean;
    displayName?: string;
    enabled?: boolean;
    environment?: {
        [key: string]: string;
    };
    instanceId?: string;
    refName?: string;
    timeoutInMinutes?: number;
}
export interface TaskLog extends TaskLogReference {
    createdOn?: Date;
    indexLocation?: string;
    lastChangedOn?: Date;
    lineCount?: number;
    path?: string;
}
export interface TaskLogReference {
    id?: number;
    location?: string;
}
export interface TaskOrchestrationContainer extends TaskOrchestrationItem {
    children?: TaskOrchestrationItem[];
    continueOnError?: boolean;
    data?: {
        [key: string]: string;
    };
    maxConcurrency?: number;
    parallel?: boolean;
    rollback?: TaskOrchestrationContainer;
}
export interface TaskOrchestrationItem {
    itemType?: TaskOrchestrationItemType;
}
export declare enum TaskOrchestrationItemType {
    Container = 0,
    Job = 1,
}
export interface TaskOrchestrationJob extends TaskOrchestrationItem {
    demands?: Demand[];
    executeAs?: VSSInterfaces.IdentityRef;
    executionMode?: string;
    executionTimeout?: any;
    instanceId?: string;
    name?: string;
    refName?: string;
    tasks?: TaskInstance[];
    variables?: {
        [key: string]: string;
    };
}
export interface TaskOrchestrationOwner {
    _links?: any;
    id?: number;
    name?: string;
}
export interface TaskOrchestrationPlan extends TaskOrchestrationPlanReference {
    environment?: PlanEnvironment;
    finishTime?: Date;
    implementation?: TaskOrchestrationContainer;
    requestedById?: string;
    requestedForId?: string;
    result?: TaskResult;
    resultCode?: string;
    startTime?: Date;
    state?: TaskOrchestrationPlanState;
    timeline?: TimelineReference;
}
export interface TaskOrchestrationPlanGroup {
    planGroup?: string;
    project?: ProjectReference;
    runningRequests?: TaskAgentJobRequest[];
}
export interface TaskOrchestrationPlanGroupsQueueMetrics {
    count?: number;
    status?: PlanGroupStatus;
}
export interface TaskOrchestrationPlanReference {
    artifactLocation?: string;
    artifactUri?: string;
    definition?: TaskOrchestrationOwner;
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    planId?: string;
    planType?: string;
    scopeIdentifier?: string;
    version?: number;
}
export declare enum TaskOrchestrationPlanState {
    InProgress = 1,
    Queued = 2,
    Completed = 4,
}
export interface TaskOrchestrationQueuedPlan {
    assignTime?: Date;
    definition?: TaskOrchestrationOwner;
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    planId?: string;
    poolId?: number;
    queuePosition?: number;
    queueTime?: Date;
    scopeIdentifier?: string;
}
export interface TaskOrchestrationQueuedPlanGroup {
    definition?: TaskOrchestrationOwner;
    owner?: TaskOrchestrationOwner;
    planGroup?: string;
    plans?: TaskOrchestrationQueuedPlan[];
    project?: ProjectReference;
    queuePosition?: number;
}
export interface TaskOutputVariable {
    description?: string;
    name?: string;
}
export interface TaskPackageMetadata {
    /**
     * Gets the name of the package.
     */
    type?: string;
    /**
     * Gets the url of the package.
     */
    url?: string;
    /**
     * Gets the version of the package.
     */
    version?: string;
}
export interface TaskReference {
    id?: string;
    inputs?: {
        [key: string]: string;
    };
    name?: string;
    version?: string;
}
export declare enum TaskResult {
    Succeeded = 0,
    SucceededWithIssues = 1,
    Failed = 2,
    Canceled = 3,
    Skipped = 4,
    Abandoned = 5,
}
export interface TaskSourceDefinition extends DistributedTaskCommonInterfaces.TaskSourceDefinitionBase {
}
export interface TaskStartedEvent extends TaskEvent {
}
export interface TaskVersion {
    isTest?: boolean;
    major?: number;
    minor?: number;
    patch?: number;
}
export interface Timeline extends TimelineReference {
    lastChangedBy?: string;
    lastChangedOn?: Date;
    records?: TimelineRecord[];
}
export interface TimelineAttempt {
    /**
     * Gets or sets the attempt of the record.
     */
    attempt?: number;
    /**
     * Gets or sets the unique identifier for the record.
     */
    identifier?: string;
    /**
     * Gets or sets the record identifier located within the specified timeline.
     */
    recordId?: string;
    /**
     * Gets or sets the timeline identifier which owns the record representing this attempt.
     */
    timelineId?: string;
}
export interface TimelineRecord {
    attempt?: number;
    changeId?: number;
    currentOperation?: string;
    details?: TimelineReference;
    errorCount?: number;
    finishTime?: Date;
    id?: string;
    identifier?: string;
    issues?: Issue[];
    lastModified?: Date;
    location?: string;
    log?: TaskLogReference;
    name?: string;
    order?: number;
    parentId?: string;
    percentComplete?: number;
    previousAttempts?: TimelineAttempt[];
    refName?: string;
    result?: TaskResult;
    resultCode?: string;
    startTime?: Date;
    state?: TimelineRecordState;
    task?: TaskReference;
    type?: string;
    variables?: {
        [key: string]: VariableValue;
    };
    warningCount?: number;
    workerName?: string;
}
export interface TimelineRecordFeedLinesWrapper {
    count?: number;
    stepId?: string;
    value?: string[];
}
export declare enum TimelineRecordState {
    Pending = 0,
    InProgress = 1,
    Completed = 2,
}
export interface TimelineReference {
    changeId?: number;
    id?: string;
    location?: string;
}
export interface ValidationItem {
    /**
     * Tells whether the current input is valid or not
     */
    isValid?: boolean;
    /**
     * Reason for input validation failure
     */
    reason?: string;
    /**
     * Type of validation item
     */
    type?: string;
    /**
     * Value to validate. The conditional expression to validate for the input for "expression" type Eg:eq(variables['Build.SourceBranch'], 'refs/heads/master');eq(value, 'refs/heads/master')
     */
    value?: string;
}
/**
 * A variable group is a collection of related variables.
 */
export interface VariableGroup {
    /**
     * Gets or sets the identity who created the variable group.
     */
    createdBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the time when variable group was created.
     */
    createdOn?: Date;
    /**
     * Gets or sets description of the variable group.
     */
    description?: string;
    /**
     * Gets or sets id of the variable group.
     */
    id?: number;
    /**
     * Gets or sets the identity who modified the variable group.
     */
    modifiedBy?: VSSInterfaces.IdentityRef;
    /**
     * Gets or sets the time when variable group was modified
     */
    modifiedOn?: Date;
    /**
     * Gets or sets name of the variable group.
     */
    name?: string;
    /**
     * Gets or sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Gets or sets type of the variable group.
     */
    type?: string;
    /**
     * Gets or sets variables contained in the variable group.
     */
    variables?: {
        [key: string]: VariableValue;
    };
}
export declare enum VariableGroupActionFilter {
    None = 0,
    Manage = 2,
    Use = 16,
}
export interface VariableGroupParameters {
    /**
     * Sets description of the variable group.
     */
    description?: string;
    /**
     * Sets name of the variable group.
     */
    name?: string;
    /**
     * Sets provider data.
     */
    providerData?: VariableGroupProviderData;
    /**
     * Sets type of the variable group.
     */
    type?: string;
    /**
     * Sets variables contained in the variable group.
     */
    variables?: {
        [key: string]: VariableValue;
    };
}
/**
 * Defines provider data of the variable group.
 */
export interface VariableGroupProviderData {
}
/**
 * Specifies the desired ordering of variableGroups.
 */
export declare enum VariableGroupQueryOrder {
    /**
     * Order by id ascending.
     */
    IdAscending = 0,
    /**
     * Order by id descending.
     */
    IdDescending = 1,
}
export interface VariableValue {
    isSecret?: boolean;
    value?: string;
}
export declare var TypeInfo: {
    AadLoginPromptOption: {
        enumValues: {
            "noOption": number;
            "login": number;
            "selectAccount": number;
            "freshLogin": number;
            "freshLoginWithMfa": number;
        };
    };
    AgentChangeEvent: any;
    AgentJobRequestMessage: any;
    AgentPoolEvent: any;
    AgentQueueEvent: any;
    AgentQueuesEvent: any;
    AuditAction: {
        enumValues: {
            "add": number;
            "update": number;
            "delete": number;
            "undelete": number;
        };
    };
    AzureKeyVaultVariableGroupProviderData: any;
    AzureKeyVaultVariableValue: any;
    DeploymentGroup: any;
    DeploymentGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    DeploymentGroupExpands: {
        enumValues: {
            "none": number;
            "machines": number;
            "tags": number;
        };
    };
    DeploymentGroupMetrics: any;
    DeploymentGroupReference: any;
    DeploymentMachine: any;
    DeploymentMachineChangedData: any;
    DeploymentMachineExpands: {
        enumValues: {
            "none": number;
            "capabilities": number;
            "assignedRequest": number;
        };
    };
    DeploymentMachineGroup: any;
    DeploymentMachineGroupReference: any;
    DeploymentMachinesChangeEvent: any;
    DeploymentPoolSummary: any;
    DeploymentPoolSummaryExpands: {
        enumValues: {
            "none": number;
            "deploymentGroups": number;
        };
    };
    DeploymentTargetExpands: {
        enumValues: {
            "none": number;
            "capabilities": number;
            "assignedRequest": number;
            "lastCompletedRequest": number;
        };
    };
    Issue: any;
    IssueType: {
        enumValues: {
            "error": number;
            "warning": number;
        };
    };
    JobAssignedEvent: any;
    JobCompletedEvent: any;
    JobEnvironment: any;
    JobRequestMessage: any;
    MachineGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    MaskHint: any;
    MaskType: {
        enumValues: {
            "variable": number;
            "regex": number;
        };
    };
    PackageMetadata: any;
    PlanEnvironment: any;
    PlanGroupStatus: {
        enumValues: {
            "running": number;
            "queued": number;
            "all": number;
        };
    };
    PlanGroupStatusFilter: {
        enumValues: {
            "running": number;
            "queued": number;
            "all": number;
        };
    };
    ResourceUsage: any;
    SecureFile: any;
    SecureFileActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    ServerTaskRequestMessage: any;
    ServiceEndpointAuthenticationScheme: any;
    ServiceEndpointExecutionData: any;
    ServiceEndpointExecutionRecord: any;
    ServiceEndpointExecutionRecordsInput: any;
    ServiceEndpointRequestResult: any;
    ServiceEndpointType: any;
    TaskAgent: any;
    TaskAgentCloudRequest: any;
    TaskAgentCloudType: any;
    TaskAgentDelaySource: any;
    TaskAgentJobRequest: any;
    TaskAgentJobResultFilter: {
        enumValues: {
            "failed": number;
            "passed": number;
            "neverDeployed": number;
            "all": number;
        };
    };
    TaskAgentManualUpdate: any;
    TaskAgentMinAgentVersionRequiredUpdate: any;
    TaskAgentPool: any;
    TaskAgentPoolActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentPoolMaintenanceDefinition: any;
    TaskAgentPoolMaintenanceJob: any;
    TaskAgentPoolMaintenanceJobResult: {
        enumValues: {
            "succeeded": number;
            "failed": number;
            "canceled": number;
        };
    };
    TaskAgentPoolMaintenanceJobStatus: {
        enumValues: {
            "inProgress": number;
            "completed": number;
            "cancelling": number;
            "queued": number;
        };
    };
    TaskAgentPoolMaintenanceJobTargetAgent: any;
    TaskAgentPoolMaintenanceSchedule: any;
    TaskAgentPoolMaintenanceScheduleDays: {
        enumValues: {
            "none": number;
            "monday": number;
            "tuesday": number;
            "wednesday": number;
            "thursday": number;
            "friday": number;
            "saturday": number;
            "sunday": number;
            "all": number;
        };
    };
    TaskAgentPoolReference: any;
    TaskAgentPoolSummary: any;
    TaskAgentPoolType: {
        enumValues: {
            "automation": number;
            "deployment": number;
        };
    };
    TaskAgentQueue: any;
    TaskAgentQueueActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    TaskAgentReference: any;
    TaskAgentSession: any;
    TaskAgentStatus: {
        enumValues: {
            "offline": number;
            "online": number;
        };
    };
    TaskAgentStatusFilter: {
        enumValues: {
            "offline": number;
            "online": number;
            "all": number;
        };
    };
    TaskAgentUpdate: any;
    TaskAgentUpdateReason: any;
    TaskAgentUpdateReasonType: {
        enumValues: {
            "manual": number;
            "minAgentVersionRequired": number;
        };
    };
    TaskAttachment: any;
    TaskCompletedEvent: any;
    TaskDefinitionStatus: {
        enumValues: {
            "preinstalled": number;
            "receivedInstallOrUpdate": number;
            "installed": number;
            "receivedUninstall": number;
            "uninstalled": number;
            "requestedUpdate": number;
            "updated": number;
            "alreadyUpToDate": number;
            "inlineUpdateReceived": number;
        };
    };
    TaskGroup: any;
    TaskGroupExpands: {
        enumValues: {
            "none": number;
            "tasks": number;
        };
    };
    TaskGroupQueryOrder: {
        enumValues: {
            "createdOnAscending": number;
            "createdOnDescending": number;
        };
    };
    TaskGroupRevision: any;
    TaskLog: any;
    TaskOrchestrationContainer: any;
    TaskOrchestrationItem: any;
    TaskOrchestrationItemType: {
        enumValues: {
            "container": number;
            "job": number;
        };
    };
    TaskOrchestrationJob: any;
    TaskOrchestrationPlan: any;
    TaskOrchestrationPlanGroup: any;
    TaskOrchestrationPlanGroupsQueueMetrics: any;
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": number;
            "queued": number;
            "completed": number;
        };
    };
    TaskOrchestrationQueuedPlan: any;
    TaskOrchestrationQueuedPlanGroup: any;
    TaskResult: {
        enumValues: {
            "succeeded": number;
            "succeededWithIssues": number;
            "failed": number;
            "canceled": number;
            "skipped": number;
            "abandoned": number;
        };
    };
    Timeline: any;
    TimelineRecord: any;
    TimelineRecordState: {
        enumValues: {
            "pending": number;
            "inProgress": number;
            "completed": number;
        };
    };
    VariableGroup: any;
    VariableGroupActionFilter: {
        enumValues: {
            "none": number;
            "manage": number;
            "use": number;
        };
    };
    VariableGroupQueryOrder: {
        enumValues: {
            "idAscending": number;
            "idDescending": number;
        };
    };
};
