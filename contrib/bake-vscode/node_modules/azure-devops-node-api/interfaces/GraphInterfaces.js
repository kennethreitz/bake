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
const IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");
var GraphMemberSearchFactor;
(function (GraphMemberSearchFactor) {
    /**
     * Domain qualified account name (domain\alias)
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["PrincipalName"] = 0] = "PrincipalName";
    /**
     * Display name
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["DisplayName"] = 1] = "DisplayName";
    /**
     * Administrators group
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["AdministratorsGroup"] = 2] = "AdministratorsGroup";
    /**
     * Find the identity using the identifier (SID)
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["Identifier"] = 3] = "Identifier";
    /**
     * Email address
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["MailAddress"] = 4] = "MailAddress";
    /**
     * A general search for an identity.
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["General"] = 5] = "General";
    /**
     * Alternate login username (Basic Auth Alias)
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["Alias"] = 6] = "Alias";
    /**
     * Find identity using DirectoryAlias
     */
    GraphMemberSearchFactor[GraphMemberSearchFactor["DirectoryAlias"] = 8] = "DirectoryAlias";
})(GraphMemberSearchFactor = exports.GraphMemberSearchFactor || (exports.GraphMemberSearchFactor = {}));
var GraphTraversalDirection;
(function (GraphTraversalDirection) {
    GraphTraversalDirection[GraphTraversalDirection["Unknown"] = 0] = "Unknown";
    GraphTraversalDirection[GraphTraversalDirection["Down"] = 1] = "Down";
    GraphTraversalDirection[GraphTraversalDirection["Up"] = 2] = "Up";
})(GraphTraversalDirection = exports.GraphTraversalDirection || (exports.GraphTraversalDirection = {}));
var IdentityShardingState;
(function (IdentityShardingState) {
    IdentityShardingState[IdentityShardingState["Undefined"] = 0] = "Undefined";
    IdentityShardingState[IdentityShardingState["Enabled"] = 1] = "Enabled";
    IdentityShardingState[IdentityShardingState["Disabled"] = 2] = "Disabled";
})(IdentityShardingState = exports.IdentityShardingState || (exports.IdentityShardingState = {}));
exports.TypeInfo = {
    GraphMemberSearchFactor: {
        enumValues: {
            "principalName": 0,
            "displayName": 1,
            "administratorsGroup": 2,
            "identifier": 3,
            "mailAddress": 4,
            "general": 5,
            "alias": 6,
            "directoryAlias": 8
        }
    },
    GraphScope: {},
    GraphScopeCreationContext: {},
    GraphTraversalDirection: {
        enumValues: {
            "unknown": 0,
            "down": 1,
            "up": 2
        }
    },
    GraphUser: {},
    IdentityShardingState: {
        enumValues: {
            "undefined": 0,
            "enabled": 1,
            "disabled": 2
        }
    },
    PagedGraphUsers: {},
};
exports.TypeInfo.GraphScope.fields = {
    scopeType: {
        enumType: IdentitiesInterfaces.TypeInfo.GroupScopeType
    }
};
exports.TypeInfo.GraphScopeCreationContext.fields = {
    scopeType: {
        enumType: IdentitiesInterfaces.TypeInfo.GroupScopeType
    }
};
exports.TypeInfo.GraphUser.fields = {
    metadataUpdateDate: {
        isDate: true,
    }
};
exports.TypeInfo.PagedGraphUsers.fields = {
    graphUsers: {
        isArray: true,
        typeInfo: exports.TypeInfo.GraphUser
    }
};
