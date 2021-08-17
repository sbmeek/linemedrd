import { Stream } from 'stream';

export enum Roles {
	PATIENT = 'Paciente',
	DOCTOR = 'Doctor',
	ADMIN = 'Administrador'
}

export enum States {
	PENDING = 'Pendiente',
	ACCEPTED = 'Aceptada',
	DECLINED = 'Declinada',
	SUSPENDED = 'Suspendida',
	ARCHIVED = 'Archivada'
}

export interface Upload {
	filename: string;
	mimetype: string;
	encoding: string;
	createReadStream: () => Stream;
}
