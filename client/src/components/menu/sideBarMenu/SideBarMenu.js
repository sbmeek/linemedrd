import { appName } from '@/constants/index';

const SideBarMenu = () => {
	return (
		<div>
			<ul>
				<li className="sub">${appName}</li>
				<li>Sobre nosotros</li>
				<li>Contáctenos</li>
				<li>Preguntas frecuentes</li>
				<li>Ayuda</li>
			</ul>

			<ul>
				<li className="sub">Especialidades</li>
				<li>Dermatología</li>
				<li>Urología</li>
			</ul>

			<ul>
				<li className="sub">2021 Concitmed, Inc.</li>
				<li>Términos y condiciones</li>
			</ul>
		</div>
	);
};

export default SideBarMenu;
