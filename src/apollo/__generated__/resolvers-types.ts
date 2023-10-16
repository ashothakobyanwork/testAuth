import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<T extends {[key: string]: unknown}, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: {input: string; output: string};
  String: {input: string; output: string};
  Boolean: {input: boolean; output: boolean};
  Int: {input: number; output: number};
  Float: {input: number; output: number};
  Upload: {input: any; output: any};
  Void: {input: any; output: any};
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String']['output'];
};

export type AddContentViewsIn = {
  contentType: ViewsContentType;
  ids: Array<Scalars['ID']['input']>;
};

export type AdditionalInfo = {
  __typename?: 'AdditionalInfo';
  advantage?: Maybe<Scalars['String']['output']>;
  hasDelivery: Scalars['Boolean']['output'];
};

export type AdditionalInfoIn = {
  advantage?: InputMaybe<Scalars['String']['input']>;
  hasDelivery?: Scalars['Boolean']['input'];
};

export type AddressIn = {
  city: Scalars['String']['input'];
  coordinates: Array<CoordinateIn>;
};

export type AddressOut = {
  __typename?: 'AddressOut';
  city: Scalars['String']['output'];
  coordinates: Array<CoordinateOut>;
};

export type Album = {
  __typename?: 'Album';
  author: User;
  content: Array<Publication>;
  contentType: AlbumContentType;
  cover: File;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalCover?: Maybe<File>;
  name: Scalars['String']['output'];
  nameColor: AlbumNameColor;
  policy: VisibilityPolicy;
  updatedAt: Scalars['String']['output'];
};

export type AlbumContentArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type AlbumContentInUpdate = {
  addedContent: Array<Scalars['ID']['input']>;
  removedContent: Array<Scalars['ID']['input']>;
};

export enum AlbumContentType {
  PhotoVideo = 'PHOTO_VIDEO',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
}

export type AlbumIn = {
  content: Array<Scalars['String']['input']>;
  contentType: AlbumContentType;
  coverId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  internalCoverId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  nameColor: AlbumNameColor;
  policy: VisibilityPolicy;
};

export type AlbumInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  internalCoverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameColor?: InputMaybe<AlbumNameColor>;
  policy?: InputMaybe<VisibilityPolicy>;
};

export enum AlbumNameColor {
  Black = 'BLACK',
  Gray = 'GRAY',
  Red = 'RED',
  White = 'WHITE',
}

export type Albums = {
  __typename?: 'Albums';
  cover?: Maybe<File>;
  list: Array<Album>;
};

export type AppointmentContent = {
  __typename?: 'AppointmentContent';
  data?: Maybe<Product>;
  metadata: ContentMetadata;
};

export type AppointmentMessage = Message & {
  __typename?: 'AppointmentMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  service: AppointmentContent;
  text: Scalars['String']['output'];
  time: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AppointmentMessageIn = {
  serviceId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  time: Scalars['String']['input'];
};

export type AppointmentMessageOrEwf = AppointmentMessage | ErrorWithFields;

export type Article = {
  __typename?: 'Article';
  attachments: Array<File>;
  author: User;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isCommentable: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  topic?: Maybe<Topic>;
  unreadCommentsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ArticleIn = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  is18Plus: Scalars['Boolean']['input'];
  isCommentable?: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text: Scalars['String']['input'];
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type ArticleInUpdate = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  text?: InputMaybe<Scalars['String']['input']>;
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type ArticleList = {
  __typename?: 'ArticleList';
  articles: Array<Article>;
  total: Scalars['Int']['output'];
};

export type ArticleListOrBe = ArticleList | BaseError;

export type ArticleOrBe = Article | BaseError;

export type ArticleOrEwf = Article | ErrorWithFields;

export type BaseError = {
  __typename?: 'BaseError';
  status: ErrorStatus;
};

export type Blog = {
  __typename?: 'Blog';
  articles: Array<Article>;
  author: User;
  avatar?: Maybe<File>;
  cover?: Maybe<File>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  topics: Array<Topic>;
};

export type BlogArticlesArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type BlogTopicsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type BlogIn = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type BlogInUpdate = {
  avatarId?: InputMaybe<Scalars['ID']['input']>;
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BlogOrEwf = Blog | ErrorWithFields;

export type BooleanObject = {
  __typename?: 'BooleanObject';
  boolean: Scalars['Boolean']['output'];
};

export type BooleanObjectOrBe = BaseError | BooleanObject;

export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID']['output'];
  product: Product;
  selectedProperties: Array<RecordType>;
};

export type CartItemIn = {
  id: Scalars['ID']['input'];
  selectedProperties?: InputMaybe<Array<RecordTypeIn>>;
};

export type CartItems = {
  __typename?: 'CartItems';
  fullAmount: Scalars['Int']['output'];
  fullPrice: Scalars['Int']['output'];
  items: Array<CartItem>;
};

export type CartItemsOrBe = BaseError | CartItems;

export type Catalog = {
  __typename?: 'Catalog';
  author: User;
  collections: Array<Collection>;
  cover?: Maybe<File>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pdf?: Maybe<File>;
  updatedAt: Scalars['String']['output'];
};

export type CatalogCollectionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type CatalogInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  pdfCatalogId?: InputMaybe<Scalars['ID']['input']>;
};

export type CatalogOrBe = BaseError | Catalog;

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isMuted: Scalars['Boolean']['output'];
  isTechSupport: Scalars['Boolean']['output'];
  lastMessage?: Maybe<LastMessage>;
  lastReadTimestamp: Scalars['String']['output'];
  logo?: Maybe<File>;
  name?: Maybe<Scalars['String']['output']>;
  unreadMessageCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type ChatList = {
  __typename?: 'ChatList';
  items: Array<Chat>;
  total: Scalars['Int']['output'];
};

export type ChatListOrBe = BaseError | ChatList;

export type ChatOrBe = BaseError | Chat;

export enum CodeTransport {
  Email = 'EMAIL',
  Phone = 'PHONE',
}

export type Collection = {
  __typename?: 'Collection';
  author: User;
  cover: File;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CollectionIn = {
  coverId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type CollectionInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CollectionOrBe = BaseError | Collection;

export type CollectionOrEwf = Collection | ErrorWithFields;

export type Comment = DeletedComment | ExistingComment;

export type CommentContentIn = {
  id: Scalars['ID']['input'];
  type: CommentContentType;
};

export enum CommentContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Publication = 'PUBLICATION',
}

export type CommentIn = {
  content: CommentContentIn;
  text: Scalars['String']['input'];
};

export type CommentList = {
  __typename?: 'CommentList';
  comments: Array<Comment>;
  total: Scalars['Int']['output'];
};

export type CommentListOrEwf = CommentList | ErrorWithFields;

export enum CommentReactionType {
  CryingFace = 'CRYING_FACE',
  FaceWithOpenMouth = 'FACE_WITH_OPEN_MOUTH',
  FaceWithTears = 'FACE_WITH_TEARS',
  FolderHands = 'FOLDER_HANDS',
  PileOfPoo = 'PILE_OF_POO',
  PoutingFace = 'POUTING_FACE',
  ThumbsUp = 'THUMBS_UP',
}

export type CommentReactions = {
  __typename?: 'CommentReactions';
  myReaction?: Maybe<CommentReactionType>;
  reactions: Array<Reaction>;
};

export type CommentTarget =
  | Article
  | DeletedComment
  | ExistingComment
  | Publication;

export type CommentWithReplies = {
  __typename?: 'CommentWithReplies';
  comment: Comment;
  replies: Array<Comment>;
  total: Scalars['Int']['output'];
};

export type CommentWithRepliesList = {
  __typename?: 'CommentWithRepliesList';
  comments: Array<CommentWithReplies>;
  total: Scalars['Int']['output'];
};

export type CommentWithRepliesListOrEwf =
  | CommentWithRepliesList
  | ErrorWithFields;

export type CommentWithRepliesOrEwf = CommentWithReplies | ErrorWithFields;

export type Complaint = {
  __typename?: 'Complaint';
  authorId: Scalars['ID']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  complaintFinalType?: Maybe<ComplaintType>;
  complaintType: ComplaintType;
  contentId: Scalars['ID']['output'];
  contentType: ComplaintContentType;
  createdAt: Scalars['String']['output'];
  decision?: Maybe<ComplaintDecision>;
  decisionMadeAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum ComplaintContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
}

export enum ComplaintDecision {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
}

export type ComplaintFinalType = {
  __typename?: 'ComplaintFinalType';
  complaintFinalType: ComplaintType;
};

export type ComplaintIn = {
  comment?: InputMaybe<Scalars['String']['input']>;
  complaintType: ComplaintType;
  contentId: Scalars['ID']['input'];
  contentType: ComplaintContentType;
};

export type ComplaintMetadataIn = {
  contentId: Scalars['ID']['input'];
  contentType: ComplaintContentType;
};

export enum ComplaintType {
  AppealsToViolence = 'APPEALS_TO_VIOLENCE',
  Fraud = 'FRAUD',
  IllegalGoods = 'ILLEGAL_GOODS',
  Misinformation = 'MISINFORMATION',
  NotSetAs_18Plus = 'NOT_SET_AS_18_PLUS',
  Pornography = 'PORNOGRAPHY',
  Spam = 'SPAM',
  ViolationOfIntellectualRights = 'VIOLATION_OF_INTELLECTUAL_RIGHTS',
  Violence = 'VIOLENCE',
}

export type ComplaintsList = {
  __typename?: 'ComplaintsList';
  complaints: Array<Complaint>;
};

export type ContactsIn = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ContentMetadata = {
  __typename?: 'ContentMetadata';
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  type: ForwardedMessageMetadataContentType;
};

export type CoordinateIn = {
  address?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type CoordinateOut = {
  __typename?: 'CoordinateOut';
  address?: Maybe<Scalars['String']['output']>;
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type CreateAlbumResponse = Album | ErrorWithFields;

export type CreateComplaintOrEwf = Complaint | ErrorWithFields;

export type CreateStoryOrEwf = ErrorWithFields | Story;

export type CreateTokensResponse = ErrorWithFields | TokenPair;

export type DayWorkingHours = {
  __typename?: 'DayWorkingHours';
  hours?: Maybe<WorkingHours>;
  status: WorkingDayStatus;
};

export type DayWorkingHoursIn = {
  hours?: InputMaybe<WorkingHoursIn>;
  status: WorkingDayStatus;
};

export type DeletedComment = IBaseComment & {
  __typename?: 'DeletedComment';
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  target: CommentTarget;
  updatedAt: Scalars['String']['output'];
};

export enum ErrorStatus {
  AlreadyDone = 'ALREADY_DONE',
  AlreadyExist = 'ALREADY_EXIST',
  InvalidInputData = 'INVALID_INPUT_DATA',
  NotAuthenticated = 'NOT_AUTHENTICATED',
  NotEnoughPermissions = 'NOT_ENOUGH_PERMISSIONS',
  NotFound = 'NOT_FOUND',
}

export type ErrorWithFields = {
  __typename?: 'ErrorWithFields';
  fields: Array<Scalars['String']['output']>;
  status: ErrorStatus;
};

export type ExistingComment = IBaseComment & {
  __typename?: 'ExistingComment';
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  reactions: CommentReactions;
  references: Array<RecordType>;
  target: CommentTarget;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ExistingCommentOrEwf = ErrorWithFields | ExistingComment;

export enum FavouriteContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
}

export type FavouriteIn = {
  contentType: FavouriteContentType;
  id: Scalars['ID']['input'];
};

export type File = {
  __typename?: 'File';
  checksum?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  size?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ForwardMessageIn = {
  contentId: Scalars['ID']['input'];
  contentType: ForwardedMessageMetadataContentType;
  text: Scalars['String']['input'];
};

export type ForwardedContent = {
  __typename?: 'ForwardedContent';
  data?: Maybe<ForwardedContentData>;
  metadata: ContentMetadata;
};

export type ForwardedContentData = Article | Product | Publication | Story;

export type ForwardedMessage = Message & {
  __typename?: 'ForwardedMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  forwardedContent: ForwardedContent;
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export enum ForwardedMessageMetadataContentType {
  Article = 'ARTICLE',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
}

export type ForwardedMessageOrEwf = ErrorWithFields | ForwardedMessage;

export type GetAlbumsByUserIdResponse = Albums | BaseError;

export type GetCodeResponse = ErrorWithFields | StringObject;

export type GetComplaintFinalTypeOrEwf = ComplaintFinalType | ErrorWithFields;

export type GetComplaintsOrBe = BaseError | ComplaintsList;

export type GetHintsListOrBe = BaseError | HintsList;

export type GetHistoryListOrBe = BaseError | HistoryList;

export type GetMeResponse = BaseError | User;

export type GetRecentBlogsListOrBe = BaseError | RecentBlogsList;

export type GetRecentStoriesOrBe = BaseError | StoryFeedList;

export type GetUserStoriesOrBe = BaseError | StoryFeed;

export type HintsList = {
  __typename?: 'HintsList';
  hints: Array<Scalars['String']['output']>;
};

export type HistoryList = {
  __typename?: 'HistoryList';
  history: Array<Scalars['String']['output']>;
};

export type IBaseComment = {
  author: User;
  createdAt: Scalars['String']['output'];
  hasBeenRead: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  target: CommentTarget;
  updatedAt: Scalars['String']['output'];
};

export type LastMessage =
  | AppointmentMessage
  | ForwardedMessage
  | OrderMessage
  | RegularMessage;

export type LastReadTimestampChanged = {
  __typename?: 'LastReadTimestampChanged';
  chatId: Scalars['ID']['output'];
  lastReadTimestamp: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type LastReadTimestampChangedOrBe = BaseError | LastReadTimestampChanged;

export enum LikeContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
  User = 'USER',
}

export type LikeIn = {
  contentId: Scalars['ID']['input'];
  contentType: LikeContentType;
};

export type ListHashtags = {
  __typename?: 'ListHashtags';
  hashtags: Array<Scalars['String']['output']>;
};

export type ListHashtagsOrBe = BaseError | ListHashtags;

export type Message = {
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type MessageList = {
  __typename?: 'MessageList';
  items: Array<Message>;
  total: Scalars['Int']['output'];
};

export type MessageListOrEwf = ErrorWithFields | MessageList;

export type MessageOrEwf =
  | AppointmentMessage
  | ErrorWithFields
  | ForwardedMessage
  | OrderMessage
  | RegularMessage;

export type MessageUnion =
  | AppointmentMessage
  | ForwardedMessage
  | OrderMessage
  | RegularMessage;

export type Mutation = {
  __typename?: 'Mutation';
  addContentViews?: Maybe<ErrorWithFields>;
  addItemToCart?: Maybe<ErrorWithFields>;
  addRecentBlog?: Maybe<BaseError>;
  blockUser?: Maybe<BaseError>;
  confirmCode?: Maybe<ErrorWithFields>;
  createAlbum: CreateAlbumResponse;
  createAppointmentMessage: AppointmentMessageOrEwf;
  createArticle: ArticleOrEwf;
  createBlog: BlogOrEwf;
  createCatalog?: Maybe<BaseError>;
  createChat: ChatOrBe;
  createCollection: CollectionOrEwf;
  createComment: ExistingCommentOrEwf;
  createComplaint: CreateComplaintOrEwf;
  createForwardMessage: ForwardedMessageOrEwf;
  createOrderMessage: OrderMessageOrEwf;
  createProduct: ProductOrEwf;
  createPublication: PublicationOrEwf;
  createRegularMessage: RegularMessageOrEwf;
  createReview: ReviewOrEwf;
  createStory: CreateStoryOrEwf;
  createTechSupportChat: ChatOrBe;
  createTopic: TopicOrEwf;
  createUser: UserOrEwf;
  deleteAlbum?: Maybe<BaseError>;
  deleteAllArticles?: Maybe<Scalars['Void']['output']>;
  deleteAllPublications?: Maybe<Scalars['Void']['output']>;
  deleteArticle?: Maybe<BaseError>;
  deleteChat?: Maybe<BaseError>;
  deleteCollection?: Maybe<BaseError>;
  deleteComment?: Maybe<BaseError>;
  deleteComplaint?: Maybe<BaseError>;
  deleteFriend?: Maybe<BaseError>;
  deleteItemFromCart?: Maybe<BaseError>;
  deleteManyUsers?: Maybe<BaseError>;
  deleteMessage?: Maybe<BaseError>;
  deleteProduct?: Maybe<BaseError>;
  deletePublication?: Maybe<BaseError>;
  deleteStory?: Maybe<BaseError>;
  deleteTopic?: Maybe<BaseError>;
  deleteUser?: Maybe<BaseError>;
  followUser?: Maybe<BaseError>;
  muteChat?: Maybe<BaseError>;
  resetPassword?: Maybe<ErrorWithFields>;
  sendCode?: Maybe<ErrorWithFields>;
  sendContactsToPartnership?: Maybe<ErrorWithFields>;
  sendContactsToTechSupport?: Maybe<ErrorWithFields>;
  serverCleanup?: Maybe<BaseError>;
  setAdminRole?: Maybe<BaseError>;
  setAlbumsCover?: Maybe<BaseError>;
  setDecisionOfComplaint: SetComplaintDecisionOrEwf;
  setEmail?: Maybe<ErrorWithFields>;
  setFavourite?: Maybe<ErrorWithFields>;
  setFriend?: Maybe<BaseError>;
  setHashtags?: Maybe<BaseError>;
  setLastReadTimestamp?: Maybe<BaseError>;
  setLike?: Maybe<ErrorWithFields>;
  setPhone?: Maybe<ErrorWithFields>;
  setReactionToComment?: Maybe<BaseError>;
  setSettings?: Maybe<BaseError>;
  subscribe?: Maybe<BaseError>;
  unblockUser?: Maybe<BaseError>;
  unfollowUser?: Maybe<BaseError>;
  unmuteChat?: Maybe<BaseError>;
  unsetLike?: Maybe<ErrorWithFields>;
  unsubscribe?: Maybe<BaseError>;
  updateAlbum: UpdateAlbumResponse;
  updateAlbumContent?: Maybe<ErrorWithFields>;
  updateArticle: ArticleOrEwf;
  updateBlog: BlogOrEwf;
  updateCatalog?: Maybe<ErrorWithFields>;
  updateCollection?: Maybe<ErrorWithFields>;
  updateLastReadComment?: Maybe<BaseError>;
  updateLastReadTimestamp?: Maybe<BaseError>;
  updatePassword?: Maybe<ErrorWithFields>;
  updateProduct?: Maybe<ErrorWithFields>;
  updatePublication?: Maybe<ErrorWithFields>;
  updateTariff: TariffOrEwf;
  updateTopic: TopicOrEwf;
  updateUser?: Maybe<ErrorWithFields>;
  uploadFile: UploadFileResponse;
  uploadImage: UploadFileResponse;
  uploadVideo: UploadFileResponse;
};

export type MutationAddContentViewsArgs = {
  content: AddContentViewsIn;
};

export type MutationAddItemToCartArgs = {
  item: CartItemIn;
};

export type MutationAddRecentBlogArgs = {
  blogId: Scalars['ID']['input'];
};

export type MutationBlockUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationConfirmCodeArgs = {
  code: Scalars['String']['input'];
  target: Scalars['String']['input'];
  transport: CodeTransport;
};

export type MutationCreateAlbumArgs = {
  album: AlbumIn;
};

export type MutationCreateAppointmentMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: AppointmentMessageIn;
};

export type MutationCreateArticleArgs = {
  article: ArticleIn;
};

export type MutationCreateBlogArgs = {
  blog: BlogIn;
};

export type MutationCreateChatArgs = {
  userId: Scalars['ID']['input'];
};

export type MutationCreateCollectionArgs = {
  collection: CollectionIn;
};

export type MutationCreateCommentArgs = {
  comment: CommentIn;
};

export type MutationCreateComplaintArgs = {
  complaint: ComplaintIn;
};

export type MutationCreateForwardMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: ForwardMessageIn;
};

export type MutationCreateOrderMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: OrderMessageIn;
};

export type MutationCreateProductArgs = {
  product: ProductIn;
};

export type MutationCreatePublicationArgs = {
  publication: PublicationIn;
};

export type MutationCreateRegularMessageArgs = {
  chatId: Scalars['ID']['input'];
  message: RegularMessageIn;
};

export type MutationCreateReviewArgs = {
  review: ReviewIn;
};

export type MutationCreateStoryArgs = {
  story: StoryIn;
};

export type MutationCreateTopicArgs = {
  topic: TopicIn;
};

export type MutationCreateUserArgs = {
  user: UserIn;
};

export type MutationDeleteAlbumArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteChatArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCollectionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteComplaintArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteFriendArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteItemFromCartArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteManyUsersArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type MutationDeleteMessageArgs = {
  chatId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeletePublicationArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteStoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteTopicArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationFollowUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationMuteChatArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  target: Scalars['String']['input'];
  transport: CodeTransport;
};

export type MutationSendCodeArgs = {
  target: Scalars['String']['input'];
  transport: CodeTransport;
};

export type MutationSendContactsToPartnershipArgs = {
  contacts: ContactsIn;
};

export type MutationSendContactsToTechSupportArgs = {
  contacts: ContactsIn;
};

export type MutationSetAdminRoleArgs = {
  userId: Scalars['ID']['input'];
};

export type MutationSetAlbumsCoverArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type MutationSetDecisionOfComplaintArgs = {
  complaint: SetComplaintDecisionIn;
};

export type MutationSetEmailArgs = {
  email: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  transport: CodeTransport;
};

export type MutationSetFavouriteArgs = {
  favourite: FavouriteIn;
  isFavourite?: Scalars['Boolean']['input'];
};

export type MutationSetFriendArgs = {
  id: Scalars['ID']['input'];
};

export type MutationSetHashtagsArgs = {
  hashtags: Array<Scalars['String']['input']>;
};

export type MutationSetLastReadTimestampArgs = {
  chatId: Scalars['ID']['input'];
  lastReadTimestamp: Scalars['String']['input'];
};

export type MutationSetLikeArgs = {
  like: LikeIn;
};

export type MutationSetPhoneArgs = {
  id: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  transport: CodeTransport;
};

export type MutationSetReactionToCommentArgs = {
  id: Scalars['ID']['input'];
  reaction?: InputMaybe<CommentReactionType>;
};

export type MutationSetSettingsArgs = {
  settings: NotificationSettingsIn;
};

export type MutationSubscribeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUnblockUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUnfollowUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUnmuteChatArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUnsetLikeArgs = {
  like: LikeIn;
};

export type MutationUnsubscribeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateAlbumArgs = {
  album: AlbumInUpdate;
  id: Scalars['ID']['input'];
};

export type MutationUpdateAlbumContentArgs = {
  content: AlbumContentInUpdate;
  id: Scalars['ID']['input'];
};

export type MutationUpdateArticleArgs = {
  article: ArticleInUpdate;
  id: Scalars['ID']['input'];
};

export type MutationUpdateBlogArgs = {
  blog: BlogInUpdate;
};

export type MutationUpdateCatalogArgs = {
  catalog: CatalogInUpdate;
};

export type MutationUpdateCollectionArgs = {
  collection: CollectionInUpdate;
  id: Scalars['ID']['input'];
};

export type MutationUpdateLastReadCommentArgs = {
  content: CommentContentIn;
  timestamp: Scalars['String']['input'];
};

export type MutationUpdateLastReadTimestampArgs = {
  lastReadTimestamp: Scalars['String']['input'];
};

export type MutationUpdatePasswordArgs = {
  id: Scalars['ID']['input'];
  password: PasswordInUpdate;
};

export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  product: ProductInUpdate;
};

export type MutationUpdatePublicationArgs = {
  id: Scalars['ID']['input'];
  publication: PublicationInUpdate;
};

export type MutationUpdateTariffArgs = {
  tariff: TariffIn;
};

export type MutationUpdateTopicArgs = {
  id: Scalars['ID']['input'];
  topic: TopicInUpdate;
};

export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  user: UserInUpdate;
};

export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUploadImageArgs = {
  file: Scalars['Upload']['input'];
};

export type MutationUploadVideoArgs = {
  file: Scalars['Upload']['input'];
};

export type Notification = {
  __typename?: 'Notification';
  author?: Maybe<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  notificationType: NotificationType;
  readedAt?: Maybe<Scalars['String']['output']>;
  target: NotificationTarget;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type NotificationList = {
  __typename?: 'NotificationList';
  notifications: Array<Notification>;
};

export type NotificationListOrBe = BaseError | NotificationList;

export type NotificationSettings = {
  __typename?: 'NotificationSettings';
  sendNotificationsToEmail: Scalars['Boolean']['output'];
  sendPushNotifications: Scalars['Boolean']['output'];
};

export type NotificationSettingsIn = {
  sendNotificationsToEmail: Scalars['Boolean']['input'];
  sendPushNotifications: Scalars['Boolean']['input'];
};

export type NotificationSettingsOrBe = BaseError | NotificationSettings;

export type NotificationTarget = {
  __typename?: 'NotificationTarget';
  id: Scalars['ID']['output'];
  image?: Maybe<File>;
  type: NotificationTargetType;
};

export enum NotificationTargetType {
  Chat = 'CHAT',
  Comment = 'COMMENT',
  Product = 'PRODUCT',
  Publication = 'PUBLICATION',
  Story = 'STORY',
  User = 'USER',
}

export enum NotificationType {
  ContentIsBlocked = 'CONTENT_IS_BLOCKED',
  NewComment = 'NEW_COMMENT',
  NewFollower = 'NEW_FOLLOWER',
  NewLike = 'NEW_LIKE',
  NewMention = 'NEW_MENTION',
  NewMessage = 'NEW_MESSAGE',
}

export type OnlineStatusChanged = {
  __typename?: 'OnlineStatusChanged';
  chatId: Scalars['ID']['output'];
  isOnline: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type OnlineStatusChangedOrBe = BaseError | OnlineStatusChanged;

export type OrderContent = {
  __typename?: 'OrderContent';
  data?: Maybe<Product>;
  metadata: ContentMetadata;
};

export type OrderMessage = Message & {
  __typename?: 'OrderMessage';
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  orderProperties: Array<RecordType>;
  product: OrderContent;
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type OrderMessageIn = {
  orderProperties: Array<RecordTypeIn>;
  productId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type OrderMessageOrEwf = ErrorWithFields | OrderMessage;

export type PasswordInUpdate = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Product = {
  __typename?: 'Product';
  attachments: Array<File>;
  author: User;
  collection: Collection;
  createdAt: Scalars['String']['output'];
  deliveryTerms?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isInCart: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  isService: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  linkId?: Maybe<Scalars['ID']['output']>;
  name: Scalars['String']['output'];
  oldPrice?: Maybe<Scalars['Int']['output']>;
  price: Scalars['Int']['output'];
  properties: Array<ProductProperty>;
  relatedProducts: Array<Product>;
  reviewsCount: Scalars['Int']['output'];
  tags: Array<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type ProductIn = {
  attachments: Array<Scalars['ID']['input']>;
  collectionId: Scalars['ID']['input'];
  deliveryTerms?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: Scalars['Boolean']['input'];
  isService?: Scalars['Boolean']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price: Scalars['Int']['input'];
  properties: Array<ProductPropertyIn>;
  relatedProducts?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags: Array<Scalars['String']['input']>;
};

export type ProductInUpdate = {
  deliveryTerms?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oldPrice?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  properties?: InputMaybe<Array<ProductPropertyIn>>;
  relatedProducts?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductList = {
  __typename?: 'ProductList';
  products: Array<Product>;
  total: Scalars['Int']['output'];
};

export type ProductListOrBe = BaseError | ProductList;

export type ProductOrBe = BaseError | Product;

export type ProductOrEwf = ErrorWithFields | Product;

export type ProductProperty = {
  __typename?: 'ProductProperty';
  property: Scalars['String']['output'];
  values: Array<Scalars['String']['output']>;
};

export type ProductPropertyIn = {
  property: Scalars['String']['input'];
  values: Array<Scalars['String']['input']>;
};

export type Publication = {
  __typename?: 'Publication';
  attachments: Array<File>;
  author: User;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is18Plus: Scalars['Boolean']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isCommentable: Scalars['Boolean']['output'];
  isFavourite: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  references: Array<RecordType>;
  showInFeed: Scalars['Boolean']['output'];
  tags: Array<Scalars['String']['output']>;
  unreadCommentsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
};

export type PublicationIn = {
  attachments: Array<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: Scalars['Boolean']['input'];
  isCommentable?: Scalars['Boolean']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  showInFeed?: Scalars['Boolean']['input'];
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationInUpdate = {
  description?: InputMaybe<Scalars['String']['input']>;
  is18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  isCommentable?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  showInFeed?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublicationList = {
  __typename?: 'PublicationList';
  publications: Array<Publication>;
  total: Scalars['Int']['output'];
};

export type PublicationListOrBe = BaseError | PublicationList;

export type PublicationListOrEwf = ErrorWithFields | PublicationList;

export type PublicationOrBe = BaseError | Publication;

export type PublicationOrEwf = ErrorWithFields | Publication;

export type Query = {
  __typename?: 'Query';
  createTokens: CreateTokensResponse;
  deleteRefreshToken?: Maybe<BaseError>;
  getActiveNotifications: NotificationListOrBe;
  getActiveTariff: TariffOrBe;
  getAlbumsByUserId: GetAlbumsByUserIdResponse;
  getArticleRecommendations: ArticleListOrBe;
  getArticleSubscriptions: ArticleListOrBe;
  getBlockedUsers: UserListOrEwf;
  getCartItems: CartItemsOrBe;
  getCatalogProducts: ProductListOrBe;
  getChatByUserId: ChatOrBe;
  getChats: ChatListOrBe;
  getChatsWithOrder: ChatListOrBe;
  getCode?: Maybe<GetCodeResponse>;
  getCommentReplies: CommentListOrEwf;
  getCommentsWithTopComment: CommentWithRepliesOrEwf;
  getComplaints: GetComplaintsOrBe;
  getContentComments: CommentWithRepliesListOrEwf;
  getFavouriteArticles: ArticleListOrBe;
  getFavouriteProducts: ProductListOrBe;
  getFavouritePublications: PublicationListOrBe;
  getFinalTypeByContentId: GetComplaintFinalTypeOrEwf;
  getHashtags: ListHashtagsOrBe;
  getMe: GetMeResponse;
  getMessages: MessageListOrEwf;
  getMyPublications: PublicationListOrEwf;
  getMyTopics: TopicListOrBe;
  getNotifications: NotificationListOrBe;
  getPopularTags: TagListOrEwf;
  getProductsByCollectionId: ProductListOrBe;
  getPublicationByCommentId: PublicationOrBe;
  getPublicationRecommendations: PublicationListOrBe;
  getPublicationSubscriptions: PublicationListOrBe;
  getPublicationsByTag: PublicationListOrEwf;
  getPublicationsByUserId: PublicationListOrEwf;
  getReactionAuthors: UserListOrEwf;
  getRecentBlogs: GetRecentBlogsListOrBe;
  getRecentStories: GetRecentStoriesOrBe;
  getRecommendedUsers: UserListOrBe;
  getReviewsByProductId: ReviewListOrEwf;
  getSettings: NotificationSettingsOrBe;
  getTechSupportChat: ChatOrBe;
  getTechSupportChats: ChatListOrBe;
  getUserStories: GetUserStoriesOrBe;
  getUsers: UserListOrBe;
  hints: GetHintsListOrBe;
  history: GetHistoryListOrBe;
  isEmailExist: BooleanObjectOrBe;
  isLoginExist: BooleanObjectOrBe;
  isPhoneExist: BooleanObjectOrBe;
  listFollowers: UserListOrBe;
  listSubscriptions: UserListOrBe;
  refreshAccessToken: RefreshAccessTokenResponse;
  retrieveAlbum: RetrieveAlbumResponse;
  retrieveArticle: ArticleOrBe;
  retrieveBlog: BlogOrEwf;
  retrieveCatalog: CatalogOrBe;
  retrieveCollection: CollectionOrBe;
  retrieveComplaint: RetrieveComplaintOrBe;
  retrieveFile: RetrieveFileResponse;
  retrieveMessage: MessageOrEwf;
  retrieveProduct: ProductOrBe;
  retrievePublication: PublicationOrBe;
  retrieveStory: RetrieveStoryOrBe;
  retrieveUser: UserOrBe;
  searchBlogs: SearchBlogsListOrEwf;
  searchFollowers: UserListOrEwf;
  searchProducts: SearchProductsListOrEwf;
  searchPublications: SearchPublicationsListOrEwf;
  searchSubscriptions: UserListOrEwf;
  searchUsers: SearchUsersListOrEwf;
};

export type QueryCreateTokensArgs = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type QueryDeleteRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};

export type QueryGetActiveNotificationsArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGetAlbumsByUserIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetArticleRecommendationsArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};

export type QueryGetArticleSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetBlockedUsersArgs = {
  limit?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
};

export type QueryGetCatalogProductsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetChatByUserIdArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryGetChatsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetChatsWithOrderArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetCodeArgs = {
  target: Scalars['String']['input'];
  transport: CodeTransport;
};

export type QueryGetCommentRepliesArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetCommentsWithTopCommentArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  sorting?: SortingType;
};

export type QueryGetComplaintsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetContentCommentsArgs = {
  content: CommentContentIn;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  sorting?: SortingType;
};

export type QueryGetFavouriteArticlesArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetFavouriteProductsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetFavouritePublicationsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetFinalTypeByContentIdArgs = {
  metadata: ComplaintMetadataIn;
};

export type QueryGetMessagesArgs = {
  chatId: Scalars['ID']['input'];
  lastReadTimestamp?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetMyPublicationsArgs = {
  isVideo?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetNotificationsArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryGetPopularTagsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetProductsByCollectionIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetPublicationByCommentIdArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetPublicationRecommendationsArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};

export type QueryGetPublicationSubscriptionsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetPublicationsByTagArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  tag: Scalars['String']['input'];
};

export type QueryGetPublicationsByUserIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  onlyVideo?: Scalars['Boolean']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetReactionAuthorsArgs = {
  commentId: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  reactionType: CommentReactionType;
  skip?: Scalars['Int']['input'];
};

export type QueryGetRecommendedUsersArgs = {
  limit?: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};

export type QueryGetReviewsByProductIdArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetTechSupportChatsArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryGetUserStoriesArgs = {
  userId: Scalars['ID']['input'];
};

export type QueryGetUsersArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryHintsArgs = {
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
};

export type QueryIsEmailExistArgs = {
  email: Scalars['String']['input'];
};

export type QueryIsLoginExistArgs = {
  login: Scalars['String']['input'];
};

export type QueryIsPhoneExistArgs = {
  phone: Scalars['String']['input'];
};

export type QueryListFollowersArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryListSubscriptionsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
};

export type QueryRefreshAccessTokenArgs = {
  refreshToken: Scalars['String']['input'];
};

export type QueryRetrieveAlbumArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveArticleArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveBlogArgs = {
  id: Scalars['ID']['input'];
  topicId?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryRetrieveCatalogArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveCollectionArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveComplaintArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveFileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveMessageArgs = {
  chatId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type QueryRetrieveProductArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrievePublicationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveStoryArgs = {
  id: Scalars['ID']['input'];
};

export type QueryRetrieveUserArgs = {
  id: Scalars['ID']['input'];
};

export type QuerySearchBlogsArgs = {
  search: SearchBlogsIn;
};

export type QuerySearchFollowersArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
};

export type QuerySearchProductsArgs = {
  search: SearchIn;
};

export type QuerySearchPublicationsArgs = {
  search: SearchIn;
};

export type QuerySearchSubscriptionsArgs = {
  id: Scalars['ID']['input'];
  limit?: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip?: Scalars['Int']['input'];
};

export type QuerySearchUsersArgs = {
  search: SearchIn;
};

export type Reaction = {
  __typename?: 'Reaction';
  count: Scalars['Int']['output'];
  type: CommentReactionType;
};

export type RecentBlog = {
  __typename?: 'RecentBlog';
  author: User;
  avatar?: Maybe<File>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unreadCount: Scalars['Int']['output'];
};

export type RecentBlogsList = {
  __typename?: 'RecentBlogsList';
  records: Array<RecentBlog>;
  total: Scalars['Int']['output'];
};

export type RecordType = {
  __typename?: 'RecordType';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type RecordTypeIn = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type RefreshAccessTokenResponse = AccessToken | BaseError;

export type RegularMessage = Message & {
  __typename?: 'RegularMessage';
  attachments: Array<File>;
  author: User;
  chat: Chat;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['Boolean']['output'];
  references: Array<RecordType>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type RegularMessageIn = {
  attachments: Array<Scalars['ID']['input']>;
  tempKey: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type RegularMessageOrEwf = ErrorWithFields | RegularMessage;

export type RetrieveAlbumResponse = Album | BaseError;

export type RetrieveComplaintOrBe = BaseError | Complaint;

export type RetrieveFileResponse = BaseError | File;

export type RetrieveStoryOrBe = BaseError | Story;

export type Review = {
  __typename?: 'Review';
  author: User;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type ReviewIn = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};

export type ReviewList = {
  __typename?: 'ReviewList';
  reviews: Array<Review>;
  total: Scalars['Int']['output'];
};

export type ReviewListOrEwf = ErrorWithFields | ReviewList;

export type ReviewOrEwf = ErrorWithFields | Review;

export type SearchBlogsIn = {
  inMySubscriptions?: Scalars['Boolean']['input'];
  limit: Scalars['Int']['input'];
  q: Scalars['String']['input'];
  skip: Scalars['Int']['input'];
};

export type SearchBlogsList = {
  __typename?: 'SearchBlogsList';
  records: Array<Blog>;
  total: Scalars['Int']['output'];
};

export type SearchBlogsListOrEwf = ErrorWithFields | SearchBlogsList;

export type SearchIn = {
  city?: InputMaybe<Scalars['String']['input']>;
  hasDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  lat?: InputMaybe<Scalars['Int']['input']>;
  limit: Scalars['Int']['input'];
  lng?: InputMaybe<Scalars['Int']['input']>;
  openedAtTime?: InputMaybe<Scalars['String']['input']>;
  q: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  show18Plus?: InputMaybe<Scalars['Boolean']['input']>;
  skip: Scalars['Int']['input'];
};

export type SearchProductsList = {
  __typename?: 'SearchProductsList';
  records: Array<Product>;
  total: Scalars['Int']['output'];
};

export type SearchProductsListOrEwf = ErrorWithFields | SearchProductsList;

export type SearchPublicationsList = {
  __typename?: 'SearchPublicationsList';
  records: Array<Publication>;
  total: Scalars['Int']['output'];
};

export type SearchPublicationsListOrEwf =
  | ErrorWithFields
  | SearchPublicationsList;

export type SearchUserRecord = {
  __typename?: 'SearchUserRecord';
  content: Array<Publication>;
  user: User;
};

export type SearchUsersList = {
  __typename?: 'SearchUsersList';
  records: Array<SearchUserRecord>;
  total: Scalars['Int']['output'];
};

export type SearchUsersListOrEwf = ErrorWithFields | SearchUsersList;

export type SetComplaintDecisionIn = {
  complaintFinalType: ComplaintType;
  decision: ComplaintDecision;
  id: Scalars['ID']['input'];
};

export type SetComplaintDecisionOrEwf = Complaint | ErrorWithFields;

export type SocketMessage = {
  __typename?: 'SocketMessage';
  data: MessageUnion;
  tempKey: Scalars['ID']['output'];
};

export type SocketMessageOrBe = BaseError | SocketMessage;

export enum SortingType {
  ByCreatedAt = 'BY_CREATED_AT',
  ByPopular = 'BY_POPULAR',
}

export type Story = {
  __typename?: 'Story';
  createdAt: Scalars['String']['output'];
  file: File;
  id: Scalars['ID']['output'];
  isLiked: Scalars['Boolean']['output'];
  objects: Array<StoryObject>;
  policy: VisibilityPolicy;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export type StoryFeed = {
  __typename?: 'StoryFeed';
  author: User;
  stories: Array<Story>;
};

export type StoryFeedList = {
  __typename?: 'StoryFeedList';
  items: Array<StoryFeed>;
  total: Scalars['Int']['output'];
};

export type StoryGeolocation = {
  __typename?: 'StoryGeolocation';
  coordinate: StoryGeolocationCoordinate;
  position: StoryObjectPosition;
};

export type StoryGeolocationCoordinate = {
  __typename?: 'StoryGeolocationCoordinate';
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
};

export type StoryGeolocationCoordinateIn = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type StoryGeolocationIn = {
  coordinate: StoryGeolocationCoordinateIn;
  position: StoryObjectPositionIn;
};

export type StoryIn = {
  attachmentId: Scalars['ID']['input'];
  objects: Array<StoryObjectIn>;
  policy: VisibilityPolicy;
};

export type StoryLink = {
  __typename?: 'StoryLink';
  isAccountLinkMatched: Scalars['Boolean']['output'];
  link: Scalars['String']['output'];
  linkName: Scalars['String']['output'];
  position: StoryObjectPosition;
  textColor: StoryTextColors;
};

export type StoryLinkIn = {
  isAccountLinkMatched: Scalars['Boolean']['input'];
  link: Scalars['String']['input'];
  linkName: Scalars['String']['input'];
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
};

export type StoryObject =
  | StoryGeolocation
  | StoryLink
  | StoryProductLink
  | StoryText
  | StoryUserReference;

export type StoryObjectIn = {
  geolocation?: InputMaybe<StoryGeolocationIn>;
  link?: InputMaybe<StoryLinkIn>;
  productLink?: InputMaybe<StoryProductLinkIn>;
  text?: InputMaybe<StoryTextIn>;
  userReference?: InputMaybe<StoryUserReferenceIn>;
};

export type StoryObjectPosition = {
  __typename?: 'StoryObjectPosition';
  angle: Scalars['Float']['output'];
  scale: Scalars['Float']['output'];
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
};

export type StoryObjectPositionIn = {
  angle: Scalars['Float']['input'];
  scale: Scalars['Float']['input'];
  x: Scalars['Float']['input'];
  y: Scalars['Float']['input'];
};

export type StoryProductLink = {
  __typename?: 'StoryProductLink';
  catalogId: Scalars['ID']['output'];
  collectionName: Scalars['String']['output'];
  position: StoryObjectPosition;
  price: Scalars['Int']['output'];
  productId: Scalars['ID']['output'];
  productName: Scalars['String']['output'];
  textColor: StoryTextColors;
};

export type StoryProductLinkIn = {
  position: StoryObjectPositionIn;
  productId: Scalars['ID']['input'];
  textColor: StoryTextColors;
};

export type StoryText = {
  __typename?: 'StoryText';
  font: Scalars['String']['output'];
  fontSize: Scalars['String']['output'];
  position: StoryObjectPosition;
  textColor: StoryTextColors;
  value: Scalars['String']['output'];
};

export enum StoryTextColors {
  Black = 'BLACK',
  Gray = 'GRAY',
  Red = 'RED',
  White = 'WHITE',
}

export type StoryTextIn = {
  font: Scalars['String']['input'];
  fontSize: Scalars['String']['input'];
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
  value: Scalars['String']['input'];
};

export type StoryUserReference = {
  __typename?: 'StoryUserReference';
  login?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position: StoryObjectPosition;
  textColor: StoryTextColors;
  userId: Scalars['ID']['output'];
};

export type StoryUserReferenceIn = {
  position: StoryObjectPositionIn;
  textColor: StoryTextColors;
  userId: Scalars['ID']['input'];
};

export type StringObject = {
  __typename?: 'StringObject';
  string: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onLastReadTimestampChanged: LastReadTimestampChangedOrBe;
  onNewMessage: SocketMessageOrBe;
  onOnlineStatusChanged: OnlineStatusChangedOrBe;
};

export type TagList = {
  __typename?: 'TagList';
  tags: Array<Scalars['String']['output']>;
  total: Scalars['Int']['output'];
};

export type TagListOrEwf = ErrorWithFields | TagList;

export type Tariff = {
  __typename?: 'Tariff';
  addressesCount: Scalars['Int']['output'];
  createdAt: Scalars['String']['output'];
  expiredAt: Scalars['String']['output'];
  hashtagsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  mailingRecipients: Scalars['Int']['output'];
  mailingToAll: Scalars['Boolean']['output'];
  productsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  videoLengthS: Scalars['Int']['output'];
};

export type TariffIn = {
  addressesCount: Scalars['Int']['input'];
  hashtagsCount: Scalars['Int']['input'];
  mailingRecipients: Scalars['Int']['input'];
  mailingToAll: Scalars['Boolean']['input'];
  productsCount: Scalars['Int']['input'];
  videoLengthS: Scalars['Int']['input'];
};

export type TariffOrBe = BaseError | Tariff;

export type TariffOrEwf = ErrorWithFields | Tariff;

export type TokenPair = {
  __typename?: 'TokenPair';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Topic = {
  __typename?: 'Topic';
  blog: Blog;
  cover: File;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TopicIn = {
  coverId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type TopicInUpdate = {
  coverId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TopicList = {
  __typename?: 'TopicList';
  topics: Array<Topic>;
};

export type TopicListOrBe = BaseError | TopicList;

export type TopicOrEwf = ErrorWithFields | Topic;

export type UpdateAlbumResponse = Album | ErrorWithFields;

export type UploadFileResponse = BaseError | File;

export type User = {
  __typename?: 'User';
  additionalInfo?: Maybe<AdditionalInfo>;
  address?: Maybe<AddressOut>;
  avatar?: Maybe<File>;
  createdAt: Scalars['String']['output'];
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isFriend: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
  likesCount: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  sex?: Maybe<UserSex>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  subscribersCount: Scalars['Int']['output'];
  subscriptionsCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  viewsCount: Scalars['Int']['output'];
  website?: Maybe<Scalars['String']['output']>;
  workingHours?: Maybe<WeekWorkingHours>;
};

export type UserIn = {
  address: AddressIn;
  dateOfBirth: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  login: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  sex: UserSex;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
};

export type UserInUpdate = {
  additionalInfo?: InputMaybe<AdditionalInfoIn>;
  address?: InputMaybe<AddressIn>;
  avatarId?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isBlocked?: InputMaybe<Scalars['Boolean']['input']>;
  isPaided?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<UserSex>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  workingHours?: InputMaybe<WeekWorkingHoursIn>;
};

export type UserList = {
  __typename?: 'UserList';
  total: Scalars['Int']['output'];
  users: Array<User>;
};

export type UserListOrBe = BaseError | UserList;

export type UserListOrEwf = ErrorWithFields | UserList;

export type UserOrBe = BaseError | User;

export type UserOrEwf = ErrorWithFields | User;

export enum UserSex {
  Female = 'FEMALE',
  Male = 'MALE',
}

export enum ViewsContentType {
  Article = 'ARTICLE',
  Comment = 'COMMENT',
}

export enum VisibilityPolicy {
  VisibleOnlyToFollowers = 'VISIBLE_ONLY_TO_FOLLOWERS',
  VisibleToEveryone = 'VISIBLE_TO_EVERYONE',
}

export type WeekWorkingHours = {
  __typename?: 'WeekWorkingHours';
  friday: DayWorkingHours;
  monday: DayWorkingHours;
  saturday: DayWorkingHours;
  sunday: DayWorkingHours;
  thursday: DayWorkingHours;
  tuesday: DayWorkingHours;
  wednesday: DayWorkingHours;
};

export type WeekWorkingHoursIn = {
  friday: DayWorkingHoursIn;
  monday: DayWorkingHoursIn;
  saturday: DayWorkingHoursIn;
  sunday: DayWorkingHoursIn;
  thursday: DayWorkingHoursIn;
  tuesday: DayWorkingHoursIn;
  wednesday: DayWorkingHoursIn;
};

export enum WorkingDayStatus {
  DayOff = 'DAY_OFF',
  Working = 'WORKING',
}

export type WorkingHours = {
  __typename?: 'WorkingHours';
  closesAt: Scalars['String']['output'];
  opensAt: Scalars['String']['output'];
};

export type WorkingHoursIn = {
  closesAt: Scalars['String']['input'];
  opensAt: Scalars['String']['input'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    {[key in TKey]: TResult},
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    {[key in TKey]: TResult},
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> =
  ResolversObject<{
    AppointmentMessageOrEWF: AppointmentMessage | ErrorWithFields;
    ArticleListOrBE: ArticleList | BaseError;
    ArticleOrBE: Article | BaseError;
    ArticleOrEWF: Article | ErrorWithFields;
    BlogOrEWF: Blog | ErrorWithFields;
    BooleanObjectOrBE: BaseError | BooleanObject;
    CartItemsOrBE: BaseError | CartItems;
    CatalogOrBE: BaseError | Catalog;
    ChatListOrBE: BaseError | ChatList;
    ChatOrBE:
      | BaseError
      | (Omit<Chat, 'lastMessage'> & {
          lastMessage?: Maybe<RefType['LastMessage']>;
        });
    CollectionOrBE: BaseError | Collection;
    CollectionOrEWF: Collection | ErrorWithFields;
    Comment:
      | (Omit<DeletedComment, 'target'> & {target: RefType['CommentTarget']})
      | (Omit<ExistingComment, 'target'> & {target: RefType['CommentTarget']});
    CommentListOrEWF:
      | (Omit<CommentList, 'comments'> & {comments: Array<RefType['Comment']>})
      | ErrorWithFields;
    CommentTarget:
      | Article
      | (Omit<DeletedComment, 'target'> & {target: RefType['CommentTarget']})
      | (Omit<ExistingComment, 'target'> & {target: RefType['CommentTarget']})
      | Publication;
    CommentWithRepliesListOrEWF: CommentWithRepliesList | ErrorWithFields;
    CommentWithRepliesOrEWF:
      | (Omit<CommentWithReplies, 'comment' | 'replies'> & {
          comment: RefType['Comment'];
          replies: Array<RefType['Comment']>;
        })
      | ErrorWithFields;
    CreateAlbumResponse: Album | ErrorWithFields;
    CreateComplaintOrEWF: Complaint | ErrorWithFields;
    CreateStoryOrEWF:
      | ErrorWithFields
      | (Omit<Story, 'objects'> & {objects: Array<RefType['StoryObject']>});
    CreateTokensResponse: ErrorWithFields | TokenPair;
    ExistingCommentOrEWF:
      | ErrorWithFields
      | (Omit<ExistingComment, 'target'> & {target: RefType['CommentTarget']});
    ForwardedContentData:
      | Article
      | Product
      | Publication
      | (Omit<Story, 'objects'> & {objects: Array<RefType['StoryObject']>});
    ForwardedMessageOrEWF: ErrorWithFields | ForwardedMessage;
    GetAlbumsByUserIdResponse: Albums | BaseError;
    GetCodeResponse: ErrorWithFields | StringObject;
    GetComplaintFinalTypeOrEWF: ComplaintFinalType | ErrorWithFields;
    GetComplaintsOrBE: BaseError | ComplaintsList;
    GetHintsListOrBE: BaseError | HintsList;
    GetHistoryListOrBE: BaseError | HistoryList;
    GetMeResponse: BaseError | User;
    GetRecentBlogsListOrBE: BaseError | RecentBlogsList;
    GetRecentStoriesOrBE: BaseError | StoryFeedList;
    GetUserStoriesOrBE: BaseError | StoryFeed;
    LastMessage:
      | AppointmentMessage
      | ForwardedMessage
      | OrderMessage
      | RegularMessage;
    LastReadTimestampChangedOrBE: BaseError | LastReadTimestampChanged;
    ListHashtagsOrBE: BaseError | ListHashtags;
    MessageListOrEWF: ErrorWithFields | MessageList;
    MessageOrEWF:
      | AppointmentMessage
      | ErrorWithFields
      | ForwardedMessage
      | OrderMessage
      | RegularMessage;
    MessageUnion:
      | AppointmentMessage
      | ForwardedMessage
      | OrderMessage
      | RegularMessage;
    NotificationListOrBE: BaseError | NotificationList;
    NotificationSettingsOrBE: BaseError | NotificationSettings;
    OnlineStatusChangedOrBE: BaseError | OnlineStatusChanged;
    OrderMessageOrEWF: ErrorWithFields | OrderMessage;
    ProductListOrBE: BaseError | ProductList;
    ProductOrBE: BaseError | Product;
    ProductOrEWF: ErrorWithFields | Product;
    PublicationListOrBE: BaseError | PublicationList;
    PublicationListOrEWF: ErrorWithFields | PublicationList;
    PublicationOrBE: BaseError | Publication;
    PublicationOrEWF: ErrorWithFields | Publication;
    RefreshAccessTokenResponse: AccessToken | BaseError;
    RegularMessageOrEWF: ErrorWithFields | RegularMessage;
    RetrieveAlbumResponse: Album | BaseError;
    RetrieveComplaintOrBE: BaseError | Complaint;
    RetrieveFileResponse: BaseError | File;
    RetrieveStoryOrBE:
      | BaseError
      | (Omit<Story, 'objects'> & {objects: Array<RefType['StoryObject']>});
    ReviewListOrEWF: ErrorWithFields | ReviewList;
    ReviewOrEWF: ErrorWithFields | Review;
    SearchBlogsListOrEWF: ErrorWithFields | SearchBlogsList;
    SearchProductsListOrEWF: ErrorWithFields | SearchProductsList;
    SearchPublicationsListOrEWF: ErrorWithFields | SearchPublicationsList;
    SearchUsersListOrEWF: ErrorWithFields | SearchUsersList;
    SetComplaintDecisionOrEWF: Complaint | ErrorWithFields;
    SocketMessageOrBE:
      | BaseError
      | (Omit<SocketMessage, 'data'> & {data: RefType['MessageUnion']});
    StoryObject:
      | StoryGeolocation
      | StoryLink
      | StoryProductLink
      | StoryText
      | StoryUserReference;
    TagListOrEWF: ErrorWithFields | TagList;
    TariffOrBE: BaseError | Tariff;
    TariffOrEWF: ErrorWithFields | Tariff;
    TopicListOrBE: BaseError | TopicList;
    TopicOrEWF: ErrorWithFields | Topic;
    UpdateAlbumResponse: Album | ErrorWithFields;
    UploadFileResponse: BaseError | File;
    UserListOrBE: BaseError | UserList;
    UserListOrEWF: ErrorWithFields | UserList;
    UserOrBE: BaseError | User;
    UserOrEWF: ErrorWithFields | User;
  }>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> =
  ResolversObject<{
    IBaseComment:
      | (Omit<DeletedComment, 'target'> & {target: RefType['CommentTarget']})
      | (Omit<ExistingComment, 'target'> & {target: RefType['CommentTarget']});
    Message:
      | AppointmentMessage
      | ForwardedMessage
      | OrderMessage
      | RegularMessage;
  }>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AccessToken: ResolverTypeWrapper<AccessToken>;
  AddContentViewsIn: AddContentViewsIn;
  AdditionalInfo: ResolverTypeWrapper<AdditionalInfo>;
  AdditionalInfoIn: AdditionalInfoIn;
  AddressIn: AddressIn;
  AddressOut: ResolverTypeWrapper<AddressOut>;
  Album: ResolverTypeWrapper<Album>;
  AlbumContentInUpdate: AlbumContentInUpdate;
  AlbumContentType: AlbumContentType;
  AlbumIn: AlbumIn;
  AlbumInUpdate: AlbumInUpdate;
  AlbumNameColor: AlbumNameColor;
  Albums: ResolverTypeWrapper<Albums>;
  AppointmentContent: ResolverTypeWrapper<AppointmentContent>;
  AppointmentMessage: ResolverTypeWrapper<AppointmentMessage>;
  AppointmentMessageIn: AppointmentMessageIn;
  AppointmentMessageOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['AppointmentMessageOrEWF']
  >;
  Article: ResolverTypeWrapper<Article>;
  ArticleIn: ArticleIn;
  ArticleInUpdate: ArticleInUpdate;
  ArticleList: ResolverTypeWrapper<ArticleList>;
  ArticleListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ArticleListOrBE']
  >;
  ArticleOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ArticleOrBE']
  >;
  ArticleOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ArticleOrEWF']
  >;
  BaseError: ResolverTypeWrapper<BaseError>;
  Blog: ResolverTypeWrapper<Blog>;
  BlogIn: BlogIn;
  BlogInUpdate: BlogInUpdate;
  BlogOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['BlogOrEWF']
  >;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BooleanObject: ResolverTypeWrapper<BooleanObject>;
  BooleanObjectOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['BooleanObjectOrBE']
  >;
  CartItem: ResolverTypeWrapper<CartItem>;
  CartItemIn: CartItemIn;
  CartItems: ResolverTypeWrapper<CartItems>;
  CartItemsOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CartItemsOrBE']
  >;
  Catalog: ResolverTypeWrapper<Catalog>;
  CatalogInUpdate: CatalogInUpdate;
  CatalogOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CatalogOrBE']
  >;
  Chat: ResolverTypeWrapper<
    Omit<Chat, 'lastMessage'> & {
      lastMessage?: Maybe<ResolversTypes['LastMessage']>;
    }
  >;
  ChatList: ResolverTypeWrapper<ChatList>;
  ChatListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ChatListOrBE']
  >;
  ChatOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ChatOrBE']
  >;
  CodeTransport: CodeTransport;
  Collection: ResolverTypeWrapper<Collection>;
  CollectionIn: CollectionIn;
  CollectionInUpdate: CollectionInUpdate;
  CollectionOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CollectionOrBE']
  >;
  CollectionOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CollectionOrEWF']
  >;
  Comment: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['Comment']>;
  CommentContentIn: CommentContentIn;
  CommentContentType: CommentContentType;
  CommentIn: CommentIn;
  CommentList: ResolverTypeWrapper<
    Omit<CommentList, 'comments'> & {comments: Array<ResolversTypes['Comment']>}
  >;
  CommentListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CommentListOrEWF']
  >;
  CommentReactionType: CommentReactionType;
  CommentReactions: ResolverTypeWrapper<CommentReactions>;
  CommentTarget: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CommentTarget']
  >;
  CommentWithReplies: ResolverTypeWrapper<
    Omit<CommentWithReplies, 'comment' | 'replies'> & {
      comment: ResolversTypes['Comment'];
      replies: Array<ResolversTypes['Comment']>;
    }
  >;
  CommentWithRepliesList: ResolverTypeWrapper<CommentWithRepliesList>;
  CommentWithRepliesListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CommentWithRepliesListOrEWF']
  >;
  CommentWithRepliesOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CommentWithRepliesOrEWF']
  >;
  Complaint: ResolverTypeWrapper<Complaint>;
  ComplaintContentType: ComplaintContentType;
  ComplaintDecision: ComplaintDecision;
  ComplaintFinalType: ResolverTypeWrapper<ComplaintFinalType>;
  ComplaintIn: ComplaintIn;
  ComplaintMetadataIn: ComplaintMetadataIn;
  ComplaintType: ComplaintType;
  ComplaintsList: ResolverTypeWrapper<ComplaintsList>;
  ContactsIn: ContactsIn;
  ContentMetadata: ResolverTypeWrapper<ContentMetadata>;
  CoordinateIn: CoordinateIn;
  CoordinateOut: ResolverTypeWrapper<CoordinateOut>;
  CreateAlbumResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CreateAlbumResponse']
  >;
  CreateComplaintOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CreateComplaintOrEWF']
  >;
  CreateStoryOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CreateStoryOrEWF']
  >;
  CreateTokensResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['CreateTokensResponse']
  >;
  DayWorkingHours: ResolverTypeWrapper<DayWorkingHours>;
  DayWorkingHoursIn: DayWorkingHoursIn;
  DeletedComment: ResolverTypeWrapper<
    Omit<DeletedComment, 'target'> & {target: ResolversTypes['CommentTarget']}
  >;
  ErrorStatus: ErrorStatus;
  ErrorWithFields: ResolverTypeWrapper<ErrorWithFields>;
  ExistingComment: ResolverTypeWrapper<
    Omit<ExistingComment, 'target'> & {target: ResolversTypes['CommentTarget']}
  >;
  ExistingCommentOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ExistingCommentOrEWF']
  >;
  FavouriteContentType: FavouriteContentType;
  FavouriteIn: FavouriteIn;
  File: ResolverTypeWrapper<File>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ForwardMessageIn: ForwardMessageIn;
  ForwardedContent: ResolverTypeWrapper<
    Omit<ForwardedContent, 'data'> & {
      data?: Maybe<ResolversTypes['ForwardedContentData']>;
    }
  >;
  ForwardedContentData: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ForwardedContentData']
  >;
  ForwardedMessage: ResolverTypeWrapper<ForwardedMessage>;
  ForwardedMessageMetadataContentType: ForwardedMessageMetadataContentType;
  ForwardedMessageOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ForwardedMessageOrEWF']
  >;
  GetAlbumsByUserIdResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetAlbumsByUserIdResponse']
  >;
  GetCodeResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetCodeResponse']
  >;
  GetComplaintFinalTypeOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetComplaintFinalTypeOrEWF']
  >;
  GetComplaintsOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetComplaintsOrBE']
  >;
  GetHintsListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetHintsListOrBE']
  >;
  GetHistoryListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetHistoryListOrBE']
  >;
  GetMeResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetMeResponse']
  >;
  GetRecentBlogsListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetRecentBlogsListOrBE']
  >;
  GetRecentStoriesOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetRecentStoriesOrBE']
  >;
  GetUserStoriesOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['GetUserStoriesOrBE']
  >;
  HintsList: ResolverTypeWrapper<HintsList>;
  HistoryList: ResolverTypeWrapper<HistoryList>;
  IBaseComment: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>['IBaseComment']
  >;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LastMessage: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['LastMessage']
  >;
  LastReadTimestampChanged: ResolverTypeWrapper<LastReadTimestampChanged>;
  LastReadTimestampChangedOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['LastReadTimestampChangedOrBE']
  >;
  LikeContentType: LikeContentType;
  LikeIn: LikeIn;
  ListHashtags: ResolverTypeWrapper<ListHashtags>;
  ListHashtagsOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ListHashtagsOrBE']
  >;
  Message: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>['Message']
  >;
  MessageList: ResolverTypeWrapper<MessageList>;
  MessageListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['MessageListOrEWF']
  >;
  MessageOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['MessageOrEWF']
  >;
  MessageUnion: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['MessageUnion']
  >;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  NotificationList: ResolverTypeWrapper<NotificationList>;
  NotificationListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['NotificationListOrBE']
  >;
  NotificationSettings: ResolverTypeWrapper<NotificationSettings>;
  NotificationSettingsIn: NotificationSettingsIn;
  NotificationSettingsOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['NotificationSettingsOrBE']
  >;
  NotificationTarget: ResolverTypeWrapper<NotificationTarget>;
  NotificationTargetType: NotificationTargetType;
  NotificationType: NotificationType;
  OnlineStatusChanged: ResolverTypeWrapper<OnlineStatusChanged>;
  OnlineStatusChangedOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['OnlineStatusChangedOrBE']
  >;
  OrderContent: ResolverTypeWrapper<OrderContent>;
  OrderMessage: ResolverTypeWrapper<OrderMessage>;
  OrderMessageIn: OrderMessageIn;
  OrderMessageOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['OrderMessageOrEWF']
  >;
  PasswordInUpdate: PasswordInUpdate;
  Product: ResolverTypeWrapper<Product>;
  ProductIn: ProductIn;
  ProductInUpdate: ProductInUpdate;
  ProductList: ResolverTypeWrapper<ProductList>;
  ProductListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ProductListOrBE']
  >;
  ProductOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ProductOrBE']
  >;
  ProductOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ProductOrEWF']
  >;
  ProductProperty: ResolverTypeWrapper<ProductProperty>;
  ProductPropertyIn: ProductPropertyIn;
  Publication: ResolverTypeWrapper<Publication>;
  PublicationIn: PublicationIn;
  PublicationInUpdate: PublicationInUpdate;
  PublicationList: ResolverTypeWrapper<PublicationList>;
  PublicationListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['PublicationListOrBE']
  >;
  PublicationListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['PublicationListOrEWF']
  >;
  PublicationOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['PublicationOrBE']
  >;
  PublicationOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['PublicationOrEWF']
  >;
  Query: ResolverTypeWrapper<{}>;
  Reaction: ResolverTypeWrapper<Reaction>;
  RecentBlog: ResolverTypeWrapper<RecentBlog>;
  RecentBlogsList: ResolverTypeWrapper<RecentBlogsList>;
  RecordType: ResolverTypeWrapper<RecordType>;
  RecordTypeIn: RecordTypeIn;
  RefreshAccessTokenResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RefreshAccessTokenResponse']
  >;
  RegularMessage: ResolverTypeWrapper<RegularMessage>;
  RegularMessageIn: RegularMessageIn;
  RegularMessageOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RegularMessageOrEWF']
  >;
  RetrieveAlbumResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RetrieveAlbumResponse']
  >;
  RetrieveComplaintOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RetrieveComplaintOrBE']
  >;
  RetrieveFileResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RetrieveFileResponse']
  >;
  RetrieveStoryOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['RetrieveStoryOrBE']
  >;
  Review: ResolverTypeWrapper<Review>;
  ReviewIn: ReviewIn;
  ReviewList: ResolverTypeWrapper<ReviewList>;
  ReviewListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ReviewListOrEWF']
  >;
  ReviewOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['ReviewOrEWF']
  >;
  SearchBlogsIn: SearchBlogsIn;
  SearchBlogsList: ResolverTypeWrapper<SearchBlogsList>;
  SearchBlogsListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SearchBlogsListOrEWF']
  >;
  SearchIn: SearchIn;
  SearchProductsList: ResolverTypeWrapper<SearchProductsList>;
  SearchProductsListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SearchProductsListOrEWF']
  >;
  SearchPublicationsList: ResolverTypeWrapper<SearchPublicationsList>;
  SearchPublicationsListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SearchPublicationsListOrEWF']
  >;
  SearchUserRecord: ResolverTypeWrapper<SearchUserRecord>;
  SearchUsersList: ResolverTypeWrapper<SearchUsersList>;
  SearchUsersListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SearchUsersListOrEWF']
  >;
  SetComplaintDecisionIn: SetComplaintDecisionIn;
  SetComplaintDecisionOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SetComplaintDecisionOrEWF']
  >;
  SocketMessage: ResolverTypeWrapper<
    Omit<SocketMessage, 'data'> & {data: ResolversTypes['MessageUnion']}
  >;
  SocketMessageOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['SocketMessageOrBE']
  >;
  SortingType: SortingType;
  Story: ResolverTypeWrapper<
    Omit<Story, 'objects'> & {objects: Array<ResolversTypes['StoryObject']>}
  >;
  StoryFeed: ResolverTypeWrapper<StoryFeed>;
  StoryFeedList: ResolverTypeWrapper<StoryFeedList>;
  StoryGeolocation: ResolverTypeWrapper<StoryGeolocation>;
  StoryGeolocationCoordinate: ResolverTypeWrapper<StoryGeolocationCoordinate>;
  StoryGeolocationCoordinateIn: StoryGeolocationCoordinateIn;
  StoryGeolocationIn: StoryGeolocationIn;
  StoryIn: StoryIn;
  StoryLink: ResolverTypeWrapper<StoryLink>;
  StoryLinkIn: StoryLinkIn;
  StoryObject: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['StoryObject']
  >;
  StoryObjectIn: StoryObjectIn;
  StoryObjectPosition: ResolverTypeWrapper<StoryObjectPosition>;
  StoryObjectPositionIn: StoryObjectPositionIn;
  StoryProductLink: ResolverTypeWrapper<StoryProductLink>;
  StoryProductLinkIn: StoryProductLinkIn;
  StoryText: ResolverTypeWrapper<StoryText>;
  StoryTextColors: StoryTextColors;
  StoryTextIn: StoryTextIn;
  StoryUserReference: ResolverTypeWrapper<StoryUserReference>;
  StoryUserReferenceIn: StoryUserReferenceIn;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  StringObject: ResolverTypeWrapper<StringObject>;
  Subscription: ResolverTypeWrapper<{}>;
  TagList: ResolverTypeWrapper<TagList>;
  TagListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TagListOrEWF']
  >;
  Tariff: ResolverTypeWrapper<Tariff>;
  TariffIn: TariffIn;
  TariffOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TariffOrBE']
  >;
  TariffOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TariffOrEWF']
  >;
  TokenPair: ResolverTypeWrapper<TokenPair>;
  Topic: ResolverTypeWrapper<Topic>;
  TopicIn: TopicIn;
  TopicInUpdate: TopicInUpdate;
  TopicList: ResolverTypeWrapper<TopicList>;
  TopicListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicListOrBE']
  >;
  TopicOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['TopicOrEWF']
  >;
  UpdateAlbumResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UpdateAlbumResponse']
  >;
  Upload: ResolverTypeWrapper<Scalars['Upload']['output']>;
  UploadFileResponse: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UploadFileResponse']
  >;
  User: ResolverTypeWrapper<User>;
  UserIn: UserIn;
  UserInUpdate: UserInUpdate;
  UserList: ResolverTypeWrapper<UserList>;
  UserListOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserListOrBE']
  >;
  UserListOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserListOrEWF']
  >;
  UserOrBE: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserOrBE']
  >;
  UserOrEWF: ResolverTypeWrapper<
    ResolversUnionTypes<ResolversTypes>['UserOrEWF']
  >;
  UserSex: UserSex;
  ViewsContentType: ViewsContentType;
  VisibilityPolicy: VisibilityPolicy;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
  WeekWorkingHours: ResolverTypeWrapper<WeekWorkingHours>;
  WeekWorkingHoursIn: WeekWorkingHoursIn;
  WorkingDayStatus: WorkingDayStatus;
  WorkingHours: ResolverTypeWrapper<WorkingHours>;
  WorkingHoursIn: WorkingHoursIn;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AccessToken: AccessToken;
  AddContentViewsIn: AddContentViewsIn;
  AdditionalInfo: AdditionalInfo;
  AdditionalInfoIn: AdditionalInfoIn;
  AddressIn: AddressIn;
  AddressOut: AddressOut;
  Album: Album;
  AlbumContentInUpdate: AlbumContentInUpdate;
  AlbumIn: AlbumIn;
  AlbumInUpdate: AlbumInUpdate;
  Albums: Albums;
  AppointmentContent: AppointmentContent;
  AppointmentMessage: AppointmentMessage;
  AppointmentMessageIn: AppointmentMessageIn;
  AppointmentMessageOrEWF: ResolversUnionTypes<ResolversParentTypes>['AppointmentMessageOrEWF'];
  Article: Article;
  ArticleIn: ArticleIn;
  ArticleInUpdate: ArticleInUpdate;
  ArticleList: ArticleList;
  ArticleListOrBE: ResolversUnionTypes<ResolversParentTypes>['ArticleListOrBE'];
  ArticleOrBE: ResolversUnionTypes<ResolversParentTypes>['ArticleOrBE'];
  ArticleOrEWF: ResolversUnionTypes<ResolversParentTypes>['ArticleOrEWF'];
  BaseError: BaseError;
  Blog: Blog;
  BlogIn: BlogIn;
  BlogInUpdate: BlogInUpdate;
  BlogOrEWF: ResolversUnionTypes<ResolversParentTypes>['BlogOrEWF'];
  Boolean: Scalars['Boolean']['output'];
  BooleanObject: BooleanObject;
  BooleanObjectOrBE: ResolversUnionTypes<ResolversParentTypes>['BooleanObjectOrBE'];
  CartItem: CartItem;
  CartItemIn: CartItemIn;
  CartItems: CartItems;
  CartItemsOrBE: ResolversUnionTypes<ResolversParentTypes>['CartItemsOrBE'];
  Catalog: Catalog;
  CatalogInUpdate: CatalogInUpdate;
  CatalogOrBE: ResolversUnionTypes<ResolversParentTypes>['CatalogOrBE'];
  Chat: Omit<Chat, 'lastMessage'> & {
    lastMessage?: Maybe<ResolversParentTypes['LastMessage']>;
  };
  ChatList: ChatList;
  ChatListOrBE: ResolversUnionTypes<ResolversParentTypes>['ChatListOrBE'];
  ChatOrBE: ResolversUnionTypes<ResolversParentTypes>['ChatOrBE'];
  Collection: Collection;
  CollectionIn: CollectionIn;
  CollectionInUpdate: CollectionInUpdate;
  CollectionOrBE: ResolversUnionTypes<ResolversParentTypes>['CollectionOrBE'];
  CollectionOrEWF: ResolversUnionTypes<ResolversParentTypes>['CollectionOrEWF'];
  Comment: ResolversUnionTypes<ResolversParentTypes>['Comment'];
  CommentContentIn: CommentContentIn;
  CommentIn: CommentIn;
  CommentList: Omit<CommentList, 'comments'> & {
    comments: Array<ResolversParentTypes['Comment']>;
  };
  CommentListOrEWF: ResolversUnionTypes<ResolversParentTypes>['CommentListOrEWF'];
  CommentReactions: CommentReactions;
  CommentTarget: ResolversUnionTypes<ResolversParentTypes>['CommentTarget'];
  CommentWithReplies: Omit<CommentWithReplies, 'comment' | 'replies'> & {
    comment: ResolversParentTypes['Comment'];
    replies: Array<ResolversParentTypes['Comment']>;
  };
  CommentWithRepliesList: CommentWithRepliesList;
  CommentWithRepliesListOrEWF: ResolversUnionTypes<ResolversParentTypes>['CommentWithRepliesListOrEWF'];
  CommentWithRepliesOrEWF: ResolversUnionTypes<ResolversParentTypes>['CommentWithRepliesOrEWF'];
  Complaint: Complaint;
  ComplaintFinalType: ComplaintFinalType;
  ComplaintIn: ComplaintIn;
  ComplaintMetadataIn: ComplaintMetadataIn;
  ComplaintsList: ComplaintsList;
  ContactsIn: ContactsIn;
  ContentMetadata: ContentMetadata;
  CoordinateIn: CoordinateIn;
  CoordinateOut: CoordinateOut;
  CreateAlbumResponse: ResolversUnionTypes<ResolversParentTypes>['CreateAlbumResponse'];
  CreateComplaintOrEWF: ResolversUnionTypes<ResolversParentTypes>['CreateComplaintOrEWF'];
  CreateStoryOrEWF: ResolversUnionTypes<ResolversParentTypes>['CreateStoryOrEWF'];
  CreateTokensResponse: ResolversUnionTypes<ResolversParentTypes>['CreateTokensResponse'];
  DayWorkingHours: DayWorkingHours;
  DayWorkingHoursIn: DayWorkingHoursIn;
  DeletedComment: Omit<DeletedComment, 'target'> & {
    target: ResolversParentTypes['CommentTarget'];
  };
  ErrorWithFields: ErrorWithFields;
  ExistingComment: Omit<ExistingComment, 'target'> & {
    target: ResolversParentTypes['CommentTarget'];
  };
  ExistingCommentOrEWF: ResolversUnionTypes<ResolversParentTypes>['ExistingCommentOrEWF'];
  FavouriteIn: FavouriteIn;
  File: File;
  Float: Scalars['Float']['output'];
  ForwardMessageIn: ForwardMessageIn;
  ForwardedContent: Omit<ForwardedContent, 'data'> & {
    data?: Maybe<ResolversParentTypes['ForwardedContentData']>;
  };
  ForwardedContentData: ResolversUnionTypes<ResolversParentTypes>['ForwardedContentData'];
  ForwardedMessage: ForwardedMessage;
  ForwardedMessageOrEWF: ResolversUnionTypes<ResolversParentTypes>['ForwardedMessageOrEWF'];
  GetAlbumsByUserIdResponse: ResolversUnionTypes<ResolversParentTypes>['GetAlbumsByUserIdResponse'];
  GetCodeResponse: ResolversUnionTypes<ResolversParentTypes>['GetCodeResponse'];
  GetComplaintFinalTypeOrEWF: ResolversUnionTypes<ResolversParentTypes>['GetComplaintFinalTypeOrEWF'];
  GetComplaintsOrBE: ResolversUnionTypes<ResolversParentTypes>['GetComplaintsOrBE'];
  GetHintsListOrBE: ResolversUnionTypes<ResolversParentTypes>['GetHintsListOrBE'];
  GetHistoryListOrBE: ResolversUnionTypes<ResolversParentTypes>['GetHistoryListOrBE'];
  GetMeResponse: ResolversUnionTypes<ResolversParentTypes>['GetMeResponse'];
  GetRecentBlogsListOrBE: ResolversUnionTypes<ResolversParentTypes>['GetRecentBlogsListOrBE'];
  GetRecentStoriesOrBE: ResolversUnionTypes<ResolversParentTypes>['GetRecentStoriesOrBE'];
  GetUserStoriesOrBE: ResolversUnionTypes<ResolversParentTypes>['GetUserStoriesOrBE'];
  HintsList: HintsList;
  HistoryList: HistoryList;
  IBaseComment: ResolversInterfaceTypes<ResolversParentTypes>['IBaseComment'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LastMessage: ResolversUnionTypes<ResolversParentTypes>['LastMessage'];
  LastReadTimestampChanged: LastReadTimestampChanged;
  LastReadTimestampChangedOrBE: ResolversUnionTypes<ResolversParentTypes>['LastReadTimestampChangedOrBE'];
  LikeIn: LikeIn;
  ListHashtags: ListHashtags;
  ListHashtagsOrBE: ResolversUnionTypes<ResolversParentTypes>['ListHashtagsOrBE'];
  Message: ResolversInterfaceTypes<ResolversParentTypes>['Message'];
  MessageList: MessageList;
  MessageListOrEWF: ResolversUnionTypes<ResolversParentTypes>['MessageListOrEWF'];
  MessageOrEWF: ResolversUnionTypes<ResolversParentTypes>['MessageOrEWF'];
  MessageUnion: ResolversUnionTypes<ResolversParentTypes>['MessageUnion'];
  Mutation: {};
  Notification: Notification;
  NotificationList: NotificationList;
  NotificationListOrBE: ResolversUnionTypes<ResolversParentTypes>['NotificationListOrBE'];
  NotificationSettings: NotificationSettings;
  NotificationSettingsIn: NotificationSettingsIn;
  NotificationSettingsOrBE: ResolversUnionTypes<ResolversParentTypes>['NotificationSettingsOrBE'];
  NotificationTarget: NotificationTarget;
  OnlineStatusChanged: OnlineStatusChanged;
  OnlineStatusChangedOrBE: ResolversUnionTypes<ResolversParentTypes>['OnlineStatusChangedOrBE'];
  OrderContent: OrderContent;
  OrderMessage: OrderMessage;
  OrderMessageIn: OrderMessageIn;
  OrderMessageOrEWF: ResolversUnionTypes<ResolversParentTypes>['OrderMessageOrEWF'];
  PasswordInUpdate: PasswordInUpdate;
  Product: Product;
  ProductIn: ProductIn;
  ProductInUpdate: ProductInUpdate;
  ProductList: ProductList;
  ProductListOrBE: ResolversUnionTypes<ResolversParentTypes>['ProductListOrBE'];
  ProductOrBE: ResolversUnionTypes<ResolversParentTypes>['ProductOrBE'];
  ProductOrEWF: ResolversUnionTypes<ResolversParentTypes>['ProductOrEWF'];
  ProductProperty: ProductProperty;
  ProductPropertyIn: ProductPropertyIn;
  Publication: Publication;
  PublicationIn: PublicationIn;
  PublicationInUpdate: PublicationInUpdate;
  PublicationList: PublicationList;
  PublicationListOrBE: ResolversUnionTypes<ResolversParentTypes>['PublicationListOrBE'];
  PublicationListOrEWF: ResolversUnionTypes<ResolversParentTypes>['PublicationListOrEWF'];
  PublicationOrBE: ResolversUnionTypes<ResolversParentTypes>['PublicationOrBE'];
  PublicationOrEWF: ResolversUnionTypes<ResolversParentTypes>['PublicationOrEWF'];
  Query: {};
  Reaction: Reaction;
  RecentBlog: RecentBlog;
  RecentBlogsList: RecentBlogsList;
  RecordType: RecordType;
  RecordTypeIn: RecordTypeIn;
  RefreshAccessTokenResponse: ResolversUnionTypes<ResolversParentTypes>['RefreshAccessTokenResponse'];
  RegularMessage: RegularMessage;
  RegularMessageIn: RegularMessageIn;
  RegularMessageOrEWF: ResolversUnionTypes<ResolversParentTypes>['RegularMessageOrEWF'];
  RetrieveAlbumResponse: ResolversUnionTypes<ResolversParentTypes>['RetrieveAlbumResponse'];
  RetrieveComplaintOrBE: ResolversUnionTypes<ResolversParentTypes>['RetrieveComplaintOrBE'];
  RetrieveFileResponse: ResolversUnionTypes<ResolversParentTypes>['RetrieveFileResponse'];
  RetrieveStoryOrBE: ResolversUnionTypes<ResolversParentTypes>['RetrieveStoryOrBE'];
  Review: Review;
  ReviewIn: ReviewIn;
  ReviewList: ReviewList;
  ReviewListOrEWF: ResolversUnionTypes<ResolversParentTypes>['ReviewListOrEWF'];
  ReviewOrEWF: ResolversUnionTypes<ResolversParentTypes>['ReviewOrEWF'];
  SearchBlogsIn: SearchBlogsIn;
  SearchBlogsList: SearchBlogsList;
  SearchBlogsListOrEWF: ResolversUnionTypes<ResolversParentTypes>['SearchBlogsListOrEWF'];
  SearchIn: SearchIn;
  SearchProductsList: SearchProductsList;
  SearchProductsListOrEWF: ResolversUnionTypes<ResolversParentTypes>['SearchProductsListOrEWF'];
  SearchPublicationsList: SearchPublicationsList;
  SearchPublicationsListOrEWF: ResolversUnionTypes<ResolversParentTypes>['SearchPublicationsListOrEWF'];
  SearchUserRecord: SearchUserRecord;
  SearchUsersList: SearchUsersList;
  SearchUsersListOrEWF: ResolversUnionTypes<ResolversParentTypes>['SearchUsersListOrEWF'];
  SetComplaintDecisionIn: SetComplaintDecisionIn;
  SetComplaintDecisionOrEWF: ResolversUnionTypes<ResolversParentTypes>['SetComplaintDecisionOrEWF'];
  SocketMessage: Omit<SocketMessage, 'data'> & {
    data: ResolversParentTypes['MessageUnion'];
  };
  SocketMessageOrBE: ResolversUnionTypes<ResolversParentTypes>['SocketMessageOrBE'];
  Story: Omit<Story, 'objects'> & {
    objects: Array<ResolversParentTypes['StoryObject']>;
  };
  StoryFeed: StoryFeed;
  StoryFeedList: StoryFeedList;
  StoryGeolocation: StoryGeolocation;
  StoryGeolocationCoordinate: StoryGeolocationCoordinate;
  StoryGeolocationCoordinateIn: StoryGeolocationCoordinateIn;
  StoryGeolocationIn: StoryGeolocationIn;
  StoryIn: StoryIn;
  StoryLink: StoryLink;
  StoryLinkIn: StoryLinkIn;
  StoryObject: ResolversUnionTypes<ResolversParentTypes>['StoryObject'];
  StoryObjectIn: StoryObjectIn;
  StoryObjectPosition: StoryObjectPosition;
  StoryObjectPositionIn: StoryObjectPositionIn;
  StoryProductLink: StoryProductLink;
  StoryProductLinkIn: StoryProductLinkIn;
  StoryText: StoryText;
  StoryTextIn: StoryTextIn;
  StoryUserReference: StoryUserReference;
  StoryUserReferenceIn: StoryUserReferenceIn;
  String: Scalars['String']['output'];
  StringObject: StringObject;
  Subscription: {};
  TagList: TagList;
  TagListOrEWF: ResolversUnionTypes<ResolversParentTypes>['TagListOrEWF'];
  Tariff: Tariff;
  TariffIn: TariffIn;
  TariffOrBE: ResolversUnionTypes<ResolversParentTypes>['TariffOrBE'];
  TariffOrEWF: ResolversUnionTypes<ResolversParentTypes>['TariffOrEWF'];
  TokenPair: TokenPair;
  Topic: Topic;
  TopicIn: TopicIn;
  TopicInUpdate: TopicInUpdate;
  TopicList: TopicList;
  TopicListOrBE: ResolversUnionTypes<ResolversParentTypes>['TopicListOrBE'];
  TopicOrEWF: ResolversUnionTypes<ResolversParentTypes>['TopicOrEWF'];
  UpdateAlbumResponse: ResolversUnionTypes<ResolversParentTypes>['UpdateAlbumResponse'];
  Upload: Scalars['Upload']['output'];
  UploadFileResponse: ResolversUnionTypes<ResolversParentTypes>['UploadFileResponse'];
  User: User;
  UserIn: UserIn;
  UserInUpdate: UserInUpdate;
  UserList: UserList;
  UserListOrBE: ResolversUnionTypes<ResolversParentTypes>['UserListOrBE'];
  UserListOrEWF: ResolversUnionTypes<ResolversParentTypes>['UserListOrEWF'];
  UserOrBE: ResolversUnionTypes<ResolversParentTypes>['UserOrBE'];
  UserOrEWF: ResolversUnionTypes<ResolversParentTypes>['UserOrEWF'];
  Void: Scalars['Void']['output'];
  WeekWorkingHours: WeekWorkingHours;
  WeekWorkingHoursIn: WeekWorkingHoursIn;
  WorkingHours: WorkingHours;
  WorkingHoursIn: WorkingHoursIn;
}>;

export type AccessTokenResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken'],
> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdditionalInfoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AdditionalInfo'] = ResolversParentTypes['AdditionalInfo'],
> = ResolversObject<{
  advantage?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  hasDelivery?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddressOutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AddressOut'] = ResolversParentTypes['AddressOut'],
> = ResolversObject<{
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  coordinates?: Resolver<
    Array<ResolversTypes['CoordinateOut']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  content?: Resolver<
    Array<ResolversTypes['Publication']>,
    ParentType,
    ContextType,
    RequireFields<AlbumContentArgs, 'limit' | 'skip'>
  >;
  contentType?: Resolver<
    ResolversTypes['AlbumContentType'],
    ParentType,
    ContextType
  >;
  cover?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  internalCover?: Resolver<
    Maybe<ResolversTypes['File']>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameColor?: Resolver<
    ResolversTypes['AlbumNameColor'],
    ParentType,
    ContextType
  >;
  policy?: Resolver<
    ResolversTypes['VisibilityPolicy'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlbumsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Albums'] = ResolversParentTypes['Albums'],
> = ResolversObject<{
  cover?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  list?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppointmentContentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppointmentContent'] = ResolversParentTypes['AppointmentContent'],
> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  metadata?: Resolver<
    ResolversTypes['ContentMetadata'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppointmentMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppointmentMessage'] = ResolversParentTypes['AppointmentMessage'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEdited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  service?: Resolver<
    ResolversTypes['AppointmentContent'],
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AppointmentMessageOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['AppointmentMessageOrEWF'] = ResolversParentTypes['AppointmentMessageOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'AppointmentMessage' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type ArticleResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article'],
> = ResolversObject<{
  attachments?: Resolver<
    Array<ResolversTypes['File']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is18Plus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCommentable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topic?: Resolver<Maybe<ResolversTypes['Topic']>, ParentType, ContextType>;
  unreadCommentsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  viewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleList'] = ResolversParentTypes['ArticleList'],
> = ResolversObject<{
  articles?: Resolver<
    Array<ResolversTypes['Article']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleListOrBE'] = ResolversParentTypes['ArticleListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ArticleList' | 'BaseError',
    ParentType,
    ContextType
  >;
}>;

export type ArticleOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleOrBE'] = ResolversParentTypes['ArticleOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Article' | 'BaseError',
    ParentType,
    ContextType
  >;
}>;

export type ArticleOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ArticleOrEWF'] = ResolversParentTypes['ArticleOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Article' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type BaseErrorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BaseError'] = ResolversParentTypes['BaseError'],
> = ResolversObject<{
  status?: Resolver<ResolversTypes['ErrorStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Blog'] = ResolversParentTypes['Blog'],
> = ResolversObject<{
  articles?: Resolver<
    Array<ResolversTypes['Article']>,
    ParentType,
    ContextType,
    RequireFields<BlogArticlesArgs, 'limit' | 'skip'>
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  cover?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  topics?: Resolver<
    Array<ResolversTypes['Topic']>,
    ParentType,
    ContextType,
    RequireFields<BlogTopicsArgs, 'limit' | 'skip'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BlogOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BlogOrEWF'] = ResolversParentTypes['BlogOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Blog' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type BooleanObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BooleanObject'] = ResolversParentTypes['BooleanObject'],
> = ResolversObject<{
  boolean?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BooleanObjectOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['BooleanObjectOrBE'] = ResolversParentTypes['BooleanObjectOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'BooleanObject',
    ParentType,
    ContextType
  >;
}>;

export type CartItemResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  selectedProperties?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItems'] = ResolversParentTypes['CartItems'],
> = ResolversObject<{
  fullAmount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fullPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  items?: Resolver<Array<ResolversTypes['CartItem']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemsOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CartItemsOrBE'] = ResolversParentTypes['CartItemsOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'CartItems',
    ParentType,
    ContextType
  >;
}>;

export type CatalogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Catalog'] = ResolversParentTypes['Catalog'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  collections?: Resolver<
    Array<ResolversTypes['Collection']>,
    ParentType,
    ContextType,
    RequireFields<CatalogCollectionsArgs, 'limit' | 'skip'>
  >;
  cover?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pdf?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CatalogOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CatalogOrBE'] = ResolversParentTypes['CatalogOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'Catalog',
    ParentType,
    ContextType
  >;
}>;

export type ChatResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat'],
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMuted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isTechSupport?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastMessage?: Resolver<
    Maybe<ResolversTypes['LastMessage']>,
    ParentType,
    ContextType
  >;
  lastReadTimestamp?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  logo?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unreadMessageCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChatList'] = ResolversParentTypes['ChatList'],
> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Chat']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ChatListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChatListOrBE'] = ResolversParentTypes['ChatListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'ChatList',
    ParentType,
    ContextType
  >;
}>;

export type ChatOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ChatOrBE'] = ResolversParentTypes['ChatOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'Chat', ParentType, ContextType>;
}>;

export type CollectionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Collection'] = ResolversParentTypes['Collection'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  cover?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CollectionOrBE'] = ResolversParentTypes['CollectionOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'Collection',
    ParentType,
    ContextType
  >;
}>;

export type CollectionOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CollectionOrEWF'] = ResolversParentTypes['CollectionOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Collection' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'DeletedComment' | 'ExistingComment',
    ParentType,
    ContextType
  >;
}>;

export type CommentListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentList'] = ResolversParentTypes['CommentList'],
> = ResolversObject<{
  comments?: Resolver<
    Array<ResolversTypes['Comment']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentListOrEWF'] = ResolversParentTypes['CommentListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'CommentList' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type CommentReactionsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentReactions'] = ResolversParentTypes['CommentReactions'],
> = ResolversObject<{
  myReaction?: Resolver<
    Maybe<ResolversTypes['CommentReactionType']>,
    ParentType,
    ContextType
  >;
  reactions?: Resolver<
    Array<ResolversTypes['Reaction']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentTargetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentTarget'] = ResolversParentTypes['CommentTarget'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Article' | 'DeletedComment' | 'ExistingComment' | 'Publication',
    ParentType,
    ContextType
  >;
}>;

export type CommentWithRepliesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentWithReplies'] = ResolversParentTypes['CommentWithReplies'],
> = ResolversObject<{
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  replies?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentWithRepliesListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentWithRepliesList'] = ResolversParentTypes['CommentWithRepliesList'],
> = ResolversObject<{
  comments?: Resolver<
    Array<ResolversTypes['CommentWithReplies']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentWithRepliesListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentWithRepliesListOrEWF'] = ResolversParentTypes['CommentWithRepliesListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'CommentWithRepliesList' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type CommentWithRepliesOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CommentWithRepliesOrEWF'] = ResolversParentTypes['CommentWithRepliesOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'CommentWithReplies' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type ComplaintResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Complaint'] = ResolversParentTypes['Complaint'],
> = ResolversObject<{
  authorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  complaintFinalType?: Resolver<
    Maybe<ResolversTypes['ComplaintType']>,
    ParentType,
    ContextType
  >;
  complaintType?: Resolver<
    ResolversTypes['ComplaintType'],
    ParentType,
    ContextType
  >;
  contentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentType?: Resolver<
    ResolversTypes['ComplaintContentType'],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decision?: Resolver<
    Maybe<ResolversTypes['ComplaintDecision']>,
    ParentType,
    ContextType
  >;
  decisionMadeAt?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComplaintFinalTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ComplaintFinalType'] = ResolversParentTypes['ComplaintFinalType'],
> = ResolversObject<{
  complaintFinalType?: Resolver<
    ResolversTypes['ComplaintType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ComplaintsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ComplaintsList'] = ResolversParentTypes['ComplaintsList'],
> = ResolversObject<{
  complaints?: Resolver<
    Array<ResolversTypes['Complaint']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContentMetadataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ContentMetadata'] = ResolversParentTypes['ContentMetadata'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['ForwardedMessageMetadataContentType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CoordinateOutResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CoordinateOut'] = ResolversParentTypes['CoordinateOut'],
> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateAlbumResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateAlbumResponse'] = ResolversParentTypes['CreateAlbumResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Album' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type CreateComplaintOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateComplaintOrEWF'] = ResolversParentTypes['CreateComplaintOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Complaint' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type CreateStoryOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateStoryOrEWF'] = ResolversParentTypes['CreateStoryOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Story',
    ParentType,
    ContextType
  >;
}>;

export type CreateTokensResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['CreateTokensResponse'] = ResolversParentTypes['CreateTokensResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'TokenPair',
    ParentType,
    ContextType
  >;
}>;

export type DayWorkingHoursResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DayWorkingHours'] = ResolversParentTypes['DayWorkingHours'],
> = ResolversObject<{
  hours?: Resolver<
    Maybe<ResolversTypes['WorkingHours']>,
    ParentType,
    ContextType
  >;
  status?: Resolver<
    ResolversTypes['WorkingDayStatus'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DeletedCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeletedComment'] = ResolversParentTypes['DeletedComment'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasBeenRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['CommentTarget'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorWithFieldsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorWithFields'] = ResolversParentTypes['ErrorWithFields'],
> = ResolversObject<{
  fields?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ErrorStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExistingCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ExistingComment'] = ResolversParentTypes['ExistingComment'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasBeenRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  reactions?: Resolver<
    ResolversTypes['CommentReactions'],
    ParentType,
    ContextType
  >;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  target?: Resolver<ResolversTypes['CommentTarget'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ExistingCommentOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ExistingCommentOrEWF'] = ResolversParentTypes['ExistingCommentOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'ExistingComment',
    ParentType,
    ContextType
  >;
}>;

export type FileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File'],
> = ResolversObject<{
  checksum?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForwardedContentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ForwardedContent'] = ResolversParentTypes['ForwardedContent'],
> = ResolversObject<{
  data?: Resolver<
    Maybe<ResolversTypes['ForwardedContentData']>,
    ParentType,
    ContextType
  >;
  metadata?: Resolver<
    ResolversTypes['ContentMetadata'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForwardedContentDataResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ForwardedContentData'] = ResolversParentTypes['ForwardedContentData'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Article' | 'Product' | 'Publication' | 'Story',
    ParentType,
    ContextType
  >;
}>;

export type ForwardedMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ForwardedMessage'] = ResolversParentTypes['ForwardedMessage'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  forwardedContent?: Resolver<
    ResolversTypes['ForwardedContent'],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEdited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ForwardedMessageOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ForwardedMessageOrEWF'] = ResolversParentTypes['ForwardedMessageOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'ForwardedMessage',
    ParentType,
    ContextType
  >;
}>;

export type GetAlbumsByUserIdResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetAlbumsByUserIdResponse'] = ResolversParentTypes['GetAlbumsByUserIdResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'Albums' | 'BaseError', ParentType, ContextType>;
}>;

export type GetCodeResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetCodeResponse'] = ResolversParentTypes['GetCodeResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'StringObject',
    ParentType,
    ContextType
  >;
}>;

export type GetComplaintFinalTypeOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetComplaintFinalTypeOrEWF'] = ResolversParentTypes['GetComplaintFinalTypeOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ComplaintFinalType' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type GetComplaintsOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetComplaintsOrBE'] = ResolversParentTypes['GetComplaintsOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'ComplaintsList',
    ParentType,
    ContextType
  >;
}>;

export type GetHintsListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetHintsListOrBE'] = ResolversParentTypes['GetHintsListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'HintsList',
    ParentType,
    ContextType
  >;
}>;

export type GetHistoryListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetHistoryListOrBE'] = ResolversParentTypes['GetHistoryListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'HistoryList',
    ParentType,
    ContextType
  >;
}>;

export type GetMeResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetMeResponse'] = ResolversParentTypes['GetMeResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'User', ParentType, ContextType>;
}>;

export type GetRecentBlogsListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetRecentBlogsListOrBE'] = ResolversParentTypes['GetRecentBlogsListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'RecentBlogsList',
    ParentType,
    ContextType
  >;
}>;

export type GetRecentStoriesOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetRecentStoriesOrBE'] = ResolversParentTypes['GetRecentStoriesOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'StoryFeedList',
    ParentType,
    ContextType
  >;
}>;

export type GetUserStoriesOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['GetUserStoriesOrBE'] = ResolversParentTypes['GetUserStoriesOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'StoryFeed',
    ParentType,
    ContextType
  >;
}>;

export type HintsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HintsList'] = ResolversParentTypes['HintsList'],
> = ResolversObject<{
  hints?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type HistoryListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['HistoryList'] = ResolversParentTypes['HistoryList'],
> = ResolversObject<{
  history?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IBaseCommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['IBaseComment'] = ResolversParentTypes['IBaseComment'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'DeletedComment' | 'ExistingComment',
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasBeenRead?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['CommentTarget'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type LastMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LastMessage'] = ResolversParentTypes['LastMessage'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'AppointmentMessage'
    | 'ForwardedMessage'
    | 'OrderMessage'
    | 'RegularMessage',
    ParentType,
    ContextType
  >;
}>;

export type LastReadTimestampChangedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LastReadTimestampChanged'] = ResolversParentTypes['LastReadTimestampChanged'],
> = ResolversObject<{
  chatId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastReadTimestamp?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LastReadTimestampChangedOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['LastReadTimestampChangedOrBE'] = ResolversParentTypes['LastReadTimestampChangedOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'LastReadTimestampChanged',
    ParentType,
    ContextType
  >;
}>;

export type ListHashtagsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListHashtags'] = ResolversParentTypes['ListHashtags'],
> = ResolversObject<{
  hashtags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListHashtagsOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ListHashtagsOrBE'] = ResolversParentTypes['ListHashtagsOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'ListHashtags',
    ParentType,
    ContextType
  >;
}>;

export type MessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'AppointmentMessage'
    | 'ForwardedMessage'
    | 'OrderMessage'
    | 'RegularMessage',
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEdited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MessageListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageList'] = ResolversParentTypes['MessageList'],
> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MessageListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageListOrEWF'] = ResolversParentTypes['MessageListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'MessageList',
    ParentType,
    ContextType
  >;
}>;

export type MessageOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageOrEWF'] = ResolversParentTypes['MessageOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'AppointmentMessage'
    | 'ErrorWithFields'
    | 'ForwardedMessage'
    | 'OrderMessage'
    | 'RegularMessage',
    ParentType,
    ContextType
  >;
}>;

export type MessageUnionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['MessageUnion'] = ResolversParentTypes['MessageUnion'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'AppointmentMessage'
    | 'ForwardedMessage'
    | 'OrderMessage'
    | 'RegularMessage',
    ParentType,
    ContextType
  >;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = ResolversObject<{
  addContentViews?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddContentViewsArgs, 'content'>
  >;
  addItemToCart?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddItemToCartArgs, 'item'>
  >;
  addRecentBlog?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddRecentBlogArgs, 'blogId'>
  >;
  blockUser?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationBlockUserArgs, 'id'>
  >;
  confirmCode?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationConfirmCodeArgs, 'code' | 'target' | 'transport'>
  >;
  createAlbum?: Resolver<
    ResolversTypes['CreateAlbumResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAlbumArgs, 'album'>
  >;
  createAppointmentMessage?: Resolver<
    ResolversTypes['AppointmentMessageOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateAppointmentMessageArgs, 'chatId' | 'message'>
  >;
  createArticle?: Resolver<
    ResolversTypes['ArticleOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateArticleArgs, 'article'>
  >;
  createBlog?: Resolver<
    ResolversTypes['BlogOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateBlogArgs, 'blog'>
  >;
  createCatalog?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType
  >;
  createChat?: Resolver<
    ResolversTypes['ChatOrBE'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateChatArgs, 'userId'>
  >;
  createCollection?: Resolver<
    ResolversTypes['CollectionOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCollectionArgs, 'collection'>
  >;
  createComment?: Resolver<
    ResolversTypes['ExistingCommentOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateCommentArgs, 'comment'>
  >;
  createComplaint?: Resolver<
    ResolversTypes['CreateComplaintOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateComplaintArgs, 'complaint'>
  >;
  createForwardMessage?: Resolver<
    ResolversTypes['ForwardedMessageOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateForwardMessageArgs, 'chatId' | 'message'>
  >;
  createOrderMessage?: Resolver<
    ResolversTypes['OrderMessageOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateOrderMessageArgs, 'chatId' | 'message'>
  >;
  createProduct?: Resolver<
    ResolversTypes['ProductOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateProductArgs, 'product'>
  >;
  createPublication?: Resolver<
    ResolversTypes['PublicationOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePublicationArgs, 'publication'>
  >;
  createRegularMessage?: Resolver<
    ResolversTypes['RegularMessageOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateRegularMessageArgs, 'chatId' | 'message'>
  >;
  createReview?: Resolver<
    ResolversTypes['ReviewOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateReviewArgs, 'review'>
  >;
  createStory?: Resolver<
    ResolversTypes['CreateStoryOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateStoryArgs, 'story'>
  >;
  createTechSupportChat?: Resolver<
    ResolversTypes['ChatOrBE'],
    ParentType,
    ContextType
  >;
  createTopic?: Resolver<
    ResolversTypes['TopicOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTopicArgs, 'topic'>
  >;
  createUser?: Resolver<
    ResolversTypes['UserOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationCreateUserArgs, 'user'>
  >;
  deleteAlbum?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteAlbumArgs, 'id'>
  >;
  deleteAllArticles?: Resolver<
    Maybe<ResolversTypes['Void']>,
    ParentType,
    ContextType
  >;
  deleteAllPublications?: Resolver<
    Maybe<ResolversTypes['Void']>,
    ParentType,
    ContextType
  >;
  deleteArticle?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteArticleArgs, 'id'>
  >;
  deleteChat?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteChatArgs, 'id'>
  >;
  deleteCollection?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCollectionArgs, 'id'>
  >;
  deleteComment?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCommentArgs, 'id'>
  >;
  deleteComplaint?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteComplaintArgs, 'id'>
  >;
  deleteFriend?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteFriendArgs, 'id'>
  >;
  deleteItemFromCart?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteItemFromCartArgs, 'id'>
  >;
  deleteManyUsers?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteManyUsersArgs, 'ids'>
  >;
  deleteMessage?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteMessageArgs, 'chatId' | 'id'>
  >;
  deleteProduct?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteProductArgs, 'id'>
  >;
  deletePublication?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeletePublicationArgs, 'id'>
  >;
  deleteStory?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteStoryArgs, 'id'>
  >;
  deleteTopic?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTopicArgs, 'id'>
  >;
  deleteUser?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteUserArgs, 'id'>
  >;
  followUser?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationFollowUserArgs, 'id'>
  >;
  muteChat?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationMuteChatArgs, 'id'>
  >;
  resetPassword?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationResetPasswordArgs,
      'newPassword' | 'target' | 'transport'
    >
  >;
  sendCode?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendCodeArgs, 'target' | 'transport'>
  >;
  sendContactsToPartnership?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendContactsToPartnershipArgs, 'contacts'>
  >;
  sendContactsToTechSupport?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSendContactsToTechSupportArgs, 'contacts'>
  >;
  serverCleanup?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType
  >;
  setAdminRole?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetAdminRoleArgs, 'userId'>
  >;
  setAlbumsCover?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    Partial<MutationSetAlbumsCoverArgs>
  >;
  setDecisionOfComplaint?: Resolver<
    ResolversTypes['SetComplaintDecisionOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationSetDecisionOfComplaintArgs, 'complaint'>
  >;
  setEmail?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetEmailArgs, 'email' | 'id' | 'transport'>
  >;
  setFavourite?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetFavouriteArgs, 'favourite' | 'isFavourite'>
  >;
  setFriend?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetFriendArgs, 'id'>
  >;
  setHashtags?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetHashtagsArgs, 'hashtags'>
  >;
  setLastReadTimestamp?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<
      MutationSetLastReadTimestampArgs,
      'chatId' | 'lastReadTimestamp'
    >
  >;
  setLike?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetLikeArgs, 'like'>
  >;
  setPhone?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetPhoneArgs, 'id' | 'phone' | 'transport'>
  >;
  setReactionToComment?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetReactionToCommentArgs, 'id'>
  >;
  setSettings?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSetSettingsArgs, 'settings'>
  >;
  subscribe?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationSubscribeArgs, 'id'>
  >;
  unblockUser?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnblockUserArgs, 'id'>
  >;
  unfollowUser?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnfollowUserArgs, 'id'>
  >;
  unmuteChat?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnmuteChatArgs, 'id'>
  >;
  unsetLike?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnsetLikeArgs, 'like'>
  >;
  unsubscribe?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUnsubscribeArgs, 'id'>
  >;
  updateAlbum?: Resolver<
    ResolversTypes['UpdateAlbumResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAlbumArgs, 'album' | 'id'>
  >;
  updateAlbumContent?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateAlbumContentArgs, 'content' | 'id'>
  >;
  updateArticle?: Resolver<
    ResolversTypes['ArticleOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateArticleArgs, 'article' | 'id'>
  >;
  updateBlog?: Resolver<
    ResolversTypes['BlogOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateBlogArgs, 'blog'>
  >;
  updateCatalog?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCatalogArgs, 'catalog'>
  >;
  updateCollection?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCollectionArgs, 'collection' | 'id'>
  >;
  updateLastReadComment?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateLastReadCommentArgs, 'content' | 'timestamp'>
  >;
  updateLastReadTimestamp?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateLastReadTimestampArgs, 'lastReadTimestamp'>
  >;
  updatePassword?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePasswordArgs, 'id' | 'password'>
  >;
  updateProduct?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateProductArgs, 'id' | 'product'>
  >;
  updatePublication?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdatePublicationArgs, 'id' | 'publication'>
  >;
  updateTariff?: Resolver<
    ResolversTypes['TariffOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTariffArgs, 'tariff'>
  >;
  updateTopic?: Resolver<
    ResolversTypes['TopicOrEWF'],
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTopicArgs, 'id' | 'topic'>
  >;
  updateUser?: Resolver<
    Maybe<ResolversTypes['ErrorWithFields']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateUserArgs, 'id' | 'user'>
  >;
  uploadFile?: Resolver<
    ResolversTypes['UploadFileResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadFileArgs, 'file'>
  >;
  uploadImage?: Resolver<
    ResolversTypes['UploadFileResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadImageArgs, 'file'>
  >;
  uploadVideo?: Resolver<
    ResolversTypes['UploadFileResponse'],
    ParentType,
    ContextType,
    RequireFields<MutationUploadVideoArgs, 'file'>
  >;
}>;

export type NotificationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification'],
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  notificationType?: Resolver<
    ResolversTypes['NotificationType'],
    ParentType,
    ContextType
  >;
  readedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<
    ResolversTypes['NotificationTarget'],
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationList'] = ResolversParentTypes['NotificationList'],
> = ResolversObject<{
  notifications?: Resolver<
    Array<ResolversTypes['Notification']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationListOrBE'] = ResolversParentTypes['NotificationListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'NotificationList',
    ParentType,
    ContextType
  >;
}>;

export type NotificationSettingsResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationSettings'] = ResolversParentTypes['NotificationSettings'],
> = ResolversObject<{
  sendNotificationsToEmail?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  sendPushNotifications?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NotificationSettingsOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationSettingsOrBE'] = ResolversParentTypes['NotificationSettingsOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'NotificationSettings',
    ParentType,
    ContextType
  >;
}>;

export type NotificationTargetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['NotificationTarget'] = ResolversParentTypes['NotificationTarget'],
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['NotificationTargetType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OnlineStatusChangedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OnlineStatusChanged'] = ResolversParentTypes['OnlineStatusChanged'],
> = ResolversObject<{
  chatId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOnline?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OnlineStatusChangedOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OnlineStatusChangedOrBE'] = ResolversParentTypes['OnlineStatusChangedOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'OnlineStatusChanged',
    ParentType,
    ContextType
  >;
}>;

export type OrderContentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderContent'] = ResolversParentTypes['OrderContent'],
> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  metadata?: Resolver<
    ResolversTypes['ContentMetadata'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderMessage'] = ResolversParentTypes['OrderMessage'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEdited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  orderProperties?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  product?: Resolver<ResolversTypes['OrderContent'], ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderMessageOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderMessageOrEWF'] = ResolversParentTypes['OrderMessageOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'OrderMessage',
    ParentType,
    ContextType
  >;
}>;

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = ResolversObject<{
  attachments?: Resolver<
    Array<ResolversTypes['File']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  collection?: Resolver<ResolversTypes['Collection'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  deliveryTerms?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is18Plus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isInCart?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isService?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  linkId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oldPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  properties?: Resolver<
    Array<ResolversTypes['ProductProperty']>,
    ParentType,
    ContextType
  >;
  relatedProducts?: Resolver<
    Array<ResolversTypes['Product']>,
    ParentType,
    ContextType
  >;
  reviewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  viewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductList'] = ResolversParentTypes['ProductList'],
> = ResolversObject<{
  products?: Resolver<
    Array<ResolversTypes['Product']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductListOrBE'] = ResolversParentTypes['ProductListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'ProductList',
    ParentType,
    ContextType
  >;
}>;

export type ProductOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductOrBE'] = ResolversParentTypes['ProductOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'Product',
    ParentType,
    ContextType
  >;
}>;

export type ProductOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductOrEWF'] = ResolversParentTypes['ProductOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Product',
    ParentType,
    ContextType
  >;
}>;

export type ProductPropertyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductProperty'] = ResolversParentTypes['ProductProperty'],
> = ResolversObject<{
  property?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  values?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Publication'] = ResolversParentTypes['Publication'],
> = ResolversObject<{
  attachments?: Resolver<
    Array<ResolversTypes['File']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  commentsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is18Plus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isCommentable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFavourite?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  showInFeed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  unreadCommentsCount?: Resolver<
    ResolversTypes['Int'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  viewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublicationList'] = ResolversParentTypes['PublicationList'],
> = ResolversObject<{
  publications?: Resolver<
    Array<ResolversTypes['Publication']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicationListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublicationListOrBE'] = ResolversParentTypes['PublicationListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'PublicationList',
    ParentType,
    ContextType
  >;
}>;

export type PublicationListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublicationListOrEWF'] = ResolversParentTypes['PublicationListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'PublicationList',
    ParentType,
    ContextType
  >;
}>;

export type PublicationOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublicationOrBE'] = ResolversParentTypes['PublicationOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'Publication',
    ParentType,
    ContextType
  >;
}>;

export type PublicationOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['PublicationOrEWF'] = ResolversParentTypes['PublicationOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Publication',
    ParentType,
    ContextType
  >;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = ResolversObject<{
  createTokens?: Resolver<
    ResolversTypes['CreateTokensResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryCreateTokensArgs, 'login' | 'password'>
  >;
  deleteRefreshToken?: Resolver<
    Maybe<ResolversTypes['BaseError']>,
    ParentType,
    ContextType,
    RequireFields<QueryDeleteRefreshTokenArgs, 'refreshToken'>
  >;
  getActiveNotifications?: Resolver<
    ResolversTypes['NotificationListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetActiveNotificationsArgs, 'userId'>
  >;
  getActiveTariff?: Resolver<
    ResolversTypes['TariffOrBE'],
    ParentType,
    ContextType
  >;
  getAlbumsByUserId?: Resolver<
    ResolversTypes['GetAlbumsByUserIdResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryGetAlbumsByUserIdArgs, 'id'>
  >;
  getArticleRecommendations?: Resolver<
    ResolversTypes['ArticleListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetArticleRecommendationsArgs, 'limit' | 'sessionId'>
  >;
  getArticleSubscriptions?: Resolver<
    ResolversTypes['ArticleListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetArticleSubscriptionsArgs, 'limit' | 'skip'>
  >;
  getBlockedUsers?: Resolver<
    ResolversTypes['UserListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetBlockedUsersArgs, 'limit' | 'query' | 'skip'>
  >;
  getCartItems?: Resolver<
    ResolversTypes['CartItemsOrBE'],
    ParentType,
    ContextType
  >;
  getCatalogProducts?: Resolver<
    ResolversTypes['ProductListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetCatalogProductsArgs, 'id' | 'limit' | 'skip'>
  >;
  getChatByUserId?: Resolver<
    ResolversTypes['ChatOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetChatByUserIdArgs, 'userId'>
  >;
  getChats?: Resolver<
    ResolversTypes['ChatListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetChatsArgs, 'limit' | 'skip'>
  >;
  getChatsWithOrder?: Resolver<
    ResolversTypes['ChatListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetChatsWithOrderArgs, 'limit' | 'skip'>
  >;
  getCode?: Resolver<
    Maybe<ResolversTypes['GetCodeResponse']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCodeArgs, 'target' | 'transport'>
  >;
  getCommentReplies?: Resolver<
    ResolversTypes['CommentListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetCommentRepliesArgs, 'id' | 'limit' | 'skip'>
  >;
  getCommentsWithTopComment?: Resolver<
    ResolversTypes['CommentWithRepliesOrEWF'],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetCommentsWithTopCommentArgs,
      'id' | 'limit' | 'skip' | 'sorting'
    >
  >;
  getComplaints?: Resolver<
    ResolversTypes['GetComplaintsOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetComplaintsArgs, 'limit' | 'skip'>
  >;
  getContentComments?: Resolver<
    ResolversTypes['CommentWithRepliesListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetContentCommentsArgs,
      'content' | 'limit' | 'skip' | 'sorting'
    >
  >;
  getFavouriteArticles?: Resolver<
    ResolversTypes['ArticleListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetFavouriteArticlesArgs, 'limit' | 'skip'>
  >;
  getFavouriteProducts?: Resolver<
    ResolversTypes['ProductListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetFavouriteProductsArgs, 'limit' | 'skip'>
  >;
  getFavouritePublications?: Resolver<
    ResolversTypes['PublicationListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetFavouritePublicationsArgs, 'limit' | 'skip'>
  >;
  getFinalTypeByContentId?: Resolver<
    ResolversTypes['GetComplaintFinalTypeOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetFinalTypeByContentIdArgs, 'metadata'>
  >;
  getHashtags?: Resolver<
    ResolversTypes['ListHashtagsOrBE'],
    ParentType,
    ContextType
  >;
  getMe?: Resolver<ResolversTypes['GetMeResponse'], ParentType, ContextType>;
  getMessages?: Resolver<
    ResolversTypes['MessageListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetMessagesArgs,
      'chatId' | 'lastReadTimestamp' | 'limit' | 'skip'
    >
  >;
  getMyPublications?: Resolver<
    ResolversTypes['PublicationListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetMyPublicationsArgs, 'isVideo' | 'limit' | 'skip'>
  >;
  getMyTopics?: Resolver<
    ResolversTypes['TopicListOrBE'],
    ParentType,
    ContextType
  >;
  getNotifications?: Resolver<
    ResolversTypes['NotificationListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetNotificationsArgs, 'userId'>
  >;
  getPopularTags?: Resolver<
    ResolversTypes['TagListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPopularTagsArgs, 'limit' | 'skip'>
  >;
  getProductsByCollectionId?: Resolver<
    ResolversTypes['ProductListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetProductsByCollectionIdArgs, 'id' | 'limit' | 'skip'>
  >;
  getPublicationByCommentId?: Resolver<
    ResolversTypes['PublicationOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPublicationByCommentIdArgs, 'id'>
  >;
  getPublicationRecommendations?: Resolver<
    ResolversTypes['PublicationListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPublicationRecommendationsArgs, 'limit' | 'sessionId'>
  >;
  getPublicationSubscriptions?: Resolver<
    ResolversTypes['PublicationListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPublicationSubscriptionsArgs, 'limit' | 'skip'>
  >;
  getPublicationsByTag?: Resolver<
    ResolversTypes['PublicationListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetPublicationsByTagArgs, 'limit' | 'skip' | 'tag'>
  >;
  getPublicationsByUserId?: Resolver<
    ResolversTypes['PublicationListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetPublicationsByUserIdArgs,
      'id' | 'limit' | 'onlyVideo' | 'skip'
    >
  >;
  getReactionAuthors?: Resolver<
    ResolversTypes['UserListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<
      QueryGetReactionAuthorsArgs,
      'commentId' | 'limit' | 'reactionType' | 'skip'
    >
  >;
  getRecentBlogs?: Resolver<
    ResolversTypes['GetRecentBlogsListOrBE'],
    ParentType,
    ContextType
  >;
  getRecentStories?: Resolver<
    ResolversTypes['GetRecentStoriesOrBE'],
    ParentType,
    ContextType
  >;
  getRecommendedUsers?: Resolver<
    ResolversTypes['UserListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetRecommendedUsersArgs, 'limit' | 'sessionId'>
  >;
  getReviewsByProductId?: Resolver<
    ResolversTypes['ReviewListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryGetReviewsByProductIdArgs, 'id' | 'limit' | 'skip'>
  >;
  getSettings?: Resolver<
    ResolversTypes['NotificationSettingsOrBE'],
    ParentType,
    ContextType
  >;
  getTechSupportChat?: Resolver<
    ResolversTypes['ChatOrBE'],
    ParentType,
    ContextType
  >;
  getTechSupportChats?: Resolver<
    ResolversTypes['ChatListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetTechSupportChatsArgs, 'limit' | 'skip'>
  >;
  getUserStories?: Resolver<
    ResolversTypes['GetUserStoriesOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserStoriesArgs, 'userId'>
  >;
  getUsers?: Resolver<
    ResolversTypes['UserListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryGetUsersArgs, 'limit' | 'skip'>
  >;
  hints?: Resolver<
    ResolversTypes['GetHintsListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryHintsArgs, 'limit' | 'q'>
  >;
  history?: Resolver<
    ResolversTypes['GetHistoryListOrBE'],
    ParentType,
    ContextType
  >;
  isEmailExist?: Resolver<
    ResolversTypes['BooleanObjectOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryIsEmailExistArgs, 'email'>
  >;
  isLoginExist?: Resolver<
    ResolversTypes['BooleanObjectOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryIsLoginExistArgs, 'login'>
  >;
  isPhoneExist?: Resolver<
    ResolversTypes['BooleanObjectOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryIsPhoneExistArgs, 'phone'>
  >;
  listFollowers?: Resolver<
    ResolversTypes['UserListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryListFollowersArgs, 'id' | 'limit' | 'skip'>
  >;
  listSubscriptions?: Resolver<
    ResolversTypes['UserListOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryListSubscriptionsArgs, 'id' | 'limit' | 'skip'>
  >;
  refreshAccessToken?: Resolver<
    ResolversTypes['RefreshAccessTokenResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryRefreshAccessTokenArgs, 'refreshToken'>
  >;
  retrieveAlbum?: Resolver<
    ResolversTypes['RetrieveAlbumResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveAlbumArgs, 'id'>
  >;
  retrieveArticle?: Resolver<
    ResolversTypes['ArticleOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveArticleArgs, 'id'>
  >;
  retrieveBlog?: Resolver<
    ResolversTypes['BlogOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveBlogArgs, 'id' | 'topicId'>
  >;
  retrieveCatalog?: Resolver<
    ResolversTypes['CatalogOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveCatalogArgs, 'id'>
  >;
  retrieveCollection?: Resolver<
    ResolversTypes['CollectionOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveCollectionArgs, 'id'>
  >;
  retrieveComplaint?: Resolver<
    ResolversTypes['RetrieveComplaintOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveComplaintArgs, 'id'>
  >;
  retrieveFile?: Resolver<
    ResolversTypes['RetrieveFileResponse'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveFileArgs, 'id'>
  >;
  retrieveMessage?: Resolver<
    ResolversTypes['MessageOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveMessageArgs, 'chatId' | 'id'>
  >;
  retrieveProduct?: Resolver<
    ResolversTypes['ProductOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveProductArgs, 'id'>
  >;
  retrievePublication?: Resolver<
    ResolversTypes['PublicationOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrievePublicationArgs, 'id'>
  >;
  retrieveStory?: Resolver<
    ResolversTypes['RetrieveStoryOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveStoryArgs, 'id'>
  >;
  retrieveUser?: Resolver<
    ResolversTypes['UserOrBE'],
    ParentType,
    ContextType,
    RequireFields<QueryRetrieveUserArgs, 'id'>
  >;
  searchBlogs?: Resolver<
    ResolversTypes['SearchBlogsListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchBlogsArgs, 'search'>
  >;
  searchFollowers?: Resolver<
    ResolversTypes['UserListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchFollowersArgs, 'id' | 'limit' | 'q' | 'skip'>
  >;
  searchProducts?: Resolver<
    ResolversTypes['SearchProductsListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchProductsArgs, 'search'>
  >;
  searchPublications?: Resolver<
    ResolversTypes['SearchPublicationsListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchPublicationsArgs, 'search'>
  >;
  searchSubscriptions?: Resolver<
    ResolversTypes['UserListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchSubscriptionsArgs, 'id' | 'limit' | 'q' | 'skip'>
  >;
  searchUsers?: Resolver<
    ResolversTypes['SearchUsersListOrEWF'],
    ParentType,
    ContextType,
    RequireFields<QuerySearchUsersArgs, 'search'>
  >;
}>;

export type ReactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction'],
> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes['CommentReactionType'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecentBlogResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecentBlog'] = ResolversParentTypes['RecentBlog'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unreadCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecentBlogsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecentBlogsList'] = ResolversParentTypes['RecentBlogsList'],
> = ResolversObject<{
  records?: Resolver<
    Array<ResolversTypes['RecentBlog']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RecordTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RecordType'] = ResolversParentTypes['RecordType'],
> = ResolversObject<{
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RefreshAccessTokenResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RefreshAccessTokenResponse'] = ResolversParentTypes['RefreshAccessTokenResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'AccessToken' | 'BaseError',
    ParentType,
    ContextType
  >;
}>;

export type RegularMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegularMessage'] = ResolversParentTypes['RegularMessage'],
> = ResolversObject<{
  attachments?: Resolver<
    Array<ResolversTypes['File']>,
    ParentType,
    ContextType
  >;
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  chat?: Resolver<ResolversTypes['Chat'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isEdited?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  references?: Resolver<
    Array<ResolversTypes['RecordType']>,
    ParentType,
    ContextType
  >;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegularMessageOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RegularMessageOrEWF'] = ResolversParentTypes['RegularMessageOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'RegularMessage',
    ParentType,
    ContextType
  >;
}>;

export type RetrieveAlbumResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RetrieveAlbumResponse'] = ResolversParentTypes['RetrieveAlbumResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'Album' | 'BaseError', ParentType, ContextType>;
}>;

export type RetrieveComplaintOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RetrieveComplaintOrBE'] = ResolversParentTypes['RetrieveComplaintOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'Complaint',
    ParentType,
    ContextType
  >;
}>;

export type RetrieveFileResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RetrieveFileResponse'] = ResolversParentTypes['RetrieveFileResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'File', ParentType, ContextType>;
}>;

export type RetrieveStoryOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RetrieveStoryOrBE'] = ResolversParentTypes['RetrieveStoryOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'Story', ParentType, ContextType>;
}>;

export type ReviewResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewList'] = ResolversParentTypes['ReviewList'],
> = ResolversObject<{
  reviews?: Resolver<Array<ResolversTypes['Review']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ReviewListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewListOrEWF'] = ResolversParentTypes['ReviewListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'ReviewList',
    ParentType,
    ContextType
  >;
}>;

export type ReviewOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ReviewOrEWF'] = ResolversParentTypes['ReviewOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Review',
    ParentType,
    ContextType
  >;
}>;

export type SearchBlogsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchBlogsList'] = ResolversParentTypes['SearchBlogsList'],
> = ResolversObject<{
  records?: Resolver<Array<ResolversTypes['Blog']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchBlogsListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchBlogsListOrEWF'] = ResolversParentTypes['SearchBlogsListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'SearchBlogsList',
    ParentType,
    ContextType
  >;
}>;

export type SearchProductsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchProductsList'] = ResolversParentTypes['SearchProductsList'],
> = ResolversObject<{
  records?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchProductsListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchProductsListOrEWF'] = ResolversParentTypes['SearchProductsListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'SearchProductsList',
    ParentType,
    ContextType
  >;
}>;

export type SearchPublicationsListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchPublicationsList'] = ResolversParentTypes['SearchPublicationsList'],
> = ResolversObject<{
  records?: Resolver<
    Array<ResolversTypes['Publication']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchPublicationsListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchPublicationsListOrEWF'] = ResolversParentTypes['SearchPublicationsListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'SearchPublicationsList',
    ParentType,
    ContextType
  >;
}>;

export type SearchUserRecordResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchUserRecord'] = ResolversParentTypes['SearchUserRecord'],
> = ResolversObject<{
  content?: Resolver<
    Array<ResolversTypes['Publication']>,
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchUsersListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchUsersList'] = ResolversParentTypes['SearchUsersList'],
> = ResolversObject<{
  records?: Resolver<
    Array<ResolversTypes['SearchUserRecord']>,
    ParentType,
    ContextType
  >;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SearchUsersListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SearchUsersListOrEWF'] = ResolversParentTypes['SearchUsersListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'SearchUsersList',
    ParentType,
    ContextType
  >;
}>;

export type SetComplaintDecisionOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SetComplaintDecisionOrEWF'] = ResolversParentTypes['SetComplaintDecisionOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Complaint' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export type SocketMessageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SocketMessage'] = ResolversParentTypes['SocketMessage'],
> = ResolversObject<{
  data?: Resolver<ResolversTypes['MessageUnion'], ParentType, ContextType>;
  tempKey?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SocketMessageOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SocketMessageOrBE'] = ResolversParentTypes['SocketMessageOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'SocketMessage',
    ParentType,
    ContextType
  >;
}>;

export type StoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Story'] = ResolversParentTypes['Story'],
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  file?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  objects?: Resolver<
    Array<ResolversTypes['StoryObject']>,
    ParentType,
    ContextType
  >;
  policy?: Resolver<
    ResolversTypes['VisibilityPolicy'],
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryFeedResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryFeed'] = ResolversParentTypes['StoryFeed'],
> = ResolversObject<{
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  stories?: Resolver<Array<ResolversTypes['Story']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryFeedListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryFeedList'] = ResolversParentTypes['StoryFeedList'],
> = ResolversObject<{
  items?: Resolver<Array<ResolversTypes['StoryFeed']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryGeolocationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryGeolocation'] = ResolversParentTypes['StoryGeolocation'],
> = ResolversObject<{
  coordinate?: Resolver<
    ResolversTypes['StoryGeolocationCoordinate'],
    ParentType,
    ContextType
  >;
  position?: Resolver<
    ResolversTypes['StoryObjectPosition'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryGeolocationCoordinateResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryGeolocationCoordinate'] = ResolversParentTypes['StoryGeolocationCoordinate'],
> = ResolversObject<{
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryLink'] = ResolversParentTypes['StoryLink'],
> = ResolversObject<{
  isAccountLinkMatched?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  linkName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<
    ResolversTypes['StoryObjectPosition'],
    ParentType,
    ContextType
  >;
  textColor?: Resolver<
    ResolversTypes['StoryTextColors'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryObject'] = ResolversParentTypes['StoryObject'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    | 'StoryGeolocation'
    | 'StoryLink'
    | 'StoryProductLink'
    | 'StoryText'
    | 'StoryUserReference',
    ParentType,
    ContextType
  >;
}>;

export type StoryObjectPositionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryObjectPosition'] = ResolversParentTypes['StoryObjectPosition'],
> = ResolversObject<{
  angle?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  scale?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryProductLinkResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryProductLink'] = ResolversParentTypes['StoryProductLink'],
> = ResolversObject<{
  catalogId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  collectionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<
    ResolversTypes['StoryObjectPosition'],
    ParentType,
    ContextType
  >;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  productName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  textColor?: Resolver<
    ResolversTypes['StoryTextColors'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryTextResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryText'] = ResolversParentTypes['StoryText'],
> = ResolversObject<{
  font?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fontSize?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<
    ResolversTypes['StoryObjectPosition'],
    ParentType,
    ContextType
  >;
  textColor?: Resolver<
    ResolversTypes['StoryTextColors'],
    ParentType,
    ContextType
  >;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoryUserReferenceResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StoryUserReference'] = ResolversParentTypes['StoryUserReference'],
> = ResolversObject<{
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<
    ResolversTypes['StoryObjectPosition'],
    ParentType,
    ContextType
  >;
  textColor?: Resolver<
    ResolversTypes['StoryTextColors'],
    ParentType,
    ContextType
  >;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StringObjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['StringObject'] = ResolversParentTypes['StringObject'],
> = ResolversObject<{
  string?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = ResolversObject<{
  onLastReadTimestampChanged?: SubscriptionResolver<
    ResolversTypes['LastReadTimestampChangedOrBE'],
    'onLastReadTimestampChanged',
    ParentType,
    ContextType
  >;
  onNewMessage?: SubscriptionResolver<
    ResolversTypes['SocketMessageOrBE'],
    'onNewMessage',
    ParentType,
    ContextType
  >;
  onOnlineStatusChanged?: SubscriptionResolver<
    ResolversTypes['OnlineStatusChangedOrBE'],
    'onOnlineStatusChanged',
    ParentType,
    ContextType
  >;
}>;

export type TagListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagList'] = ResolversParentTypes['TagList'],
> = ResolversObject<{
  tags?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TagListOrEWF'] = ResolversParentTypes['TagListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'TagList',
    ParentType,
    ContextType
  >;
}>;

export type TariffResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Tariff'] = ResolversParentTypes['Tariff'],
> = ResolversObject<{
  addressesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expiredAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hashtagsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mailingRecipients?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mailingToAll?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  productsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  videoLengthS?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TariffOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TariffOrBE'] = ResolversParentTypes['TariffOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'Tariff', ParentType, ContextType>;
}>;

export type TariffOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TariffOrEWF'] = ResolversParentTypes['TariffOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Tariff',
    ParentType,
    ContextType
  >;
}>;

export type TokenPairResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TokenPair'] = ResolversParentTypes['TokenPair'],
> = ResolversObject<{
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopicResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Topic'] = ResolversParentTypes['Topic'],
> = ResolversObject<{
  blog?: Resolver<ResolversTypes['Blog'], ParentType, ContextType>;
  cover?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopicListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicList'] = ResolversParentTypes['TopicList'],
> = ResolversObject<{
  topics?: Resolver<Array<ResolversTypes['Topic']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TopicListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicListOrBE'] = ResolversParentTypes['TopicListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'TopicList',
    ParentType,
    ContextType
  >;
}>;

export type TopicOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['TopicOrEWF'] = ResolversParentTypes['TopicOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'Topic',
    ParentType,
    ContextType
  >;
}>;

export type UpdateAlbumResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UpdateAlbumResponse'] = ResolversParentTypes['UpdateAlbumResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'Album' | 'ErrorWithFields',
    ParentType,
    ContextType
  >;
}>;

export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UploadFileResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UploadFileResponse'] = ResolversParentTypes['UploadFileResponse'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'File', ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = ResolversObject<{
  additionalInfo?: Resolver<
    Maybe<ResolversTypes['AdditionalInfo']>,
    ParentType,
    ContextType
  >;
  address?: Resolver<
    Maybe<ResolversTypes['AddressOut']>,
    ParentType,
    ContextType
  >;
  avatar?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dateOfBirth?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isBlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFollowing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFriend?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLiked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  likesCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sex?: Resolver<Maybe<ResolversTypes['UserSex']>, ParentType, ContextType>;
  shortDescription?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  subscribersCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subscriptionsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  viewsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  workingHours?: Resolver<
    Maybe<ResolversTypes['WeekWorkingHours']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserListResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserList'] = ResolversParentTypes['UserList'],
> = ResolversObject<{
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserListOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserListOrBE'] = ResolversParentTypes['UserListOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'BaseError' | 'UserList',
    ParentType,
    ContextType
  >;
}>;

export type UserListOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserListOrEWF'] = ResolversParentTypes['UserListOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'UserList',
    ParentType,
    ContextType
  >;
}>;

export type UserOrBeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserOrBE'] = ResolversParentTypes['UserOrBE'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<'BaseError' | 'User', ParentType, ContextType>;
}>;

export type UserOrEwfResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserOrEWF'] = ResolversParentTypes['UserOrEWF'],
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'ErrorWithFields' | 'User',
    ParentType,
    ContextType
  >;
}>;

export interface VoidScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type WeekWorkingHoursResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WeekWorkingHours'] = ResolversParentTypes['WeekWorkingHours'],
> = ResolversObject<{
  friday?: Resolver<ResolversTypes['DayWorkingHours'], ParentType, ContextType>;
  monday?: Resolver<ResolversTypes['DayWorkingHours'], ParentType, ContextType>;
  saturday?: Resolver<
    ResolversTypes['DayWorkingHours'],
    ParentType,
    ContextType
  >;
  sunday?: Resolver<ResolversTypes['DayWorkingHours'], ParentType, ContextType>;
  thursday?: Resolver<
    ResolversTypes['DayWorkingHours'],
    ParentType,
    ContextType
  >;
  tuesday?: Resolver<
    ResolversTypes['DayWorkingHours'],
    ParentType,
    ContextType
  >;
  wednesday?: Resolver<
    ResolversTypes['DayWorkingHours'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WorkingHoursResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['WorkingHours'] = ResolversParentTypes['WorkingHours'],
> = ResolversObject<{
  closesAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  opensAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AccessToken?: AccessTokenResolvers<ContextType>;
  AdditionalInfo?: AdditionalInfoResolvers<ContextType>;
  AddressOut?: AddressOutResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  Albums?: AlbumsResolvers<ContextType>;
  AppointmentContent?: AppointmentContentResolvers<ContextType>;
  AppointmentMessage?: AppointmentMessageResolvers<ContextType>;
  AppointmentMessageOrEWF?: AppointmentMessageOrEwfResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleList?: ArticleListResolvers<ContextType>;
  ArticleListOrBE?: ArticleListOrBeResolvers<ContextType>;
  ArticleOrBE?: ArticleOrBeResolvers<ContextType>;
  ArticleOrEWF?: ArticleOrEwfResolvers<ContextType>;
  BaseError?: BaseErrorResolvers<ContextType>;
  Blog?: BlogResolvers<ContextType>;
  BlogOrEWF?: BlogOrEwfResolvers<ContextType>;
  BooleanObject?: BooleanObjectResolvers<ContextType>;
  BooleanObjectOrBE?: BooleanObjectOrBeResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  CartItems?: CartItemsResolvers<ContextType>;
  CartItemsOrBE?: CartItemsOrBeResolvers<ContextType>;
  Catalog?: CatalogResolvers<ContextType>;
  CatalogOrBE?: CatalogOrBeResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  ChatList?: ChatListResolvers<ContextType>;
  ChatListOrBE?: ChatListOrBeResolvers<ContextType>;
  ChatOrBE?: ChatOrBeResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  CollectionOrBE?: CollectionOrBeResolvers<ContextType>;
  CollectionOrEWF?: CollectionOrEwfResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentList?: CommentListResolvers<ContextType>;
  CommentListOrEWF?: CommentListOrEwfResolvers<ContextType>;
  CommentReactions?: CommentReactionsResolvers<ContextType>;
  CommentTarget?: CommentTargetResolvers<ContextType>;
  CommentWithReplies?: CommentWithRepliesResolvers<ContextType>;
  CommentWithRepliesList?: CommentWithRepliesListResolvers<ContextType>;
  CommentWithRepliesListOrEWF?: CommentWithRepliesListOrEwfResolvers<ContextType>;
  CommentWithRepliesOrEWF?: CommentWithRepliesOrEwfResolvers<ContextType>;
  Complaint?: ComplaintResolvers<ContextType>;
  ComplaintFinalType?: ComplaintFinalTypeResolvers<ContextType>;
  ComplaintsList?: ComplaintsListResolvers<ContextType>;
  ContentMetadata?: ContentMetadataResolvers<ContextType>;
  CoordinateOut?: CoordinateOutResolvers<ContextType>;
  CreateAlbumResponse?: CreateAlbumResponseResolvers<ContextType>;
  CreateComplaintOrEWF?: CreateComplaintOrEwfResolvers<ContextType>;
  CreateStoryOrEWF?: CreateStoryOrEwfResolvers<ContextType>;
  CreateTokensResponse?: CreateTokensResponseResolvers<ContextType>;
  DayWorkingHours?: DayWorkingHoursResolvers<ContextType>;
  DeletedComment?: DeletedCommentResolvers<ContextType>;
  ErrorWithFields?: ErrorWithFieldsResolvers<ContextType>;
  ExistingComment?: ExistingCommentResolvers<ContextType>;
  ExistingCommentOrEWF?: ExistingCommentOrEwfResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  ForwardedContent?: ForwardedContentResolvers<ContextType>;
  ForwardedContentData?: ForwardedContentDataResolvers<ContextType>;
  ForwardedMessage?: ForwardedMessageResolvers<ContextType>;
  ForwardedMessageOrEWF?: ForwardedMessageOrEwfResolvers<ContextType>;
  GetAlbumsByUserIdResponse?: GetAlbumsByUserIdResponseResolvers<ContextType>;
  GetCodeResponse?: GetCodeResponseResolvers<ContextType>;
  GetComplaintFinalTypeOrEWF?: GetComplaintFinalTypeOrEwfResolvers<ContextType>;
  GetComplaintsOrBE?: GetComplaintsOrBeResolvers<ContextType>;
  GetHintsListOrBE?: GetHintsListOrBeResolvers<ContextType>;
  GetHistoryListOrBE?: GetHistoryListOrBeResolvers<ContextType>;
  GetMeResponse?: GetMeResponseResolvers<ContextType>;
  GetRecentBlogsListOrBE?: GetRecentBlogsListOrBeResolvers<ContextType>;
  GetRecentStoriesOrBE?: GetRecentStoriesOrBeResolvers<ContextType>;
  GetUserStoriesOrBE?: GetUserStoriesOrBeResolvers<ContextType>;
  HintsList?: HintsListResolvers<ContextType>;
  HistoryList?: HistoryListResolvers<ContextType>;
  IBaseComment?: IBaseCommentResolvers<ContextType>;
  LastMessage?: LastMessageResolvers<ContextType>;
  LastReadTimestampChanged?: LastReadTimestampChangedResolvers<ContextType>;
  LastReadTimestampChangedOrBE?: LastReadTimestampChangedOrBeResolvers<ContextType>;
  ListHashtags?: ListHashtagsResolvers<ContextType>;
  ListHashtagsOrBE?: ListHashtagsOrBeResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessageList?: MessageListResolvers<ContextType>;
  MessageListOrEWF?: MessageListOrEwfResolvers<ContextType>;
  MessageOrEWF?: MessageOrEwfResolvers<ContextType>;
  MessageUnion?: MessageUnionResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  NotificationList?: NotificationListResolvers<ContextType>;
  NotificationListOrBE?: NotificationListOrBeResolvers<ContextType>;
  NotificationSettings?: NotificationSettingsResolvers<ContextType>;
  NotificationSettingsOrBE?: NotificationSettingsOrBeResolvers<ContextType>;
  NotificationTarget?: NotificationTargetResolvers<ContextType>;
  OnlineStatusChanged?: OnlineStatusChangedResolvers<ContextType>;
  OnlineStatusChangedOrBE?: OnlineStatusChangedOrBeResolvers<ContextType>;
  OrderContent?: OrderContentResolvers<ContextType>;
  OrderMessage?: OrderMessageResolvers<ContextType>;
  OrderMessageOrEWF?: OrderMessageOrEwfResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductList?: ProductListResolvers<ContextType>;
  ProductListOrBE?: ProductListOrBeResolvers<ContextType>;
  ProductOrBE?: ProductOrBeResolvers<ContextType>;
  ProductOrEWF?: ProductOrEwfResolvers<ContextType>;
  ProductProperty?: ProductPropertyResolvers<ContextType>;
  Publication?: PublicationResolvers<ContextType>;
  PublicationList?: PublicationListResolvers<ContextType>;
  PublicationListOrBE?: PublicationListOrBeResolvers<ContextType>;
  PublicationListOrEWF?: PublicationListOrEwfResolvers<ContextType>;
  PublicationOrBE?: PublicationOrBeResolvers<ContextType>;
  PublicationOrEWF?: PublicationOrEwfResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  RecentBlog?: RecentBlogResolvers<ContextType>;
  RecentBlogsList?: RecentBlogsListResolvers<ContextType>;
  RecordType?: RecordTypeResolvers<ContextType>;
  RefreshAccessTokenResponse?: RefreshAccessTokenResponseResolvers<ContextType>;
  RegularMessage?: RegularMessageResolvers<ContextType>;
  RegularMessageOrEWF?: RegularMessageOrEwfResolvers<ContextType>;
  RetrieveAlbumResponse?: RetrieveAlbumResponseResolvers<ContextType>;
  RetrieveComplaintOrBE?: RetrieveComplaintOrBeResolvers<ContextType>;
  RetrieveFileResponse?: RetrieveFileResponseResolvers<ContextType>;
  RetrieveStoryOrBE?: RetrieveStoryOrBeResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewList?: ReviewListResolvers<ContextType>;
  ReviewListOrEWF?: ReviewListOrEwfResolvers<ContextType>;
  ReviewOrEWF?: ReviewOrEwfResolvers<ContextType>;
  SearchBlogsList?: SearchBlogsListResolvers<ContextType>;
  SearchBlogsListOrEWF?: SearchBlogsListOrEwfResolvers<ContextType>;
  SearchProductsList?: SearchProductsListResolvers<ContextType>;
  SearchProductsListOrEWF?: SearchProductsListOrEwfResolvers<ContextType>;
  SearchPublicationsList?: SearchPublicationsListResolvers<ContextType>;
  SearchPublicationsListOrEWF?: SearchPublicationsListOrEwfResolvers<ContextType>;
  SearchUserRecord?: SearchUserRecordResolvers<ContextType>;
  SearchUsersList?: SearchUsersListResolvers<ContextType>;
  SearchUsersListOrEWF?: SearchUsersListOrEwfResolvers<ContextType>;
  SetComplaintDecisionOrEWF?: SetComplaintDecisionOrEwfResolvers<ContextType>;
  SocketMessage?: SocketMessageResolvers<ContextType>;
  SocketMessageOrBE?: SocketMessageOrBeResolvers<ContextType>;
  Story?: StoryResolvers<ContextType>;
  StoryFeed?: StoryFeedResolvers<ContextType>;
  StoryFeedList?: StoryFeedListResolvers<ContextType>;
  StoryGeolocation?: StoryGeolocationResolvers<ContextType>;
  StoryGeolocationCoordinate?: StoryGeolocationCoordinateResolvers<ContextType>;
  StoryLink?: StoryLinkResolvers<ContextType>;
  StoryObject?: StoryObjectResolvers<ContextType>;
  StoryObjectPosition?: StoryObjectPositionResolvers<ContextType>;
  StoryProductLink?: StoryProductLinkResolvers<ContextType>;
  StoryText?: StoryTextResolvers<ContextType>;
  StoryUserReference?: StoryUserReferenceResolvers<ContextType>;
  StringObject?: StringObjectResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TagList?: TagListResolvers<ContextType>;
  TagListOrEWF?: TagListOrEwfResolvers<ContextType>;
  Tariff?: TariffResolvers<ContextType>;
  TariffOrBE?: TariffOrBeResolvers<ContextType>;
  TariffOrEWF?: TariffOrEwfResolvers<ContextType>;
  TokenPair?: TokenPairResolvers<ContextType>;
  Topic?: TopicResolvers<ContextType>;
  TopicList?: TopicListResolvers<ContextType>;
  TopicListOrBE?: TopicListOrBeResolvers<ContextType>;
  TopicOrEWF?: TopicOrEwfResolvers<ContextType>;
  UpdateAlbumResponse?: UpdateAlbumResponseResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  UploadFileResponse?: UploadFileResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserList?: UserListResolvers<ContextType>;
  UserListOrBE?: UserListOrBeResolvers<ContextType>;
  UserListOrEWF?: UserListOrEwfResolvers<ContextType>;
  UserOrBE?: UserOrBeResolvers<ContextType>;
  UserOrEWF?: UserOrEwfResolvers<ContextType>;
  Void?: GraphQLScalarType;
  WeekWorkingHours?: WeekWorkingHoursResolvers<ContextType>;
  WorkingHours?: WorkingHoursResolvers<ContextType>;
}>;
