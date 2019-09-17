"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const GalleryInterfaces_1 = require("azure-devops-node-api/interfaces/GalleryInterfaces");
const viewutils_1 = require("./viewutils");
const limitVersions = 6;
const isExtensionTag = /^__ext_(.*)$/;
function show(extensionId, json = false) {
    const flags = [
        GalleryInterfaces_1.ExtensionQueryFlags.IncludeCategoryAndTags,
        GalleryInterfaces_1.ExtensionQueryFlags.IncludeMetadata,
        GalleryInterfaces_1.ExtensionQueryFlags.IncludeStatistics,
        GalleryInterfaces_1.ExtensionQueryFlags.IncludeVersions,
    ];
    return util_1.getPublicGalleryAPI()
        .getExtension(extensionId, flags)
        .then(extension => {
        if (json) {
            console.log(JSON.stringify(extension, undefined, '\t'));
        }
        else {
            if (extension === undefined) {
                util_1.log.error(`Extension "${extensionId}" not found.`);
            }
            else {
                showOverview(extension);
            }
        }
    });
}
exports.show = show;
function showOverview({ displayName = 'unknown', extensionName = 'unknown', shortDescription = '', versions = [], publisher: { displayName: publisherDisplayName, publisherName }, categories = [], tags = [], statistics = [], publishedDate, lastUpdated, }) {
    const [{ version = 'unknown' } = {}] = versions;
    // Create formatted table list of versions
    const versionList = versions
        .slice(0, limitVersions)
        .map(({ version, lastUpdated }) => [version, viewutils_1.formatDate(lastUpdated)]);
    const { install: installs = 0, averagerating = 0, ratingcount = 0, } = statistics
        .reduce((map, { statisticName, value }) => (Object.assign({}, map, { [statisticName]: value })), {});
    // Render
    console.log([
        `${displayName}`,
        `${publisherDisplayName} | ${viewutils_1.icons.download} ` +
            `${Number(installs).toLocaleString()} installs |` +
            ` ${viewutils_1.ratingStars(averagerating)} (${ratingcount})`,
        '',
        `${shortDescription}`,
        '',
        'Recent versions:',
        ...(versionList.length ? viewutils_1.tableView(versionList).map(viewutils_1.indentRow) : ['no versions found']),
        '',
        'Categories:',
        `  ${categories.join(', ')}`,
        '',
        'Tags:',
        `  ${tags.filter(tag => !isExtensionTag.test(tag)).join(', ')}`,
        '',
        'More info:',
        ...viewutils_1.tableView([
            ['Unique identifier:', `${publisherName}.${extensionName}`],
            ['Version:', version],
            ['Last updated:', viewutils_1.formatDateTime(lastUpdated)],
            ['Publisher:', publisherDisplayName],
            ['Published at:', viewutils_1.formatDate(publishedDate)],
        ])
            .map(viewutils_1.indentRow),
        '',
        'Statistics:',
        ...viewutils_1.tableView(statistics.map(({ statisticName, value }) => [statisticName, Number(value).toFixed(2)]))
            .map(viewutils_1.indentRow),
    ]
        .map(line => viewutils_1.wordWrap(line))
        .join('\n'));
}
