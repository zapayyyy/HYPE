// Type definitions for discord.js 11.0.0
// Project: https://github.com/hydrabolt/discord.js
// Definitions by:
//   acdenisSK <acdenissk69@gmail.com> (https://github.com/acdenisSK)
//   Zack Campbell <zajrik@gmail.com> (https://github.com/zajrik)
// License: MIT

declare module 'discord.js' {
	import { EventEmitter } from 'events';
	import { Readable as ReadableStream } from 'stream';
	import { ChildProcess } from 'child_process';

	export const version: string;

//#region Classes

	class AudioPlayer extends EventEmitter {
		constructor(voiceConnection: VoiceConnection);
		public readonly dispatcher: StreamDispatcher;
		public opusEncoder: object;
		public prism: object;
		public readonly transcoder: object;
		public voiceConnection: VoiceConnection;
	}

	class BaseOpus {
		constructor(options?: { fec: boolean, plp: number });
	}

	export class Channel {
		constructor(client: Client, data: object);
		public readonly client: Client;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public id: Snowflake;
		public type: 'dm' | 'group' | 'text' | 'voice';
		public delete(): Promise<Channel>;
	}

	export class Client extends EventEmitter {
		constructor(options?: ClientOptions);
		private _intervals: NodeJS.Timer;
		private _pingTimestamp: number;
		private _timeouts: NodeJS.Timer;
		private dataManager: object;
		private manager: ClientManager;
		private resolver: ClientDataResolver;
		private rest: object;
		private voice: ClientVoiceManager;
		private ws: object;
		private _eval(script: string): any;
		private _pong(startTime: number): void;
		private _setPresence(id: Snowflake, presence: object): void;
		private _validateOptions(options?: ClientOptions): void;

		public broadcasts: VoiceBroadcast[];
		public readonly browser: boolean;
		public channels: Collection<Snowflake, Channel>;
		public readonly emojis: Collection<Snowflake, Emoji>;
		public guilds: Collection<Snowflake, Guild>;
		public options: ClientOptions;
		public readonly ping: number;
		public pings: number[];
		public presences: Collection<Snowflake, Presence>;
		public readyAt: Date;
		public readonly readyTimestamp: number;
		public shard?: ShardClientUtil;
		public readonly status: number;
		public token: string;
		public readonly uptime: number;
		public user: ClientUser;
		public users: Collection<Snowflake, User>;
		public readonly voiceConnections: Collection<Snowflake, VoiceConnection>;
		public clearInterval(interval: NodeJS.Timer): void;
		public clearTimeout(timeout: NodeJS.Timer): void;
		public createVoiceBroadcast(): VoiceBroadcast;
		public destroy(): Promise<void>;
		public fetchApplication(id?: Snowflake): Promise<ClientOAuth2Application>;
		public fetchInvite(invite: InviteResolvable): Promise<Invite>;
		public fetchUser(id: Snowflake, cache?: boolean): Promise<User>;
		public fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
		public fetchWebhook(id: Snowflake, token?: string): Promise<Webhook>;
		public generateInvite(permissions?: PermissionResolvable[] | number): Promise<string>;
		public login(token: string): Promise<string>;
		public setInterval(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		public setTimeout(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		public sweepMessages(lifetime?: number): number;
		public syncGuilds(guilds?: Guild[] | Collection<Snowflake, Guild>): void;

		public on(event: string, listener: Function): this;
		public on(event: 'channelCreate', listener: (channel: Channel) => void): this;
		public on(event: 'channelDelete', listener: (channel: Channel) => void): this;
		public on(event: 'channelPinsUpdate', listener: (channel: Channel, time: Date) => void): this;
		public on(event: 'channelUpdate', listener: (oldChannel: Channel, newChannel: Channel) => void): this;
		public on(event: 'clientUserSettingsUpdate', listener: (clientUserSettings: ClientUserSettings) => void): this;
		public on(event: 'debug', listener: (info: string) => void): this;
		public on(event: 'disconnect', listener: (event: any) => void): this;
		public on(event: 'emojiCreate', listener: (emoji: Emoji) => void): this;
		public on(event: 'emojiDelete', listener: (emoji: Emoji) => void): this;
		public on(event: 'emojiUpdate', listener: (oldEmoji: Emoji, newEmoji: Emoji) => void): this;
		public on(event: 'error', listener: (error: Error) => void): this;
		public on(event: 'guildBanAdd', listener: (guild: Guild, user: User) => void): this;
		public on(event: 'guildBanRemove', listener: (guild: Guild, user: User) => void): this;
		public on(event: 'guildCreate', listener: (guild: Guild) => void): this;
		public on(event: 'guildDelete', listener: (guild: Guild) => void): this;
		public on(event: 'guildMemberAdd', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMemberAvailable', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMemberRemove', listener: (member: GuildMember) => void): this;
		public on(event: 'guildMembersChunk', listener: (members: Collection<Snowflake, GuildMember>, guild: Guild) => void): this;
		public on(event: 'guildMemberSpeaking', listener: (member: GuildMember, speaking: boolean) => void): this;
		public on(event: 'guildMemberUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		public on(event: 'guildUnavailable', listener: (guild: Guild) => void): this;
		public on(event: 'guildUpdate', listener: (oldGuild: Guild, newGuild: Guild) => void): this;
		public on(event: 'message', listener: (message: Message) => void): this;
		public on(event: 'messageDelete', listener: (message: Message) => void): this;
		public on(event: 'messageDeleteBulk', listener: (messages: Collection<Snowflake, Message>) => void): this;
		public on(event: 'messageReactionAdd', listener: (messageReaction: MessageReaction, user: User) => void): this;
		public on(event: 'messageReactionRemove', listener: (messageReaction: MessageReaction, user: User) => void): this;
		public on(event: 'messageReactionRemoveAll', listener: (message: Message) => void): this;
		public on(event: 'messageUpdate', listener: (oldMessage: Message, newMessage: Message) => void): this;
		public on(event: 'presenceUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		public on(event: 'ready', listener: () => void): this;
		public on(event: 'reconnecting', listener: () => void): this;
		public on(event: 'roleCreate', listener: (role: Role) => void): this;
		public on(event: 'roleDelete', listener: (role: Role) => void): this;
		public on(event: 'roleUpdate', listener: (oldRole: Role, newRole: Role) => void): this;
		public on(event: 'typingStart', listener: (channel: Channel, user: User) => void): this;
		public on(event: 'typingStop', listener: (channel: Channel, user: User) => void): this;
		public on(event: 'userNoteUpdate', listener: (user: UserResolvable, oldNote: string, newNote: string) => void): this;
		public on(event: 'userUpdate', listener: (oldUser: User, newUser: User) => void): this;
		public on(event: 'voiceStateUpdate', listener: (oldMember: GuildMember, newMember: GuildMember) => void): this;
		public on(event: 'warn', listener: (info: string) => void): this;
	}

	class ClientDataResolver {
		constructor(client: Client);
		public resolveBase64(data: Base64Resolvable): string;
		public resolveBuffer(resource: BufferResolvable): Promise<Buffer>;
		public resolveChannel(channel: ChannelResolvable): Channel;
		public resolveChannelID(channel: ChannelResolvable): Snowflake;
		public resolveColor(color: ColorResolvable): number;
		public resolveEmojiIdentifier(emoji: EmojiIdentifierResolvable): string;
		public resolveGuild(guild: GuildResolvable): Guild;
		public resolveGuildMember(guild: GuildResolvable, user: UserResolvable): GuildMember;
		public resolveInviteCode(data: InviteResolvable): string;
		public resolveString(data: StringResolvable): string;
		public resolveUser(user: UserResolvable): User;
		public resolveUserID(user: UserResolvable): Snowflake;

		public static resolveColor(color: ColorResolvable): number;
	}

	class ClientManager {
		constructor(client: Client);
		public client: Client;
		public heartbeatInterval: number;
		public connectToWebSocket(token: string, resolve: Function, reject: Function): void;
		public setupKeepAlive(time: number): void;
	}

	export class ClientOAuth2Application extends OAuth2Application {
		public flags: number;
		public owner: User;
	}

	export class ClientUser extends User {
		public blocked: Collection<Snowflake, User>;
		public email: string;
		public friends: Collection<Snowflake, User>;
		public mfaEnabled?: boolean;
		public mobile?: boolean;
		public note?: string;
		public notes?: Collection<Snowflake, string>;
		public premium?: boolean;
		public settings?: ClientUserSettings;
		public verified: boolean;
		public acceptInvite(invite: Invite | string): Promise<Guild>
		public addFriend(user?: UserResolvable): Promise<User>;
		public createGroupDM(recipients: GroupDMRecipientOptions[]): Promise<GroupDMChannel>;
		public createGuild(name: string, region: string, icon?: BufferResolvable | Base64Resolvable): Promise<Guild>;
		public fetchMentions(options?: { limit?: number; roles?: boolean, everyone?: boolean; guild?: Guild | Snowflake }): Promise<Message[]>;
		public removeFriend(user?: UserResolvable): Promise<User>;
		public setAFK(afk: boolean): Promise<ClientUser>;
		public setAvatar(avatar: BufferResolvable | Base64Resolvable): Promise<ClientUser>;
		public setEmail(email: string, password: string): Promise<ClientUser>;
		public setGame(game: string, streamingURL?: string): Promise<ClientUser>;
		public setNote(note: string): Promise<User>;
		public setPassword(newPassword: string, oldPassword: string): Promise<ClientUser>;
		public setPresence(data: PresenceData): Promise<ClientUser>;
		public setStatus(status: PresenceStatus): Promise<ClientUser>;
		public setUsername(username: string, password?: string): Promise<ClientUser>;
	}

	export class ClientUserSettings {
		constructor(user: User, data: object);
		public convertEmoticons: boolean;
		public defaultGuildsRestricted: boolean;
		public detectPlatformAccounts: boolean;
		public developerMode: boolean;
		public enableTTSCommand: boolean;
		public explicitContentFilter: 'DISABLED' | 'NON_FRIENDS' | 'FRIENDS_AND_NON_FRIENDS' | string;
		public friendsSources: { all: boolean, mutualGuilds: boolean, mutualFriends: boolean };
		public guildsPositions: Snowflake[];
		public inlineAttachmentMedia: boolean;
		public inlineEmbedMedia: boolean;
		public locale: string;
		public messageDisplayCompact: boolean;
		public renderReactions: boolean;
		public restrictedGuilds: boolean;
		public showCurrentGame: boolean;
		public status: PresenceStatus;
		public theme: string;
		public addRestrictedGuild(guild: Guild): Promise<Guild>;
		public patch(data: object): void;
		public removeRestrictedGuild(guild: Guild): Promise<Guild>;
		public setGuildPosition(guild: Guild, position: number, relative?: boolean): Promise<Guild>;
		public update(name: string, value: any): Promise<object>;
	}

	class ClientVoiceManager {
		constructor(client: Client);
		public client: Client;
		public connections: Collection<Snowflake, VoiceConnection>;
		public joinChannel(channel: VoiceChannel): Promise<VoiceConnection>;
	}

	export class Collection<K, V> extends Map<K, V> {
		private _array: V[];
		private _keyArray: K[];

		public array(): V[];
		public clone(): Collection<K, V>;
		public concat(...collections: Collection<K, V>[]): Collection<K, V>;
		public deleteAll(): Promise<V>[];
		public equals(collection: Collection<any, any>): boolean;
		public every(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
		public exists(prop: keyof V, value: any): boolean;
		public filter(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): Collection<K, V>;
		public filterArray(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): V[];
		public find(prop: keyof V, value: any): V;
		public find(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): V;
		public findAll(prop: keyof V, value: any): V[];
		public findKey(prop: keyof V, value: any): K;
		public findKey(fn: (value: V, key: K, collection: Collection<K, V>) => boolean): K;
		public first(): V;
		public firstKey(): K;
		public keyArray(): K[];
		public last(): V;
		public lastKey(): K;
		public map<T>(fn: (value: V, key: K, collection: Collection<K, V>) => T, thisArg?: any): T[];
		public random(): V;
		public randomKey(): K;
		public reduce<T>(fn: (accumulator: any, value: V, key: K, collection: Collection<K, V>) => T, initialValue?: any): T;
		public some(fn: (value: V, key: K, collection: Collection<K, V>) => boolean, thisArg?: any): boolean;
		public sort(compareFunction?: (a: [K, V], b: [K, V]) => number): Collection<K, V>;
	}

	abstract class Collector<K, V> {
		constructor(client: Client, filter: CollectorFilter, options?: CollectorOptions);
		private _timeout: NodeJS.Timer;
		private _handle(...args: any[]): void;

		public readonly client: Client;
		public collected: Collection<K, V>;
		public ended: boolean;
		public filter: CollectorFilter;
		public readonly next: Promise<V>;
		public options: CollectorOptions;
		public stop(reason?: string): void;

		protected listener: Function;
		public abstract cleanup(): void;
		public abstract handle(...args: any[]): CollectorHandler<K, V>;
		public abstract postCheck(...args: any[]): string | null;

		public on(event: 'collect', listener: (element: V, collector: Collector<K, V>) => void): this;
		public on(event: 'end', listener: (collected: Collection<K, V>, reason: string) => void): string;
	}

	export class DMChannel extends TextBasedChannel(Channel) {
		constructor(client: Client, data: object);
		public lastMessageID: Snowflake;
		public messages: Collection<Snowflake, Message>;
		public recipient: User;
		public toString(): string;
	}

	export class Emoji {
		constructor(guild: Guild, data: object);
		public readonly client: Client;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public guild: Guild;
		public id: Snowflake;
		public readonly identifier: string;
		public managed: boolean;
		public name: string;
		public requiresColons: boolean;
		public readonly roles: Collection<Snowflake, Role>;
		public readonly url: string;
		public edit(data: EmojiEditData): Promise<Emoji>;
		public equals(other: Emoji | object): boolean;
		public toString(): string;
	}

	export class Game {
		constructor(data: object);
		public name: string;
		public readonly streaming: boolean;
		public type: number;
		public url: string;
		public equals(game: Game): boolean;
	}

	export class GroupDMChannel extends TextBasedChannel(Channel) {
		constructor(client: Client, data: object);
		public applicationID: string;
		public icon: string;
		public lastMessageID: string;
		public managed: boolean;
		public messages: Collection<Snowflake, Message>;
		public name: string;
		public nicks: Collection<Snowflake, string>;
		public readonly owner: User;
		public ownerID: string;
		public recipients: Collection<Snowflake, User>;
		public equals(channel: GroupDMChannel): boolean;
		public toString(): string;
	}

	export class Guild {
		constructor(client: Client, data: object);
		private readonly _sortedRoles: Collection<Snowflake, Role>;
		private _sortedChannels(type: string): Collection<Snowflake, GuildChannel>
		private _sortPositionWithID(collection: Collection<any, any>): Collection<any, any>;
		private setup(data: any): void;

		public afkChannelID: string;
		public afkTimeout: number;
		public applicationID: string;
		public available: boolean;
		public channels: Collection<Snowflake, GuildChannel>;
		public readonly client: Client;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public readonly defaultChannel: TextChannel;
		public readonly defaultRole: Role;
		public embedEnabled: boolean;
		public emojis: Collection<Snowflake, Emoji>;
		public explicitContentFilter: number;
		public features: object[];
		public icon: string;
		public readonly iconURL: string;
		public id: Snowflake;
		public readonly joinedAt: Date;
		public joinedTimestamp: number;
		public large: boolean;
		public memberCount: number;
		public members: Collection<Snowflake, GuildMember>;
		public name: string;
		public readonly owner: GuildMember;
		public ownerID: string;
		public presences: Collection<Snowflake, Presence>;
		public region: string;
		public roles: Collection<Snowflake, Role>;
		public splash: string;
		public readonly splashURL: string;
		public verificationLevel: number;
		public readonly voiceConnection: VoiceConnection;
		public acknowledge(): Promise<Guild>;
		public addMember(user: UserResolvable, options: AddGuildMemberOptions): Promise<GuildMember>;
		public allowDMs(allow: boolean): Promise<Guild>;
		public ban(user: UserResolvable, deleteDays?: number): Promise<GuildMember | User | string>;
		public createChannel(name: string, type: 'text' | 'voice', overwrites?: PermissionOverwrites[] | object[]): Promise<TextChannel | VoiceChannel>;
		public createEmoji(attachment: BufferResolvable | Base64Resolvable, name: string, roles?: Collection<Snowflake, Role> | Role[]): Promise<Emoji>;
		public createRole(data?: RoleData): Promise<Role>;
		public delete(): Promise<Guild>;
		public deleteEmoji(emoji: Emoji | string): Promise<void>;
		public edit(data: GuildEditData): Promise<Guild>;
		public equals(guild: Guild): boolean;
		public fetchBans(): Promise<Collection<Snowflake, User>>;
		public fetchInvites(): Promise<Collection<Snowflake, Invite>>;
		public fetchMember(user: UserResolvable, cache?: boolean): Promise<GuildMember>;
		public fetchMembers(query?: string, limit?: number): Promise<Guild>;
		public fetchVoiceRegions(): Promise<Collection<string, VoiceRegion>>;
		public fetchWebhooks(): Promise<Collection<Snowflake, Webhook>>;
		public leave(): Promise<Guild>;
		public member(user: UserResolvable): GuildMember;
		public pruneMembers(days: number, dry?: boolean): Promise<number>;
		public search(options?: MessageSearchOptions): Promise<Message[][]>;
		public setAFKChannel(afkChannel: ChannelResolvable): Promise<Guild>;
		public setAFKTimeout(afkTimeout: number): Promise<Guild>;
		public setChannelPosition(channel: string | GuildChannel, position: number, relative?: boolean): Promise<Guild>;
		public setChannelPositions(channelPositions: ChannelPosition[]): Promise<Guild>;
		public setIcon(icon: Base64Resolvable): Promise<Guild>;
		public setName(name: string): Promise<Guild>;
		public setOwner(owner: GuildMemberResolvable): Promise<Guild>;
		public setRegion(region: string): Promise<Guild>;
		public setRolePosition(role: string | Role, position: number, relative?: boolean): Promise<Guild>;
		public setSplash(splash: Base64Resolvable): Promise<Guild>;
		public setVerificationLevel(verificationLevel: number): Promise<Guild>;
		public sync(): void;
		public toString(): string;
		public unban(user: UserResolvable): Promise<User>;
	}

	export class GuildChannel extends Channel {
		constructor(guild: Guild, data: object);
		public readonly calculatedPosition: number;
		public readonly deletable: boolean;
		public guild: Guild;
		public name: string;
		public permissionOverwrites: Collection<Snowflake, PermissionOverwrites>;
		public position: number;
		public clone(name?: string, withPermissions?: boolean, withTopic?: boolean): Promise<GuildChannel>;
		public createInvite(options?: InviteOptions): Promise<Invite>;
		public edit(data: ChannelData): Promise<GuildChannel>;
		public equals(channel: GuildChannel): boolean;
		public overwritePermissions(userOrRole: RoleResolvable | UserResolvable, options: PermissionOverwriteOptions): Promise<void>;
		public permissionsFor(member: GuildMemberResolvable): Permissions;
		public setName(name: string): Promise<GuildChannel>;
		public setPosition(position: number, relative?: boolean): Promise<GuildChannel>;
		public setTopic(topic: string): Promise<GuildChannel>;
		public toString(): string;
	}

	export class GuildMember extends PartialTextBasedChannel() {
		constructor(guild: Guild, data: object);
		public readonly bannable: boolean;
		public readonly client: Client;
		public readonly colorRole: Role;
		public readonly deaf: boolean;
		public readonly displayColor: number;
		public readonly displayHexColor: string;
		public readonly displayName: string;
		public guild: Guild;
		public readonly highestRole: Role;
		public readonly hoistRole: Role;
		public readonly id: Snowflake;
		public readonly joinedAt: Date;
		public joinedTimestamp: number;
		public readonly kickable: boolean;
		public lastMessage: Message;
		public lastMessageID: string;
		public readonly mute: boolean;
		public nickname: string;
		public readonly permissions: Permissions;
		public readonly presence: Presence;
		public readonly roles: Collection<Snowflake, Role>;
		public selfDeaf: boolean;
		public selfMute: boolean;
		public serverDeaf: boolean;
		public serverMute: boolean;
		public speaking: boolean;
		public user: User;
		public readonly voiceChannel: VoiceChannel;
		public voiceChannelID: string;
		public voiceSessionID: string;
		public addRole(role: Role | Snowflake): Promise<GuildMember>;
		public addRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[]): Promise<GuildMember>;
		public ban(deleteDays?: number): Promise<GuildMember>;
		public createDM(): Promise<DMChannel>;
		public deleteDM(): Promise<DMChannel>;
		public edit(data: object): Promise<GuildMember>;
		public hasPermission(permission: PermissionResolvable | PermissionResolvable[], explicit?: boolean, checkAdmin?: boolean, checkOwner?: boolean): boolean;
		public hasPermissions(permission: PermissionResolvable[], explicit?: boolean): boolean;
		public kick(): Promise<GuildMember>;
		public missingPermissions(permissions: PermissionResolvable[], explicit?: boolean): PermissionResolvable[];
		public permissionsIn(channel: ChannelResolvable): Permissions;
		public removeRole(role: Role | Snowflake): Promise<GuildMember>;
		public removeRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[]): Promise<GuildMember>;
		public setDeaf(deaf: boolean): Promise<GuildMember>;
		public setMute(mute: boolean): Promise<GuildMember>;
		public setNickname(nickname: string): Promise<GuildMember>;
		public setRoles(roles: Collection<Snowflake, Role> | Role[] | Snowflake[]): Promise<GuildMember>;
		public setVoiceChannel(voiceChannel: ChannelResolvable): Promise<GuildMember>;
		public toString(): string;
	}

	export class Invite {
		constructor(client: Client, data: object);
		public channel: GuildChannel | PartialGuildChannel;
		public readonly client: Client;
		public code: string;
		public readonly createdAt: Date;
		public createdTimestamp: number;
		public readonly expiresAt: Date;
		public readonly expiresTimestamp: number;
		public guild: Guild | PartialGuild;
		public inviter: User;
		public maxAge: number;
		public maxUses: number;
		public temporary: boolean;
		public readonly url: string;
		public uses: number;
		public delete(): Promise<Invite>;
		public toString(): string;
	}

	export class Message {
		constructor(channel: TextChannel | DMChannel | GroupDMChannel, data: object, client: Client);
		private _edits: Message[];
		private patch(data: object): void;

		public attachments: Collection<Snowflake, MessageAttachment>;
		public author: User;
		public channel: TextChannel | DMChannel | GroupDMChannel;
		public readonly cleanContent: string;
		public readonly client: Client;
		public content: string;
		public readonly createdAt: Date;
		public createdTimestamp: number;
		public readonly deletable: boolean;
		public readonly editable: boolean;
		public readonly editedAt: Date;
		public editedTimestamp: number;
		public readonly edits: Message[];
		public embeds: MessageEmbed[];
		public readonly guild: Guild;
		public hit: boolean;
		public id: Snowflake;
		public member: GuildMember;
		public mentions: MessageMentions;
		public nonce: string;
		public readonly pinnable: boolean;
		public pinned: boolean;
		public reactions: Collection<Snowflake, MessageReaction>;
		public system: boolean;
		public tts: boolean;
		public type: string;
		public webhookID: Snowflake;
		public acknowledge(): Promise<Message>;
		public awaitReactions(filter: CollectorFilter, options?: AwaitReactionsOptions): Promise<Collection<Snowflake, MessageReaction>>;
		public clearReactions(): Promise<Message>;
		public createReactionCollector(filter: CollectorFilter, options?: ReactionCollectorOptions): ReactionCollector;
		public delete(timeout?: number): Promise<Message>;
		public edit(content: StringResolvable, options?: MessageEditOptions): Promise<Message>;
		public editCode(lang: string, content: StringResolvable): Promise<Message>;
		public equals(message: Message, rawData: object): boolean;
		public fetchWebhook(): Promise<Webhook>;
		public isMemberMentioned(member: GuildMember | User): boolean;
		public isMentioned(data: GuildChannel | User | Role | Snowflake): boolean;
		public pin(): Promise<Message>;
		public react(emoji: string | Emoji | ReactionEmoji): Promise<MessageReaction>;
		public reply(content?: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		public reply(options?: MessageOptions): Promise<Message | Message[]>;
		public toString(): string;
		public unpin(): Promise<Message>;
	}

	export class MessageAttachment {
		constructor(message: Message, data: object);
		public readonly client: Client;
		public filename: string;
		public filesize: number;
		public height: number;
		public id: Snowflake;
		public message: Message;
		public proxyURL: string;
		public url: string;
		public width: number;
	}

	export class MessageCollector extends Collector<Snowflake, Message> {
		constructor(channel: TextChannel | DMChannel | GroupDMChannel, filter: CollectorFilter, options?: MessageCollectorOptions);
		public channel: Channel;
		public options: MessageCollectorOptions;
		public received: number;

		public cleanup(): void;
		public handle(message: Message): CollectorHandler<Snowflake, Message>;
		public postCheck(): string;
	}

	export class MessageEmbed {
		constructor(message: Message, data: object);
		public author: MessageEmbedAuthor;
		public readonly client: Client;
		public color: number;
		public readonly createdAt: Date;
		public createdTimestamp: number;
		public description: string;
		public fields: MessageEmbedField[];
		public footer: MessageEmbedFooter;
		public readonly hexColor: string;
		public image: MessageEmbedImage;
		public message: Message;
		public provider: MessageEmbedProvider;
		public thumbnail: MessageEmbedThumbnail;
		public title: string;
		public type: string;
		public url: string;
		public video: MessageEmbedVideo;
	}

	export class MessageEmbedAuthor {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public iconURL: string;
		public name: string;
		public url: string;
	}

	export class MessageEmbedField {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public inline: boolean;
		public name: string;
		public value: string;
	}

	export class MessageEmbedFooter {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public iconURL: string;
		public proxyIconURL: string;
		public text: string;
	}

	export class MessageEmbedImage {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public height: number;
		public proxyURL: string;
		public url: string;
		public width: number;
	}

	export class MessageEmbedProvider {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public name: string;
		public url: string;
	}

	export class MessageEmbedThumbnail {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public height: number;
		public proxyURL: string;
		public url: string;
		public width: number;
	}

	export class MessageEmbedVideo {
		constructor(embed: MessageEmbed, data: object);
		public embed: MessageEmbed;
		public height: number;
		public url: string;
		public width: number;
	}

	export class MessageMentions {
		private _channels: Collection<Snowflake, GuildChannel>;
		private _content: Message;
		private _guild: Guild;
		private _members: Collection<Snowflake, GuildMember>;

		public readonly channels: Collection<Snowflake, TextChannel>;
		public everyone: boolean;
		public members: Collection<Snowflake, GuildMember>;
		public roles: Collection<Snowflake, Role>;
		public users: Collection<Snowflake, User>;

		public static CHANNELS_PATTERN: RegExp;
		public static EVERYONE_PATTERN: RegExp;
		public static ROLES_PATTERN: RegExp;
		public static USERS_PATTERN: RegExp;
	}

	export class MessageReaction {
		constructor(message: Message, emoji: object, count: number, me: boolean);
		public count: number;
		public readonly emoji: Emoji | ReactionEmoji;
		public me: boolean;
		public message: Message;
		public users: Collection<string, User>;
		public fetchUsers(limit?: number): Promise<Collection<Snowflake, User>>;
		public remove(user?: UserResolvable): Promise<MessageReaction>;
	}

	export class OAuth2Application {
		constructor(client: Client, data: object);
		public bot: object;
		public botPublic: boolean;
		public botRequireCodeGrant: boolean;
		public readonly client: Client;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public description: string;
		public flags: number;
		public icon: string;
		public iconURL: string;
		public id: Snowflake;
		public name: string;
		public redirectURIs: string[];
		public rpcApplicationState: boolean;
		public rpcOrigins: string[];
		public secret: string;
		public reset(): OAuth2Application;
		public toString(): string;
	}

	export class PartialGuild {
		constructor(client: Client, data: object);
		public readonly client: Client;
		public icon: string;
		public id: Snowflake;
		public name: string;
		public splash: string;
	}

	export class PartialGuildChannel {
		constructor(client: Client, data: object);
		public readonly client: Client;
		public id: Snowflake;
		public name: string;
		public type: string;
	}

	export class PermissionOverwrites {
		constructor(guildChannel: GuildChannel, data: object);
		public allow: number;
		public channel: GuildChannel;
		public deny: number;
		public id: Snowflake;
		public type: string;
		public delete(): Promise<PermissionOverwrites>;
	}

	export class Permissions {
		constructor(permissions: number | PermissionResolvable[]);
		constructor(member: GuildMember, permissions: number | PermissionResolvable[]);
		private readonly raw: number;

		public bitfield: number;
		public member: GuildMember;
		public add(...permissions: PermissionResolvable[]): this;
		public has(permission: PermissionResolvable | PermissionResolvable[], checkAdmin?: boolean): boolean;
		public hasPermission(permission: PermissionResolvable, explicit?: boolean): boolean;
		public hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
		public missing(permissions: PermissionResolvable[], checkAdmin?: boolean): PermissionResolvable[];
		public missingPermissions(permissions: PermissionResolvable[], checkAdmin?: boolean): PermissionResolvable[];
		public remove(...permissions: PermissionResolvable[]): this;
		public serialize(checkAdmin?: boolean): PermissionObject;

		public static ALL: number;
		public static DEFAULT: number;
		public static FLAGS: PermissionFlags;
		public static resolve(permission: PermissionResolvable | PermissionResolvable[]): number;
	}

	export class Presence {
		constructor(data: object);
		public game: Game;
		public status: 'online' | 'offline' | 'idle' | 'dnd';
		public equals(presence: Presence): boolean;
	}

	export class ReactionCollector extends Collector<Snowflake, MessageReaction> {
		constructor(message: Message, filter: CollectorFilter, options?: ReactionCollectorOptions);
		public message: Message;
		public options: ReactionCollectorOptions;
		public total: number;
		public users: Collection<Snowflake, User>;

		public cleanup(): void;
		public handle(reaction: MessageReaction): CollectorHandler<Snowflake, MessageReaction>;
		public postCheck(reaction: MessageReaction, user: User): string;
	}

	export class ReactionEmoji {
		constructor(reaction: MessageReaction, name: string, id: string);
		public id: Snowflake;
		public identifier: string;
		public name: string;
		public reaction: MessageReaction;
		public toString(): string;
	}

	class RequestHandler {
		constructor(restManager: object);
		public readonly globalLimit: boolean;
		public queue: object[];
		public restManager: object;
		public handle(): void;
		public push(request: {}): void;
	}

	export class RichEmbed {
		constructor(data?: RichEmbedOptions);
		public author?: { name: string; url?: string; icon_url?: string; };
		public color?: number | string;
		public description?: string;
		public fields?: { name: string; value: string; inline?: boolean; }[];
		public file?: string | FileOptions;
		public footer?: { text?: string; icon_url?: string; };
		public image?: { url: string; proxy_url?: string; height?: number; width?: number; };
		public thumbnail?: { url: string; height?: number; width?: number; };
		public timestamp?: Date;
		public title?: string;
		public url?: string;
		public addBlankField(inline?: boolean): this;
		public addField(name: StringResolvable, value: StringResolvable, inline?: boolean): this;
		public attachFile(file: FileOptions | string): this;
		public setAuthor(name: StringResolvable, icon?: string, url?: string): this;
		public setColor(color: ColorResolvable): this;
		public setDescription(description: StringResolvable): this;
		public setFooter(text: StringResolvable, icon?: string): this;
		public setImage(url: string): this;
		public setThumbnail(url: string): this;
		public setTimestamp(timestamp?: Date): this;
		public setTitle(title: StringResolvable): this;
		public setURL(url: string): this;
	}

	export class Role {
		constructor(guild: Guild, data: object);
		public readonly calculatedPosition: number;
		public readonly client: Client;
		public color: number;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public readonly editable: boolean;
		public guild: Guild;
		public readonly hexColor: string;
		public hoist: boolean;
		public id: Snowflake;
		public managed: boolean;
		public readonly members: Collection<Snowflake, GuildMember>;
		public mentionable: boolean;
		public name: string;
		public permissions: number;
		public position: number;
		public comparePositionTo(role: Role): number;
		public delete(): Promise<Role>;
		public edit(data: RoleData): Promise<Role>;
		public equals(role: Role): boolean;
		public hasPermission(permission: PermissionResolvable | PermissionResolvable[], explicit?: boolean, checkAdmin?: boolean): boolean;
		public hasPermissions(permissions: PermissionResolvable[], explicit?: boolean): boolean;
		public serialize(): PermissionObject;
		public setColor(color: string | number): Promise<Role>;
		public setHoist(hoist: boolean): Promise<Role>;
		public setMentionable(mentionable: boolean): Promise<Role>;
		public setName(name: string): Promise<Role>;
		public setPermissions(permissions: PermissionResolvable[]): Promise<Role>;
		public setPosition(position: number, relative?: boolean): Promise<Role>;
		public toString(): string;

		public static comparePositions(role1: Role, role2: Role): number;
	}

	class SecretKey {
		constructor(key: Uint8Array);
		public key: Uint8Array;
	}

	class SequentialRequestHandler extends RequestHandler {
		constructor(restManager: object, endpoint: string);
		public busy: boolean;
		public endpoint: string;
		public readonly globalLimit: boolean;
		public queue: any[];
		public restManager: object;
		public timeDifference: number;
		public execute(item: any[]): Promise<object | Error>;
		public handle(): void;
		public push(request: any[]): void;
	}

	export class Shard {
		constructor(manager: ShardingManager, id: number, args?: string[]);
		private _handleMessage(message: any): void;

		public env: object;
		public id: string;
		public manager: ShardingManager;
		public process: ChildProcess;
		public eval(script: string): Promise<any>;
		public fetchClientValue(prop: string): Promise<any>;
		public send(message: any): Promise<Shard>;
	}

	export class ShardClientUtil {
		constructor(client: Client);
		private _handleMessage(message: any): void;
		private _respond(type: string, message: any): void;

		public readonly count: number;
		public readonly id: number;
		public broadcastEval(script: string): Promise<any[]>;
		public fetchClientValues(prop: string): Promise<any[]>;
		public send(message: any): Promise<void>;

		public static singleton(client: Client): ShardClientUtil;
	}

	export class ShardingManager extends EventEmitter {
		constructor(file: string, options?: {
			totalShards?: number | 'auto';
			respawn?: boolean;
			shardArgs?: string[];
			token?: string;
		});
		private _spawn(amount: number, delay: number): Promise<Collection<number, Shard>>;

		public file: string;
		public respawn: boolean;
		public shardArgs: string[];
		public shards: Collection<number, Shard>;
		public token: string;
		public totalShards: number | string;
		public broadcast(message: any): Promise<Shard[]>;
		public broadcastEval(script: string): Promise<any[]>;
		public createShard(id: number): Promise<Shard>;
		public fetchClientValues(prop: string): Promise<any[]>;
		public spawn(amount?: number, delay?: number): Promise<Collection<number, Shard>>;

		on(event: 'launch', listener: (shard: Shard) => void): this;
		on(event: 'message', listener: (shard: Shard, message: any) => void): this;
	}

	export class SnowflakeUtil {
		public static deconstruct(snowflake: Snowflake): DeconstructedSnowflake;
		public static generate(): Snowflake;
	}

	export class StreamDispatcher extends VolumeInterface {
		constructor(player: AudioPlayer, stream: NodeJS.ReadableStream, streamOptions: StreamOptions);
		public destroyed: boolean;
		public readonly passes: number;
		public paused: boolean;
		public player: AudioPlayer;
		public stream: ReadableStream | VoiceBroadcast;
		public readonly time: number;
		public readonly totalStreamTime: number;
		public end(reason?: string): void;
		public pause(): void;
		public resume(): void;
	}

	export class TextChannel extends TextBasedChannel(GuildChannel) {
		constructor(guild: Guild, data: object);
		public lastMessageID: string;
		public readonly members: Collection<Snowflake, GuildMember>;
		public messages: Collection<Snowflake, Message>;
		public topic: string;
		public createWebhook(name: string, avatar: BufferResolvable): Promise<Webhook>;
		public fetchWebhooks(): Promise<Collection<Snowflake, Webhook>>;
	}

	export class User extends PartialTextBasedChannel() {
		constructor(client: Client, data: object);
		public avatar: string;
		public readonly avatarURL: string;
		public bot: boolean;
		public readonly client: Client;
		public readonly createdAt: Date;
		public readonly createdTimestamp: number;
		public readonly defaultAvatarURL: string;
		public discriminator: string;
		public readonly displayAvatarURL: string;
		public readonly dmChannel: DMChannel;
		public readonly id: Snowflake;
		public lastMessage: Message;
		public lastMessageID: string;
		public readonly note?: string;
		public readonly presence: Presence;
		public readonly tag: string;
		public username: string;
		public addFriend(): Promise<User>;
		public block(): Promise<User>;
		public createDM(): Promise<DMChannel>
		public deleteDM(): Promise<DMChannel>;
		public equals(user: User): boolean;
		public fetchProfile(): Promise<UserProfile>;
		public removeFriend(): Promise<User>;
		public setNote(note: string): Promise<User>;
		public toString(): string;
		public typingDurationIn(channel: ChannelResolvable): number;
		public typingIn(channel: ChannelResolvable): boolean;
		public typingSinceIn(channel: ChannelResolvable): Date;
		public unblock(): Promise<User>;
	}

	export class UserConnection {
		constructor(user: User, data: object);
		public id: string;
		public integrations: object[];
		public name: string;
		public revoked: boolean;
		public type: string;
		public user: User;
	}

	export class UserProfile {
		constructor(user: User, data: object);
		public client: Client;
		public connections: Collection<string, UserConnection>;
		public mutualGuilds: Collection<Snowflake, Guild>;
		public premium: boolean;
		public premiumSince: Date;
		public user: User;
	}

	export class Util {
		public static arrayEqual(a: any[], b: any[]): boolean;
		public static cloneObject(obj: object): object;
		public static convertToBuffer(ab: ArrayBuffer | string): Buffer;
		public static escapeMarkdown(text: string, onlyCodeBlock?: boolean, onlyInlineCode?: boolean): string;
		public static fetchRecommendedShards(token: string, guildsPerShard?: number): Promise<number>;
		public static makeError(obj: { name: string, message: string, stack: string }): Error;
		public static makePlainError(err: Error): object;
		public static mergeDefault(def: object, given: object): object;
		public static moveElementInArray(array: any[], element: any, newIndex: number, offset?: boolean): number;
		public static parseEmoji(text: string): object;
		public static splitMessage(text: string, options?: SplitOptions): string | string[];
		public static str2ab(str: string): ArrayBuffer;
	}

	export class VoiceBroadcast extends EventEmitter {
		constructor(client: Client);
		public readonly client: Client;
		public currentTranscoder: object;
		public readonly dispatchers: StreamDispatcher[];
		public prism: object;
		public destroy(): void;
		public end(): void;
		public pause(): void;
		public playArbitraryInput(input: string, options?: StreamOptions): VoiceBroadcast;
		public playConvertedStream(stream: ReadableStream, options?: StreamOptions): VoiceBroadcast;
		public playFile(file: string, options?: StreamOptions): StreamDispatcher;
		public playOpusStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		public playStream(stream: ReadableStream, options?: StreamOptions): VoiceBroadcast;
		public resume(): void;

		on(event: string, listener: Function): this;
		on(event: 'error', listener: (error: Error) => void): this;
		on(event: 'subscribe', listener: (dispatcher: StreamDispatcher) => void): this;
		on(event: 'unsubscribe', listener: (dispatcher: StreamDispatcher) => void): this;
		on(event: 'warn', listener: (warning: string | Error) => void): this;
	}

	export class VoiceChannel extends GuildChannel {
		constructor(guild: Guild, data: object);
		public bitrate: number;
		public readonly connection: VoiceConnection;
		public readonly full: boolean;
		public readonly joinable: boolean;
		public members: Collection<Snowflake, GuildMember>;
		public readonly speakable: boolean;
		public userLimit: number;
		public join(): Promise<VoiceConnection>;
		public leave(): void;
		public setBitrate(bitrate: number): Promise<VoiceChannel>;
		public setUserLimit(userLimit: number): Promise<VoiceChannel>;
	}

	export class VoiceConnection extends EventEmitter {
		constructor(voiceManager: ClientVoiceManager, channel: VoiceChannel);
		private authentication: object;
		private sockets: object;
		private ssrcMap: Map<number, boolean>;
		private authenticate(): void;
		private authenticateFailed(reason: string): void;
		private checkAuthenticated(): void;
		private cleanup(): void;
		private connect(): void;
		private onReady(data: object): void;
		private onSessionDescription(mode: string, secret: string): void;
		private onSpeaking(data: object): void;
		private reconnect(token: string, endpoint: string): void;
		private setSpeaking(value: boolean): void;
		private updateChannel(channel: VoiceChannel): void;

		public channel: VoiceChannel;
		public readonly client: Client;
		public readonly dispatcher: StreamDispatcher;
		public player: AudioPlayer;
		public prism: object;
		public receivers: VoiceReceiver[];
		public speaking: boolean;
		public status: number;
		public voiceManager: ClientVoiceManager;
		public createReceiver(): VoiceReceiver;
		public disconnect(): void;
		public playArbitraryInput(input: string, options?: StreamOptions): StreamDispatcher;
		public playBroadcast(broadcast: VoiceBroadcast): StreamDispatcher;
		public playConvertedStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		public playFile(file: string, options?: StreamOptions): StreamDispatcher;
		public playOpusStream(steam: ReadableStream, options?: StreamOptions): StreamDispatcher;
		public playStream(stream: ReadableStream, options?: StreamOptions): StreamDispatcher;
		public sendVoiceStateUpdate(options: object): void;
		public setSessionID(sessionID: string): void;
		public setTokenAndEndpoint(token: string, endpoint: string): void;

		on(event: 'authenticated', listener: () => void): this;
		on(event: 'debug', listener: (message: string) => void): this;
		on(event: 'disconnect', listener: (error: Error) => void): this;
		on(event: 'error', listener: (error: Error) => void): this;
		on(event: 'failed', listener: (error: Error) => void): this;
		on(event: 'newSession', listener: () => void): this;
		on(event: 'ready', listener: () => void): this;
		on(event: 'reconnecting', listener: () => void): this;
		on(event: 'speaking', listener: (user: User, speaking: boolean) => void): this;
		on(event: 'warn', listener: (warning: string | Error) => void): this;
	}

	class VoiceConnectionUDPClient extends EventEmitter {
		constructor(voiceConnection: VoiceConnection);
		public discordAddress: string;
		public readonly discordPort: number;
		public localAddress: string;
		public localPort: string;
		public socket: any;
		public voiceConnection: VoiceConnection;
		public findEndpointAddress(): Promise<string>;
		public send(packet: object): Promise<object>;
	}

	export class VoiceReceiver extends EventEmitter {
		constructor(connection: VoiceConnection);
		private stoppedSpeaking(user: User): void;

		public destroyed: boolean;
		public voiceConnection: VoiceConnection;
		public createOpusStream(user: UserResolvable): ReadableStream;
		public createPCMStream(user: UserResolvable): ReadableStream;
		public destroy(): void;
		public recreate(): void;

		on(event: 'opus', listener: (user: User, buffer: Buffer) => void): this;
		on(event: 'pcm', listener: (user: User, buffer: Buffer) => void): this;
		on(event: 'warn', listener: (reason: string, message: string) => void): this;
	}

	export class VoiceRegion {
		constructor(data: object);
		public custom: boolean;
		public deprecated: boolean;
		public id: string;
		public name: string;
		public optimal: boolean;
		public sampleHostname: string;
		public vip: boolean;
	}

	class VoiceWebsocket extends EventEmitter {
		constructor(voiceConnection: VoiceConnection);
		public attempts: number;
		public readonly client: Client;
		public voiceConnection: VoiceConnection;
		public ws: any;
		public clearHeartbeat(): void;
		public connect(): void;
		public onClose(): void;
		public onError(error: Error): void;
		public onMessage(event: any): void;
		public onOpen(): void;
		public onPacket(packet: object): void;
		public reset(): void;
		public send(data: string): Promise<string>;
		public sendHeartbeat(): void;
		public sendPacket(packet: object): Promise<string>;
		public setHeartbeat(interval: number): void;

		on(event: 'ready', listener: (packet: object) => void): this;
		on(event: 'sessionDescription', listener: (encryptionMode: string, secretKey: SecretKey) => void): this;
		on(event: 'speaking', listener: (data: object) => void): this;
		on(event: 'unknownPacket', listener: (packet: object) => void): this;
		on(event: 'warn', listener: (warn: string) => void): this;
	}

	export class VolumeInterface extends EventEmitter {
		constructor(object?: { volume: number })
		public readonly volume: number;
		public readonly volumeDecibels: number;
		public readonly volumeLogarithmic: number;
		public setVolume(volume: number): void;
		public setVolumeDecibels(db: number): void;
		public setVolumeLogarithmic(value: number): void;

		on(event: 'debug', listener: (information: string) => void): this;
		on(event: 'end', listener: (reason: string) => void): this;
		on(event: 'error', listener: (err: Error) => void): this;
		on(event: 'speaking', listener: (value: boolean) => void): this;
		on(event: 'start', listener: () => void): this;
		on(event: 'volumeChange', listener: (oldVolume: number, newVolume: number) => void): this;
	}

	export class Webhook {
		constructor(client: Client, dataOrID: object | string, token: string);
		public avatar: string;
		public channelID: string;
		public readonly client: Client;
		public guildID: string;
		public id: Snowflake;
		public name: string;
		public owner: User | object;
		public token: string;
		public delete(): Promise<void>;
		public edit(name: string, avatar: BufferResolvable): Promise<Webhook>;
		public send(content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		public send(options?: WebhookMessageOptions): Promise<Message | Message[]>;
		public sendCode(lang: string, content: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		public sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message>;
		public sendMessage(content?: StringResolvable, options?: WebhookMessageOptions): Promise<Message | Message[]>;
		public sendMessage(options?: WebhookMessageOptions): Promise<Message | Message[]>;
		public sendSlackMessage(body: object): Promise<void>;
	}

	export class WebhookClient extends Webhook {
		constructor(id: string, token: string, options?: ClientOptions);
		private _intervals: NodeJS.Timer;
		private _timeouts: NodeJS.Timer;
		private resolver: ClientDataResolver;
		private rest: object;

		public options: ClientOptions;
		public clearInterval(interval: NodeJS.Timer): void;
		public clearTimeout(timeout: NodeJS.Timer): void;
		public destroy(): void;
		public setInterval(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
		public setTimeout(fn: Function, delay: number, ...args: any[]): NodeJS.Timer;
	}

//#endregion

//#region Mixins

	// Model the TextBasedChannel mixin system, allowing application of these fields
	// to the classes that use these methods without having to manually add them
	// to each of those classes

	type Constructable<T> = new (...args: any[]) => T;
	const PartialTextBasedChannel: <T>(Base?: Constructable<T>) => Constructable<T & PartialTextBasedChannelFields>;
	const TextBasedChannel: <T>(Base?: Constructable<T>) => Constructable<T & TextBasedChannelFields>;

	type PartialTextBasedChannelFields = {
		acknowledge(): Promise<DMChannel | GroupDMChannel | TextChannel>;
		send(content?: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		send(options?: MessageOptions): Promise<Message | Message[]>;
		sendCode(lang: string, content: StringResolvable, options?: MessageOptions): Promise<Message | Message[]>;
		sendEmbed(embed: RichEmbed | RichEmbedOptions, content?: string, options?: MessageOptions): Promise<Message>;
		sendEmbed(embed: RichEmbed | RichEmbedOptions, options?: MessageOptions): Promise<Message>;
		sendFile(attachment: BufferResolvable, name?: string, content?: StringResolvable, options?: MessageOptions): Promise<Message>;
		sendMessage(content?: string, options?: MessageOptions): Promise<Message | Message[]>;
		sendMessage(options?: MessageOptions): Promise<Message | Message[]>;
	};

	type TextBasedChannelFields = {
		typing: boolean;
		typingCount: number;
		awaitMessages(filter: CollectorFilter, options?: AwaitMessagesOptions): Promise<Collection<string, Message>>;
		bulkDelete(messages: Collection<string, Message> | Message[] | number, filterOld?: boolean): Promise<Collection<string, Message>>;
		createCollector(filter: CollectorFilter, options?: CollectorOptions): MessageCollector;
		fetchMessage(messageID: string): Promise<Message>;
		fetchMessages(options?: ChannelLogsQueryOptions): Promise<Collection<string, Message>>;
		fetchPinnedMessages(): Promise<Collection<string, Message>>;
		search(options?: MessageSearchOptions): Promise<Message[][]>;
		startTyping(count?: number): void;
		stopTyping(force?: boolean): void;
	} & PartialTextBasedChannelFields;

//#endregion

//#region Typedefs

	type AddGuildMemberOptions = {
		accessToken: String;
		nick?: string;
		roles?: Collection<string, Role> | Role[] | string[];
		mute?: boolean;
		deaf?: boolean;
	}

	type AwaitMessagesOptions = MessageCollectorOptions & { errors?: string[] };

	type AwaitReactionsOptions = ReactionCollectorOptions & { errors?: string[] };

	type Base64Resolvable = Buffer | Base64String;

	type Base64String = string;

	type BufferResolvable = Buffer | string;

	type ChannelData = {
		name?: string;
		position?: number;
		topic?: string;
		bitrate?: number;
		userLimit?: number;
	};

	type ChannelLogsQueryOptions = {
		limit?: number
		before?: Snowflake
		after?: Snowflake
		around?: Snowflake
	};

	type ChannelPosition = {
		channel: ChannelResolvable;
		position: number;
	};

	type ChannelResolvable = Channel | Guild | Message | Snowflake;

	type ClientOptions = {
		apiRequestMethod?: string;
		shardId?: number;
		shardCount?: number;
		messageCacheMaxSize?: number;
		messageCacheLifetime?: number;
		messageSweepInterval?: number;
		fetchAllMembers?: boolean;
		disableEveryone?: boolean;
		sync?: boolean;
		restWsBridgeTimeout?: number;
		restTimeOffset?: number;
		disabledEvents?: WSEventType[];
		ws?: WebSocketOptions;
	};

	type CollectorHandler<K, V> = { key: K, value: V };
	type CollectorFilter = (...args: any[]) => boolean;
	type CollectorOptions = { time?: number };

	type ColorResolvable = ('DEFAULT'
		| 'AQUA'
		| 'GREEN'
		| 'BLUE'
		| 'PURPLE'
		| 'GOLD'
		| 'ORANGE'
		| 'RED'
		| 'GREY'
		| 'DARKER_GREY'
		| 'NAVY'
		| 'DARK_AQUA'
		| 'DARK_GREEN'
		| 'DARK_BLUE'
		| 'DARK_PURPLE'
		| 'DARK_GOLD'
		| 'DARK_ORANGE'
		| 'DARK_RED'
		| 'DARK_GREY'
		| 'LIGHT_GREY'
		| 'DARK_NAVY'
		| 'RANDOM')
		| [number, number, number]
		| number
		| string;

	type DeconstructedSnowflake = {
		timestamp: number;
		date: Date;
		workerID: number;
		processID: number;
		increment: number;
		binary: string;
	};

	type EmojiEditData = {
		name?: string;
		roles?: Collection<Snowflake, Role> | Role[] | Snowflake[];
	};

	type EmojiIdentifierResolvable = string | Emoji | ReactionEmoji;

	type FileOptions = {
		attachment: BufferResolvable;
		name?: string;
	};

	type GroupDMRecipientOptions = {
		user?: UserResolvable | Snowflake;
		accessToken?: string;
		nick?: string;
	};

	type GuildEditData = {
		name?: string;
		region?: string;
		verificationLevel?: number;
		afkChannel?: ChannelResolvable;
		afkTimeout?: number;
		icon?: Base64Resolvable;
		owner?: GuildMemberResolvable;
		splash?: Base64Resolvable;
	};

	type GuildMemberEditData = {
		nick?: string;
		roles?: Collection<Snowflake, Role> | Role[] | Snowflake[];
		mute?: boolean;
		deaf?: boolean;
		channel?: ChannelResolvable;
	};

	type GuildMemberResolvable = GuildMember | User;

	type GuildResolvable = Guild | Snowflake;

	type InviteOptions = {
		temporary?: boolean;
		maxAge?: number;
		maxUses?: number;
	};

	type InviteResolvable = string;

	type MessageCollectorOptions = CollectorOptions & {
		max?: number;
		maxMatches?: number;
	};

	type MessageEditOptions = {
		embed?: RichEmbedOptions;
		code?: string | boolean;
	};

	type MessageOptions = {
		tts?: boolean;
		nonce?: string;
		embed?: RichEmbed | RichEmbedOptions,
		disableEveryone?: boolean;
		file?: FileOptions | string;
		files?: FileOptions[] | string[];
		code?: string;
		split?: boolean | SplitOptions;
		reply?: UserResolvable;
	};

	type MessageSearchOptions = {
		content?: string;
		maxID?: Snowflake;
		minID?: Snowflake;
		has?: 'link'
			| 'embed'
			| 'file'
			| 'video'
			| 'image'
			| 'sound'
			| '-link'
			| '-embed'
			| '-file'
			| '-video'
			| '-image'
			| '-sound';
		channel?: ChannelResolvable;
		author?: UserResolvable;
		authorType?: 'user'
			| 'bot'
			| 'webhook'
			| '-user'
			| '-bot'
			| '-webhook';
		sortBy?: 'relevant' | 'recent';
		sortOrder?: 'asc' | 'desc';
		contextSize?: number;
		limit?: number;
		offset?: number;
		mentions?: UserResolvable;
		mentionsEveryone?: boolean;
		linkHostname?: string;
		embedProvider?: string;
		embedType?: 'image' | 'video' | 'url' | 'rich';
		attachmentFilename?: string;
		attachmentExtension?: string;
		before?: Date;
		after?: Date;
		during?: Date;
	};

	type PermissionFlags = {
		ADMINISTRATOR?: number;
		CREATE_INSTANT_INVITE?: number;
		KICK_MEMBERS?: number;
		BAN_MEMBERS?: number;
		MANAGE_CHANNELS?: number;
		MANAGE_GUILD?: number;
		ADD_REACTIONS?: number;
		READ_MESSAGES?: number;
		SEND_MESSAGES?: number;
		SEND_TTS_MESSAGES?: number;
		MANAGE_MESSAGES?: number;
		EMBED_LINKS?: number;
		ATTACH_FILES?: number;
		READ_MESSAGE_HISTORY?: number;
		MENTION_EVERYONE?: number;
		USE_EXTERNAL_EMOJIS?: number;
		EXTERNAL_EMOJIS?: number;
		CONNECT?: number;
		SPEAK?: number;
		MUTE_MEMBERS?: number;
		DEAFEN_MEMBERS?: number;
		MOVE_MEMBERS?: number;
		USE_VAD?: number;
		CHANGE_NICKNAME?: number;
		MANAGE_NICKNAMES?: number;
		MANAGE_ROLES?: number;
		MANAGE_ROLES_OR_PERMISSIONS?: number;
		MANAGE_WEBHOOKS?: number;
		MANAGE_EMOJIS?: number;
	};

	type PermissionObject = {
		ADMINISTRATOR?: boolean;
		CREATE_INSTANT_INVITE?: boolean;
		KICK_MEMBERS?: boolean;
		BAN_MEMBERS?: boolean;
		MANAGE_CHANNELS?: boolean;
		MANAGE_GUILD?: boolean;
		ADD_REACTIONS?: boolean;
		READ_MESSAGES?: boolean;
		SEND_MESSAGES?: boolean;
		SEND_TTS_MESSAGES?: boolean;
		MANAGE_MESSAGES?: boolean;
		EMBED_LINKS?: boolean;
		ATTACH_FILES?: boolean;
		READ_MESSAGE_HISTORY?: boolean;
		MENTION_EVERYONE?: boolean;
		USE_EXTERNAL_EMOJIS?: boolean;
		EXTERNAL_EMOJIS?: boolean;
		CONNECT?: boolean;
		SPEAK?: boolean;
		MUTE_MEMBERS?: boolean;
		DEAFEN_MEMBERS?: boolean;
		MOVE_MEMBERS?: boolean;
		USE_VAD?: boolean;
		CHANGE_NICKNAME?: boolean;
		MANAGE_NICKNAMES?: boolean;
		MANAGE_ROLES?: boolean;
		MANAGE_ROLES_OR_PERMISSIONS?: boolean;
		MANAGE_WEBHOOKS?: boolean;
		MANAGE_EMOJIS?: boolean;
	};

	type PermissionString = 'ADMINISTRATOR'
		| 'CREATE_INSTANT_INVITE'
		| 'KICK_MEMBERS'
		| 'BAN_MEMBERS'
		| 'MANAGE_CHANNELS'
		| 'MANAGE_GUILD'
		| 'ADD_REACTIONS'
		| 'READ_MESSAGES'
		| 'SEND_MESSAGES'
		| 'SEND_TTS_MESSAGES'
		| 'MANAGE_MESSAGES'
		| 'EMBED_LINKS'
		| 'ATTACH_FILES'
		| 'READ_MESSAGE_HISTORY'
		| 'MENTION_EVERYONE'
		| 'USE_EXTERNAL_EMOJIS'
		| 'EXTERNAL_EMOJIS'
		| 'CONNECT'
		| 'SPEAK'
		| 'MUTE_MEMBERS'
		| 'DEAFEN_MEMBERS'
		| 'MOVE_MEMBERS'
		| 'USE_VAD'
		| 'CHANGE_NICKNAME'
		| 'MANAGE_NICKNAMES'
		| 'MANAGE_ROLES'
		| 'MANAGE_ROLES_OR_PERMISSIONS'
		| 'MANAGE_WEBHOOKS'
		| 'MANAGE_EMOJIS';

	type PermissionOverwriteOptions = PermissionObject;

	type PermissionResolvable = PermissionString | PermissionString[] | number[];

	type PresenceData = {
		status?: PresenceStatus;
		afk?: boolean;
		game?: {
			name?: string;
			url?: string;
		}
	}

	type PresenceStatus = 'online' | 'idle' | 'invisible' | 'dnd';

	type ReactionCollectorOptions = CollectorOptions & {
		max?: number;
		maxEmojis?: number;
		maxUsers?: number;
	};

	type RichEmbedOptions = {
		title?: string;
		description?: string;
		url?: string;
		timestamp?: Date;
		color?: number | string;
		fields?: { name: string; value: string; inline?: boolean; }[];
		file?: string | FileOptions;
		author?: { name: string; url?: string; icon_url?: string; };
		thumbnail?: { url: string; height?: number; width?: number; };
		image?: { url: string; proxy_url?: string; height?: number; width?: number; };
		video?: { url: string; height: number; width: number; };
		footer?: { text?: string; icon_url?: string; };
	};

	type RoleData = {
		name?: string;
		color?: ColorResolvable;
		hoist?: boolean;
		position?: number;
		permissions?: PermissionString[];
		mentionable?: boolean;
	};

	type RoleResolvable = Role | string;

	type Snowflake = string;

	type SplitOptions = {
		maxLength?: number;
		char?: string;
		prepend?: string;
		append?: string;
	};

	type Status = number;

	type StreamOptions = {
		seek?: number;
		volume?: number;
		passes?: number;
	};

	type StringResolvable = string | string[] | any;

	type UserResolvable = User | Snowflake | Message | Guild | GuildMember;

	type VoiceStatus = number;

	type WebhookMessageOptions = {
		username?: string;
		avatarURL?: string;
		tts?: boolean;
		nonce?: string;
		embeds?: object[];
		disableEveryone?: boolean;
		file?: FileOptions | string;
		code?: string | boolean;
		split?: boolean | SplitOptions;
	};

	type WebSocketOptions = {
		large_threshold?: number;
		compress?: boolean;
	};

	type WSEventType = 'READY'
		| 'GUILD_SYNC'
		| 'GUILD_CREATE'
		| 'GUILD_DELETE'
		| 'GUILD_UPDATE'
		| 'GUILD_MEMBER_ADD'
		| 'GUILD_MEMBER_REMOVE'
		| 'GUILD_MEMBER_UPDATE'
		| 'GUILD_MEMBERS_CHUNK'
		| 'GUILD_ROLE_CREATE'
		| 'GUILD_ROLE_DELETE'
		| 'GUILD_ROLE_UPDATE'
		| 'GUILD_BAN_ADD'
		| 'GUILD_BAN_REMOVE'
		| 'CHANNEL_CREATE'
		| 'CHANNEL_DELETE'
		| 'CHANNEL_UPDATE'
		| 'CHANNEL_PINS_UPDATE'
		| 'MESSAGE_CREATE'
		| 'MESSAGE_DELETE'
		| 'MESSAGE_UPDATE'
		| 'MESSAGE_DELETE_BULK'
		| 'MESSAGE_REACTION_ADD'
		| 'MESSAGE_REACTION_REMOVE'
		| 'MESSAGE_REACTION_REMOVE_ALL'
		| 'USER_UPDATE'
		| 'USER_NOTE_UPDATE'
		| 'PRESENCE_UPDATE'
		| 'VOICE_STATE_UPDATE'
		| 'TYPING_START'
		| 'VOICE_SERVER_UPDATE'
		| 'RELATIONSHIP_ADD'
		| 'RELATIONSHIP_REMOVE';

//#endregion
}
