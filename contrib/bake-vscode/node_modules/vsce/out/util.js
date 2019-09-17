"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _read = require("read");
const WebApi_1 = require("azure-devops-node-api/WebApi");
const GalleryApi_1 = require("azure-devops-node-api/GalleryApi");
const denodeify = require("denodeify");
const chalk_1 = require("chalk");
const publicgalleryapi_1 = require("./publicgalleryapi");
const __read = denodeify(_read);
function read(prompt, options = {}) {
    if (process.env['VSCE_TESTS'] || !process.stdout.isTTY) {
        return Promise.resolve('y');
    }
    return __read(Object.assign({ prompt }, options));
}
exports.read = read;
const marketplaceUrl = process.env['VSCE_MARKETPLACE_URL'] || 'https://marketplace.visualstudio.com';
function getPublishedUrl(extension) {
    return `${marketplaceUrl}/items?itemName=${extension}`;
}
exports.getPublishedUrl = getPublishedUrl;
function getGalleryAPI(pat) {
    return __awaiter(this, void 0, void 0, function* () {
        // from https://github.com/Microsoft/tfs-cli/blob/master/app/exec/extension/default.ts#L287-L292
        const authHandler = WebApi_1.getBasicHandler('OAuth', pat);
        return new GalleryApi_1.GalleryApi(marketplaceUrl, [authHandler]);
        // const vsoapi = new WebApi(marketplaceUrl, authHandler);
        // return await vsoapi.getGalleryApi();
    });
}
exports.getGalleryAPI = getGalleryAPI;
function getSecurityRolesAPI(pat) {
    return __awaiter(this, void 0, void 0, function* () {
        const authHandler = WebApi_1.getBasicHandler('OAuth', pat);
        const vsoapi = new WebApi_1.WebApi(marketplaceUrl, authHandler);
        return yield vsoapi.getSecurityRolesApi();
    });
}
exports.getSecurityRolesAPI = getSecurityRolesAPI;
function getPublicGalleryAPI() {
    return new publicgalleryapi_1.PublicGalleryAPI(marketplaceUrl, '3.0-preview.1');
}
exports.getPublicGalleryAPI = getPublicGalleryAPI;
function normalize(path) {
    return path.replace(/\\/g, '/');
}
exports.normalize = normalize;
function chain2(a, b, fn, index = 0) {
    if (index >= b.length) {
        return Promise.resolve(a);
    }
    return fn(a, b[index]).then(a => chain2(a, b, fn, index + 1));
}
function chain(initial, processors, process) {
    return chain2(initial, processors, process);
}
exports.chain = chain;
function flatten(arr) {
    return [].concat.apply([], arr);
}
exports.flatten = flatten;
const CancelledError = 'Cancelled';
function isCancelledError(error) {
    return error === CancelledError;
}
exports.isCancelledError = isCancelledError;
class CancellationToken {
    constructor() {
        this.listeners = [];
        this._cancelled = false;
    }
    get isCancelled() { return this._cancelled; }
    subscribe(fn) {
        this.listeners.push(fn);
        return () => {
            const index = this.listeners.indexOf(fn);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
    cancel() {
        const emit = !this._cancelled;
        this._cancelled = true;
        if (emit) {
            this.listeners.forEach(l => l(CancelledError));
            this.listeners = [];
        }
    }
}
exports.CancellationToken = CancellationToken;
function sequence(promiseFactories) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const factory of promiseFactories) {
            yield factory();
        }
    });
}
exports.sequence = sequence;
var LogMessageType;
(function (LogMessageType) {
    LogMessageType[LogMessageType["DONE"] = 0] = "DONE";
    LogMessageType[LogMessageType["INFO"] = 1] = "INFO";
    LogMessageType[LogMessageType["WARNING"] = 2] = "WARNING";
    LogMessageType[LogMessageType["ERROR"] = 3] = "ERROR";
})(LogMessageType || (LogMessageType = {}));
const LogPrefix = {
    [LogMessageType.DONE]: chalk_1.default.bgGreen.black(' DONE '),
    [LogMessageType.INFO]: chalk_1.default.bgBlueBright.black(' INFO '),
    [LogMessageType.WARNING]: chalk_1.default.bgYellow.black(' WARNING '),
    [LogMessageType.ERROR]: chalk_1.default.bgRed.black(' ERROR '),
};
function _log(type, msg, ...args) {
    args = [LogPrefix[type], msg, ...args];
    if (type === LogMessageType.WARNING) {
        console.warn(...args);
    }
    else if (type === LogMessageType.ERROR) {
        console.error(...args);
    }
    else {
        console.log(...args);
    }
}
exports.log = {
    done: _log.bind(null, LogMessageType.DONE),
    info: _log.bind(null, LogMessageType.INFO),
    warn: _log.bind(null, LogMessageType.WARNING),
    error: _log.bind(null, LogMessageType.ERROR)
};
