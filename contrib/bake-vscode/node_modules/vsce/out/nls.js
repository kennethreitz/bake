"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const regex = /^%([\w\d.]+)%$/i;
function patcher(translations) {
    return value => {
        if (typeof value !== 'string') {
            return;
        }
        const match = regex.exec(value);
        if (!match) {
            return;
        }
        return translations[match[1]] || value;
    };
}
function patchNLS(manifest, translations) {
    return lodash_1.cloneDeepWith(manifest, patcher(translations));
}
exports.patchNLS = patchNLS;
