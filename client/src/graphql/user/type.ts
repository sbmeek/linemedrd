export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
};

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;

export type CreateUserInput = {
	age?: InputMaybe<Scalars['Float']>;
	birthday?: InputMaybe<Scalars['DateTime']>;
	codConfEmail?: InputMaybe<Scalars['String']>;
	codRecPwd?: InputMaybe<Scalars['String']>;
	email: Scalars['String'];
	gender?: Scalars['String'];
	homeNumber?: InputMaybe<Scalars['String']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	isEmailConfirmed?: InputMaybe<Scalars['Boolean']>;
	lastname?: Scalars['String'];
	name?: Scalars['String'];
	password: Scalars['String'];
	phoneNumber?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<Scalars['Float']>;
	userAdress?: InputMaybe<Scalars['String']>;
	userPreferences?: InputMaybe<Scalars['String']>;
	username: Scalars['String'];
};

export interface MutationCreateUserArgs {
	origin: Scalars['String'];
	payload: CreateUserInput;
}

export interface UserData {
	_id: String;
	email: String;
	username: String;
}
