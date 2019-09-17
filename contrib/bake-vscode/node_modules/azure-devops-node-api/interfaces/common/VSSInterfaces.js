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
/**
 * The type of scope from where the event is originated
 */
var AuditScopeType;
(function (AuditScopeType) {
    /**
     * The scope is not known or has not been set
     */
    AuditScopeType[AuditScopeType["Unknown"] = 0] = "Unknown";
    /**
     * Deployment
     */
    AuditScopeType[AuditScopeType["Deployment"] = 1] = "Deployment";
    /**
     * Organization
     */
    AuditScopeType[AuditScopeType["Organization"] = 2] = "Organization";
    /**
     * Collection
     */
    AuditScopeType[AuditScopeType["Collection"] = 4] = "Collection";
    /**
     * Project
     */
    AuditScopeType[AuditScopeType["Project"] = 8] = "Project";
})(AuditScopeType = exports.AuditScopeType || (exports.AuditScopeType = {}));
/**
 * Enumeration of the options that can be passed in on Connect.
 */
var ConnectOptions;
(function (ConnectOptions) {
    /**
     * Retrieve no optional data.
     */
    ConnectOptions[ConnectOptions["None"] = 0] = "None";
    /**
     * Includes information about AccessMappings and ServiceDefinitions.
     */
    ConnectOptions[ConnectOptions["IncludeServices"] = 1] = "IncludeServices";
    /**
     * Includes the last user access for this host.
     */
    ConnectOptions[ConnectOptions["IncludeLastUserAccess"] = 2] = "IncludeLastUserAccess";
    /**
     * This is only valid on the deployment host and when true. Will only return inherited definitions.
     */
    ConnectOptions[ConnectOptions["IncludeInheritedDefinitionsOnly"] = 4] = "IncludeInheritedDefinitionsOnly";
    /**
     * When true will only return non inherited definitions. Only valid at non-deployment host.
     */
    ConnectOptions[ConnectOptions["IncludeNonInheritedDefinitionsOnly"] = 8] = "IncludeNonInheritedDefinitionsOnly";
})(ConnectOptions = exports.ConnectOptions || (exports.ConnectOptions = {}));
var DeploymentFlags;
(function (DeploymentFlags) {
    DeploymentFlags[DeploymentFlags["None"] = 0] = "None";
    DeploymentFlags[DeploymentFlags["Hosted"] = 1] = "Hosted";
    DeploymentFlags[DeploymentFlags["OnPremises"] = 2] = "OnPremises";
})(DeploymentFlags = exports.DeploymentFlags || (exports.DeploymentFlags = {}));
var JWTAlgorithm;
(function (JWTAlgorithm) {
    JWTAlgorithm[JWTAlgorithm["None"] = 0] = "None";
    JWTAlgorithm[JWTAlgorithm["HS256"] = 1] = "HS256";
    JWTAlgorithm[JWTAlgorithm["RS256"] = 2] = "RS256";
})(JWTAlgorithm = exports.JWTAlgorithm || (exports.JWTAlgorithm = {}));
var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Remove"] = 1] = "Remove";
    Operation[Operation["Replace"] = 2] = "Replace";
    Operation[Operation["Move"] = 3] = "Move";
    Operation[Operation["Copy"] = 4] = "Copy";
    Operation[Operation["Test"] = 5] = "Test";
})(Operation = exports.Operation || (exports.Operation = {}));
exports.TypeInfo = {
    AuditLogEntry: {},
    AuditScopeType: {
        enumValues: {
            "unknown": 0,
            "deployment": 1,
            "organization": 2,
            "collection": 4,
            "project": 8
        }
    },
    ConnectOptions: {
        enumValues: {
            "none": 0,
            "includeServices": 1,
            "includeLastUserAccess": 2,
            "includeInheritedDefinitionsOnly": 4,
            "includeNonInheritedDefinitionsOnly": 8
        }
    },
    DeploymentFlags: {
        enumValues: {
            "none": 0,
            "hosted": 1,
            "onPremises": 2
        }
    },
    JsonPatchOperation: {},
    JWTAlgorithm: {
        enumValues: {
            "none": 0,
            "hS256": 1,
            "rS256": 2
        }
    },
    Operation: {
        enumValues: {
            "add": 0,
            "remove": 1,
            "replace": 2,
            "move": 3,
            "copy": 4,
            "test": 5
        }
    },
    TraceFilter: {},
    VssNotificationEvent: {},
};
exports.TypeInfo.AuditLogEntry.fields = {
    scopeType: {
        enumType: exports.TypeInfo.AuditScopeType
    },
    timestamp: {
        isDate: true,
    }
};
exports.TypeInfo.JsonPatchOperation.fields = {
    op: {
        enumType: exports.TypeInfo.Operation
    }
};
exports.TypeInfo.TraceFilter.fields = {
    timeCreated: {
        isDate: true,
    }
};
exports.TypeInfo.VssNotificationEvent.fields = {
    sourceEventCreatedTime: {
        isDate: true,
    }
};
