"use strict";
// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
Object.defineProperty(exports, "__esModule", { value: true });
const resthandlers = require("typed-rest-client/Handlers");
class PersonalAccessTokenCredentialHandler extends resthandlers.PersonalAccessTokenCredentialHandler {
    constructor(token) {
        super(token);
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
