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
const GitInterfaces = require("../interfaces/GitInterfaces");
/**
 * Wiki types.
 */
var WikiType;
(function (WikiType) {
    WikiType[WikiType["ProjectWiki"] = 0] = "ProjectWiki";
    WikiType[WikiType["CodeWiki"] = 1] = "CodeWiki";
})(WikiType = exports.WikiType || (exports.WikiType = {}));
exports.TypeInfo = {
    Wiki: {},
    WikiCreateBaseParameters: {},
    WikiCreateParametersV2: {},
    WikiPageViewStats: {},
    WikiType: {
        enumValues: {
            "projectWiki": 0,
            "codeWiki": 1
        }
    },
    WikiUpdateParameters: {},
    WikiV2: {},
};
exports.TypeInfo.Wiki.fields = {
    repository: {
        typeInfo: GitInterfaces.TypeInfo.GitRepository
    }
};
exports.TypeInfo.WikiCreateBaseParameters.fields = {
    type: {
        enumType: exports.TypeInfo.WikiType
    }
};
exports.TypeInfo.WikiCreateParametersV2.fields = {
    type: {
        enumType: exports.TypeInfo.WikiType
    },
    version: {
        typeInfo: GitInterfaces.TypeInfo.GitVersionDescriptor
    }
};
exports.TypeInfo.WikiPageViewStats.fields = {
    lastViewedTime: {
        isDate: true,
    }
};
exports.TypeInfo.WikiUpdateParameters.fields = {
    versions: {
        isArray: true,
        typeInfo: GitInterfaces.TypeInfo.GitVersionDescriptor
    }
};
exports.TypeInfo.WikiV2.fields = {
    type: {
        enumType: exports.TypeInfo.WikiType
    },
    versions: {
        isArray: true,
        typeInfo: GitInterfaces.TypeInfo.GitVersionDescriptor
    }
};
