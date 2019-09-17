/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 *
 * ---------------------------------------------------------
 * Generated file, DO NOT EDIT
 * ---------------------------------------------------------
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FormInputInterfaces = require("../interfaces/common/FormInputInterfaces");
var AadLoginPromptOption;
(function (AadLoginPromptOption) {
    /**
     * Do not provide a prompt option
     */
    AadLoginPromptOption[AadLoginPromptOption["NoOption"] = 0] = "NoOption";
    /**
     * Force the user to login again.
     */
    AadLoginPromptOption[AadLoginPromptOption["Login"] = 1] = "Login";
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching bewtween the variants of a dual-homed user.
     */
    AadLoginPromptOption[AadLoginPromptOption["SelectAccount"] = 2] = "SelectAccount";
    /**
     * Force the user to login again. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login. </remarks>
     */
    AadLoginPromptOption[AadLoginPromptOption["FreshLogin"] = 3] = "FreshLogin";
    /**
     * Force the user to login again with mfa. <remarks> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login, if MFA is required. </remarks>
     */
    AadLoginPromptOption[AadLoginPromptOption["FreshLoginWithMfa"] = 4] = "FreshLoginWithMfa";
})(AadLoginPromptOption = exports.AadLoginPromptOption || (exports.AadLoginPromptOption = {}));
var AuditAction;
(function (AuditAction) {
    AuditAction[AuditAction["Add"] = 1] = "Add";
    AuditAction[AuditAction["Update"] = 2] = "Update";
    AuditAction[AuditAction["Delete"] = 3] = "Delete";
    AuditAction[AuditAction["Undelete"] = 4] = "Undelete";
})(AuditAction = exports.AuditAction || (exports.AuditAction = {}));
/**
 * This is useful in getting a list of deployment groups, filtered for which caller has permissions to take a particular action.
 */
var DeploymentGroupActionFilter;
(function (DeploymentGroupActionFilter) {
    /**
     * All deployment groups.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["None"] = 0] = "None";
    /**
     * Only deployment groups for which caller has **manage** permission.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["Manage"] = 2] = "Manage";
    /**
     * Only deployment groups for which caller has **use** permission.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["Use"] = 16] = "Use";
})(DeploymentGroupActionFilter = exports.DeploymentGroupActionFilter || (exports.DeploymentGroupActionFilter = {}));
/**
 * Properties to be included or expanded in deployment group objects. This is useful when getting a single or list of deployment grouops.
 */
var DeploymentGroupExpands;
(function (DeploymentGroupExpands) {
    /**
     * No additional properties.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["None"] = 0] = "None";
    /**
     * Deprecated: Include all the deployment targets.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["Machines"] = 2] = "Machines";
    /**
     * Include unique list of tags across all deployment targets.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["Tags"] = 4] = "Tags";
})(DeploymentGroupExpands = exports.DeploymentGroupExpands || (exports.DeploymentGroupExpands = {}));
var DeploymentMachineExpands;
(function (DeploymentMachineExpands) {
    DeploymentMachineExpands[DeploymentMachineExpands["None"] = 0] = "None";
    DeploymentMachineExpands[DeploymentMachineExpands["Capabilities"] = 2] = "Capabilities";
    DeploymentMachineExpands[DeploymentMachineExpands["AssignedRequest"] = 4] = "AssignedRequest";
})(DeploymentMachineExpands = exports.DeploymentMachineExpands || (exports.DeploymentMachineExpands = {}));
/**
 * Properties to be included or expanded in deployment pool summary objects. This is useful when getting a single or list of deployment pool summaries.
 */
var DeploymentPoolSummaryExpands;
(function (DeploymentPoolSummaryExpands) {
    /**
     * No additional properties
     */
    DeploymentPoolSummaryExpands[DeploymentPoolSummaryExpands["None"] = 0] = "None";
    /**
     * Include deployment groups referring to the deployment pool.
     */
    DeploymentPoolSummaryExpands[DeploymentPoolSummaryExpands["DeploymentGroups"] = 2] = "DeploymentGroups";
})(DeploymentPoolSummaryExpands = exports.DeploymentPoolSummaryExpands || (exports.DeploymentPoolSummaryExpands = {}));
/**
 * Properties to be included or expanded in deployment target objects. This is useful when getting a single or list of deployment targets.
 */
var DeploymentTargetExpands;
(function (DeploymentTargetExpands) {
    /**
     * No additional properties.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["None"] = 0] = "None";
    /**
     * Include capabilities of the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["Capabilities"] = 2] = "Capabilities";
    /**
     * Include the job request assigned to the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["AssignedRequest"] = 4] = "AssignedRequest";
    /**
     * Include the last completed job request of the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["LastCompletedRequest"] = 8] = "LastCompletedRequest";
})(DeploymentTargetExpands = exports.DeploymentTargetExpands || (exports.DeploymentTargetExpands = {}));
var IssueType;
(function (IssueType) {
    IssueType[IssueType["Error"] = 1] = "Error";
    IssueType[IssueType["Warning"] = 2] = "Warning";
})(IssueType = exports.IssueType || (exports.IssueType = {}));
var MachineGroupActionFilter;
(function (MachineGroupActionFilter) {
    MachineGroupActionFilter[MachineGroupActionFilter["None"] = 0] = "None";
    MachineGroupActionFilter[MachineGroupActionFilter["Manage"] = 2] = "Manage";
    MachineGroupActionFilter[MachineGroupActionFilter["Use"] = 16] = "Use";
})(MachineGroupActionFilter = exports.MachineGroupActionFilter || (exports.MachineGroupActionFilter = {}));
var MaskType;
(function (MaskType) {
    MaskType[MaskType["Variable"] = 1] = "Variable";
    MaskType[MaskType["Regex"] = 2] = "Regex";
})(MaskType = exports.MaskType || (exports.MaskType = {}));
var PlanGroupStatus;
(function (PlanGroupStatus) {
    PlanGroupStatus[PlanGroupStatus["Running"] = 1] = "Running";
    PlanGroupStatus[PlanGroupStatus["Queued"] = 2] = "Queued";
    PlanGroupStatus[PlanGroupStatus["All"] = 3] = "All";
})(PlanGroupStatus = exports.PlanGroupStatus || (exports.PlanGroupStatus = {}));
var PlanGroupStatusFilter;
(function (PlanGroupStatusFilter) {
    PlanGroupStatusFilter[PlanGroupStatusFilter["Running"] = 1] = "Running";
    PlanGroupStatusFilter[PlanGroupStatusFilter["Queued"] = 2] = "Queued";
    PlanGroupStatusFilter[PlanGroupStatusFilter["All"] = 3] = "All";
})(PlanGroupStatusFilter = exports.PlanGroupStatusFilter || (exports.PlanGroupStatusFilter = {}));
var SecureFileActionFilter;
(function (SecureFileActionFilter) {
    SecureFileActionFilter[SecureFileActionFilter["None"] = 0] = "None";
    SecureFileActionFilter[SecureFileActionFilter["Manage"] = 2] = "Manage";
    SecureFileActionFilter[SecureFileActionFilter["Use"] = 16] = "Use";
})(SecureFileActionFilter = exports.SecureFileActionFilter || (exports.SecureFileActionFilter = {}));
/**
 * This is useful in getting a list of deployment targets, filtered by the result of their last job.
 */
var TaskAgentJobResultFilter;
(function (TaskAgentJobResultFilter) {
    /**
     * Only those deployment targets on which last job failed (**Abandoned**, **Canceled**, **Failed**, **Skipped**).
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["Failed"] = 1] = "Failed";
    /**
     * Only those deployment targets on which last job Passed (**Succeeded**, **Succeeded with issues**).
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["Passed"] = 2] = "Passed";
    /**
     * Only those deployment targets that never executed a job.
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["NeverDeployed"] = 4] = "NeverDeployed";
    /**
     * All deployment targets.
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["All"] = 7] = "All";
})(TaskAgentJobResultFilter = exports.TaskAgentJobResultFilter || (exports.TaskAgentJobResultFilter = {}));
var TaskAgentPoolActionFilter;
(function (TaskAgentPoolActionFilter) {
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["None"] = 0] = "None";
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["Manage"] = 2] = "Manage";
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["Use"] = 16] = "Use";
})(TaskAgentPoolActionFilter = exports.TaskAgentPoolActionFilter || (exports.TaskAgentPoolActionFilter = {}));
var TaskAgentPoolMaintenanceJobResult;
(function (TaskAgentPoolMaintenanceJobResult) {
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Succeeded"] = 1] = "Succeeded";
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Failed"] = 2] = "Failed";
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Canceled"] = 4] = "Canceled";
})(TaskAgentPoolMaintenanceJobResult = exports.TaskAgentPoolMaintenanceJobResult || (exports.TaskAgentPoolMaintenanceJobResult = {}));
var TaskAgentPoolMaintenanceJobStatus;
(function (TaskAgentPoolMaintenanceJobStatus) {
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["InProgress"] = 1] = "InProgress";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Completed"] = 2] = "Completed";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Cancelling"] = 4] = "Cancelling";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Queued"] = 8] = "Queued";
})(TaskAgentPoolMaintenanceJobStatus = exports.TaskAgentPoolMaintenanceJobStatus || (exports.TaskAgentPoolMaintenanceJobStatus = {}));
var TaskAgentPoolMaintenanceScheduleDays;
(function (TaskAgentPoolMaintenanceScheduleDays) {
    /**
     * Do not run.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["None"] = 0] = "None";
    /**
     * Run on Monday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Monday"] = 1] = "Monday";
    /**
     * Run on Tuesday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Tuesday"] = 2] = "Tuesday";
    /**
     * Run on Wednesday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Wednesday"] = 4] = "Wednesday";
    /**
     * Run on Thursday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Thursday"] = 8] = "Thursday";
    /**
     * Run on Friday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Friday"] = 16] = "Friday";
    /**
     * Run on Saturday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Saturday"] = 32] = "Saturday";
    /**
     * Run on Sunday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Sunday"] = 64] = "Sunday";
    /**
     * Run on all days of the week.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["All"] = 127] = "All";
})(TaskAgentPoolMaintenanceScheduleDays = exports.TaskAgentPoolMaintenanceScheduleDays || (exports.TaskAgentPoolMaintenanceScheduleDays = {}));
var TaskAgentPoolType;
(function (TaskAgentPoolType) {
    TaskAgentPoolType[TaskAgentPoolType["Automation"] = 1] = "Automation";
    TaskAgentPoolType[TaskAgentPoolType["Deployment"] = 2] = "Deployment";
})(TaskAgentPoolType = exports.TaskAgentPoolType || (exports.TaskAgentPoolType = {}));
var TaskAgentQueueActionFilter;
(function (TaskAgentQueueActionFilter) {
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["None"] = 0] = "None";
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["Manage"] = 2] = "Manage";
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["Use"] = 16] = "Use";
})(TaskAgentQueueActionFilter = exports.TaskAgentQueueActionFilter || (exports.TaskAgentQueueActionFilter = {}));
var TaskAgentStatus;
(function (TaskAgentStatus) {
    TaskAgentStatus[TaskAgentStatus["Offline"] = 1] = "Offline";
    TaskAgentStatus[TaskAgentStatus["Online"] = 2] = "Online";
})(TaskAgentStatus = exports.TaskAgentStatus || (exports.TaskAgentStatus = {}));
/**
 * This is useful in getting a list of deployment targets, filtered by the deployment agent status.
 */
var TaskAgentStatusFilter;
(function (TaskAgentStatusFilter) {
    /**
     * Only deployment targets that are offline.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["Offline"] = 1] = "Offline";
    /**
     * Only deployment targets that are online.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["Online"] = 2] = "Online";
    /**
     * All deployment targets.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["All"] = 3] = "All";
})(TaskAgentStatusFilter = exports.TaskAgentStatusFilter || (exports.TaskAgentStatusFilter = {}));
var TaskAgentUpdateReasonType;
(function (TaskAgentUpdateReasonType) {
    TaskAgentUpdateReasonType[TaskAgentUpdateReasonType["Manual"] = 1] = "Manual";
    TaskAgentUpdateReasonType[TaskAgentUpdateReasonType["MinAgentVersionRequired"] = 2] = "MinAgentVersionRequired";
})(TaskAgentUpdateReasonType = exports.TaskAgentUpdateReasonType || (exports.TaskAgentUpdateReasonType = {}));
var TaskDefinitionStatus;
(function (TaskDefinitionStatus) {
    TaskDefinitionStatus[TaskDefinitionStatus["Preinstalled"] = 1] = "Preinstalled";
    TaskDefinitionStatus[TaskDefinitionStatus["ReceivedInstallOrUpdate"] = 2] = "ReceivedInstallOrUpdate";
    TaskDefinitionStatus[TaskDefinitionStatus["Installed"] = 3] = "Installed";
    TaskDefinitionStatus[TaskDefinitionStatus["ReceivedUninstall"] = 4] = "ReceivedUninstall";
    TaskDefinitionStatus[TaskDefinitionStatus["Uninstalled"] = 5] = "Uninstalled";
    TaskDefinitionStatus[TaskDefinitionStatus["RequestedUpdate"] = 6] = "RequestedUpdate";
    TaskDefinitionStatus[TaskDefinitionStatus["Updated"] = 7] = "Updated";
    TaskDefinitionStatus[TaskDefinitionStatus["AlreadyUpToDate"] = 8] = "AlreadyUpToDate";
    TaskDefinitionStatus[TaskDefinitionStatus["InlineUpdateReceived"] = 9] = "InlineUpdateReceived";
})(TaskDefinitionStatus = exports.TaskDefinitionStatus || (exports.TaskDefinitionStatus = {}));
var TaskGroupExpands;
(function (TaskGroupExpands) {
    TaskGroupExpands[TaskGroupExpands["None"] = 0] = "None";
    TaskGroupExpands[TaskGroupExpands["Tasks"] = 2] = "Tasks";
})(TaskGroupExpands = exports.TaskGroupExpands || (exports.TaskGroupExpands = {}));
/**
 * Specifies the desired ordering of taskGroups.
 */
var TaskGroupQueryOrder;
(function (TaskGroupQueryOrder) {
    /**
     * Order by createdon ascending.
     */
    TaskGroupQueryOrder[TaskGroupQueryOrder["CreatedOnAscending"] = 0] = "CreatedOnAscending";
    /**
     * Order by createdon descending.
     */
    TaskGroupQueryOrder[TaskGroupQueryOrder["CreatedOnDescending"] = 1] = "CreatedOnDescending";
})(TaskGroupQueryOrder = exports.TaskGroupQueryOrder || (exports.TaskGroupQueryOrder = {}));
var TaskOrchestrationItemType;
(function (TaskOrchestrationItemType) {
    TaskOrchestrationItemType[TaskOrchestrationItemType["Container"] = 0] = "Container";
    TaskOrchestrationItemType[TaskOrchestrationItemType["Job"] = 1] = "Job";
})(TaskOrchestrationItemType = exports.TaskOrchestrationItemType || (exports.TaskOrchestrationItemType = {}));
var TaskOrchestrationPlanState;
(function (TaskOrchestrationPlanState) {
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["InProgress"] = 1] = "InProgress";
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["Queued"] = 2] = "Queued";
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["Completed"] = 4] = "Completed";
})(TaskOrchestrationPlanState = exports.TaskOrchestrationPlanState || (exports.TaskOrchestrationPlanState = {}));
var TaskResult;
(function (TaskResult) {
    TaskResult[TaskResult["Succeeded"] = 0] = "Succeeded";
    TaskResult[TaskResult["SucceededWithIssues"] = 1] = "SucceededWithIssues";
    TaskResult[TaskResult["Failed"] = 2] = "Failed";
    TaskResult[TaskResult["Canceled"] = 3] = "Canceled";
    TaskResult[TaskResult["Skipped"] = 4] = "Skipped";
    TaskResult[TaskResult["Abandoned"] = 5] = "Abandoned";
})(TaskResult = exports.TaskResult || (exports.TaskResult = {}));
var TimelineRecordState;
(function (TimelineRecordState) {
    TimelineRecordState[TimelineRecordState["Pending"] = 0] = "Pending";
    TimelineRecordState[TimelineRecordState["InProgress"] = 1] = "InProgress";
    TimelineRecordState[TimelineRecordState["Completed"] = 2] = "Completed";
})(TimelineRecordState = exports.TimelineRecordState || (exports.TimelineRecordState = {}));
var VariableGroupActionFilter;
(function (VariableGroupActionFilter) {
    VariableGroupActionFilter[VariableGroupActionFilter["None"] = 0] = "None";
    VariableGroupActionFilter[VariableGroupActionFilter["Manage"] = 2] = "Manage";
    VariableGroupActionFilter[VariableGroupActionFilter["Use"] = 16] = "Use";
})(VariableGroupActionFilter = exports.VariableGroupActionFilter || (exports.VariableGroupActionFilter = {}));
/**
 * Specifies the desired ordering of variableGroups.
 */
var VariableGroupQueryOrder;
(function (VariableGroupQueryOrder) {
    /**
     * Order by id ascending.
     */
    VariableGroupQueryOrder[VariableGroupQueryOrder["IdAscending"] = 0] = "IdAscending";
    /**
     * Order by id descending.
     */
    VariableGroupQueryOrder[VariableGroupQueryOrder["IdDescending"] = 1] = "IdDescending";
})(VariableGroupQueryOrder = exports.VariableGroupQueryOrder || (exports.VariableGroupQueryOrder = {}));
exports.TypeInfo = {
    AadLoginPromptOption: {
        enumValues: {
            "noOption": 0,
            "login": 1,
            "selectAccount": 2,
            "freshLogin": 3,
            "freshLoginWithMfa": 4
        }
    },
    AgentChangeEvent: {},
    AgentJobRequestMessage: {},
    AgentPoolEvent: {},
    AgentQueueEvent: {},
    AgentQueuesEvent: {},
    AuditAction: {
        enumValues: {
            "add": 1,
            "update": 2,
            "delete": 3,
            "undelete": 4
        }
    },
    AzureKeyVaultVariableGroupProviderData: {},
    AzureKeyVaultVariableValue: {},
    DeploymentGroup: {},
    DeploymentGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    DeploymentGroupExpands: {
        enumValues: {
            "none": 0,
            "machines": 2,
            "tags": 4
        }
    },
    DeploymentGroupMetrics: {},
    DeploymentGroupReference: {},
    DeploymentMachine: {},
    DeploymentMachineChangedData: {},
    DeploymentMachineExpands: {
        enumValues: {
            "none": 0,
            "capabilities": 2,
            "assignedRequest": 4
        }
    },
    DeploymentMachineGroup: {},
    DeploymentMachineGroupReference: {},
    DeploymentMachinesChangeEvent: {},
    DeploymentPoolSummary: {},
    DeploymentPoolSummaryExpands: {
        enumValues: {
            "none": 0,
            "deploymentGroups": 2
        }
    },
    DeploymentTargetExpands: {
        enumValues: {
            "none": 0,
            "capabilities": 2,
            "assignedRequest": 4,
            "lastCompletedRequest": 8
        }
    },
    Issue: {},
    IssueType: {
        enumValues: {
            "error": 1,
            "warning": 2
        }
    },
    JobAssignedEvent: {},
    JobCompletedEvent: {},
    JobEnvironment: {},
    JobRequestMessage: {},
    MachineGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    MaskHint: {},
    MaskType: {
        enumValues: {
            "variable": 1,
            "regex": 2
        }
    },
    PackageMetadata: {},
    PlanEnvironment: {},
    PlanGroupStatus: {
        enumValues: {
            "running": 1,
            "queued": 2,
            "all": 3
        }
    },
    PlanGroupStatusFilter: {
        enumValues: {
            "running": 1,
            "queued": 2,
            "all": 3
        }
    },
    ResourceUsage: {},
    SecureFile: {},
    SecureFileActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    ServerTaskRequestMessage: {},
    ServiceEndpointAuthenticationScheme: {},
    ServiceEndpointExecutionData: {},
    ServiceEndpointExecutionRecord: {},
    ServiceEndpointExecutionRecordsInput: {},
    ServiceEndpointRequestResult: {},
    ServiceEndpointType: {},
    TaskAgent: {},
    TaskAgentCloudRequest: {},
    TaskAgentCloudType: {},
    TaskAgentDelaySource: {},
    TaskAgentJobRequest: {},
    TaskAgentJobResultFilter: {
        enumValues: {
            "failed": 1,
            "passed": 2,
            "neverDeployed": 4,
            "all": 7
        }
    },
    TaskAgentManualUpdate: {},
    TaskAgentMinAgentVersionRequiredUpdate: {},
    TaskAgentPool: {},
    TaskAgentPoolActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    TaskAgentPoolMaintenanceDefinition: {},
    TaskAgentPoolMaintenanceJob: {},
    TaskAgentPoolMaintenanceJobResult: {
        enumValues: {
            "succeeded": 1,
            "failed": 2,
            "canceled": 4
        }
    },
    TaskAgentPoolMaintenanceJobStatus: {
        enumValues: {
            "inProgress": 1,
            "completed": 2,
            "cancelling": 4,
            "queued": 8
        }
    },
    TaskAgentPoolMaintenanceJobTargetAgent: {},
    TaskAgentPoolMaintenanceSchedule: {},
    TaskAgentPoolMaintenanceScheduleDays: {
        enumValues: {
            "none": 0,
            "monday": 1,
            "tuesday": 2,
            "wednesday": 4,
            "thursday": 8,
            "friday": 16,
            "saturday": 32,
            "sunday": 64,
            "all": 127
        }
    },
    TaskAgentPoolReference: {},
    TaskAgentPoolSummary: {},
    TaskAgentPoolType: {
        enumValues: {
            "automation": 1,
            "deployment": 2
        }
    },
    TaskAgentQueue: {},
    TaskAgentQueueActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    TaskAgentReference: {},
    TaskAgentSession: {},
    TaskAgentStatus: {
        enumValues: {
            "offline": 1,
            "online": 2
        }
    },
    TaskAgentStatusFilter: {
        enumValues: {
            "offline": 1,
            "online": 2,
            "all": 3
        }
    },
    TaskAgentUpdate: {},
    TaskAgentUpdateReason: {},
    TaskAgentUpdateReasonType: {
        enumValues: {
            "manual": 1,
            "minAgentVersionRequired": 2
        }
    },
    TaskAttachment: {},
    TaskCompletedEvent: {},
    TaskDefinitionStatus: {
        enumValues: {
            "preinstalled": 1,
            "receivedInstallOrUpdate": 2,
            "installed": 3,
            "receivedUninstall": 4,
            "uninstalled": 5,
            "requestedUpdate": 6,
            "updated": 7,
            "alreadyUpToDate": 8,
            "inlineUpdateReceived": 9
        }
    },
    TaskGroup: {},
    TaskGroupExpands: {
        enumValues: {
            "none": 0,
            "tasks": 2
        }
    },
    TaskGroupQueryOrder: {
        enumValues: {
            "createdOnAscending": 0,
            "createdOnDescending": 1
        }
    },
    TaskGroupRevision: {},
    TaskLog: {},
    TaskOrchestrationContainer: {},
    TaskOrchestrationItem: {},
    TaskOrchestrationItemType: {
        enumValues: {
            "container": 0,
            "job": 1
        }
    },
    TaskOrchestrationJob: {},
    TaskOrchestrationPlan: {},
    TaskOrchestrationPlanGroup: {},
    TaskOrchestrationPlanGroupsQueueMetrics: {},
    TaskOrchestrationPlanState: {
        enumValues: {
            "inProgress": 1,
            "queued": 2,
            "completed": 4
        }
    },
    TaskOrchestrationQueuedPlan: {},
    TaskOrchestrationQueuedPlanGroup: {},
    TaskResult: {
        enumValues: {
            "succeeded": 0,
            "succeededWithIssues": 1,
            "failed": 2,
            "canceled": 3,
            "skipped": 4,
            "abandoned": 5
        }
    },
    Timeline: {},
    TimelineRecord: {},
    TimelineRecordState: {
        enumValues: {
            "pending": 0,
            "inProgress": 1,
            "completed": 2
        }
    },
    VariableGroup: {},
    VariableGroupActionFilter: {
        enumValues: {
            "none": 0,
            "manage": 2,
            "use": 16
        }
    },
    VariableGroupQueryOrder: {
        enumValues: {
            "idAscending": 0,
            "idDescending": 1
        }
    },
};
exports.TypeInfo.AgentChangeEvent.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgent
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    },
    timeStamp: {
        isDate: true,
    }
};
exports.TypeInfo.AgentJobRequestMessage.fields = {
    environment: {
        typeInfo: exports.TypeInfo.JobEnvironment
    },
    lockedUntil: {
        isDate: true,
    }
};
exports.TypeInfo.AgentPoolEvent.fields = {
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPool
    }
};
exports.TypeInfo.AgentQueueEvent.fields = {
    queue: {
        typeInfo: exports.TypeInfo.TaskAgentQueue
    }
};
exports.TypeInfo.AgentQueuesEvent.fields = {
    queues: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentQueue
    }
};
exports.TypeInfo.AzureKeyVaultVariableGroupProviderData.fields = {
    lastRefreshedOn: {
        isDate: true,
    }
};
exports.TypeInfo.AzureKeyVaultVariableValue.fields = {
    expires: {
        isDate: true,
    }
};
exports.TypeInfo.DeploymentGroup.fields = {
    machines: {
        isArray: true,
        typeInfo: exports.TypeInfo.DeploymentMachine
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.DeploymentGroupMetrics.fields = {
    deploymentGroup: {
        typeInfo: exports.TypeInfo.DeploymentGroupReference
    }
};
exports.TypeInfo.DeploymentGroupReference.fields = {
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.DeploymentMachine.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgent
    }
};
exports.TypeInfo.DeploymentMachineChangedData.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgent
    }
};
exports.TypeInfo.DeploymentMachineGroup.fields = {
    machines: {
        isArray: true,
        typeInfo: exports.TypeInfo.DeploymentMachine
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.DeploymentMachineGroupReference.fields = {
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.DeploymentMachinesChangeEvent.fields = {
    machineGroupReference: {
        typeInfo: exports.TypeInfo.DeploymentGroupReference
    },
    machines: {
        isArray: true,
        typeInfo: exports.TypeInfo.DeploymentMachineChangedData
    }
};
exports.TypeInfo.DeploymentPoolSummary.fields = {
    deploymentGroups: {
        isArray: true,
        typeInfo: exports.TypeInfo.DeploymentGroupReference
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.Issue.fields = {
    type: {
        enumType: exports.TypeInfo.IssueType
    }
};
exports.TypeInfo.JobAssignedEvent.fields = {
    request: {
        typeInfo: exports.TypeInfo.TaskAgentJobRequest
    }
};
exports.TypeInfo.JobCompletedEvent.fields = {
    result: {
        enumType: exports.TypeInfo.TaskResult
    }
};
exports.TypeInfo.JobEnvironment.fields = {
    mask: {
        isArray: true,
        typeInfo: exports.TypeInfo.MaskHint
    },
    secureFiles: {
        isArray: true,
        typeInfo: exports.TypeInfo.SecureFile
    }
};
exports.TypeInfo.JobRequestMessage.fields = {
    environment: {
        typeInfo: exports.TypeInfo.JobEnvironment
    }
};
exports.TypeInfo.MaskHint.fields = {
    type: {
        enumType: exports.TypeInfo.MaskType
    }
};
exports.TypeInfo.PackageMetadata.fields = {
    createdOn: {
        isDate: true,
    }
};
exports.TypeInfo.PlanEnvironment.fields = {
    mask: {
        isArray: true,
        typeInfo: exports.TypeInfo.MaskHint
    }
};
exports.TypeInfo.ResourceUsage.fields = {
    runningRequests: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentJobRequest
    }
};
exports.TypeInfo.SecureFile.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};
exports.TypeInfo.ServerTaskRequestMessage.fields = {
    environment: {
        typeInfo: exports.TypeInfo.JobEnvironment
    }
};
exports.TypeInfo.ServiceEndpointAuthenticationScheme.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};
exports.TypeInfo.ServiceEndpointExecutionData.fields = {
    finishTime: {
        isDate: true,
    },
    result: {
        enumType: exports.TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    }
};
exports.TypeInfo.ServiceEndpointExecutionRecord.fields = {
    data: {
        typeInfo: exports.TypeInfo.ServiceEndpointExecutionData
    }
};
exports.TypeInfo.ServiceEndpointExecutionRecordsInput.fields = {
    data: {
        typeInfo: exports.TypeInfo.ServiceEndpointExecutionData
    }
};
exports.TypeInfo.ServiceEndpointRequestResult.fields = {};
exports.TypeInfo.ServiceEndpointType.fields = {
    authenticationSchemes: {
        isArray: true,
        typeInfo: exports.TypeInfo.ServiceEndpointAuthenticationScheme
    },
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};
exports.TypeInfo.TaskAgent.fields = {
    assignedAgentCloudRequest: {
        typeInfo: exports.TypeInfo.TaskAgentCloudRequest
    },
    assignedRequest: {
        typeInfo: exports.TypeInfo.TaskAgentJobRequest
    },
    createdOn: {
        isDate: true,
    },
    lastCompletedRequest: {
        typeInfo: exports.TypeInfo.TaskAgentJobRequest
    },
    pendingUpdate: {
        typeInfo: exports.TypeInfo.TaskAgentUpdate
    },
    status: {
        enumType: exports.TypeInfo.TaskAgentStatus
    },
    statusChangedOn: {
        isDate: true,
    }
};
exports.TypeInfo.TaskAgentCloudRequest.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgentReference
    },
    agentConnectedTime: {
        isDate: true,
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    },
    provisionedTime: {
        isDate: true,
    },
    provisionRequestTime: {
        isDate: true,
    },
    releaseRequestTime: {
        isDate: true,
    }
};
exports.TypeInfo.TaskAgentCloudType.fields = {
    inputDescriptors: {
        isArray: true,
        typeInfo: FormInputInterfaces.TypeInfo.InputDescriptor
    }
};
exports.TypeInfo.TaskAgentDelaySource.fields = {
    taskAgent: {
        typeInfo: exports.TypeInfo.TaskAgentReference
    }
};
exports.TypeInfo.TaskAgentJobRequest.fields = {
    agentDelays: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentDelaySource
    },
    assignTime: {
        isDate: true,
    },
    finishTime: {
        isDate: true,
    },
    lockedUntil: {
        isDate: true,
    },
    matchedAgents: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentReference
    },
    queueTime: {
        isDate: true,
    },
    receiveTime: {
        isDate: true,
    },
    reservedAgent: {
        typeInfo: exports.TypeInfo.TaskAgentReference
    },
    result: {
        enumType: exports.TypeInfo.TaskResult
    }
};
exports.TypeInfo.TaskAgentManualUpdate.fields = {
    code: {
        enumType: exports.TypeInfo.TaskAgentUpdateReasonType
    }
};
exports.TypeInfo.TaskAgentMinAgentVersionRequiredUpdate.fields = {
    code: {
        enumType: exports.TypeInfo.TaskAgentUpdateReasonType
    }
};
exports.TypeInfo.TaskAgentPool.fields = {
    createdOn: {
        isDate: true,
    },
    poolType: {
        enumType: exports.TypeInfo.TaskAgentPoolType
    }
};
exports.TypeInfo.TaskAgentPoolMaintenanceDefinition.fields = {
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    },
    scheduleSetting: {
        typeInfo: exports.TypeInfo.TaskAgentPoolMaintenanceSchedule
    }
};
exports.TypeInfo.TaskAgentPoolMaintenanceJob.fields = {
    finishTime: {
        isDate: true,
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    },
    queueTime: {
        isDate: true,
    },
    result: {
        enumType: exports.TypeInfo.TaskAgentPoolMaintenanceJobResult
    },
    startTime: {
        isDate: true,
    },
    status: {
        enumType: exports.TypeInfo.TaskAgentPoolMaintenanceJobStatus
    },
    targetAgents: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentPoolMaintenanceJobTargetAgent
    }
};
exports.TypeInfo.TaskAgentPoolMaintenanceJobTargetAgent.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgentReference
    },
    result: {
        enumType: exports.TypeInfo.TaskAgentPoolMaintenanceJobResult
    },
    status: {
        enumType: exports.TypeInfo.TaskAgentPoolMaintenanceJobStatus
    }
};
exports.TypeInfo.TaskAgentPoolMaintenanceSchedule.fields = {
    daysToBuild: {
        enumType: exports.TypeInfo.TaskAgentPoolMaintenanceScheduleDays
    }
};
exports.TypeInfo.TaskAgentPoolReference.fields = {
    poolType: {
        enumType: exports.TypeInfo.TaskAgentPoolType
    }
};
exports.TypeInfo.TaskAgentPoolSummary.fields = {
    deploymentGroups: {
        isArray: true,
        typeInfo: exports.TypeInfo.DeploymentGroupReference
    },
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    },
    queues: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentQueue
    }
};
exports.TypeInfo.TaskAgentQueue.fields = {
    pool: {
        typeInfo: exports.TypeInfo.TaskAgentPoolReference
    }
};
exports.TypeInfo.TaskAgentReference.fields = {
    status: {
        enumType: exports.TypeInfo.TaskAgentStatus
    }
};
exports.TypeInfo.TaskAgentSession.fields = {
    agent: {
        typeInfo: exports.TypeInfo.TaskAgentReference
    }
};
exports.TypeInfo.TaskAgentUpdate.fields = {
    reason: {
        typeInfo: exports.TypeInfo.TaskAgentUpdateReason
    },
    requestTime: {
        isDate: true,
    }
};
exports.TypeInfo.TaskAgentUpdateReason.fields = {
    code: {
        enumType: exports.TypeInfo.TaskAgentUpdateReasonType
    }
};
exports.TypeInfo.TaskAttachment.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    }
};
exports.TypeInfo.TaskCompletedEvent.fields = {
    result: {
        enumType: exports.TypeInfo.TaskResult
    }
};
exports.TypeInfo.TaskGroup.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};
exports.TypeInfo.TaskGroupRevision.fields = {
    changedDate: {
        isDate: true,
    },
    changeType: {
        enumType: exports.TypeInfo.AuditAction
    }
};
exports.TypeInfo.TaskLog.fields = {
    createdOn: {
        isDate: true,
    },
    lastChangedOn: {
        isDate: true,
    }
};
exports.TypeInfo.TaskOrchestrationContainer.fields = {
    children: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskOrchestrationItem
    },
    itemType: {
        enumType: exports.TypeInfo.TaskOrchestrationItemType
    },
    rollback: {
        typeInfo: exports.TypeInfo.TaskOrchestrationContainer
    }
};
exports.TypeInfo.TaskOrchestrationItem.fields = {
    itemType: {
        enumType: exports.TypeInfo.TaskOrchestrationItemType
    }
};
exports.TypeInfo.TaskOrchestrationJob.fields = {
    itemType: {
        enumType: exports.TypeInfo.TaskOrchestrationItemType
    }
};
exports.TypeInfo.TaskOrchestrationPlan.fields = {
    environment: {
        typeInfo: exports.TypeInfo.PlanEnvironment
    },
    finishTime: {
        isDate: true,
    },
    implementation: {
        typeInfo: exports.TypeInfo.TaskOrchestrationContainer
    },
    result: {
        enumType: exports.TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    },
    state: {
        enumType: exports.TypeInfo.TaskOrchestrationPlanState
    }
};
exports.TypeInfo.TaskOrchestrationPlanGroup.fields = {
    runningRequests: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskAgentJobRequest
    }
};
exports.TypeInfo.TaskOrchestrationPlanGroupsQueueMetrics.fields = {
    status: {
        enumType: exports.TypeInfo.PlanGroupStatus
    }
};
exports.TypeInfo.TaskOrchestrationQueuedPlan.fields = {
    assignTime: {
        isDate: true,
    },
    queueTime: {
        isDate: true,
    }
};
exports.TypeInfo.TaskOrchestrationQueuedPlanGroup.fields = {
    plans: {
        isArray: true,
        typeInfo: exports.TypeInfo.TaskOrchestrationQueuedPlan
    }
};
exports.TypeInfo.Timeline.fields = {
    lastChangedOn: {
        isDate: true,
    },
    records: {
        isArray: true,
        typeInfo: exports.TypeInfo.TimelineRecord
    }
};
exports.TypeInfo.TimelineRecord.fields = {
    finishTime: {
        isDate: true,
    },
    issues: {
        isArray: true,
        typeInfo: exports.TypeInfo.Issue
    },
    lastModified: {
        isDate: true,
    },
    result: {
        enumType: exports.TypeInfo.TaskResult
    },
    startTime: {
        isDate: true,
    },
    state: {
        enumType: exports.TypeInfo.TimelineRecordState
    }
};
exports.TypeInfo.VariableGroup.fields = {
    createdOn: {
        isDate: true,
    },
    modifiedOn: {
        isDate: true,
    }
};
