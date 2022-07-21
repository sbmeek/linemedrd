export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	DateTime: any;
};

export type Agenda = {
	__typename?: 'Agenda';
	_id: Scalars['String'];
	appointments: Array<Appointment>;
	doctorId: Doctor;
};

export type AgendaAppointmentsArgs = {
	populate: Scalars['Boolean'];
};

export type AgendaDoctorIdArgs = {
	populate: Scalars['Boolean'];
};

export type Appointment = {
	__typename?: 'Appointment';
	_id: Scalars['String'];
	content: AppointmentContent;
	doctorId: Doctor;
	issueDate: Scalars['DateTime'];
	patientComment: Scalars['String'];
	patientId: Patient;
	rating: Scalars['Float'];
	sequence: Scalars['Float'];
	state: Scalars['String'];
	usesArs: Scalars['Boolean'];
};

export type AppointmentContentArgs = {
	populate: Scalars['Boolean'];
};

export type AppointmentContent = {
	__typename?: 'AppointmentContent';
	_id: Scalars['String'];
	appointmentDate: Scalars['DateTime'];
	attachments: Array<Scalars['String']>;
	comments: Array<Scalars['String']>;
	diagnostic: Scalars['String'];
	reason: Scalars['String'];
	specialtyId: Specialties;
};

export type AppointmentContentSpecialtyIdArgs = {
	populate: Scalars['Boolean'];
};

export type CreateAdressInput = {
	city: Scalars['String'];
	province: Scalars['String'];
	sector: Scalars['String'];
	street: Scalars['String'];
};

export type CreateAgendaInput = {
	appointments: Array<Scalars['String']>;
	doctorId: Scalars['String'];
};

export type CreateApmtContentInput = {
	appointmentDate: Scalars['DateTime'];
	attachments?: InputMaybe<Array<Scalars['String']>>;
	comments: Array<Scalars['String']>;
	diagnostic: Scalars['String'];
	reason?: InputMaybe<Scalars['String']>;
	specialtyId: Scalars['String'];
};

export type CreateAppointmentInput = {
	content?: InputMaybe<Scalars['String']>;
	doctorId: Scalars['String'];
	issueDate?: InputMaybe<Scalars['DateTime']>;
	patientComment?: InputMaybe<Scalars['String']>;
	patientId: Scalars['String'];
	rating?: InputMaybe<Scalars['Float']>;
	sequence?: InputMaybe<Scalars['Float']>;
	state?: InputMaybe<Scalars['Float']>;
	usesArs?: InputMaybe<Scalars['Boolean']>;
};

export type CreateDaysInput = {
	fri: Scalars['Boolean'];
	mon: Scalars['Boolean'];
	sat: Scalars['Boolean'];
	sun: Scalars['Boolean'];
	thu: Scalars['Boolean'];
	tue: Scalars['Boolean'];
	wed: Scalars['Boolean'];
};

export type CreateDoctorInput = {
	ars?: InputMaybe<Array<Scalars['String']>>;
	description: Scalars['String'];
	exequatur: Scalars['String'];
	imageUrl?: InputMaybe<Array<Scalars['String']>>;
	organization: Scalars['String'];
	patienLimit?: InputMaybe<Scalars['Float']>;
	ratingTotal?: InputMaybe<Scalars['Float']>;
	specialities: Array<Scalars['String']>;
	userId: Scalars['String'];
	workday: Array<Scalars['String']>;
};

export type CreatePatientInput = {
	allergies?: InputMaybe<Array<Scalars['String']>>;
	diseases?: InputMaybe<Array<Scalars['String']>>;
	userId: Scalars['String'];
};

export type CreatePrefInput = {
	isEmailPublic: Scalars['Boolean'];
	isHomeNumberPublic: Scalars['Boolean'];
	isPhoneNumberPublic: Scalars['Boolean'];
	isUserAdressPublic: Scalars['Boolean'];
};

export type CreateRecordInput = {
	actualDoc?: InputMaybe<Scalars['String']>;
	content: Array<Scalars['String']>;
	patientId: Scalars['String'];
};

export type CreateReportInput = {
	doctorId: Scalars['String'];
	emissionDate?: InputMaybe<Scalars['DateTime']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	patientId: Scalars['String'];
	reason: Scalars['String'];
};

export type CreateSpecialtiesInput = {
	description: Scalars['String'];
};

export type CreateUserInput = {
	age?: InputMaybe<Scalars['Float']>;
	birthday?: InputMaybe<Scalars['DateTime']>;
	codConfEmail?: InputMaybe<Scalars['String']>;
	codRecPwd?: InputMaybe<Scalars['String']>;
	email: Scalars['String'];
	gender: Scalars['String'];
	homeNumber?: InputMaybe<Scalars['String']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	isEmailConfirmed?: InputMaybe<Scalars['Boolean']>;
	lastname: Scalars['String'];
	name: Scalars['String'];
	password: Scalars['String'];
	phoneNumber?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<Scalars['Float']>;
	userAdress?: InputMaybe<Scalars['String']>;
	userPreferences?: InputMaybe<Scalars['String']>;
	username: Scalars['String'];
};

export type CreateWorkdayInput = {
	adress: Scalars['String'];
	contact: Scalars['String'];
	days: Scalars['String'];
	hourRange: Array<Scalars['Float']>;
};

export type Days = {
	__typename?: 'Days';
	_id: Scalars['String'];
	fri: Scalars['Boolean'];
	mon: Scalars['Boolean'];
	sat: Scalars['Boolean'];
	sun: Scalars['Boolean'];
	thu: Scalars['Boolean'];
	tue: Scalars['Boolean'];
	wed: Scalars['Boolean'];
};

export type Doctor = {
	__typename?: 'Doctor';
	_id: Scalars['String'];
	ars: Array<Scalars['String']>;
	description: Scalars['String'];
	exequatur: Scalars['String'];
	imageUrl: Array<Scalars['String']>;
	organization: Scalars['String'];
	patientLimit: Scalars['Float'];
	ratingTotal: Scalars['Float'];
	specialties: Array<Specialties>;
	user: User;
	userId: User;
	workday: Array<Workday>;
};

export type DoctorSpecialtiesArgs = {
	populate: Scalars['Boolean'];
};

export type DoctorUserArgs = {
	populate: Scalars['Boolean'];
};

export type DoctorWorkdayArgs = {
	populate: Scalars['Boolean'];
};

export type ListAgendaInput = {
	_id?: InputMaybe<Scalars['String']>;
	appointments?: InputMaybe<Array<Scalars['String']>>;
	doctorId?: InputMaybe<Scalars['String']>;
};

export type ListApmtContentInput = {
	_id?: InputMaybe<Scalars['String']>;
	appointmentDate?: InputMaybe<Scalars['DateTime']>;
	attachments?: InputMaybe<Array<Scalars['String']>>;
	comments?: InputMaybe<Array<Scalars['String']>>;
	diagnostic?: InputMaybe<Scalars['String']>;
	reason?: InputMaybe<Scalars['String']>;
	specialtyId?: InputMaybe<Scalars['String']>;
};

export type ListAppointmentInput = {
	_id?: InputMaybe<Scalars['String']>;
	content?: InputMaybe<Scalars['String']>;
	doctorId?: InputMaybe<Scalars['String']>;
	issueDate?: InputMaybe<Scalars['DateTime']>;
	patientComment?: InputMaybe<Scalars['String']>;
	patientId?: InputMaybe<Scalars['String']>;
	rating?: InputMaybe<Scalars['Float']>;
	sequence?: InputMaybe<Scalars['Float']>;
	state?: InputMaybe<Scalars['Float']>;
	usesArs?: InputMaybe<Scalars['Boolean']>;
};

export type ListDoctorInput = {
	_id?: InputMaybe<Scalars['String']>;
	ars?: InputMaybe<Array<Scalars['String']>>;
	description?: InputMaybe<Scalars['String']>;
	imageUrl?: InputMaybe<Array<Scalars['String']>>;
	organization?: InputMaybe<Scalars['String']>;
	patienLimit?: InputMaybe<Scalars['Float']>;
	ratingTotal?: InputMaybe<Scalars['Float']>;
	specialities?: InputMaybe<Array<Scalars['String']>>;
	userId?: InputMaybe<Scalars['String']>;
	workday?: InputMaybe<Array<Scalars['String']>>;
};

export type ListPatientInput = {
	_id?: InputMaybe<Scalars['String']>;
	allergies?: InputMaybe<Array<Scalars['String']>>;
	diseases?: InputMaybe<Array<Scalars['String']>>;
	userId?: InputMaybe<Scalars['String']>;
};

export type ListRecordInput = {
	_id?: InputMaybe<Scalars['String']>;
	actualDoc?: InputMaybe<Scalars['String']>;
	content?: InputMaybe<Array<Scalars['String']>>;
	patientId?: InputMaybe<Scalars['String']>;
};

export type ListReportInput = {
	_id?: InputMaybe<Scalars['String']>;
	doctorId?: InputMaybe<Scalars['String']>;
	emissionDate?: InputMaybe<Scalars['DateTime']>;
	isActive?: InputMaybe<Scalars['Boolean']>;
	patientId?: InputMaybe<Scalars['String']>;
	reason?: InputMaybe<Scalars['String']>;
};

export type ListUserInput = {
	_id?: InputMaybe<Scalars['String']>;
	email?: InputMaybe<Scalars['String']>;
	gender?: InputMaybe<Scalars['String']>;
	lastname?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<Scalars['Float']>;
	username?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createAdress: UserAdress;
	createAgenda: Agenda;
	createApmtContent: AppointmentContent;
	createAppointment: Appointment;
	createDays: Days;
	createDr: Doctor;
	createPatient: Patient;
	createPref: UserPreferences;
	createRecord: Record;
	createReport: Report;
	createSpecialty: Specialties;
	createUser: User;
	createWorkday: Workday;
	deleteAdress: UserAdress;
	deleteAgenda: Agenda;
	deleteApmtContent: AppointmentContent;
	deleteAppointment: Appointment;
	deleteDays: Days;
	deleteDr: Doctor;
	deletePatient: Patient;
	deletePref: UserPreferences;
	deleteRecord: Record;
	deleteReport: Report;
	deleteSpecialty: Specialties;
	deleteUser: User;
	deleteWorkday: Workday;
	updateAdress: UserAdress;
	updateAgenda: Agenda;
	updateApmtContent: AppointmentContent;
	updateAppointment: Appointment;
	updateDays: Days;
	updateDr: Doctor;
	updatePatient: Patient;
	updatePref: UserPreferences;
	updateRecord: Record;
	updateReport: Report;
	updateSpecialty: Specialties;
	updateUser: User;
	updateWorkday: Workday;
};

export type MutationCreateAdressArgs = {
	payload: CreateAdressInput;
};

export type MutationCreateAgendaArgs = {
	payload: CreateAgendaInput;
};

export type MutationCreateApmtContentArgs = {
	payload: CreateApmtContentInput;
};

export type MutationCreateAppointmentArgs = {
	payload: CreateAppointmentInput;
};

export type MutationCreateDaysArgs = {
	payload: CreateDaysInput;
};

export type MutationCreateDrArgs = {
	payload: CreateDoctorInput;
};

export type MutationCreatePatientArgs = {
	payload: CreatePatientInput;
};

export type MutationCreatePrefArgs = {
	payload: CreatePrefInput;
};

export type MutationCreateRecordArgs = {
	payload: CreateRecordInput;
};

export type MutationCreateReportArgs = {
	payload: CreateReportInput;
};

export type MutationCreateSpecialtyArgs = {
	payload: CreateSpecialtiesInput;
};

export type MutationCreateUserArgs = {
	origin: Scalars['String'];
	payload: CreateUserInput;
};

export type MutationCreateWorkdayArgs = {
	payload: CreateWorkdayInput;
};

export type MutationDeleteAdressArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteAgendaArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteApmtContentArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteAppointmentArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteDaysArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteDrArgs = {
	_id: Scalars['String'];
};

export type MutationDeletePatientArgs = {
	_id: Scalars['String'];
};

export type MutationDeletePrefArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteRecordArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteReportArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteSpecialtyArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteUserArgs = {
	_id: Scalars['String'];
};

export type MutationDeleteWorkdayArgs = {
	_id: Scalars['String'];
};

export type MutationUpdateAdressArgs = {
	payload: UpdateAdressInput;
};

export type MutationUpdateAgendaArgs = {
	payload: UpdateAgendaInput;
};

export type MutationUpdateApmtContentArgs = {
	payload: UpdateApmtContentInput;
};

export type MutationUpdateAppointmentArgs = {
	payload: UpdateAppointmentInput;
};

export type MutationUpdateDaysArgs = {
	payload: UpdateDaysInput;
};

export type MutationUpdateDrArgs = {
	payload: UpdateDoctorInput;
};

export type MutationUpdatePatientArgs = {
	payload: UpdatePatientInput;
};

export type MutationUpdatePrefArgs = {
	payload: UpdatePrefInput;
};

export type MutationUpdateRecordArgs = {
	payload: UpdateRecordInput;
};

export type MutationUpdateReportArgs = {
	payload: UpdateReportInput;
};

export type MutationUpdateSpecialtyArgs = {
	payload: UpdateSpecialtiesInput;
};

export type MutationUpdateUserArgs = {
	payload: UpdateUserInput;
};

export type MutationUpdateWorkdayArgs = {
	payload: UpdateWorkdayInput;
};

export type Patient = {
	__typename?: 'Patient';
	_id: Scalars['String'];
	allergies: Array<Scalars['String']>;
	diseases: Array<Scalars['String']>;
	user: User;
	userId: User;
};

export type PatientUserArgs = {
	populate: Scalars['Boolean'];
};

export type Query = {
	__typename?: 'Query';
	adress: UserAdress;
	agenda: Agenda;
	agendas: Array<Agenda>;
	apmtContent: AppointmentContent;
	apmtContents: Array<AppointmentContent>;
	appointment: Appointment;
	appointments: Array<Appointment>;
	days: Days;
	doctor: Doctor;
	doctors: Array<Doctor>;
	patient: Patient;
	patients: Array<Patient>;
	pref: UserPreferences;
	record: Record;
	records: Array<Record>;
	report: Report;
	reports: Array<Report>;
	specialties: Array<Specialties>;
	specialty: Specialties;
	user: User;
	users: Array<User>;
	workday: Workday;
};

export type QueryAdressArgs = {
	_id: Scalars['String'];
};

export type QueryAgendaArgs = {
	_id: Scalars['String'];
};

export type QueryAgendasArgs = {
	filters?: InputMaybe<ListAgendaInput>;
};

export type QueryApmtContentArgs = {
	_id: Scalars['String'];
};

export type QueryApmtContentsArgs = {
	filters?: InputMaybe<ListApmtContentInput>;
};

export type QueryAppointmentArgs = {
	_id: Scalars['String'];
};

export type QueryAppointmentsArgs = {
	filters?: InputMaybe<ListAppointmentInput>;
};

export type QueryDaysArgs = {
	_id: Scalars['String'];
};

export type QueryDoctorArgs = {
	_id: Scalars['String'];
};

export type QueryDoctorsArgs = {
	filters?: InputMaybe<ListDoctorInput>;
};

export type QueryPatientArgs = {
	_id: Scalars['String'];
};

export type QueryPatientsArgs = {
	filters?: InputMaybe<ListPatientInput>;
};

export type QueryPrefArgs = {
	_id: Scalars['String'];
};

export type QueryRecordArgs = {
	_id: Scalars['String'];
};

export type QueryRecordsArgs = {
	filters: ListRecordInput;
};

export type QueryReportArgs = {
	_id: Scalars['String'];
};

export type QueryReportsArgs = {
	filters?: InputMaybe<ListReportInput>;
};

export type QuerySpecialtiesArgs = {
	des?: InputMaybe<Scalars['String']>;
};

export type QuerySpecialtyArgs = {
	_id: Scalars['String'];
};

export type QueryUserArgs = {
	_id: Scalars['String'];
};

export type QueryUsersArgs = {
	filters?: InputMaybe<ListUserInput>;
};

export type QueryWorkdayArgs = {
	_id: Scalars['String'];
};

export type Record = {
	__typename?: 'Record';
	_id: Scalars['String'];
	actualDoc: Doctor;
	content: Array<AppointmentContent>;
	patient: Patient;
	patientId: Patient;
};

export type RecordActualDocArgs = {
	populate: Scalars['Boolean'];
};

export type RecordContentArgs = {
	populate: Scalars['Boolean'];
};

export type RecordPatientArgs = {
	populate: Scalars['Boolean'];
};

export type Report = {
	__typename?: 'Report';
	_id: Scalars['String'];
	doctorId: Doctor;
	emissionDate: Scalars['DateTime'];
	isActive: Scalars['Boolean'];
	patientId: Patient;
	reason: Scalars['String'];
};

export type ReportDoctorIdArgs = {
	populate: Scalars['Boolean'];
};

export type ReportPatientIdArgs = {
	populate: Scalars['Boolean'];
};

export type Specialties = {
	__typename?: 'Specialties';
	_id: Scalars['String'];
	description: Scalars['String'];
};

export type UpdateAdressInput = {
	_id: Scalars['String'];
	city?: InputMaybe<Scalars['String']>;
	province?: InputMaybe<Scalars['String']>;
	sector?: InputMaybe<Scalars['String']>;
	street?: InputMaybe<Scalars['String']>;
};

export type UpdateAgendaInput = {
	_id: Scalars['String'];
	appointments?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateApmtContentInput = {
	_id: Scalars['String'];
	attachments?: InputMaybe<Array<Scalars['String']>>;
	comments?: InputMaybe<Array<Scalars['String']>>;
	diagnostic?: InputMaybe<Scalars['String']>;
	reason?: InputMaybe<Scalars['String']>;
};

export type UpdateAppointmentInput = {
	_id: Scalars['String'];
	content?: InputMaybe<Scalars['String']>;
	issueDate?: InputMaybe<Scalars['DateTime']>;
	patientComment?: InputMaybe<Scalars['String']>;
	rating?: InputMaybe<Scalars['Float']>;
	sequence?: InputMaybe<Scalars['Float']>;
	state?: InputMaybe<Scalars['Float']>;
	usesArs?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateDaysInput = {
	_id: Scalars['String'];
	fri?: InputMaybe<Scalars['Boolean']>;
	mon?: InputMaybe<Scalars['Boolean']>;
	sat?: InputMaybe<Scalars['Boolean']>;
	sun?: InputMaybe<Scalars['Boolean']>;
	thu?: InputMaybe<Scalars['Boolean']>;
	tue?: InputMaybe<Scalars['Boolean']>;
	wed?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateDoctorInput = {
	_id?: InputMaybe<Scalars['String']>;
	ars?: InputMaybe<Array<Scalars['String']>>;
	description?: InputMaybe<Scalars['String']>;
	imageUrl?: InputMaybe<Array<Scalars['String']>>;
	organization?: InputMaybe<Scalars['String']>;
	patienLimit?: InputMaybe<Scalars['Float']>;
	ratingTotal?: InputMaybe<Scalars['Float']>;
	specialities?: InputMaybe<Array<Scalars['String']>>;
	workday?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdatePatientInput = {
	_id: Scalars['String'];
	allergies?: InputMaybe<Array<Scalars['String']>>;
	diseases?: InputMaybe<Array<Scalars['String']>>;
	userId?: InputMaybe<Scalars['String']>;
};

export type UpdatePrefInput = {
	_id: Scalars['String'];
	isEmailPublic?: InputMaybe<Scalars['Boolean']>;
	isHomeNumberPublic?: InputMaybe<Scalars['Boolean']>;
	isPhoneNumberPublic?: InputMaybe<Scalars['Boolean']>;
	isUserAdressPublic?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateRecordInput = {
	_id: Scalars['String'];
	actualDoc?: InputMaybe<Scalars['String']>;
	content?: InputMaybe<Array<Scalars['String']>>;
	patientId?: InputMaybe<Scalars['String']>;
};

export type UpdateReportInput = {
	_id: Scalars['String'];
	isActive?: InputMaybe<Scalars['Boolean']>;
	reason?: InputMaybe<Scalars['String']>;
};

export type UpdateSpecialtiesInput = {
	_id: Scalars['String'];
	description?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
	_id: Scalars['String'];
	email?: InputMaybe<Scalars['String']>;
	homeNumber?: InputMaybe<Scalars['String']>;
	password?: InputMaybe<Scalars['String']>;
	phoneNumber?: InputMaybe<Scalars['String']>;
	role?: InputMaybe<Scalars['Float']>;
	username?: InputMaybe<Scalars['String']>;
};

export type UpdateWorkdayInput = {
	_id: Scalars['String'];
	adress?: InputMaybe<Scalars['String']>;
	contact?: InputMaybe<Scalars['String']>;
	days?: InputMaybe<Scalars['String']>;
	hourRange?: InputMaybe<Array<Scalars['Float']>>;
};

export type User = {
	__typename?: 'User';
	_id: Scalars['String'];
	age: Scalars['Float'];
	birthday: Scalars['DateTime'];
	codConfEmail: Scalars['String'];
	codRecPwd: Scalars['String'];
	email: Scalars['String'];
	gender: Scalars['String'];
	homeNumber: Scalars['String'];
	isActive: Scalars['Boolean'];
	isEmailConfirmed: Scalars['Boolean'];
	lastname: Scalars['String'];
	name: Scalars['String'];
	phoneNumber: Scalars['String'];
	role: Scalars['String'];
	userAdress: UserAdress;
	userPreferences: UserPreferences;
	username: Scalars['String'];
};

export type UserUserAdressArgs = {
	populate: Scalars['Boolean'];
};

export type UserUserPreferencesArgs = {
	populate: Scalars['Boolean'];
};

export type UserAdress = {
	__typename?: 'UserAdress';
	_id: Scalars['String'];
	city: Scalars['String'];
	province: Scalars['String'];
	sector: Scalars['String'];
	street: Scalars['String'];
};

export type UserPreferences = {
	__typename?: 'UserPreferences';
	_id: Scalars['String'];
	isEmailPublic: Scalars['Boolean'];
	isHomeNumberPublic: Scalars['Boolean'];
	isPhoneNumberPublic: Scalars['Boolean'];
	isUserAdressPublic: Scalars['Boolean'];
};

export type Workday = {
	__typename?: 'Workday';
	_id: Scalars['String'];
	adress: UserAdress;
	contact: Scalars['String'];
	days: Days;
	hourRange: Array<Scalars['Float']>;
};

export type WorkdayAdressArgs = {
	populate: Scalars['Boolean'];
};

export type WorkdayDaysArgs = {
	populate: Scalars['Boolean'];
};
