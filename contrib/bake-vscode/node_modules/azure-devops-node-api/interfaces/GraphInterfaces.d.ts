import IdentitiesInterfaces = require("../interfaces/IdentitiesInterfaces");
export interface GraphCachePolicies {
    /**
     * Size of the cache
     */
    cacheSize?: number;
}
export interface GraphDescriptorResult {
    /**
     * This field contains zero or more interesting links about the graph descriptor. These links may be invoked to obtain additional relationships or more detailed information about this graph descriptor.
     */
    _links?: any;
    value?: string;
}
/**
 * Represents a set of data used to communicate with a federated provider on behalf of a particular user.
 */
export interface GraphFederatedProviderData {
    /**
     * The access token that can be used to communicated with the federated provider on behalf on the target identity, if we were able to successfully acquire one, otherwise <code>null</code>, if we were not.
     */
    accessToken?: string;
    /**
     * Whether or not the immediate provider (i.e. AAD) has indicated that we can call them to attempt to get an access token to communicate with the federated provider on behalf of the target identity.
     */
    canQueryAccessToken?: boolean;
    /**
     * The name of the federated provider, e.g. "github.com".
     */
    providerName?: string;
    /**
     * The descriptor of the graph subject to which this federated provider data corresponds.
     */
    subjectDescriptor?: string;
    /**
     * The version number of this federated provider data, which corresponds to when it was last updated. Can be used to prevent returning stale provider data from the cache when the caller is aware of a newer version, such as to prevent local cache poisoning from a remote cache or store. This is the app layer equivalent of the data layer sequence ID.
     */
    version?: number;
}
export interface GraphGlobalExtendedPropertyBatch {
    propertyNameFilters?: string[];
    subjectDescriptors?: string[];
}
export interface GraphGroup extends GraphMember {
    /**
     * A short phrase to help human readers disambiguate groups with similar names
     */
    description?: string;
    isCrossProject?: boolean;
    isDeleted?: boolean;
    isGlobalScope?: boolean;
    isRestrictedVisible?: boolean;
    localScopeId?: string;
    scopeId?: string;
    scopeName?: string;
    scopeType?: string;
    securingHostId?: string;
    specialType?: string;
}
/**
 * Do not attempt to use this type to create a new group. This type does not contain sufficient fields to create a new group.
 */
export interface GraphGroupCreationContext {
    /**
     * Optional: If provided, we will use this identifier for the storage key of the created group
     */
    storageKey?: string;
}
/**
 * Use this type to create a new group using the mail address as a reference to an existing group from an external AD or AAD backed provider. This is the subset of GraphGroup fields required for creation of a group for the AAD and AD use case.
 */
export interface GraphGroupMailAddressCreationContext extends GraphGroupCreationContext {
    /**
     * This should be the mail address or the group in the source AD or AAD provider. Example: jamal@contoso.com Team Services will communicate with the source provider to fill all other fields on creation.
     */
    mailAddress: string;
}
/**
 * Use this type to create a new group using the OriginID as a reference to an existing group from an external AD or AAD backed provider. This is the subset of GraphGroup fields required for creation of a group for the AD and AAD use case.
 */
export interface GraphGroupOriginIdCreationContext extends GraphGroupCreationContext {
    /**
     * This should be the object id or sid of the group from the source AD or AAD provider. Example: d47d025a-ce2f-4a79-8618-e8862ade30dd Team Services will communicate with the source provider to fill all other fields on creation.
     */
    originId: string;
}
/**
 * Use this type to create a new Vsts group that is not backed by an external provider.
 */
export interface GraphGroupVstsCreationContext extends GraphGroupCreationContext {
    /**
     * For internal use only in back compat scenarios.
     */
    crossProject?: boolean;
    /**
     * Used by VSTS groups; if set this will be the group description, otherwise ignored
     */
    description?: string;
    descriptor?: string;
    /**
     * Used by VSTS groups; if set this will be the group DisplayName, otherwise ignored
     */
    displayName: string;
    /**
     * For internal use only in back compat scenarios.
     */
    restrictedVisibility?: boolean;
    /**
     * For internal use only in back compat scenarios.
     */
    specialGroupType?: string;
}
export interface GraphMember extends GraphSubject {
    /**
     * This represents the name of the container of origin for a graph member. (For MSA this is "Windows Live ID", for AD the name of the domain, for AAD the tenantID of the directory, for VSTS groups the ScopeId, etc)
     */
    domain?: string;
    /**
     * The email address of record for a given graph member. This may be different than the principal name.
     */
    mailAddress?: string;
    /**
     * This is the PrincipalName of this graph member from the source provider. The source provider may change this field over time and it is not guaranteed to be immutable for the life of the graph member by VSTS.
     */
    principalName?: string;
}
export declare enum GraphMemberSearchFactor {
    /**
     * Domain qualified account name (domain\alias)
     */
    PrincipalName = 0,
    /**
     * Display name
     */
    DisplayName = 1,
    /**
     * Administrators group
     */
    AdministratorsGroup = 2,
    /**
     * Find the identity using the identifier (SID)
     */
    Identifier = 3,
    /**
     * Email address
     */
    MailAddress = 4,
    /**
     * A general search for an identity.
     */
    General = 5,
    /**
     * Alternate login username (Basic Auth Alias)
     */
    Alias = 6,
    /**
     * Find identity using DirectoryAlias
     */
    DirectoryAlias = 8,
}
export interface GraphMembership {
    /**
     * This field contains zero or more interesting links about the graph membership. These links may be invoked to obtain additional relationships or more detailed information about this graph membership.
     */
    _links?: any;
    containerDescriptor?: string;
    memberDescriptor?: string;
}
export interface GraphMembershipState {
    /**
     * This field contains zero or more interesting links about the graph membership state. These links may be invoked to obtain additional relationships or more detailed information about this graph membership state.
     */
    _links?: any;
    active?: boolean;
}
export interface GraphMembershipTraversal {
    /**
     * Reason why the subject could not be traversed completely
     */
    incompletenessReason?: string;
    /**
     * When true, the subject is traversed completely
     */
    isComplete?: boolean;
    /**
     * The traversed subject descriptor
     */
    subjectDescriptor?: string;
    /**
     * Subject descriptor ids of the traversed members
     */
    traversedSubjectIds?: string[];
    /**
     * Subject descriptors of the traversed members
     */
    traversedSubjects?: string[];
}
/**
 * Who is the provider for this user and what is the identifier and domain that is used to uniquely identify the user.
 */
export interface GraphProviderInfo {
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor?: string;
    /**
     * This represents the name of the container of origin for a graph member. (For MSA this is "Windows Live ID", for AAD the tenantID of the directory.)
     */
    domain?: string;
    /**
     * The type of source provider for the origin identifier (ex: "aad", "msa")
     */
    origin?: string;
    /**
     * The unique identifier from the system of origin. (For MSA this is the PUID in hex notation, for AAD this is the object id.)
     */
    originId?: string;
}
export interface GraphScope extends GraphSubject {
    /**
     * The subject descriptor that references the administrators group for this scope. Only members of this group can change the contents of this scope or assign other users permissions to access this scope.
     */
    administratorDescriptor?: string;
    /**
     * When true, this scope is also a securing host for one or more scopes.
     */
    isGlobal?: boolean;
    /**
     * The subject descriptor for the closest account or organization in the ancestor tree of this scope.
     */
    parentDescriptor?: string;
    /**
     * The type of this scope. Typically ServiceHost or TeamProject.
     */
    scopeType?: IdentitiesInterfaces.GroupScopeType;
    /**
     * The subject descriptor for the containing organization in the ancestor tree of this scope.
     */
    securingHostDescriptor?: string;
}
/**
 * This type is the subset of fields that can be provided by the user to create a Vsts scope. Scope creation is currently limited to internal back-compat scenarios. End users that attempt to create a scope with this API will fail.
 */
export interface GraphScopeCreationContext {
    /**
     * Set this field to override the default description of this scope's admin group.
     */
    adminGroupDescription?: string;
    /**
     * All scopes have an Administrator Group that controls access to the contents of the scope. Set this field to use a non-default group name for that administrators group.
     */
    adminGroupName?: string;
    /**
     * Set this optional field if this scope is created on behalf of a user other than the user making the request. This should be the Id of the user that is not the requester.
     */
    creatorId?: string;
    /**
     * The scope must be provided with a unique name within the parent scope. This means the created scope can have a parent or child with the same name, but no siblings with the same name.
     */
    name?: string;
    /**
     * The type of scope being created.
     */
    scopeType?: IdentitiesInterfaces.GroupScopeType;
    /**
     * An optional ID that uniquely represents the scope within it's parent scope. If this parameter is not provided, Vsts will generate on automatically.
     */
    storageKey?: string;
}
export interface GraphStorageKeyResult {
    /**
     * This field contains zero or more interesting links about the graph storage key. These links may be invoked to obtain additional relationships or more detailed information about this graph storage key.
     */
    _links?: any;
    value?: string;
}
export interface GraphSubject extends GraphSubjectBase {
    /**
     * [Internal Use Only] The legacy descriptor is here in case you need to access old version IMS using identity descriptor.
     */
    legacyDescriptor?: string;
    /**
     * The type of source provider for the origin identifier (ex:AD, AAD, MSA)
     */
    origin?: string;
    /**
     * The unique identifier from the system of origin. Typically a sid, object id or Guid. Linking and unlinking operations can cause this value to change for a user because the user is not backed by a different provider and has a different unique id in the new provider.
     */
    originId?: string;
    /**
     * This field identifies the type of the graph subject (ex: Group, Scope, User).
     */
    subjectKind?: string;
}
export interface GraphSubjectBase {
    /**
     * This field contains zero or more interesting links about the graph subject. These links may be invoked to obtain additional relationships or more detailed information about this graph subject.
     */
    _links?: any;
    /**
     * The descriptor is the primary way to reference the graph subject while the system is running. This field will uniquely identify the same graph subject across both Accounts and Organizations.
     */
    descriptor?: string;
    /**
     * This is the non-unique display name of the graph subject. To change this field, you must alter its value in the source provider.
     */
    displayName?: string;
    /**
     * This url is the full route to the source resource of this graph subject.
     */
    url?: string;
}
export interface GraphSubjectLookup {
    lookupKeys?: GraphSubjectLookupKey[];
}
export interface GraphSubjectLookupKey {
    descriptor?: string;
}
export interface GraphSystemSubject extends GraphSubject {
}
export declare enum GraphTraversalDirection {
    Unknown = 0,
    Down = 1,
    Up = 2,
}
export interface GraphUser extends GraphMember {
    isDeletedInOrigin?: boolean;
    metadataUpdateDate?: Date;
    /**
     * The meta type of the user in the origin, such as "member", "guest", etc. See UserMetaType for the set of possible values.
     */
    metaType?: string;
}
/**
 * Do not attempt to use this type to create a new user. Use one of the subclasses instead. This type does not contain sufficient fields to create a new user.
 */
export interface GraphUserCreationContext {
    /**
     * Optional: If provided, we will use this identifier for the storage key of the created user
     */
    storageKey?: string;
}
/**
 * Use this type to create a new user using the mail address as a reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its mail address in the backing provider.
 */
export interface GraphUserMailAddressCreationContext extends GraphUserCreationContext {
    mailAddress: string;
}
/**
 * Use this type to create a new user using the OriginID as a reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its unique ID in the backing provider.
 */
export interface GraphUserOriginIdCreationContext extends GraphUserCreationContext {
    /**
     * This should be the object id or sid of the user from the source AD or AAD provider. Example: d47d025a-ce2f-4a79-8618-e8862ade30dd Team Services will communicate with the source provider to fill all other fields on creation.
     */
    originId: string;
}
/**
 * Use this type to create a new user using the principal name as a reference to an existing user from an external AD or AAD backed provider. This is the subset of GraphUser fields required for creation of a GraphUser for the AD and AAD use case when looking up the user by its principal name in the backing provider.
 */
export interface GraphUserPrincipalNameCreationContext extends GraphUserCreationContext {
    /**
     * This should be the principal name or upn of the user in the source AD or AAD provider. Example: jamal@contoso.com Team Services will communicate with the source provider to fill all other fields on creation.
     */
    principalName: string;
}
export declare enum IdentityShardingState {
    Undefined = 0,
    Enabled = 1,
    Disabled = 2,
}
export interface PagedGraphGroups {
    /**
     * This will be non-null if there is another page of data. There will never be more than one continuation token returned by a request.
     */
    continuationToken?: string[];
    /**
     * The enumerable list of groups found within a page.
     */
    graphGroups?: GraphGroup[];
}
export interface PagedGraphUsers {
    /**
     * This will be non-null if there is another page of data. There will never be more than one continuation token returned by a request.
     */
    continuationToken?: string[];
    /**
     * The enumerable set of users found within a page.
     */
    graphUsers?: GraphUser[];
}
export declare var TypeInfo: {
    GraphMemberSearchFactor: {
        enumValues: {
            "principalName": number;
            "displayName": number;
            "administratorsGroup": number;
            "identifier": number;
            "mailAddress": number;
            "general": number;
            "alias": number;
            "directoryAlias": number;
        };
    };
    GraphScope: any;
    GraphScopeCreationContext: any;
    GraphTraversalDirection: {
        enumValues: {
            "unknown": number;
            "down": number;
            "up": number;
        };
    };
    GraphUser: any;
    IdentityShardingState: {
        enumValues: {
            "undefined": number;
            "enabled": number;
            "disabled": number;
        };
    };
    PagedGraphUsers: any;
};
