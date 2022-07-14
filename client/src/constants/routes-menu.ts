import { appName } from 'constants/index';

const routesMenu = {
	[appName]: {
		about: {
			title: 'sobre nosotros',
			path: ''
		},
		contact: {
			title: 'Contáctenos',
			path: ''
		},
		ask: {
			title: 'Preguntas Frecuentes',
			path: ''
		},
		help: {
			title: 'Ayuda',
			path: ''
		}
	},
	['Especialidades']: {
		espec1: {
			title: 'Dermatología',
			path: ''
		},
		espec2: {
			title: 'Urología',
			path: ''
		},
		espec3: {
			title: 'Dentista',
			path: ''
		},
		espec4: {
			title: 'Oculista',
			path: ''
		},
		espec5: {
			title: 'Ver todas las especialidades',
			path: ''
		}
	},
	[`© ${new Date().getFullYear()} Concitmed, Inc.`]: {
		polity: {
			title: 'Términos y condiciones',
			path: ''
		}
	}
};
export type Modules = keyof typeof routesMenu;
export type Categories = typeof routesMenu[Modules];
export default routesMenu;
