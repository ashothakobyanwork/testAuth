import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AccessTokenKeySpecifier = ('accessToken' | AccessTokenKeySpecifier)[];
export type AccessTokenFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdditionalInfoKeySpecifier = ('advantage' | 'hasDelivery' | AdditionalInfoKeySpecifier)[];
export type AdditionalInfoFieldPolicy = {
	advantage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasDelivery?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddressOutKeySpecifier = ('city' | 'coordinates' | AddressOutKeySpecifier)[];
export type AddressOutFieldPolicy = {
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinates?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlbumKeySpecifier = ('author' | 'content' | 'contentType' | 'cover' | 'createdAt' | 'description' | 'id' | 'internalCover' | 'name' | 'policy' | 'updatedAt' | AlbumKeySpecifier)[];
export type AlbumFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	internalCover?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AlbumsKeySpecifier = ('cover' | 'list' | AlbumsKeySpecifier)[];
export type AlbumsFieldPolicy = {
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	list?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppointmentContentKeySpecifier = ('data' | 'metadata' | AppointmentContentKeySpecifier)[];
export type AppointmentContentFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AppointmentMessageKeySpecifier = ('author' | 'chat' | 'createdAt' | 'id' | 'isEdited' | 'references' | 'service' | 'text' | 'time' | 'updatedAt' | AppointmentMessageKeySpecifier)[];
export type AppointmentMessageFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdited?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	service?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	time?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleKeySpecifier = ('attachments' | 'author' | 'commentsCount' | 'createdAt' | 'id' | 'is18Plus' | 'isCommentable' | 'isFavourite' | 'isFollowing' | 'isLiked' | 'likesCount' | 'name' | 'tags' | 'text' | 'topic' | 'unreadCommentsCount' | 'updatedAt' | 'viewsCount' | ArticleKeySpecifier)[];
export type ArticleFieldPolicy = {
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is18Plus?: FieldPolicy<any> | FieldReadFunction<any>,
	isCommentable?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	likesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	topic?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadCommentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ArticleListKeySpecifier = ('articles' | 'total' | ArticleListKeySpecifier)[];
export type ArticleListFieldPolicy = {
	articles?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BaseErrorKeySpecifier = ('status' | BaseErrorKeySpecifier)[];
export type BaseErrorFieldPolicy = {
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BlogKeySpecifier = ('articles' | 'author' | 'avatar' | 'cover' | 'id' | 'name' | 'topics' | BlogKeySpecifier)[];
export type BlogFieldPolicy = {
	articles?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	topics?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BooleanObjectKeySpecifier = ('boolean' | BooleanObjectKeySpecifier)[];
export type BooleanObjectFieldPolicy = {
	boolean?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemKeySpecifier = ('id' | 'product' | 'selectedProperties' | CartItemKeySpecifier)[];
export type CartItemFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	selectedProperties?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CartItemsKeySpecifier = ('fullAmount' | 'fullPrice' | 'items' | CartItemsKeySpecifier)[];
export type CartItemsFieldPolicy = {
	fullAmount?: FieldPolicy<any> | FieldReadFunction<any>,
	fullPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	items?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CatalogKeySpecifier = ('author' | 'collections' | 'cover' | 'createdAt' | 'id' | 'pdf' | 'updatedAt' | CatalogKeySpecifier)[];
export type CatalogFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	collections?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pdf?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatKeySpecifier = ('createdAt' | 'id' | 'isFollowing' | 'isMuted' | 'isTechSupport' | 'lastMessage' | 'lastReadTimestamp' | 'logo' | 'name' | 'unreadMessageCount' | 'updatedAt' | 'user' | ChatKeySpecifier)[];
export type ChatFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	isMuted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTechSupport?: FieldPolicy<any> | FieldReadFunction<any>,
	lastMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	lastReadTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadMessageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ChatListKeySpecifier = ('items' | 'total' | ChatListKeySpecifier)[];
export type ChatListFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CollectionKeySpecifier = ('author' | 'cover' | 'createdAt' | 'id' | 'name' | 'updatedAt' | CollectionKeySpecifier)[];
export type CollectionFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentListKeySpecifier = ('comments' | 'total' | CommentListKeySpecifier)[];
export type CommentListFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentReactionsKeySpecifier = ('myReaction' | 'reactions' | CommentReactionsKeySpecifier)[];
export type CommentReactionsFieldPolicy = {
	myReaction?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentWithRepliesKeySpecifier = ('comment' | 'replies' | 'total' | CommentWithRepliesKeySpecifier)[];
export type CommentWithRepliesFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentWithRepliesListKeySpecifier = ('comments' | 'total' | CommentWithRepliesListKeySpecifier)[];
export type CommentWithRepliesListFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComplaintKeySpecifier = ('authorId' | 'comment' | 'complaintFinalType' | 'complaintType' | 'contentId' | 'contentType' | 'createdAt' | 'decision' | 'decisionMadeAt' | 'id' | 'updatedAt' | ComplaintKeySpecifier)[];
export type ComplaintFieldPolicy = {
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	complaintFinalType?: FieldPolicy<any> | FieldReadFunction<any>,
	complaintType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentId?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	decision?: FieldPolicy<any> | FieldReadFunction<any>,
	decisionMadeAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComplaintFinalTypeKeySpecifier = ('complaintFinalType' | ComplaintFinalTypeKeySpecifier)[];
export type ComplaintFinalTypeFieldPolicy = {
	complaintFinalType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ComplaintsListKeySpecifier = ('complaints' | ComplaintsListKeySpecifier)[];
export type ComplaintsListFieldPolicy = {
	complaints?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentMetadataKeySpecifier = ('id' | 'isBlocked' | 'type' | ContentMetadataKeySpecifier)[];
export type ContentMetadataFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoordinateOutKeySpecifier = ('address' | 'lat' | 'lng' | CoordinateOutKeySpecifier)[];
export type CoordinateOutFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DayWorkingHoursKeySpecifier = ('hours' | 'status' | DayWorkingHoursKeySpecifier)[];
export type DayWorkingHoursFieldPolicy = {
	hours?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletedCommentKeySpecifier = ('author' | 'createdAt' | 'hasBeenRead' | 'id' | 'target' | 'updatedAt' | DeletedCommentKeySpecifier)[];
export type DeletedCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasBeenRead?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ErrorWithFieldsKeySpecifier = ('fields' | 'status' | ErrorWithFieldsKeySpecifier)[];
export type ErrorWithFieldsFieldPolicy = {
	fields?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExistingCommentKeySpecifier = ('author' | 'createdAt' | 'hasBeenRead' | 'id' | 'isLiked' | 'likesCount' | 'reactions' | 'references' | 'target' | 'text' | 'updatedAt' | ExistingCommentKeySpecifier)[];
export type ExistingCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasBeenRead?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	likesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	reactions?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileKeySpecifier = ('checksum' | 'createdAt' | 'id' | 'name' | 'path' | 'size' | 'type' | 'updatedAt' | FileKeySpecifier)[];
export type FileFieldPolicy = {
	checksum?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForwardedContentKeySpecifier = ('data' | 'metadata' | ForwardedContentKeySpecifier)[];
export type ForwardedContentFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ForwardedMessageKeySpecifier = ('author' | 'chat' | 'createdAt' | 'forwardedContent' | 'id' | 'isEdited' | 'references' | 'text' | 'updatedAt' | ForwardedMessageKeySpecifier)[];
export type ForwardedMessageFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	forwardedContent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdited?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HintsListKeySpecifier = ('hints' | HintsListKeySpecifier)[];
export type HintsListFieldPolicy = {
	hints?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HistoryListKeySpecifier = ('history' | HistoryListKeySpecifier)[];
export type HistoryListFieldPolicy = {
	history?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IBaseCommentKeySpecifier = ('author' | 'createdAt' | 'hasBeenRead' | 'id' | 'target' | 'updatedAt' | IBaseCommentKeySpecifier)[];
export type IBaseCommentFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hasBeenRead?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LastReadTimestampChangedKeySpecifier = ('chatId' | 'lastReadTimestamp' | 'userId' | LastReadTimestampChangedKeySpecifier)[];
export type LastReadTimestampChangedFieldPolicy = {
	chatId?: FieldPolicy<any> | FieldReadFunction<any>,
	lastReadTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ListHashtagsKeySpecifier = ('hashtags' | ListHashtagsKeySpecifier)[];
export type ListHashtagsFieldPolicy = {
	hashtags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageKeySpecifier = ('author' | 'chat' | 'createdAt' | 'id' | 'isEdited' | 'references' | 'text' | 'updatedAt' | MessageKeySpecifier)[];
export type MessageFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdited?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MessageListKeySpecifier = ('items' | 'total' | MessageListKeySpecifier)[];
export type MessageListFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addContentViews' | 'addItemToCart' | 'addRecentBlog' | 'blockUser' | 'confirmCode' | 'createAlbum' | 'createAppointmentMessage' | 'createArticle' | 'createBlog' | 'createCatalog' | 'createChat' | 'createCollection' | 'createComment' | 'createComplaint' | 'createForwardMessage' | 'createOrderMessage' | 'createProduct' | 'createPublication' | 'createRegularMessage' | 'createReview' | 'createStory' | 'createTechSupportChat' | 'createTopic' | 'createUser' | 'deleteAlbum' | 'deleteAllArticles' | 'deleteAllPublications' | 'deleteArticle' | 'deleteChat' | 'deleteCollection' | 'deleteComment' | 'deleteComplaint' | 'deleteFriend' | 'deleteItemFromCart' | 'deleteManyUsers' | 'deleteMessage' | 'deleteProduct' | 'deletePublication' | 'deleteStory' | 'deleteTopic' | 'deleteUser' | 'followUser' | 'muteChat' | 'resetPassword' | 'sendCode' | 'sendContactsToPartnership' | 'sendContactsToTechSupport' | 'serverCleanup' | 'setAdminRole' | 'setAlbumsCover' | 'setDecisionOfComplaint' | 'setEmail' | 'setFavourite' | 'setFriend' | 'setHashtags' | 'setLastReadTimestamp' | 'setLike' | 'setPhone' | 'setReactionToComment' | 'setSettings' | 'subscribe' | 'unblockUser' | 'unfollowUser' | 'unmuteChat' | 'unsetLike' | 'unsubscribe' | 'updateAlbum' | 'updateAlbumContent' | 'updateArticle' | 'updateBlog' | 'updateCatalog' | 'updateCollection' | 'updateLastReadComment' | 'updateLastReadTimestamp' | 'updatePassword' | 'updateProduct' | 'updatePublication' | 'updateTariff' | 'updateTopic' | 'updateUser' | 'uploadFile' | 'uploadImage' | 'uploadVideo' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addContentViews?: FieldPolicy<any> | FieldReadFunction<any>,
	addItemToCart?: FieldPolicy<any> | FieldReadFunction<any>,
	addRecentBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	blockUser?: FieldPolicy<any> | FieldReadFunction<any>,
	confirmCode?: FieldPolicy<any> | FieldReadFunction<any>,
	createAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	createAppointmentMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	createBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	createCatalog?: FieldPolicy<any> | FieldReadFunction<any>,
	createChat?: FieldPolicy<any> | FieldReadFunction<any>,
	createCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	createComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createComplaint?: FieldPolicy<any> | FieldReadFunction<any>,
	createForwardMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createOrderMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	createPublication?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegularMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	createReview?: FieldPolicy<any> | FieldReadFunction<any>,
	createStory?: FieldPolicy<any> | FieldReadFunction<any>,
	createTechSupportChat?: FieldPolicy<any> | FieldReadFunction<any>,
	createTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAllArticles?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAllPublications?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteChat?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComplaint?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteItemFromCart?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteManyUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePublication?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteStory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	followUser?: FieldPolicy<any> | FieldReadFunction<any>,
	muteChat?: FieldPolicy<any> | FieldReadFunction<any>,
	resetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	sendCode?: FieldPolicy<any> | FieldReadFunction<any>,
	sendContactsToPartnership?: FieldPolicy<any> | FieldReadFunction<any>,
	sendContactsToTechSupport?: FieldPolicy<any> | FieldReadFunction<any>,
	serverCleanup?: FieldPolicy<any> | FieldReadFunction<any>,
	setAdminRole?: FieldPolicy<any> | FieldReadFunction<any>,
	setAlbumsCover?: FieldPolicy<any> | FieldReadFunction<any>,
	setDecisionOfComplaint?: FieldPolicy<any> | FieldReadFunction<any>,
	setEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	setFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	setFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	setHashtags?: FieldPolicy<any> | FieldReadFunction<any>,
	setLastReadTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	setLike?: FieldPolicy<any> | FieldReadFunction<any>,
	setPhone?: FieldPolicy<any> | FieldReadFunction<any>,
	setReactionToComment?: FieldPolicy<any> | FieldReadFunction<any>,
	setSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	unblockUser?: FieldPolicy<any> | FieldReadFunction<any>,
	unfollowUser?: FieldPolicy<any> | FieldReadFunction<any>,
	unmuteChat?: FieldPolicy<any> | FieldReadFunction<any>,
	unsetLike?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAlbumContent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCatalog?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastReadComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateLastReadTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePassword?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePublication?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTariff?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTopic?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadFile?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadImage?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadVideo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('author' | 'createdAt' | 'id' | 'notificationType' | 'readedAt' | 'target' | 'text' | 'updatedAt' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationType?: FieldPolicy<any> | FieldReadFunction<any>,
	readedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationListKeySpecifier = ('notifications' | NotificationListKeySpecifier)[];
export type NotificationListFieldPolicy = {
	notifications?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationSettingsKeySpecifier = ('sendNotificationsToEmail' | 'sendPushNotifications' | NotificationSettingsKeySpecifier)[];
export type NotificationSettingsFieldPolicy = {
	sendNotificationsToEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	sendPushNotifications?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationTargetKeySpecifier = ('id' | 'image' | 'type' | NotificationTargetKeySpecifier)[];
export type NotificationTargetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OnlineStatusChangedKeySpecifier = ('chatId' | 'isOnline' | 'userId' | OnlineStatusChangedKeySpecifier)[];
export type OnlineStatusChangedFieldPolicy = {
	chatId?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderContentKeySpecifier = ('data' | 'metadata' | OrderContentKeySpecifier)[];
export type OrderContentFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	metadata?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrderMessageKeySpecifier = ('author' | 'chat' | 'createdAt' | 'id' | 'isEdited' | 'orderProperties' | 'product' | 'references' | 'text' | 'updatedAt' | OrderMessageKeySpecifier)[];
export type OrderMessageFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdited?: FieldPolicy<any> | FieldReadFunction<any>,
	orderProperties?: FieldPolicy<any> | FieldReadFunction<any>,
	product?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductKeySpecifier = ('attachments' | 'author' | 'collection' | 'createdAt' | 'deliveryTerms' | 'description' | 'id' | 'is18Plus' | 'isBlocked' | 'isFavourite' | 'isInCart' | 'isLiked' | 'isService' | 'likesCount' | 'linkId' | 'name' | 'oldPrice' | 'price' | 'properties' | 'relatedProducts' | 'reviewsCount' | 'tags' | 'updatedAt' | 'viewsCount' | ProductKeySpecifier)[];
export type ProductFieldPolicy = {
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	collection?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	deliveryTerms?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is18Plus?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isInCart?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	isService?: FieldPolicy<any> | FieldReadFunction<any>,
	likesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	linkId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oldPrice?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	properties?: FieldPolicy<any> | FieldReadFunction<any>,
	relatedProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	reviewsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductListKeySpecifier = ('products' | 'total' | ProductListKeySpecifier)[];
export type ProductListFieldPolicy = {
	products?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProductPropertyKeySpecifier = ('property' | 'values' | ProductPropertyKeySpecifier)[];
export type ProductPropertyFieldPolicy = {
	property?: FieldPolicy<any> | FieldReadFunction<any>,
	values?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationKeySpecifier = ('attachments' | 'author' | 'commentsCount' | 'createdAt' | 'description' | 'id' | 'is18Plus' | 'isBlocked' | 'isCommentable' | 'isFavourite' | 'isLiked' | 'likesCount' | 'name' | 'references' | 'showInFeed' | 'tags' | 'unreadCommentsCount' | 'updatedAt' | 'viewsCount' | PublicationKeySpecifier)[];
export type PublicationFieldPolicy = {
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	commentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is18Plus?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isCommentable?: FieldPolicy<any> | FieldReadFunction<any>,
	isFavourite?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	likesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	showInFeed?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadCommentsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PublicationListKeySpecifier = ('publications' | 'total' | PublicationListKeySpecifier)[];
export type PublicationListFieldPolicy = {
	publications?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('createTokens' | 'deleteRefreshToken' | 'getActiveNotifications' | 'getActiveTariff' | 'getAlbumsByUserId' | 'getArticleRecommendations' | 'getArticleSubscriptions' | 'getBlockedUsers' | 'getCartItems' | 'getCatalogProducts' | 'getChatByUserId' | 'getChats' | 'getChatsWithOrder' | 'getCode' | 'getCommentReplies' | 'getCommentsWithTopComment' | 'getComplaints' | 'getContentComments' | 'getFavouriteArticles' | 'getFavouriteProducts' | 'getFavouritePublications' | 'getFinalTypeByContentId' | 'getHashtags' | 'getMe' | 'getMessages' | 'getMyPublications' | 'getMyTopics' | 'getNotifications' | 'getPopularTags' | 'getProductsByCollectionId' | 'getPublicationByCommentId' | 'getPublicationRecommendations' | 'getPublicationSubscriptions' | 'getPublicationsByTag' | 'getPublicationsByUserId' | 'getReactionAuthors' | 'getRecentBlogs' | 'getRecentStories' | 'getRecommendedUsers' | 'getReviewsByProductId' | 'getSettings' | 'getTechSupportChat' | 'getTechSupportChats' | 'getUserStories' | 'getUsers' | 'hints' | 'history' | 'isEmailExist' | 'isLoginExist' | 'isPhoneExist' | 'listFollowers' | 'listSubscriptions' | 'refreshAccessToken' | 'retrieveAlbum' | 'retrieveArticle' | 'retrieveBlog' | 'retrieveCatalog' | 'retrieveCollection' | 'retrieveComplaint' | 'retrieveFile' | 'retrieveMessage' | 'retrieveProduct' | 'retrievePublication' | 'retrieveStory' | 'retrieveUser' | 'searchBlogs' | 'searchFollowers' | 'searchProducts' | 'searchPublications' | 'searchSubscriptions' | 'searchUsers' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	createTokens?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRefreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	getActiveNotifications?: FieldPolicy<any> | FieldReadFunction<any>,
	getActiveTariff?: FieldPolicy<any> | FieldReadFunction<any>,
	getAlbumsByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getArticleRecommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	getArticleSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	getBlockedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getCartItems?: FieldPolicy<any> | FieldReadFunction<any>,
	getCatalogProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	getChatByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getChats?: FieldPolicy<any> | FieldReadFunction<any>,
	getChatsWithOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	getCode?: FieldPolicy<any> | FieldReadFunction<any>,
	getCommentReplies?: FieldPolicy<any> | FieldReadFunction<any>,
	getCommentsWithTopComment?: FieldPolicy<any> | FieldReadFunction<any>,
	getComplaints?: FieldPolicy<any> | FieldReadFunction<any>,
	getContentComments?: FieldPolicy<any> | FieldReadFunction<any>,
	getFavouriteArticles?: FieldPolicy<any> | FieldReadFunction<any>,
	getFavouriteProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	getFavouritePublications?: FieldPolicy<any> | FieldReadFunction<any>,
	getFinalTypeByContentId?: FieldPolicy<any> | FieldReadFunction<any>,
	getHashtags?: FieldPolicy<any> | FieldReadFunction<any>,
	getMe?: FieldPolicy<any> | FieldReadFunction<any>,
	getMessages?: FieldPolicy<any> | FieldReadFunction<any>,
	getMyPublications?: FieldPolicy<any> | FieldReadFunction<any>,
	getMyTopics?: FieldPolicy<any> | FieldReadFunction<any>,
	getNotifications?: FieldPolicy<any> | FieldReadFunction<any>,
	getPopularTags?: FieldPolicy<any> | FieldReadFunction<any>,
	getProductsByCollectionId?: FieldPolicy<any> | FieldReadFunction<any>,
	getPublicationByCommentId?: FieldPolicy<any> | FieldReadFunction<any>,
	getPublicationRecommendations?: FieldPolicy<any> | FieldReadFunction<any>,
	getPublicationSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	getPublicationsByTag?: FieldPolicy<any> | FieldReadFunction<any>,
	getPublicationsByUserId?: FieldPolicy<any> | FieldReadFunction<any>,
	getReactionAuthors?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecentBlogs?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecentStories?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecommendedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getReviewsByProductId?: FieldPolicy<any> | FieldReadFunction<any>,
	getSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	getTechSupportChat?: FieldPolicy<any> | FieldReadFunction<any>,
	getTechSupportChats?: FieldPolicy<any> | FieldReadFunction<any>,
	getUserStories?: FieldPolicy<any> | FieldReadFunction<any>,
	getUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	hints?: FieldPolicy<any> | FieldReadFunction<any>,
	history?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailExist?: FieldPolicy<any> | FieldReadFunction<any>,
	isLoginExist?: FieldPolicy<any> | FieldReadFunction<any>,
	isPhoneExist?: FieldPolicy<any> | FieldReadFunction<any>,
	listFollowers?: FieldPolicy<any> | FieldReadFunction<any>,
	listSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshAccessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveAlbum?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveArticle?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveBlog?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveCatalog?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveCollection?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveComplaint?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveFile?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	retrievePublication?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveStory?: FieldPolicy<any> | FieldReadFunction<any>,
	retrieveUser?: FieldPolicy<any> | FieldReadFunction<any>,
	searchBlogs?: FieldPolicy<any> | FieldReadFunction<any>,
	searchFollowers?: FieldPolicy<any> | FieldReadFunction<any>,
	searchProducts?: FieldPolicy<any> | FieldReadFunction<any>,
	searchPublications?: FieldPolicy<any> | FieldReadFunction<any>,
	searchSubscriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	searchUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReactionKeySpecifier = ('count' | 'type' | ReactionKeySpecifier)[];
export type ReactionFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentBlogKeySpecifier = ('author' | 'avatar' | 'id' | 'name' | 'unreadCount' | RecentBlogKeySpecifier)[];
export type RecentBlogFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecentBlogsListKeySpecifier = ('records' | 'total' | RecentBlogsListKeySpecifier)[];
export type RecentBlogsListFieldPolicy = {
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecordTypeKeySpecifier = ('key' | 'value' | RecordTypeKeySpecifier)[];
export type RecordTypeFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegularMessageKeySpecifier = ('attachments' | 'author' | 'chat' | 'createdAt' | 'id' | 'isEdited' | 'references' | 'text' | 'updatedAt' | RegularMessageKeySpecifier)[];
export type RegularMessageFieldPolicy = {
	attachments?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	chat?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEdited?: FieldPolicy<any> | FieldReadFunction<any>,
	references?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewKeySpecifier = ('author' | 'createdAt' | 'id' | 'text' | 'updatedAt' | ReviewKeySpecifier)[];
export type ReviewFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReviewListKeySpecifier = ('reviews' | 'total' | ReviewListKeySpecifier)[];
export type ReviewListFieldPolicy = {
	reviews?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchBlogsListKeySpecifier = ('records' | 'total' | SearchBlogsListKeySpecifier)[];
export type SearchBlogsListFieldPolicy = {
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchProductsListKeySpecifier = ('records' | 'total' | SearchProductsListKeySpecifier)[];
export type SearchProductsListFieldPolicy = {
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchPublicationsListKeySpecifier = ('records' | 'total' | SearchPublicationsListKeySpecifier)[];
export type SearchPublicationsListFieldPolicy = {
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchUserRecordKeySpecifier = ('content' | 'user' | SearchUserRecordKeySpecifier)[];
export type SearchUserRecordFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchUsersListKeySpecifier = ('records' | 'total' | SearchUsersListKeySpecifier)[];
export type SearchUsersListFieldPolicy = {
	records?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SocketMessageKeySpecifier = ('data' | 'tempKey' | SocketMessageKeySpecifier)[];
export type SocketMessageFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	tempKey?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryKeySpecifier = ('createdAt' | 'file' | 'id' | 'isLiked' | 'objects' | 'policy' | 'updatedAt' | 'user' | StoryKeySpecifier)[];
export type StoryFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	objects?: FieldPolicy<any> | FieldReadFunction<any>,
	policy?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryFeedKeySpecifier = ('author' | 'stories' | StoryFeedKeySpecifier)[];
export type StoryFeedFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	stories?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryFeedListKeySpecifier = ('items' | 'total' | StoryFeedListKeySpecifier)[];
export type StoryFeedListFieldPolicy = {
	items?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryGeolocationKeySpecifier = ('coordinate' | 'position' | StoryGeolocationKeySpecifier)[];
export type StoryGeolocationFieldPolicy = {
	coordinate?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryGeolocationCoordinateKeySpecifier = ('lat' | 'lng' | StoryGeolocationCoordinateKeySpecifier)[];
export type StoryGeolocationCoordinateFieldPolicy = {
	lat?: FieldPolicy<any> | FieldReadFunction<any>,
	lng?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryLinkKeySpecifier = ('isAccountLinkMatched' | 'link' | 'linkName' | 'position' | 'textColor' | StoryLinkKeySpecifier)[];
export type StoryLinkFieldPolicy = {
	isAccountLinkMatched?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	linkName?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	textColor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryObjectPositionKeySpecifier = ('angle' | 'scale' | 'x' | 'y' | StoryObjectPositionKeySpecifier)[];
export type StoryObjectPositionFieldPolicy = {
	angle?: FieldPolicy<any> | FieldReadFunction<any>,
	scale?: FieldPolicy<any> | FieldReadFunction<any>,
	x?: FieldPolicy<any> | FieldReadFunction<any>,
	y?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryProductLinkKeySpecifier = ('catalogId' | 'collectionName' | 'position' | 'price' | 'productId' | 'productName' | 'textColor' | StoryProductLinkKeySpecifier)[];
export type StoryProductLinkFieldPolicy = {
	catalogId?: FieldPolicy<any> | FieldReadFunction<any>,
	collectionName?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	price?: FieldPolicy<any> | FieldReadFunction<any>,
	productId?: FieldPolicy<any> | FieldReadFunction<any>,
	productName?: FieldPolicy<any> | FieldReadFunction<any>,
	textColor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryTextKeySpecifier = ('font' | 'fontSize' | 'position' | 'textColor' | 'value' | StoryTextKeySpecifier)[];
export type StoryTextFieldPolicy = {
	font?: FieldPolicy<any> | FieldReadFunction<any>,
	fontSize?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	textColor?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoryUserReferenceKeySpecifier = ('login' | 'name' | 'position' | 'textColor' | 'userId' | StoryUserReferenceKeySpecifier)[];
export type StoryUserReferenceFieldPolicy = {
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	textColor?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StringObjectKeySpecifier = ('string' | StringObjectKeySpecifier)[];
export type StringObjectFieldPolicy = {
	string?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('onLastReadTimestampChanged' | 'onNewMessage' | 'onOnlineStatusChanged' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	onLastReadTimestampChanged?: FieldPolicy<any> | FieldReadFunction<any>,
	onNewMessage?: FieldPolicy<any> | FieldReadFunction<any>,
	onOnlineStatusChanged?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagListKeySpecifier = ('tags' | 'total' | TagListKeySpecifier)[];
export type TagListFieldPolicy = {
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TariffKeySpecifier = ('addressesCount' | 'createdAt' | 'expiredAt' | 'hashtagsCount' | 'id' | 'mailingRecipients' | 'mailingToAll' | 'productsCount' | 'updatedAt' | 'userId' | 'videoLengthS' | TariffKeySpecifier)[];
export type TariffFieldPolicy = {
	addressesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiredAt?: FieldPolicy<any> | FieldReadFunction<any>,
	hashtagsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	mailingRecipients?: FieldPolicy<any> | FieldReadFunction<any>,
	mailingToAll?: FieldPolicy<any> | FieldReadFunction<any>,
	productsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	videoLengthS?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenPairKeySpecifier = ('accessToken' | 'refreshToken' | TokenPairKeySpecifier)[];
export type TokenPairFieldPolicy = {
	accessToken?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicKeySpecifier = ('blog' | 'cover' | 'id' | 'name' | TopicKeySpecifier)[];
export type TopicFieldPolicy = {
	blog?: FieldPolicy<any> | FieldReadFunction<any>,
	cover?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TopicListKeySpecifier = ('topics' | TopicListKeySpecifier)[];
export type TopicListFieldPolicy = {
	topics?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('additionalInfo' | 'address' | 'avatar' | 'createdAt' | 'dateOfBirth' | 'description' | 'email' | 'id' | 'isBlocked' | 'isFollowing' | 'isFriend' | 'isLiked' | 'likesCount' | 'login' | 'name' | 'phone' | 'sex' | 'shortDescription' | 'subscribersCount' | 'subscriptionsCount' | 'updatedAt' | 'viewsCount' | 'website' | 'workingHours' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	additionalInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	dateOfBirth?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBlocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isFollowing?: FieldPolicy<any> | FieldReadFunction<any>,
	isFriend?: FieldPolicy<any> | FieldReadFunction<any>,
	isLiked?: FieldPolicy<any> | FieldReadFunction<any>,
	likesCount?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	sex?: FieldPolicy<any> | FieldReadFunction<any>,
	shortDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribersCount?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	viewsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>,
	workingHours?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserListKeySpecifier = ('total' | 'users' | UserListKeySpecifier)[];
export type UserListFieldPolicy = {
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WeekWorkingHoursKeySpecifier = ('friday' | 'monday' | 'saturday' | 'sunday' | 'thursday' | 'tuesday' | 'wednesday' | WeekWorkingHoursKeySpecifier)[];
export type WeekWorkingHoursFieldPolicy = {
	friday?: FieldPolicy<any> | FieldReadFunction<any>,
	monday?: FieldPolicy<any> | FieldReadFunction<any>,
	saturday?: FieldPolicy<any> | FieldReadFunction<any>,
	sunday?: FieldPolicy<any> | FieldReadFunction<any>,
	thursday?: FieldPolicy<any> | FieldReadFunction<any>,
	tuesday?: FieldPolicy<any> | FieldReadFunction<any>,
	wednesday?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WorkingHoursKeySpecifier = ('closesAt' | 'opensAt' | WorkingHoursKeySpecifier)[];
export type WorkingHoursFieldPolicy = {
	closesAt?: FieldPolicy<any> | FieldReadFunction<any>,
	opensAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AccessToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccessTokenKeySpecifier | (() => undefined | AccessTokenKeySpecifier),
		fields?: AccessTokenFieldPolicy,
	},
	AdditionalInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdditionalInfoKeySpecifier | (() => undefined | AdditionalInfoKeySpecifier),
		fields?: AdditionalInfoFieldPolicy,
	},
	AddressOut?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddressOutKeySpecifier | (() => undefined | AddressOutKeySpecifier),
		fields?: AddressOutFieldPolicy,
	},
	Album?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlbumKeySpecifier | (() => undefined | AlbumKeySpecifier),
		fields?: AlbumFieldPolicy,
	},
	Albums?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AlbumsKeySpecifier | (() => undefined | AlbumsKeySpecifier),
		fields?: AlbumsFieldPolicy,
	},
	AppointmentContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppointmentContentKeySpecifier | (() => undefined | AppointmentContentKeySpecifier),
		fields?: AppointmentContentFieldPolicy,
	},
	AppointmentMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AppointmentMessageKeySpecifier | (() => undefined | AppointmentMessageKeySpecifier),
		fields?: AppointmentMessageFieldPolicy,
	},
	Article?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleKeySpecifier | (() => undefined | ArticleKeySpecifier),
		fields?: ArticleFieldPolicy,
	},
	ArticleList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ArticleListKeySpecifier | (() => undefined | ArticleListKeySpecifier),
		fields?: ArticleListFieldPolicy,
	},
	BaseError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BaseErrorKeySpecifier | (() => undefined | BaseErrorKeySpecifier),
		fields?: BaseErrorFieldPolicy,
	},
	Blog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BlogKeySpecifier | (() => undefined | BlogKeySpecifier),
		fields?: BlogFieldPolicy,
	},
	BooleanObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BooleanObjectKeySpecifier | (() => undefined | BooleanObjectKeySpecifier),
		fields?: BooleanObjectFieldPolicy,
	},
	CartItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemKeySpecifier | (() => undefined | CartItemKeySpecifier),
		fields?: CartItemFieldPolicy,
	},
	CartItems?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CartItemsKeySpecifier | (() => undefined | CartItemsKeySpecifier),
		fields?: CartItemsFieldPolicy,
	},
	Catalog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CatalogKeySpecifier | (() => undefined | CatalogKeySpecifier),
		fields?: CatalogFieldPolicy,
	},
	Chat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatKeySpecifier | (() => undefined | ChatKeySpecifier),
		fields?: ChatFieldPolicy,
	},
	ChatList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ChatListKeySpecifier | (() => undefined | ChatListKeySpecifier),
		fields?: ChatListFieldPolicy,
	},
	Collection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CollectionKeySpecifier | (() => undefined | CollectionKeySpecifier),
		fields?: CollectionFieldPolicy,
	},
	CommentList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentListKeySpecifier | (() => undefined | CommentListKeySpecifier),
		fields?: CommentListFieldPolicy,
	},
	CommentReactions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentReactionsKeySpecifier | (() => undefined | CommentReactionsKeySpecifier),
		fields?: CommentReactionsFieldPolicy,
	},
	CommentWithReplies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentWithRepliesKeySpecifier | (() => undefined | CommentWithRepliesKeySpecifier),
		fields?: CommentWithRepliesFieldPolicy,
	},
	CommentWithRepliesList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentWithRepliesListKeySpecifier | (() => undefined | CommentWithRepliesListKeySpecifier),
		fields?: CommentWithRepliesListFieldPolicy,
	},
	Complaint?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComplaintKeySpecifier | (() => undefined | ComplaintKeySpecifier),
		fields?: ComplaintFieldPolicy,
	},
	ComplaintFinalType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComplaintFinalTypeKeySpecifier | (() => undefined | ComplaintFinalTypeKeySpecifier),
		fields?: ComplaintFinalTypeFieldPolicy,
	},
	ComplaintsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ComplaintsListKeySpecifier | (() => undefined | ComplaintsListKeySpecifier),
		fields?: ComplaintsListFieldPolicy,
	},
	ContentMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentMetadataKeySpecifier | (() => undefined | ContentMetadataKeySpecifier),
		fields?: ContentMetadataFieldPolicy,
	},
	CoordinateOut?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoordinateOutKeySpecifier | (() => undefined | CoordinateOutKeySpecifier),
		fields?: CoordinateOutFieldPolicy,
	},
	DayWorkingHours?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DayWorkingHoursKeySpecifier | (() => undefined | DayWorkingHoursKeySpecifier),
		fields?: DayWorkingHoursFieldPolicy,
	},
	DeletedComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletedCommentKeySpecifier | (() => undefined | DeletedCommentKeySpecifier),
		fields?: DeletedCommentFieldPolicy,
	},
	ErrorWithFields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ErrorWithFieldsKeySpecifier | (() => undefined | ErrorWithFieldsKeySpecifier),
		fields?: ErrorWithFieldsFieldPolicy,
	},
	ExistingComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExistingCommentKeySpecifier | (() => undefined | ExistingCommentKeySpecifier),
		fields?: ExistingCommentFieldPolicy,
	},
	File?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileKeySpecifier | (() => undefined | FileKeySpecifier),
		fields?: FileFieldPolicy,
	},
	ForwardedContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForwardedContentKeySpecifier | (() => undefined | ForwardedContentKeySpecifier),
		fields?: ForwardedContentFieldPolicy,
	},
	ForwardedMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ForwardedMessageKeySpecifier | (() => undefined | ForwardedMessageKeySpecifier),
		fields?: ForwardedMessageFieldPolicy,
	},
	HintsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HintsListKeySpecifier | (() => undefined | HintsListKeySpecifier),
		fields?: HintsListFieldPolicy,
	},
	HistoryList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HistoryListKeySpecifier | (() => undefined | HistoryListKeySpecifier),
		fields?: HistoryListFieldPolicy,
	},
	IBaseComment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IBaseCommentKeySpecifier | (() => undefined | IBaseCommentKeySpecifier),
		fields?: IBaseCommentFieldPolicy,
	},
	LastReadTimestampChanged?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LastReadTimestampChangedKeySpecifier | (() => undefined | LastReadTimestampChangedKeySpecifier),
		fields?: LastReadTimestampChangedFieldPolicy,
	},
	ListHashtags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ListHashtagsKeySpecifier | (() => undefined | ListHashtagsKeySpecifier),
		fields?: ListHashtagsFieldPolicy,
	},
	Message?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageKeySpecifier | (() => undefined | MessageKeySpecifier),
		fields?: MessageFieldPolicy,
	},
	MessageList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MessageListKeySpecifier | (() => undefined | MessageListKeySpecifier),
		fields?: MessageListFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Notification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationKeySpecifier | (() => undefined | NotificationKeySpecifier),
		fields?: NotificationFieldPolicy,
	},
	NotificationList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationListKeySpecifier | (() => undefined | NotificationListKeySpecifier),
		fields?: NotificationListFieldPolicy,
	},
	NotificationSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationSettingsKeySpecifier | (() => undefined | NotificationSettingsKeySpecifier),
		fields?: NotificationSettingsFieldPolicy,
	},
	NotificationTarget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationTargetKeySpecifier | (() => undefined | NotificationTargetKeySpecifier),
		fields?: NotificationTargetFieldPolicy,
	},
	OnlineStatusChanged?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OnlineStatusChangedKeySpecifier | (() => undefined | OnlineStatusChangedKeySpecifier),
		fields?: OnlineStatusChangedFieldPolicy,
	},
	OrderContent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderContentKeySpecifier | (() => undefined | OrderContentKeySpecifier),
		fields?: OrderContentFieldPolicy,
	},
	OrderMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrderMessageKeySpecifier | (() => undefined | OrderMessageKeySpecifier),
		fields?: OrderMessageFieldPolicy,
	},
	Product?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductKeySpecifier | (() => undefined | ProductKeySpecifier),
		fields?: ProductFieldPolicy,
	},
	ProductList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductListKeySpecifier | (() => undefined | ProductListKeySpecifier),
		fields?: ProductListFieldPolicy,
	},
	ProductProperty?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProductPropertyKeySpecifier | (() => undefined | ProductPropertyKeySpecifier),
		fields?: ProductPropertyFieldPolicy,
	},
	Publication?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationKeySpecifier | (() => undefined | PublicationKeySpecifier),
		fields?: PublicationFieldPolicy,
	},
	PublicationList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PublicationListKeySpecifier | (() => undefined | PublicationListKeySpecifier),
		fields?: PublicationListFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Reaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReactionKeySpecifier | (() => undefined | ReactionKeySpecifier),
		fields?: ReactionFieldPolicy,
	},
	RecentBlog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentBlogKeySpecifier | (() => undefined | RecentBlogKeySpecifier),
		fields?: RecentBlogFieldPolicy,
	},
	RecentBlogsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecentBlogsListKeySpecifier | (() => undefined | RecentBlogsListKeySpecifier),
		fields?: RecentBlogsListFieldPolicy,
	},
	RecordType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecordTypeKeySpecifier | (() => undefined | RecordTypeKeySpecifier),
		fields?: RecordTypeFieldPolicy,
	},
	RegularMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegularMessageKeySpecifier | (() => undefined | RegularMessageKeySpecifier),
		fields?: RegularMessageFieldPolicy,
	},
	Review?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewKeySpecifier | (() => undefined | ReviewKeySpecifier),
		fields?: ReviewFieldPolicy,
	},
	ReviewList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReviewListKeySpecifier | (() => undefined | ReviewListKeySpecifier),
		fields?: ReviewListFieldPolicy,
	},
	SearchBlogsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchBlogsListKeySpecifier | (() => undefined | SearchBlogsListKeySpecifier),
		fields?: SearchBlogsListFieldPolicy,
	},
	SearchProductsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchProductsListKeySpecifier | (() => undefined | SearchProductsListKeySpecifier),
		fields?: SearchProductsListFieldPolicy,
	},
	SearchPublicationsList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchPublicationsListKeySpecifier | (() => undefined | SearchPublicationsListKeySpecifier),
		fields?: SearchPublicationsListFieldPolicy,
	},
	SearchUserRecord?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchUserRecordKeySpecifier | (() => undefined | SearchUserRecordKeySpecifier),
		fields?: SearchUserRecordFieldPolicy,
	},
	SearchUsersList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchUsersListKeySpecifier | (() => undefined | SearchUsersListKeySpecifier),
		fields?: SearchUsersListFieldPolicy,
	},
	SocketMessage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SocketMessageKeySpecifier | (() => undefined | SocketMessageKeySpecifier),
		fields?: SocketMessageFieldPolicy,
	},
	Story?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryKeySpecifier | (() => undefined | StoryKeySpecifier),
		fields?: StoryFieldPolicy,
	},
	StoryFeed?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryFeedKeySpecifier | (() => undefined | StoryFeedKeySpecifier),
		fields?: StoryFeedFieldPolicy,
	},
	StoryFeedList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryFeedListKeySpecifier | (() => undefined | StoryFeedListKeySpecifier),
		fields?: StoryFeedListFieldPolicy,
	},
	StoryGeolocation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryGeolocationKeySpecifier | (() => undefined | StoryGeolocationKeySpecifier),
		fields?: StoryGeolocationFieldPolicy,
	},
	StoryGeolocationCoordinate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryGeolocationCoordinateKeySpecifier | (() => undefined | StoryGeolocationCoordinateKeySpecifier),
		fields?: StoryGeolocationCoordinateFieldPolicy,
	},
	StoryLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryLinkKeySpecifier | (() => undefined | StoryLinkKeySpecifier),
		fields?: StoryLinkFieldPolicy,
	},
	StoryObjectPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryObjectPositionKeySpecifier | (() => undefined | StoryObjectPositionKeySpecifier),
		fields?: StoryObjectPositionFieldPolicy,
	},
	StoryProductLink?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryProductLinkKeySpecifier | (() => undefined | StoryProductLinkKeySpecifier),
		fields?: StoryProductLinkFieldPolicy,
	},
	StoryText?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryTextKeySpecifier | (() => undefined | StoryTextKeySpecifier),
		fields?: StoryTextFieldPolicy,
	},
	StoryUserReference?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoryUserReferenceKeySpecifier | (() => undefined | StoryUserReferenceKeySpecifier),
		fields?: StoryUserReferenceFieldPolicy,
	},
	StringObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StringObjectKeySpecifier | (() => undefined | StringObjectKeySpecifier),
		fields?: StringObjectFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	TagList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagListKeySpecifier | (() => undefined | TagListKeySpecifier),
		fields?: TagListFieldPolicy,
	},
	Tariff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TariffKeySpecifier | (() => undefined | TariffKeySpecifier),
		fields?: TariffFieldPolicy,
	},
	TokenPair?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenPairKeySpecifier | (() => undefined | TokenPairKeySpecifier),
		fields?: TokenPairFieldPolicy,
	},
	Topic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicKeySpecifier | (() => undefined | TopicKeySpecifier),
		fields?: TopicFieldPolicy,
	},
	TopicList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TopicListKeySpecifier | (() => undefined | TopicListKeySpecifier),
		fields?: TopicListFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserListKeySpecifier | (() => undefined | UserListKeySpecifier),
		fields?: UserListFieldPolicy,
	},
	WeekWorkingHours?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WeekWorkingHoursKeySpecifier | (() => undefined | WeekWorkingHoursKeySpecifier),
		fields?: WeekWorkingHoursFieldPolicy,
	},
	WorkingHours?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WorkingHoursKeySpecifier | (() => undefined | WorkingHoursKeySpecifier),
		fields?: WorkingHoursFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;